import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';

interface RequestServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const RequestServiceModal: React.FC<RequestServiceModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    city: '',
    serviceType: preselectedService || 'filter-exchange',
    filterCount: '8-16',
    frequency: 'bi-weekly',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden border border-[#EADFCF]">
        {/* Header */}
        <div className="bg-[#07191A] text-white p-6 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-[12px] font-bold uppercase tracking-wider text-[#D97724] mb-1">
            Commercial Kitchen Intake
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Request Commercial Filter Service
          </h3>
          <p className="text-sm text-gray-300 mt-1">
            Serving Front Range restaurants, hotels, and commercial facilities since 2013.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#FAECE0] rounded-full flex items-center justify-center mx-auto text-[#C96F22]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-[#07191A]">Request Received!</h4>
            <p className="text-[#26363A] text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.contactName || 'Valued Client'}</strong>. Our dispatch team for <strong>{formData.businessName || 'your facility'}</strong> will review your kitchen requirements and contact you within 2 business hours.
            </p>
            <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#EADFCF] text-xs text-left max-w-sm mx-auto space-y-1">
              <div className="font-semibold text-[#07191A]">Immediate Assistance:</div>
              <div className="text-[#697477]">
                Call direct dispatch: <a href="tel:9706824640" className="text-[#C96F22] font-bold">970-682-4640</a>
              </div>
              <div className="text-[#697477]">Address: 132 Commerce Dr, Ste 1, Fort Collins, CO</div>
            </div>
            <div className="pt-2">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 bg-[#07191A] text-white rounded-full font-medium text-sm hover:bg-[#132A2C] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                  Business / Kitchen Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Front Range Grill"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Kitchen Manager / GM"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none text-sm"
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
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                  City / Location *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Fort Collins, Denver, Boulder, etc."
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                  Primary Service Needed
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none text-sm bg-white"
                >
                  <option value="filter-exchange">Grease Filter Exchange Program</option>
                  <option value="filter-cleaning">Grease Filter Deep Cleaning</option>
                  <option value="kitchen-services">Commercial Kitchen Services</option>
                  <option value="exhaust-services">Exhaust & Hood Ventilation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                  Exchange Frequency
                </label>
                <select
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#EADFCF] focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none text-sm bg-white"
                >
                  <option value="weekly">Weekly Exchange</option>
                  <option value="bi-weekly">Bi-Weekly (Every 2 Weeks)</option>
                  <option value="monthly">Monthly Rotation</option>
                  <option value="evaluation">Need Kitchen Evaluation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#697477] mb-1">
                Kitchen Notes or Hood Dimensions
              </label>
              <textarea
                rows={2}
                placeholder="Number of hoods, approximate filter sizes, or specific delivery preferences..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-[#EADFCF] focus:border-[#C96F22] focus:ring-1 focus:ring-[#C96F22] outline-none text-sm"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-1.5 text-xs text-[#697477]">
                <ShieldCheck className="w-4 h-4 text-[#C96F22]" />
                <span>NFPA 96 compliant service</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#C96F22] hover:bg-[#B35E19] text-white font-semibold text-sm transition-colors cursor-pointer shadow"
              >
                Submit Service Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
