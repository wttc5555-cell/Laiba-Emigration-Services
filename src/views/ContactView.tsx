import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  Search,
  MessageSquare,
  Building2,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { OFFICE_BRANCHES, FAQS, COUNTRIES } from '../data/mockData';
import { OfficeBranch } from '../types';

export const ContactView: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('mumbai-hq');
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedFaqCat, setSelectedFaqCat] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Contact Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'uae',
    trade: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const activeBranch = OFFICE_BRANCHES.find((b) => b.id === selectedBranchId) || OFFICE_BRANCHES[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const code = `LBA-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedCode(code);
      setIsSubmitting(false);
    }, 600);
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedFaqCat === 'all' || faq.category === selectedFaqCat;
    const matchesSearch =
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
              <Phone className="w-3.5 h-3.5" />
              <span>Global Support & Branch Offices</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Connect With Our Overseas Desks
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Visit our authorized regional processing centers or submit an enquiry online. Our dedicated caseworkers are available across Mumbai, Delhi, Dubai, Dhaka, and Kathmandu.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Form + Branch Office Selector */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Consultation & Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>DIRECT CASEWORKER INTAKE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Submit an Emigration Enquiry
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Guaranteed callback from a certified overseas recruitment advisor within 4 business hours.
            </p>

            {submittedCode ? (
              <div className="my-8 text-center py-6 px-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Enquiry Transmitted Successfully!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your reference dossier has been registered at our central desk. Our counselor will contact you via WhatsApp / Phone.
                </p>
                <div className="inline-block p-2 bg-white rounded-lg border border-slate-200 font-mono text-sm font-bold text-blue-950">
                  Ticket Ref: {submittedCode}
                </div>
                <div>
                  <button
                    onClick={() => {
                      setSubmittedCode(null);
                      setFormState({
                        name: '',
                        email: '',
                        phone: '',
                        country: 'uae',
                        trade: '',
                        message: '',
                      });
                    }}
                    className="text-xs font-bold text-blue-950 underline hover:text-amber-600"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Khan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 XXXXX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Destination Corridor
                    </label>
                    <select
                      value={formState.country}
                      onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.flag} {c.name} ({c.region})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Trade / Profession / Skillset *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 6G Welder, Industrial Electrician, ICU Nurse, Heavy Driver"
                    value={formState.trade}
                    onChange={(e) => setFormState({ ...formState, trade: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Details of Your Query
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current location, passport status, or employer recruitment requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Zero spam guaranteed
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-blue-950 hover:bg-blue-900 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm disabled:opacity-60"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Global Branch Offices Switcher */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Select Regional Office
            </div>

            {/* Branch Selector Chips */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
              {OFFICE_BRANCHES.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBranchId(b.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedBranchId === b.id
                      ? 'bg-blue-950 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {b.city}
                </button>
              ))}
            </div>

            {/* Selected Branch Information Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700">
                    {activeBranch.role}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {activeBranch.city} Office ({activeBranch.country})
                  </h3>
                </div>
                {activeBranch.isHeadquarters && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                    GLOBAL HQ
                  </span>
                )}
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{activeBranch.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-mono">{activeBranch.phone}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-mono">{activeBranch.email}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{activeBranch.hours}</span>
                </div>
              </div>

              {/* Simulated Interactive Map Location Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white p-4 relative text-center">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="relative z-10 space-y-1">
                  <MapPin className="w-6 h-6 text-amber-400 mx-auto" />
                  <div className="text-xs font-bold text-white">
                    {activeBranch.city} Center Coordinates
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Lat: {activeBranch.coordinates.lat.toFixed(4)}° N, Lng: {activeBranch.coordinates.lng.toFixed(4)}° E
                  </div>
                  <div className="pt-2">
                    <a
                      href={`https://maps.google.com/?q=${activeBranch.coordinates.lat},${activeBranch.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-[11px] font-semibold border border-white/20 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Assistance Box */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Quick WhatsApp Desk</span>
                </div>
                <div className="text-[11px] text-emerald-800 mt-0.5">
                  Immediate document review & query answers
                </div>
              </div>
              <a
                href="https://wa.me/919820045112"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-amber-500" />
                <span>KNOWLEDGE BASE & GUIDELINES</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Official answers regarding visas, costs, GAMCA medicals, and statutory rights.
              </p>
            </div>

            {/* FAQ Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search queries..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 py-4 border-b border-slate-100">
            {['all', 'Visas', 'Costs', 'Medical', 'Processing', 'Departure'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFaqCat(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedFaqCat === cat
                    ? 'bg-blue-950 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Questions' : cat}
              </button>
            ))}
          </div>

          {/* Accordion Items */}
          <div className="space-y-3 mt-6">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-500">
                No matching questions found. Try another search term or contact our helpline.
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-100/50 transition-colors"
                    >
                      <span className="font-bold text-xs sm:text-sm text-slate-900">
                        {faq.question}
                      </span>
                      <div className="shrink-0 text-slate-400">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
