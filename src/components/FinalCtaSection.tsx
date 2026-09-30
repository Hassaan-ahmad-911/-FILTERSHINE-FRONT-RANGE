import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface FinalCtaSectionProps {
  onRequestService: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onRequestService }) => {
  return (
    <section className="relative bg-[#07191A] text-white py-14 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cta_banner_hd.png"
          alt="Commercial Kitchen Exhaust Hood"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#07191A]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Text */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 sm:mb-3">
              Need Grease Filter Service?
            </h2>
            <p className="text-base sm:text-lg text-[#C8D1D4] font-normal">
              Contact us today to keep your kitchen clean and efficient.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Call Now Button */}
            <a
              href="tel:9706824640"
              className="inline-flex items-center justify-center space-x-3 px-6 py-3 rounded-full bg-[#D97724] hover:bg-[#C96F22] text-white font-semibold text-[15px] shadow-md transition-all duration-200 group"
            >
              <Phone className="w-5 h-5 fill-white" />
              <div className="text-left leading-tight">
                <div className="text-[11px] uppercase tracking-wider text-white/90">Call Now</div>
                <div className="text-base font-bold">970-682-4640</div>
              </div>
            </a>

            {/* Request Service Button */}
            <button
              onClick={onRequestService}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/80 hover:border-white text-white font-medium text-[15px] transition-all duration-200 cursor-pointer backdrop-blur-sm"
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
