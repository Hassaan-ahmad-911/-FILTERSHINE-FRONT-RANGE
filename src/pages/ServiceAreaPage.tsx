import React, { useState } from 'react';
import { MapPin, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { ContactStrip } from '../components/ContactStrip';

interface ServiceAreaPageProps {
  onRequestService: () => void;
}

interface CountyItem {
  name: string;
  majorCities: string[];
  region: string;
}

const coloradoCounties: CountyItem[] = [
  { name: 'Denver County', majorCities: ['Denver', 'Cherry Creek', 'Five Points', 'Downtown Denver'], region: 'Denver Metro' },
  { name: 'Larimer County', majorCities: ['Fort Collins', 'Loveland', 'Estes Park', 'Berthoud'], region: 'Northern Front Range' },
  { name: 'Boulder County', majorCities: ['Boulder', 'Longmont', 'Louisville', 'Lafayette', 'Superior'], region: 'Northern Front Range' },
  { name: 'Jefferson County', majorCities: ['Lakewood', 'Arvada', 'Golden', 'Wheat Ridge', 'Littleton'], region: 'West Metro' },
  { name: 'Arapahoe County', majorCities: ['Aurora', 'Centennial', 'Littleton', 'Englewood', 'Greenwood Village'], region: 'East Metro' },
  { name: 'Douglas County', majorCities: ['Castle Rock', 'Parker', 'Highlands Ranch', 'Lone Tree'], region: 'South Metro' },
  { name: 'Adams County', majorCities: ['Thornton', 'Westminster', 'Commerce City', 'Brighton', 'Northglenn'], region: 'North Metro' },
  { name: 'Weld County', majorCities: ['Greeley', 'Windsor', 'Firestone', 'Frederick', 'Erie'], region: 'Northern Colorado' },
  { name: 'El Paso County', majorCities: ['Colorado Springs', 'Monument', 'Fountain', 'Manitou Springs'], region: 'Southern Front Range' },
  { name: 'Broomfield County', majorCities: ['Broomfield', 'Interlocken'], region: 'Northwest Metro' },
];

export const ServiceAreaPage: React.FC<ServiceAreaPageProps> = ({ onRequestService }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCounties = coloradoCounties.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.majorCities.some((city) => city.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-[#F7F3EA] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#07191A] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-8 h-[2px] bg-[#D97724] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#D97724]">
              Front Range Coverage
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Serving Colorado & <span className="text-[#D97724]">Southern Wyoming</span>
          </h1>
          <p className="text-base sm:text-lg text-[#C8D1D4] max-w-2xl font-normal">
            Weekly, bi-weekly, and monthly commercial grease filter exchange routes across the Front Range corridor.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Map & Route Schedule */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#EADFCF] shadow-sm">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#C96F22] fill-[#C96F22]" />
                  <span className="font-bold text-[#07191A] text-base">Route Map Overview</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAECE0] text-[#C96F22]">
                  Active Daily Routes
                </span>
              </div>

              <img
                src="/images/service_area_map_hd.png"
                alt="Colorado & Southern Wyoming Commercial Kitchen Service Map"
                className="w-full h-auto object-contain rounded-xl border border-[#EADFCF]/60"
              />

              <div className="mt-4 p-4 bg-[#FAF7F0] rounded-xl border border-[#EADFCF] text-xs text-[#26363A] leading-relaxed">
                <strong>Primary Municipal Hubs:</strong> Denver, Fort Collins, Colorado Springs, Boulder, Aurora, Lakewood, Thornton, Greeley, Longmont, Loveland, and Cheyenne / Southern Wyoming commercial hubs.
              </div>
            </div>

            {/* Wyoming Coverage Box */}
            <div className="bg-white rounded-2xl p-6 border border-[#EADFCF] shadow-sm space-y-3">
              <div className="text-xs uppercase font-bold tracking-wider text-[#C96F22]">
                Regional Extension
              </div>
              <h3 className="text-xl font-bold text-[#07191A]">Southern Wyoming Coverage</h3>
              <p className="text-sm text-[#4A575A] leading-relaxed">
                We maintain dedicated route service along the I-25 corridor into Southern Wyoming, including commercial facilities in <strong>Cheyenne, Laramie, and surrounding southern county locations</strong>.
              </p>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#07191A] pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#C96F22]" />
                <span>Scheduled restaurant, hotel, and institutional kitchen exchanges</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Counties Directory */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EADFCF] shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#07191A]">Colorado Counties Served</h2>
                <p className="text-sm text-[#697477] mt-1">
                  FilterShine Front Range provides regular service across all 10 major Front Range counties:
                </p>
              </div>

              {/* City / County Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#697477] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search your city or county..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#EADFCF] text-sm focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none"
                />
              </div>

              {/* County Cards List */}
              <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                {filteredCounties.map((county, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[#EADFCF] hover:border-[#C96F22]/50 bg-[#FAF7F0] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-[#07191A] text-sm flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-[#C96F22]" />
                        <span>{county.name}</span>
                      </div>
                      <span className="text-[11px] font-medium text-[#697477] uppercase tracking-wider">
                        {county.region}
                      </span>
                    </div>
                    <div className="text-xs text-[#4A575A] mt-2 flex flex-wrap gap-1.5">
                      {county.majorCities.map((city, cidx) => (
                        <span
                          key={cidx}
                          className="bg-white px-2 py-0.5 rounded border border-[#EADFCF] text-[#26363A]"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {filteredCounties.length === 0 && (
                  <div className="text-center py-8 text-sm text-[#697477]">
                    No matching location found. Please contact dispatch at 970-682-4640 to verify custom route availability.
                  </div>
                )}
              </div>

              {/* Action Banner */}
              <div className="pt-4 border-t border-[#EADFCF] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#697477]">
                  Need service verification for your kitchen?
                </div>
                <button
                  onClick={onRequestService}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full bg-[#C96F22] hover:bg-[#B35E19] text-white font-semibold text-sm transition-colors cursor-pointer shadow"
                >
                  <span>Request Route Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <ContactStrip />
    </div>
  );
};
