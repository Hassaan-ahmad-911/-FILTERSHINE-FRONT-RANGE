import React from 'react';
import { Phone, MapPin, UserCheck } from 'lucide-react';
import { Logo } from './Logo';

export const ContactStrip: React.FC = () => {
  return (
    <div className="bg-[#FAF7F0] border-y border-[#EADFCF] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center divide-y sm:divide-y-0 lg:divide-x divide-[#EADFCF]">
          {/* Col 1: Crisp Vector Logo */}
          <div className="flex items-center space-x-3 pr-4">
            <Logo />
          </div>

          {/* Col 2: Phone */}
          <div className="pt-4 sm:pt-0 lg:px-6 flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#FAECE0] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[#C96F22] fill-[#C96F22]" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#697477] font-semibold">
                Direct Dispatch
              </div>
              <a
                href="tel:9706824640"
                className="text-base sm:text-lg font-bold text-[#07191A] hover:text-[#C96F22] transition-colors"
              >
                970-682-4640
              </a>
            </div>
          </div>

          {/* Col 3: Address */}
          <div className="pt-4 sm:pt-0 lg:px-6 flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#FAECE0] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#C96F22] fill-[#C96F22]" />
            </div>
            <div className="text-sm">
              <div className="font-semibold text-[#07191A] leading-tight">
                132 Commerce Dr, Ste 1
              </div>
              <div className="text-[#697477] text-xs mt-0.5">Fort Collins, CO 80524</div>
            </div>
          </div>

          {/* Col 4: Leadership */}
          <div className="pt-4 sm:pt-0 lg:pl-6 flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#FAECE0] flex items-center justify-center shrink-0">
              <UserCheck className="w-5 h-5 text-[#C96F22]" />
            </div>
            <div className="text-sm">
              <div className="font-bold text-[#07191A] leading-tight">Shayne Buckley</div>
              <div className="text-[#697477] text-xs font-medium mt-0.5">President and CEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
