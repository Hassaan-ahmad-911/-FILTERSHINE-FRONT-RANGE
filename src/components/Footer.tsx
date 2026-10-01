import React from 'react';
import type { PageId } from '../types';
import { Logo } from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowUp,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onRequestService?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentPage,
  setCurrentPage,
  onRequestService,
}) => {
  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Commercial Services', page: 'services' },
    { label: 'Service Territory', page: 'service-area' },
    { label: 'Contact & Dispatch', page: 'contact' },
  ];

  const servicesList = [
    { name: 'Commercial Grease Filter Cleaning', id: 'filter-cleaning' },
    { name: 'Filter Exchange Route Program', id: 'filter-exchange' },
    { name: 'Hood & Kitchen Deep Degreasing', id: 'kitchen-cleaning' },
    { name: 'Exhaust Fan & Duct Access', id: 'exhaust-fan' },
    { name: 'Soak Tank Degreasing Service', id: 'filter-cleaning' },
  ];

  const coverageCounties = [
    'Denver Metro & Aurora',
    'Fort Collins & Larimer County (HQ)',
    'Boulder & Longmont Corridor',
    'Colorado Springs & El Paso County',
    'Jefferson & Lakewood / Arvada',
    'Cheyenne & Southern Wyoming Routes',
  ];

  const handleLinkClick = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07191A] text-[#93A1A4] pt-14 pb-8 border-t border-[#132A2C] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding & Call to Action Ribbon */}
        <div className="pb-12 border-b border-[#142E31] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-3">
              <Logo inverted={true} />
            </div>
            <p className="text-sm text-[#A0AEB1] max-w-xl leading-relaxed">
              Front Range Colorado & Southern Wyoming's premier commercial grease filter exchange and kitchen exhaust service. We eliminate kitchen labor and keep your restaurant safe, clean, and in 100% NFPA 96 fire code compliance.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end items-start sm:items-center gap-4">
            <div className="flex items-center space-x-3 bg-[#0A1F21] border border-[#17383B] px-4 py-3 rounded-xl shadow-xs">
              <ShieldCheck className="w-8 h-8 text-[#D97724] shrink-0" />
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-white">NFPA Standard 96</div>
                <div className="text-xs text-[#8A989B]">100% Fire Code Certified Protocol</div>
              </div>
            </div>

            {onRequestService && (
              <button
                onClick={onRequestService}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#D97724] hover:bg-[#C96F22] text-white font-semibold text-sm transition-all shadow-md shadow-[#D97724]/25 cursor-pointer whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Service</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 Multi-Column Information Layout */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#D97724]" />
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleLinkClick(link.page)}
                    className={`text-sm transition-colors cursor-pointer text-left ${
                      currentPage === link.page
                        ? 'text-[#D97724] font-semibold'
                        : 'text-[#8A989B] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Commercial Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#D97724]" />
              <span>Commercial Solutions</span>
            </h4>
            <ul className="space-y-3">
              {servicesList.map((svc, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="text-sm text-[#8A989B] hover:text-white transition-colors cursor-pointer text-left flex items-center space-x-2 group"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D97724] opacity-70 group-hover:opacity-100" />
                    <span>{svc.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Coverage */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#D97724]" />
              <span>Active Route Coverage</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8A989B]">
              {coverageCounties.map((loc, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#D97724] shrink-0 mt-0.5" />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Dispatch */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#D97724]" />
              <span>Contact & Dispatch</span>
            </h4>
            <div className="space-y-4 text-sm text-[#8A989B]">
              <a
                href="tel:9706824640"
                className="flex items-center space-x-3 text-white hover:text-[#D97724] transition-colors font-medium group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0E2629] flex items-center justify-center text-[#D97724] group-hover:bg-[#D97724] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#7A8C8F] uppercase font-bold tracking-wider">Toll-Free Dispatch</div>
                  <div className="text-base font-bold text-white">(970) 682-4640</div>
                </div>
              </a>

              <a
                href="mailto:service@filtershinefrontrange.com"
                className="flex items-center space-x-3 text-[#8A989B] hover:text-[#D97724] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0E2629] flex items-center justify-center text-[#D97724] group-hover:bg-[#D97724] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] text-[#7A8C8F] uppercase font-bold tracking-wider">Email Inquiries</div>
                  <span className="text-xs sm:text-sm text-white font-medium">service@filtershine.com</span>
                </div>
              </a>

              <div className="flex items-start space-x-3 pt-1">
                <div className="w-9 h-9 rounded-lg bg-[#0E2629] flex items-center justify-center text-[#D97724] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs leading-relaxed">
                  <div className="text-white font-medium">Service Hours:</div>
                  <div>Mon–Sat: 6:00 AM – 8:00 PM</div>
                  <div className="text-[#D97724] font-semibold mt-0.5 flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>24/7 Route Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Links & Back to Top */}
        <div className="pt-8 mt-4 border-t border-[#122A2D] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7A888B]">
          <div className="text-center md:text-left">
            © 2026 FilterShine Front Range LLC. All rights reserved. Commercial Grease Filter Exchange & Kitchen Services.
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              onClick={() => handleLinkClick('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleLinkClick('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => handleLinkClick('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              NFPA 96 Compliance
            </button>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center space-x-2 text-[#8A989B] hover:text-[#D97724] transition-colors cursor-pointer py-1.5 px-3.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-[#1E3E42]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
