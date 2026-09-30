import React, { useState } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import type { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onRequestService: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  onRequestService,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Service Area', page: 'service-area' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EADFCF]/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center space-x-3 select-none group"
          >
            <img
              src="/images/logo_hd.png"
              alt="FilterShine Front Range"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              onError={(e) => {
                // Fallback to text logo if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Fallback & semantic SEO text */}
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold tracking-tight text-lg text-[#07191A] leading-none">
                FILTER<span className="text-[#C96F22]">SHINE</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.22em] text-[#07191A] uppercase mt-0.5">
                FRONT RANGE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`relative py-2 text-[15px] font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-[#C96F22] font-semibold'
                      : 'text-[#26363A] hover:text-[#C96F22]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#C96F22] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Phone & Request CTA */}
          <div className="hidden sm:flex items-center space-x-5 lg:space-x-7">
            <a
              href="tel:9706824640"
              className="flex items-center space-x-2 text-[#07191A] hover:text-[#C96F22] transition-colors font-medium text-[15px]"
            >
              <Phone className="w-4 h-4 text-[#C96F22] fill-[#C96F22]" />
              <span className="font-semibold tracking-tight">970-682-4640</span>
            </a>

            <button
              onClick={onRequestService}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#C96F22] hover:bg-[#B35E19] text-white font-medium text-[14px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>Request Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href="tel:9706824640"
              aria-label="Call FilterShine"
              className="p-2 rounded-full bg-[#FAF7F0] text-[#C96F22] border border-[#EADFCF]"
            >
              <Phone className="w-4 h-4 fill-[#C96F22]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#26363A] hover:text-[#C96F22] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EADFCF] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FAF7F0] text-[#C96F22] font-semibold'
                      : 'text-[#26363A] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#EADFCF] flex flex-col space-y-3">
            <a
              href="tel:9706824640"
              className="flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full border border-[#C96F22] text-[#07191A] font-semibold"
            >
              <Phone className="w-4 h-4 text-[#C96F22] fill-[#C96F22]" />
              <span>970-682-4640</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestService();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-[#C96F22] text-white font-semibold shadow"
            >
              <span>Request Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
