import React, { useState } from 'react';
import {
  Users,
  FileCheck,
  Award,
  Compass,
  ShieldCheck,
  Hammer,
  CheckCircle2,
  Clock,
  ArrowRight,
  Calculator,
  Building2,
  Briefcase,
  ChevronRight,
} from 'lucide-react';
import { SERVICES, COUNTRIES } from '../data/mockData';

export const ServicesView: React.FC<{ onConsultation: () => void }> = ({ onConsultation }) => {
  // Turnaround & Cost Estimator State
  const [selectedService, setSelectedService] = useState('recruitment');
  const [selectedCountry, setSelectedCountry] = useState('uae');

  const currentCountryObj = COUNTRIES.find((c) => c.id === selectedCountry) || COUNTRIES[0];

  const getEstimatedTurnaround = () => {
    if (selectedService === 'attestation') return '5 – 10 Business Days';
    if (selectedService === 'skill-testing') return '1 – 2 Business Days';
    if (selectedService === 'orientation') return '1 Day Orientation Camp';
    return currentCountryObj.processingTime;
  };

  const getRequiredSteps = () => {
    if (selectedService === 'attestation') {
      return ['State HRD Authentication', 'MEA Apostille Stamping', 'Embassy Seal Endorsement', 'MOFA Verification'];
    }
    if (selectedService === 'skill-testing') {
      return ['Candidate Registration', 'Tool Handling Safety Assessment', 'Standardized Practical Trade Exam', 'Evaluation Certificate & Video Log'];
    }
    return [
      'Trade Skill Screening & CV Shortlist',
      'Overseas Principal Interview',
      'GAMCA Medical Examination',
      'Work Visa Endorsement & PoE Clearance',
      'Flight Departure Coordination',
    ];
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Services Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Full-Spectrum Overseas Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Recruitment, Visa & Welfare Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              We provide comprehensive end-to-end solutions for both aspiring international workers and global corporations seeking vetted, trade-tested manpower.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const getIcon = () => {
              switch (service.iconName) {
                case 'Users': return <Users className="w-5 h-5 text-blue-700" />;
                case 'FileCheck': return <FileCheck className="w-5 h-5 text-emerald-700" />;
                case 'Award': return <Award className="w-5 h-5 text-amber-700" />;
                case 'Compass': return <Compass className="w-5 h-5 text-indigo-700" />;
                case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-700" />;
                case 'Hammer': return <Hammer className="w-5 h-5 text-rose-700" />;
                default: return <Briefcase className="w-5 h-5 text-blue-700" />;
              }
            };

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      {getIcon()}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {service.targetAudience}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mt-4">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-900 mt-1">
                    {service.tagline}
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Deliverables
                    </div>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-600" />
                    <span>{service.turnaround}</span>
                  </div>
                  <button
                    onClick={onConsultation}
                    className="text-xs font-bold text-blue-950 hover:text-amber-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Inquire Service</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Turnaround & Procedure Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Procedure & Turnaround Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Estimate Your Emigration Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Select a target service and destination corridor to view standard statutory timelines and mandatory verification steps.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
            {/* Input selectors */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  1. Select Service Type
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 text-white rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="recruitment">Complete Overseas Recruitment & Visa</option>
                  <option value="visa-consulting">Visa Consulting & Work Permit Filing</option>
                  <option value="attestation">Document Attestation & MEA Apostille</option>
                  <option value="skill-testing">Trade Skill Testing & Evaluation</option>
                  <option value="orientation">Pre-Departure Orientation Camp</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  2. Select Target Country Corridor
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 text-white rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.flag} {c.name} ({c.region})
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">
                  Currency Benchmark
                </span>
                <div className="text-base font-bold text-white font-mono">
                  {currentCountryObj.currency}
                </div>
                <div className="text-[11px] text-slate-400">
                  Standard wages: {currentCountryObj.salaryRange}
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-xl p-6 shadow-md border border-slate-200">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 gap-2">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    Estimated Turnaround Time
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-950 font-mono mt-0.5">
                    {getEstimatedTurnaround()}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold">
                    OFFICIAL CORRIDOR
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Statutory Processing Milestones:
                </div>
                <div className="space-y-2">
                  {getRequiredSteps().map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 text-[10px] font-bold font-mono flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Need customized enterprise bulk quotas?</span>
                <button
                  onClick={onConsultation}
                  className="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Request Official Quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Employer Partnership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 font-mono">
              B2B MANPOWER SUPPLY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Are You an Overseas Employer or EPC Contractor?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              We mobilize cohorts of 50 to 500+ tradesmen, technicians, and operators in short deployment windows. Our Thane testing center hosts your visiting interview delegation with full catering, live CCTV testing, and translation support.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={onConsultation}
                className="px-5 py-3 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-xl text-xs transition-colors"
              >
                Submit Demand Letter / Job Order
              </button>
              <a
                href="mailto:principals@laibaemigration.com"
                className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold rounded-xl text-xs border border-slate-300 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Email Corporate Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
