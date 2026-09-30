import type { PageId } from '../types';

interface FooterProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Service Area', page: 'service-area' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07191A] text-[#93A1A4] py-8 sm:py-10 border-t border-[#132A2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          {/* Copyright notice */}
          <div className="text-center md:text-left text-xs sm:text-sm text-[#8A979A]">
            © 2026 FilterShine Front Range. All rights reserved.
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-xs sm:text-sm transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#C96F22] font-semibold'
                      : 'text-[#A0AEB1] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};
