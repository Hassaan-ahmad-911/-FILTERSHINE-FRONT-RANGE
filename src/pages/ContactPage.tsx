import React, { useState } from 'react';
import { Phone, MapPin, UserCheck, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ContactStrip } from '../components/ContactStrip';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    city: '',
    serviceInterest: 'Grease Filter Exchange',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F7F3EA] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#07191A] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-8 h-[2px] bg-[#D97724] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#D97724]">
              Direct Contact
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Contact <span className="text-[#D97724]">FilterShine Front Range</span>
          </h1>
          <p className="text-base sm:text-lg text-[#C8D1D4] max-w-2xl font-normal">
            Speak directly with our Front Range dispatch and customer service team regarding hood sizing, filter exchange schedules, and commercial kitchen solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Business Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EADFCF] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C96F22]">
                  Corporate Office & Dispatch
                </span>
                <h2 className="text-2xl font-bold text-[#07191A] mt-1">
                  FilterShine Front Range
                </h2>
                <p className="text-sm text-[#697477] mt-1">
                  Serving Colorado & Southern Wyoming Commercial Kitchens
                </p>
              </div>

              <div className="space-y-5 pt-2">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAECE0] flex items-center justify-center text-[#C96F22] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 fill-[#C96F22]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#697477]">
                      Direct Telephone
                    </div>
                    <a
                      href="tel:9706824640"
                      className="text-xl font-bold text-[#07191A] hover:text-[#C96F22] transition-colors"
                    >
                      970-682-4640
                    </a>
                    <div className="text-xs text-[#697477] mt-0.5">
                      Call for instant quote or route scheduling
                    </div>
                  </div>
                </div>

                {/* Facility Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAECE0] flex items-center justify-center text-[#C96F22] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 fill-[#C96F22]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#697477]">
                      Facility Address
                    </div>
                    <div className="text-base font-bold text-[#07191A]">
                      132 Commerce Dr, Ste 1
                    </div>
                    <div className="text-sm text-[#4A575A]">
                      Fort Collins, CO 80524
                    </div>
                  </div>
                </div>

                {/* Executive Contact */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAECE0] flex items-center justify-center text-[#C96F22] shrink-0 mt-0.5">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#697477]">
                      President and CEO
                    </div>
                    <div className="text-base font-bold text-[#07191A]">
                      Shayne Buckley
                    </div>
                    <div className="text-xs text-[#697477] mt-0.5">
                      Established 2013 • Front Range Region
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAECE0] flex items-center justify-center text-[#C96F22] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#697477]">
                      Service Schedule
                    </div>
                    <div className="text-sm font-semibold text-[#07191A]">
                      Monday – Friday: 8:00 AM – 5:00 PM
                    </div>
                    <div className="text-xs text-[#697477] mt-0.5">
                      Scheduled early-morning restaurant routes available
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EADFCF] flex items-center space-x-2 text-xs text-[#697477]">
                <ShieldCheck className="w-4 h-4 text-[#C96F22]" />
                <span>NFPA 96 & Health Department Certified Handling</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#EADFCF] shadow-sm">
              <h2 className="text-2xl font-bold text-[#07191A] mb-1">
                Commercial Kitchen Service Inquiry
              </h2>
              <p className="text-sm text-[#697477] mb-6">
                Fill out the quick form below and a FilterShine route specialist will contact you promptly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#FAECE0] rounded-full flex items-center justify-center mx-auto text-[#C96F22]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#07191A]">
                    Inquiry Successfully Sent!
                  </h3>
                  <p className="text-sm text-[#4A575A] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.contactName || 'Valued Kitchen Partner'}</strong>. We have received your inquiry for <strong>{formData.businessName || 'your commercial kitchen'}</strong> and will respond within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#07191A] text-white text-sm font-medium hover:bg-[#132A2C] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                        Restaurant / Facility Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Front Range Bistro"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] text-sm focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                        Contact Person & Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Executive Chef / GM"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] text-sm focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="970-000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] text-sm focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                        City / Facility Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Fort Collins, Denver, etc."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] text-sm focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                      Service Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] text-sm focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none bg-white"
                    >
                      <option value="Grease Filter Exchange">Grease Filter Exchange Program</option>
                      <option value="Grease Filter Cleaning">Grease Filter Soak Tank Cleaning</option>
                      <option value="Kitchen Services">Commercial Kitchen Line Maintenance</option>
                      <option value="Exhaust Services">Exhaust Hood & Duct Airflow</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your hood system or filter exchange requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] text-sm focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#C96F22] hover:bg-[#B35E19] text-white font-semibold text-sm transition-colors cursor-pointer shadow"
                    >
                      Send Message to Dispatch
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <ContactStrip />
    </div>
  );
};
