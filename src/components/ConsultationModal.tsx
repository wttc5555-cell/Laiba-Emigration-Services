import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Building2, User, Phone, Mail, Globe, Briefcase, FileCheck } from 'lucide-react';
import { COUNTRIES } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCountry?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedCountry,
}) => {
  const [inquiryType, setInquiryType] = useState<'candidate' | 'employer'>('candidate');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: preselectedCountry || 'uae',
    tradeOrSector: '',
    experience: '3-5 years',
    passportStatus: 'Valid (> 1 year)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedCode = `LBA-REQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket(generatedCode);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 text-center">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-lg border border-slate-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-sm">
                LBA
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Schedule Overseas Consultation
                </h3>
                <p className="text-xs text-slate-300">
                  Certified Ministry Registered Advisors · 100% Free Initial Assessment
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-6">
            {submittedTicket ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Consultation Request Registered!
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                    Your appointment dossier has been queued. Our senior emigration officer will review your trade profile and contact you within 4 business hours.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-xs mx-auto text-center">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    Assigned Consultation Token
                  </div>
                  <div className="text-xl font-mono font-bold text-blue-950 mt-1">
                    {submittedTicket}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    Save this reference for your appointment desk
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-blue-950 text-white rounded-lg text-xs font-semibold hover:bg-blue-900 transition-colors"
                  >
                    Done & Return
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Segmented Selector: Job Seeker vs Overseas Employer */}
                <div className="flex p-1 bg-slate-100 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setInquiryType('candidate')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                      inquiryType === 'candidate'
                        ? 'bg-white text-blue-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Candidate / Job Seeker</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('employer')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all ${
                      inquiryType === 'employer'
                        ? 'bg-white text-blue-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Overseas Employer (Manpower)</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Legal Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="As shown in passport"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Destination
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.flag} {c.name} ({c.region})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Trade / Profession / Sector *
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Electrician, Nurse, Welder"
                        value={formData.tradeOrSector}
                        onChange={(e) => setFormData({ ...formData, tradeOrSector: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Total Relevant Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    >
                      <option value="1-2 years">1 – 2 Years</option>
                      <option value="3-5 years">3 – 5 Years (Standard GCC)</option>
                      <option value="5-8 years">5 – 8 Years (Senior/Lead)</option>
                      <option value="8+ years">8+ Years (Master / Supervisor)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Queries / Target Requirement
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide any details about your certifications, GAMCA status, or required recruitment quota..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white resize-none"
                  />
                </div>

                {/* Ethical notice */}
                <div className="p-2.5 bg-blue-50/70 rounded-lg border border-blue-100 flex items-start gap-2 text-[11px] text-blue-900">
                  <FileCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>
                    Laiba Emigration Services does NOT collect unauthorized registration fees. All job interviews are scheduled under official Government Emigration rules.
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white rounded-lg text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors disabled:opacity-60"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isSubmitting ? 'Submitting Request...' : 'Confirm Appointment'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
