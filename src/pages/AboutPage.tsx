import React from 'react';
import { ShieldCheck, Award, MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { ContactStrip } from '../components/ContactStrip';

interface AboutPageProps {
  onRequestService: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestService }) => {
  return (
    <div className="bg-[#F7F3EA] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#07191A] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-8 h-[2px] bg-[#D97724] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#D97724]">
              About Our Company
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Commercial Kitchen Grease Filter <span className="text-[#D97724]">Specialists</span>
          </h1>
          <p className="text-base sm:text-lg text-[#C8D1D4] max-w-2xl font-normal">
            Providing commercial kitchens across Colorado and Southern Wyoming with dependable grease filter cleaning and exchange programs since 2013.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Company Story */}
          <div className="lg:col-span-7 space-y-6 text-[#26363A]">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#07191A] mb-4">
                Dedication to Kitchen Fire Safety & Operational Efficiency
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#26363A]">
                Founded in <strong>2013</strong> and headquartered in Fort Collins, Colorado,{' '}
                <strong>FilterShine Front Range</strong> was created with a clear objective: provide commercial kitchens with a clean, seamless, and eco-friendly alternative to washing grease filters in kitchen dish sinks.
              </p>
            </div>

            <p className="text-base leading-relaxed text-[#4A575A]">
              Under the leadership of <strong>Shayne Buckley, President and CEO</strong>, FilterShine Front Range has grown into the premier commercial grease filter service partner for hundreds of restaurants, hotels, hospitals, universities, cafeterias, and food preparation facilities across Colorado and Southern Wyoming.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-xl border border-[#EADFCF] shadow-xs space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#FAECE0] flex items-center justify-center text-[#C96F22]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#07191A]">NFPA 96 Compliance</h3>
                <p className="text-xs text-[#697477] leading-relaxed">
                  Regular filter exchange ensures constant adherence to National Fire Protection Association standards and local municipal fire codes.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#EADFCF] shadow-xs space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#FAECE0] flex items-center justify-center text-[#C96F22]">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#07191A]">Off-Site Soak Tanks</h3>
                <p className="text-xs text-[#697477] leading-relaxed">
                  Filters are soaked and deep-cleaned in specialized industrial tanks, preventing greasy sludge from entering municipal plumbing or grease traps.
                </p>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="text-lg font-bold text-[#07191A]">
                Why Kitchen Managers Partner with FilterShine Front Range:
              </h3>
              <ul className="space-y-2.5">
                {[
                  'Eliminates messy and dangerous filter cleaning for kitchen staff',
                  'Zero downtime — we swap dirty filters for clean stainless baffle filters in minutes',
                  'Reduces fire fuel load inside exhaust hoods, ductwork, and rooftop fans',
                  'Prevents clogged grease traps and expensive plumbing backup repairs',
                  'Consistent scheduled route deliveries customized to your cooking volume',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-[#26363A]">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F22] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Leadership & Facility Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EADFCF] shadow-sm space-y-6">
              <div className="border-b border-[#EADFCF] pb-6">
                <div className="text-xs uppercase font-bold tracking-wider text-[#C96F22] mb-1">
                  Executive Leadership
                </div>
                <h3 className="text-xl font-bold text-[#07191A]">Shayne Buckley</h3>
                <div className="text-sm text-[#697477]">President and CEO</div>
                <p className="text-sm text-[#4A575A] mt-3 leading-relaxed">
                  "Our commitment is simple: keep your kitchen hoods running efficiently, protect your building from fire risks, and free your kitchen staff to focus on food quality."
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#C96F22] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-[#07191A]">Regional Headquarters</div>
                    <div className="text-[#697477]">132 Commerce Dr, Ste 1</div>
                    <div className="text-[#697477]">Fort Collins, CO 80524</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#C96F22] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-[#07191A]">Direct Service Line</div>
                    <a href="tel:9706824640" className="text-[#C96F22] font-bold text-base hover:underline">
                      970-682-4640
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestService}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full bg-[#C96F22] hover:bg-[#B35E19] text-white font-semibold text-sm transition-colors shadow"
                >
                  <span>Request Commercial Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <ContactStrip />
    </div>
  );
};
