import React, { useState } from 'react';
import {
  Star,
  ChevronDown,
  Quote,
  ShieldCheck,
  Building2,
  UtensilsCrossed,
  Beer,
  Phone,
  Calendar,
} from 'lucide-react';

interface TestimonialsAndFaqSectionProps {
  onRequestService: () => void;
}

export const TestimonialsAndFaqSection: React.FC<TestimonialsAndFaqSectionProps> = ({
  onRequestService,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = [
    {
      name: 'Chef Marcus Vance',
      role: 'Executive Chef',
      facility: 'Prime 107 Steakhouse, Downtown Denver',
      icon: UtensilsCrossed,
      rating: 5,
      quote:
        'Our dishwashers used to spend over 2 hours every Sunday scrubbing greasy baffles with caustic chemicals. Switching to FilterShine’s weekly exchange was hands-down the best operational upgrade we made this year. The kitchen stays cleaner and airflow has noticeably improved.',
    },
    {
      name: 'Sarah Lindqvist',
      role: 'General Manager',
      facility: 'Highline Craft Brewery & Smokehouse, Fort Collins',
      icon: Beer,
      rating: 5,
      quote:
        'With heavy barbecue smoke, our exhaust hoods get coated rapidly. The Fire Marshal specifically commended our clean filters on our last inspection because of FilterShine’s documentation. The route driver is punctual, polite, and finishes the swap in under 15 minutes before prep starts.',
    },
    {
      name: 'David Reynolds',
      role: 'Director of Food & Beverage',
      facility: 'Garden of the Gods Resort, Colorado Springs',
      icon: Building2,
      rating: 5,
      quote:
        'Managing three restaurant kitchens across the property was a headache for hood maintenance. FilterShine handles all three kitchens on a synchronized bi-weekly route. Their stainless steel filters arrive gleaming like new every single time.',
    },
  ];

  const faqs = [
    {
      question: 'How frequently should commercial kitchen grease filters be exchanged?',
      answer:
        'Frequency depends on your cooking volume and grease emissions. Heavy-grease operations (steakhouses, burger grills, fryers, wok lines, and smokehouses) typically require weekly or bi-weekly exchange. Moderate operations (bistros, pizza ovens, breakfast cafes) operate well on bi-weekly or monthly cycles. During our free hood audit, we calculate your kitchen volume and recommend the exact schedule to maintain 100% NFPA 96 compliance without overspending.',
    },
    {
      question: 'Do we have to purchase our own grease filters or does FilterShine supply them?',
      answer:
        'FilterShine supplies all required commercial heavy-gauge stainless steel baffle filters as part of your route program! You never need to purchase expensive filters upfront or replace bent or damaged ones. We provide two complete matching sets for your hoods—one is in your kitchen running clean while the second is being professionally degreased in our soak tank facility.',
    },
    {
      question: 'What is NFPA Standard 96 and why is filter maintenance strictly inspected?',
      answer:
        'NFPA Standard 96 is the national fire safety code governing commercial kitchen ventilation control and fire protection. Section 14 mandates that grease removal devices must be inspected and cleaned regularly to prevent grease accumulation from migrating up into the exhaust duct and rooftop fan. Greasy filters are the #1 fuel source for catastrophic kitchen duct fires. FilterShine provides certified service records verifying your continuous code compliance for Fire Marshals and insurance adjusters.',
    },
    {
      question: 'How does FilterShine clean the filters off-site?',
      answer:
        'Dirty filters are placed in dedicated route bins and transported to our specialized degreasing facility in Fort Collins. We use commercial heated soak tanks with proprietary biodegradable degreasers and ultrasonic agitation that strips baked-on grease from inside the internal baffle chambers that hand-scrubbing can never reach. They are high-pressure rinsed, dried, and inspected before returning to your kitchen.',
    },
    {
      question: 'Can we adjust our route frequency during seasonal peaks?',
      answer:
        'Yes! Many Front Range and Colorado mountain-adjacent restaurants experience intense seasonal surges during summer tourism or ski season. You can easily scale up from bi-weekly to weekly during your peak season, and scale back during slower months with a simple call to our dispatch team.',
    },
    {
      question: 'What types of commercial facilities do you service across Colorado and Wyoming?',
      answer:
        'We service all commercial food service operations, including independent restaurants, fast-casual franchises, hotel & resort kitchens, craft breweries, hospitals, university dining halls, senior living facilities, sports arenas, and corporate cafeterias throughout the Denver Metro, Boulder, Fort Collins, Colorado Springs, and Cheyenne/Southern Wyoming corridors.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#EADFCF]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#D97724] text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 fill-[#D97724]" />
            <span>Trusted Front Range Operators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07191A] tracking-tight">
            What Colorado Chefs & Kitchen Managers Say
          </h2>
          <p className="text-sm sm:text-base text-[#55686B]">
            From high-volume Denver steakhouses to Northern Colorado craft smokehouses, hear why kitchen professionals rely on FilterShine.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F0] p-7 rounded-2xl border border-[#EADFCF] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D97724] text-[#D97724]" />
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#EADFCF] flex items-center justify-center text-[#D97724]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-sm text-[#3E4E51] leading-relaxed italic relative">
                    <Quote className="w-6 h-6 text-[#D97724]/20 absolute -top-3 -left-2 -z-0" />
                    <span className="relative z-10">"{item.quote}"</span>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EADFCF]/80 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#07191A] text-white flex items-center justify-center font-bold text-sm font-mono">
                    {item.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#07191A]">{item.name}</div>
                    <div className="text-xs text-[#D97724] font-medium">{item.role}</div>
                    <div className="text-[11px] text-[#7A8A8D]">{item.facility}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Header & Interactive Accordion */}
        <div className="pt-10 border-t border-[#EADFCF]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: FAQ Overview & Callout */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#D97724] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07191A] tracking-tight">
                Everything You Need to Know About Grease Filter Routes
              </h3>
              <p className="text-sm sm:text-base text-[#55686B] leading-relaxed">
                Got questions regarding fire codes, hood filter sizing, or how the scheduled exchange operates? Here are the most common inquiries from commercial kitchen operators.
              </p>

              {/* Quick Contact Card */}
              <div className="p-6 bg-[#07191A] text-white rounded-2xl shadow-md space-y-4">
                <div className="text-xs uppercase font-bold tracking-wider text-[#D97724]">
                  Need Custom Route Information?
                </div>
                <p className="text-xs sm:text-sm text-[#A0B0B3] leading-relaxed">
                  Our regional route dispatchers can calculate your hood dimensions and set up a free on-site audit within 24 hours.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:9706824640"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-[#D97724] hover:bg-[#C96F22] text-white font-bold text-xs transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white" />
                    <span>(970) 682-4640</span>
                  </a>
                  <button
                    onClick={onRequestService}
                    className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Request Audit</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Accordion Items */}
            <div className="lg:col-span-7 space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-[#D97724] bg-[#FAF7F0] shadow-sm'
                        : 'border-[#EADFCF] bg-white hover:border-[#D97724]/60'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-[#07191A] text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'bg-[#D97724] text-white rotate-180'
                            : 'bg-[#EADFCF]/60 text-[#55686B]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4A5D60] leading-relaxed border-t border-[#EADFCF]/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
