import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', inverted = false }) => {
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Crisp Vector Emblem */}
      <div className="relative shrink-0">
        <svg
          className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fs-circle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EA822A" />
              <stop offset="50%" stopColor="#D97724" />
              <stop offset="100%" stopColor="#A84F0E" />
            </linearGradient>
            <linearGradient id="fs-flame-inner" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFF2E5" />
            </linearGradient>
            <linearGradient id="fs-gold-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#D97724" />
            </linearGradient>
          </defs>

          {/* Outer Circle with Copper Gradient */}
          <circle cx="22" cy="22" r="21" fill="url(#fs-circle-grad)" />

          {/* Subtle Outer Ring Rim */}
          <circle cx="22" cy="22" r="20" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.25" />

          {/* Stylized Grease Baffle / Filter Slats Silhouette */}
          <g transform="translate(6.5, 6.5) scale(0.7)">
            {/* Filter Frame Backing */}
            <rect x="7" y="10" width="30" height="24" rx="3" fill="#6B2F08" fillOpacity="0.4" />
            
            {/* Diagonal Filter Louvers */}
            <line x1="12" y1="12" x2="12" y2="32" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.9" />
            <line x1="17" y1="12" x2="17" y2="32" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.9" />
            <line x1="22" y1="12" x2="22" y2="32" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.9" />
            <line x1="27" y1="12" x2="27" y2="32" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.9" />
            <line x1="32" y1="12" x2="32" y2="32" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.9" />

            {/* Rising Flame Overlaid on Filter */}
            <path
              d="M22 4C22 4 28 11 28 17C28 20.3137 25.3137 23 22 23C18.6863 23 16 20.3137 16 17C16 11 22 4 22 4Z"
              fill="url(#fs-gold-accent)"
              filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.25))"
            />
            {/* Inner Flame Core */}
            <path
              d="M22 9C22 9 25.5 13.5 25.5 17C25.5 18.933 23.933 20.5 22 20.5C20.067 20.5 18.5 18.933 18.5 17C18.5 13.5 22 9 22 9Z"
              fill="url(#fs-flame-inner)"
            />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-tight leading-none text-xl sm:text-2xl font-black font-sans">
          <span className={inverted ? 'text-white' : 'text-[#07191A]'}>
            FILTER
          </span>
          <span className="text-[#D97724] ml-0.5">
            SHINE
          </span>
        </div>
        <span
          className={`text-[9.5px] sm:text-[10px] font-bold tracking-[0.24em] uppercase mt-1 leading-none ${
            inverted ? 'text-[#8FA2A5]' : 'text-[#5A686B]'
          }`}
        >
          FRONT RANGE
        </span>
      </div>
    </div>
  );
};
