import React from 'react';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestService: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-[#EADFCF]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Image */}
        <div className="relative h-56 sm:h-64 w-full bg-[#07191A] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-[#D97724] font-bold">
              Commercial Kitchen Solution
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base text-[#26363A] leading-relaxed">
            {service.fullDesc}
          </p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#697477] mb-3">
              Key Service Features & Compliance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FAECE0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#C96F22]" />
                  </div>
                  <span className="text-sm text-[#26363A]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#EADFCF] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs text-[#697477]">
              <ShieldCheck className="w-4 h-4 text-[#C96F22]" />
              <span>NFPA 96 & Health Department Compliant</span>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-[#EADFCF] text-[#26363A] hover:bg-gray-50 text-sm font-medium transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestService();
                }}
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#C96F22] hover:bg-[#B35E19] text-white text-sm font-semibold transition-colors shadow"
              >
                <span>Request Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
