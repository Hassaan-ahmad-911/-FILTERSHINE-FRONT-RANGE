import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface ServiceAreaSectionProps {
  onViewServiceAreaPage: () => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({
  onViewServiceAreaPage,
}) => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#EADFCF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (5 to 6 cols) */}
          <div className="lg:col-span-5 max-w-xl">
            {/* Top Tag */}
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <span className="w-8 h-[2px] bg-[#C96F22] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#C96F22]">
                Service Area
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#07191A] leading-[1.12] mb-6">
              Serving Colorado & <br />
              <span className="text-[#C96F22]">Southern Wyoming</span>
            </h2>

            {/* City List with Pin */}
            <div className="flex items-start space-x-3.5 mb-8">
              <div className="shrink-0 p-1 mt-0.5">
                <MapPin className="w-5 h-5 text-[#C96F22] fill-[#C96F22]" />
              </div>
              <p className="text-base sm:text-lg text-[#26363A] leading-relaxed font-normal">
                Denver, Aurora, Lakewood, Boulder, Fort Collins, Colorado Springs and surrounding
                areas.
              </p>
            </div>

            {/* Outlined Action Button */}
            <button
              onClick={onViewServiceAreaPage}
              className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full border border-[#C96F22] text-[#07191A] hover:bg-[#C96F22] hover:text-white font-medium text-[15px] transition-all duration-200 cursor-pointer group shadow-xs"
            >
              <span>View Service Area</span>
              <ArrowRight className="w-4 h-4 text-[#C96F22] group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Right Column (6 to 7 cols): Map Visual */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl rounded-2xl overflow-hidden border border-[#EADFCF]/70 shadow-sm bg-[#FAF7F0] p-2 sm:p-4 group">
              <img
                src="/images/service_area_map_hd.png"
                alt="FilterShine Service Area Map - Colorado & Southern Wyoming"
                className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
              />
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#697477]">
                <span className="flex items-center space-x-1.5 font-medium text-[#26363A]">
                  <span className="w-2 h-2 rounded-full bg-[#C96F22] inline-block" />
                  <span>Routine route coverage throughout Front Range corridor</span>
                </span>
                <span className="hidden sm:inline font-mono text-[11px]">NFPA 96 REGION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
