import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onRequestService: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestService }) => {
  return (
    <section className="relative bg-[#07191A] text-white overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background with Technician Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* High-res Technician & Commercial Kitchen Image */}
          <img
            src="/images/hero_full_hd.png"
            alt="FilterShine Front Range Commercial Grease Filter Technician"
            className="w-full h-full object-cover object-right md:object-center opacity-85 sm:opacity-95"
          />
          {/* Seamless dark charcoal gradient overlay on left for typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07191A] via-[#07191A]/95 md:via-[#07191A]/85 md:to-transparent to-[#07191A]/70" />
          {/* Subtle top/bottom edge fade */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07191A] to-transparent opacity-80" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-xl">
          {/* Category Tag */}
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#D97724]">
              Commercial Kitchen Services
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.08] mb-5">
            Professional <br />
            Grease Filter <br />
            <span className="text-[#D97724]">Cleaning & Exchange</span>
          </h1>

          {/* Subheading / Description */}
          <p className="text-base sm:text-lg text-[#C8D1D4] leading-relaxed max-w-lg mb-8 sm:mb-10 font-normal">
            Keeping commercial kitchens clean and running efficiently across the Front Range.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            {/* Primary Copper Button */}
            <a
              href="tel:9706824640"
              className="inline-flex items-center justify-center space-x-3 px-7 py-3.5 rounded-full bg-[#D97724] hover:bg-[#C96F22] text-white font-semibold text-[15px] shadow-lg shadow-[#D97724]/20 transition-all duration-200 group"
            >
              <Phone className="w-5 h-5 fill-white" />
              <div className="text-left leading-tight">
                <div className="text-xs uppercase tracking-wider text-white/90">Call Now</div>
                <div className="text-base font-bold">970-682-4640</div>
              </div>
            </a>

            {/* Outlined Secondary Button */}
            <button
              onClick={onRequestService}
              className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-[#07191A]/60 hover:bg-[#07191A]/90 border border-white/80 hover:border-white text-white font-medium text-[15px] transition-all duration-200 backdrop-blur-sm cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-white/90" />
              <span>Request Service</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
