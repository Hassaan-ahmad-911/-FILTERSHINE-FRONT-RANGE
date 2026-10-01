import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Calculator,
  Flame,
  Check,
} from 'lucide-react';

interface WhyFilterShineSectionProps {
  onRequestService: () => void;
}

export const WhyFilterShineSection: React.FC<WhyFilterShineSectionProps> = ({
  onRequestService,
}) => {
  const [filterCount, setFilterCount] = useState<number>(10);
  const [exchangeFrequency, setExchangeFrequency] = useState<'weekly' | 'biweekly'>('weekly');

  // Realistic commercial kitchen metrics
  // Average time to soak, scrub, and pressure wash 1 baffle filter in-house: 18 minutes (0.3 hours)
  // Kitchen dishwasher labor rate in Colorado: ~$18/hr
  const laborHoursPerFilter = 0.3;
  const hourlyWage = 18;
  const swapsPerMonth = exchangeFrequency === 'weekly' ? 4 : 2;

  const monthlyHoursSaved = Math.round(filterCount * laborHoursPerFilter * swapsPerMonth);
  const monthlyLaborCostSaved = Math.round(monthlyHoursSaved * hourlyWage);
  const annualSavings = monthlyLaborCostSaved * 12;

  const stats = [
    { value: '1,200+', label: 'Front Range Kitchens Serviced', sub: 'Denver to Cheyenne' },
    { value: '100%', label: 'NFPA 96 Code Compliance', sub: 'Zero Fire Citations' },
    { value: '99.8%', label: 'On-Time Route Reliability', sub: 'Dedicated Route Trucks' },
    { value: '0 hrs', label: 'In-House Staff Labor Required', sub: 'Hands-off For Cooks' },
  ];

  const comparisonPoints = [
    {
      feature: 'Kitchen Staff Labor',
      inHouse: 'Dishwashers/cooks waste hours scrubbing caustic grease',
      filtershine: 'Zero staff labor. Our technician swaps all filters in 15 minutes',
    },
    {
      feature: 'Grease Removal & Cleanliness',
      inHouse: 'Superficial hand-wash leaves inner baffle channels clogged',
      filtershine: 'Complete degreasing inside commercial high-temp soak tanks',
    },
    {
      feature: 'NFPA 96 Fire Safety',
      inHouse: 'Non-compliant grease buildup increases kitchen fire hazard',
      filtershine: 'Guaranteed fire marshal compliance with logged service records',
    },
    {
      feature: 'Plumbing & Grease Trap Health',
      inHouse: 'Flushes heavy grease into kitchen sinks, blocking city sewers',
      filtershine: 'Off-site closed loop eco-cleaning; zero grease into kitchen pipes',
    },
    {
      feature: 'Staff Morale & Turnover',
      inHouse: 'Dishwashers dread the dirty, caustic filter scrubbing chore',
      filtershine: 'Happier kitchen staff focusing on food prep and clean dishes',
    },
  ];

  return (
    <section className="bg-[#FAF7F0] py-16 sm:py-20 lg:py-24 border-b border-[#EADFCF]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* 1. Key Statistics Ribbon */}
        <div className="bg-[#07191A] rounded-2xl p-6 sm:p-10 shadow-lg text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#1B3639]">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`pt-6 lg:pt-0 ${idx !== 0 ? 'lg:pl-8' : ''} text-center lg:text-left`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D97724] tracking-tight font-mono">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#8FA0A3] mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAECE0] border border-[#F3CDB0] text-[#D97724] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>The Commercial Grease Filter Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07191A] tracking-tight leading-tight">
            Stop Scrubbing Grease Filters. <br className="hidden sm:inline" />
            <span className="text-[#D97724]">Let FilterShine Swap Them.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#55686B] leading-relaxed">
            In-house filter cleaning wastes hundreds of staff hours every year and often fails NFPA 96 fire inspections. FilterShine delivers a seamless, hands-off route exchange that protects your kitchen.
          </p>
        </div>

        {/* 3. The Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card A: In-House Cleaning */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-red-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 flex items-center space-x-1.5">
                    <XCircle className="w-4 h-4" />
                    <span>Traditional In-House Washing</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#07191A] mt-1">
                    Kitchen Staff Scrubbing
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4">
                {comparisonPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#07191A]">{item.feature}</div>
                      <div className="text-xs sm:text-sm text-[#667477]">{item.inHouse}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 bg-red-50/60 -mx-6 -mb-6 p-6 rounded-b-2xl">
              <div className="text-xs text-red-700 font-medium">
                <strong>Result:</strong> Clogged exhaust hood baffles, fire marshal citation risk, wasted staff overtime, and grease trap backups.
              </div>
            </div>
          </div>

          {/* Card B: FilterShine Exchange */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#D97724] shadow-md flex flex-col justify-between relative overflow-hidden">
            {/* Best Value Badge */}
            <div className="absolute top-0 right-0 bg-[#D97724] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-xs">
              Recommended Protocol
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-orange-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D97724] flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>The FilterShine Program</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#07191A] mt-1">
                    Scheduled Route Exchange
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#FAECE0] text-[#D97724] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4">
                {comparisonPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#D97724] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#07191A]">{item.feature}</div>
                      <div className="text-xs sm:text-sm text-[#4A5D60]">{item.filtershine}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F3D7C0] bg-[#FAF2EB] -mx-6 -mb-6 p-6 rounded-b-2xl">
              <div className="text-xs text-[#8A4810] font-medium flex items-center justify-between">
                <span>
                  <strong>Result:</strong> Pristine gleaming filters, 100% NFPA 96 compliance, increased exhaust airflow, zero kitchen labor.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Interactive Labor & Cost Savings Calculator */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#EADFCF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-2 text-[#D97724] text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Interactive Cost & Time Calculator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#07191A] tracking-tight">
                Calculate How Much Your Kitchen Saves
              </h3>
              <p className="text-sm sm:text-base text-[#55686B]">
                Adjust your commercial hood filter count to estimate staff hours reclaimed and annual labor expenses saved:
              </p>

              {/* Slider: Number of Filters */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-sm font-semibold text-[#07191A]">
                  <span>Number of Grease Baffle Filters:</span>
                  <span className="text-lg font-mono font-bold text-[#D97724] bg-[#FAECE0] px-3 py-0.5 rounded-lg border border-[#F3CDB0]">
                    {filterCount} Filters
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="30"
                  step="2"
                  value={filterCount}
                  onChange={(e) => setFilterCount(Number(e.target.value))}
                  className="w-full h-2 bg-[#EADFCF] rounded-lg appearance-none cursor-pointer accent-[#D97724]"
                />
                <div className="flex justify-between text-xs text-[#8A989B]">
                  <span>4 Filters (Small hood)</span>
                  <span>16 Filters (Medium cookline)</span>
                  <span>30 Filters (Large kitchen)</span>
                </div>
              </div>

              {/* Frequency Toggle */}
              <div className="space-y-2 pt-2">
                <span className="text-sm font-semibold text-[#07191A] block">
                  Service Swap Frequency:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setExchangeFrequency('weekly')}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                      exchangeFrequency === 'weekly'
                        ? 'bg-[#07191A] text-white border-[#07191A] shadow-xs'
                        : 'bg-white text-[#55686B] border-[#EADFCF] hover:border-[#D97724]'
                    }`}
                  >
                    Weekly Route Swap
                  </button>
                  <button
                    onClick={() => setExchangeFrequency('biweekly')}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                      exchangeFrequency === 'biweekly'
                        ? 'bg-[#07191A] text-white border-[#07191A] shadow-xs'
                        : 'bg-white text-[#55686B] border-[#EADFCF] hover:border-[#D97724]'
                    }`}
                  >
                    Bi-Weekly Route Swap
                  </button>
                </div>
              </div>
            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#07191A] to-[#0E2C2F] rounded-2xl p-6 sm:p-8 text-white space-y-6 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-[#1A3E42]">
                <span className="text-xs uppercase font-bold tracking-wider text-[#D97724]">
                  Estimated Annual Value
                </span>
                <span className="text-xs bg-[#D97724]/20 text-[#D97724] px-2.5 py-1 rounded-full font-semibold border border-[#D97724]/30">
                  Colorado Commercial Standard
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#092225] p-4 rounded-xl border border-[#163B3F]">
                  <div className="text-xs text-[#8A9FA2] mb-1 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D97724]" />
                    <span>Monthly Hours Saved</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                    {monthlyHoursSaved} hrs
                  </div>
                  <div className="text-[11px] text-[#A0B5B8] mt-1">Reclaimed staff labor</div>
                </div>

                <div className="bg-[#092225] p-4 rounded-xl border border-[#163B3F]">
                  <div className="text-xs text-[#8A9FA2] mb-1 flex items-center space-x-1.5">
                    <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Annual Wage Savings</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                    ${annualSavings.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-[#A0B5B8] mt-1">Direct labor costs</div>
                </div>
              </div>

              <div className="space-y-2 pt-1 text-xs text-[#A0B5B8]">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#D97724] shrink-0" />
                  <span>Eliminate dishwasher overtime scrubbing caustic soak sinks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#D97724] shrink-0" />
                  <span>Avoid grease trap pumping charges caused by sink degreasing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#D97724] shrink-0" />
                  <span>Guaranteed compliance for City Fire Marshals & insurance policies</span>
                </div>
              </div>

              <button
                onClick={onRequestService}
                className="w-full py-3.5 rounded-full bg-[#D97724] hover:bg-[#C96F22] text-white font-bold text-sm transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center space-x-2 group hover:scale-[1.01]"
              >
                <span>Request Custom Route Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 5. 4-Step Route Process */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97724]">
              Seamless Commercial Process
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#07191A] mt-1">
              How the Route Exchange Works
            </h3>
            <p className="text-sm text-[#55686B] mt-2">
              We manage your hood filters end-to-end so you never have to think about grease buildup again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Free Hood Audit',
                desc: 'We inspect your canopy hoods, measure exact dimensions, and stock spare sets of NSF-certified stainless steel filters.',
              },
              {
                step: '02',
                title: 'Scheduled Route Swap',
                desc: 'On your set route day, our uniformed technician takes down greasy filters and installs sparkling clean ones in 15 minutes.',
              },
              {
                step: '03',
                title: 'Off-Site Deep Soak',
                desc: 'Dirty filters are transported to our Colorado soak tank facility for high-temperature degreasing and ultrasonic cleaning.',
              },
              {
                step: '04',
                title: 'NFPA Compliance Log',
                desc: 'We provide certified service documentation proving full compliance with NFPA Standard 96 fire safety codes.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EADFCF] shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-[#D97724] font-mono mb-3">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-[#07191A] mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-[#55686B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center space-x-1.5 text-xs text-[#D97724] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Turnkey Service</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
