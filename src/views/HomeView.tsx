import React from 'react';
import {
  ShieldCheck,
  Plane,
  Users,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Award,
  Globe2,
  Clock,
  Sparkles,
  Building,
  TrendingUp,
  ChevronRight,
  Star,
  FileCheck,
} from 'lucide-react';
import { PassportTicketCard } from '../components/PassportTicketCard';
import { COUNTRIES, JOB_DEMANDS, TESTIMONIALS, SERVICES } from '../data/mockData';
import { JobOpening } from '../types';

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
  onOpenTracker: (sampleId?: string) => void;
  onOpenConsultation: () => void;
  onApplyJob: (job: JobOpening) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenTracker,
  onOpenConsultation,
  onApplyJob,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 pb-12 overflow-hidden bg-radial from-slate-900 via-blue-950 to-slate-950 text-white border-b border-slate-800">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Hero Left Column: Copy & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Govt. Approved Recruitment Agency · Lic. No: B-0872/MUM/COM/1000+/5/9823</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Your Trusted Gateway to <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                  Global Careers & Emigration
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                Connecting skilled professionals, certified technicians, and healthcare workers to verified employers across the <strong className="text-white">Gulf Cooperation Council (UAE, Saudi Arabia, Qatar, Oman)</strong> and <strong className="text-white">Europe (Poland, Romania, Germany)</strong> with ethical zero-exploitation standards.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Free Emigration Assessment</span>
                </button>

                <button
                  onClick={() => onNavigate('countries')}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl text-sm border border-white/20 flex items-center gap-2 transition-colors"
                >
                  <Globe2 className="w-4 h-4 text-blue-300" />
                  <span>Explore 10+ Corridors</span>
                </button>

                <button
                  onClick={() => onOpenTracker()}
                  className="px-4 py-3.5 text-slate-300 hover:text-white font-medium text-sm flex items-center gap-1.5 transition-colors underline decoration-slate-600 hover:decoration-white underline-offset-4"
                >
                  <span>Track Application Status</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Key Highlights Ticker */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Verified Contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>GAMCA & MEA Legal Stamping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Post-Arrival Airport Reception</span>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Boarding Pass & Passport Motif */}
            <div className="lg:col-span-5 flex justify-center">
              <PassportTicketCard onTrackSample={(id) => onOpenTracker(id)} />
            </div>
          </div>
        </div>
      </section>

      {/* Verified Operational Statistics Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="text-center sm:text-left sm:pl-4 first:pl-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-mono tracking-tight">
                18,500+
              </div>
              <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">
                Candidates Deployed
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Across GCC, Europe & Global hubs
              </div>
            </div>

            <div className="text-center sm:text-left sm:pl-6 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 font-mono tracking-tight">
                98.4%
              </div>
              <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">
                Visa Approval Ratio
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Thorough pre-audit & biometric vetting
              </div>
            </div>

            <div className="text-center sm:text-left sm:pl-6 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-mono tracking-tight">
                14+ Corridors
              </div>
              <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">
                Active Countries
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                UAE, KSA, Qatar, Poland, Romania, Germany
              </div>
            </div>

            <div className="text-center sm:text-left sm:pl-6 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-600 font-mono tracking-tight">
                12+ Years
              </div>
              <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">
                Government Licensure
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Regulated by Ministry of External Affairs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Overseas Job Demands & Walk-In Interviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Current High-Demand Vacancies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Active Overseas Job Orders & Client Delegations
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Direct employer client selections. Zero illegal sub-agent commissions.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-950 hover:text-amber-600 transition-colors"
          >
            <span>Submit Your CV for Next Delegation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {JOB_DEMANDS.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{job.flag}</span>
                    <div>
                      <div className="text-xs font-semibold text-slate-500">
                        {job.city}, {job.country}
                      </div>
                      <div className="text-[11px] font-mono text-emerald-700 font-bold">
                        {job.vacancies} Open Vacancies
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {job.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-1">
                  {job.title}
                </h3>

                <div className="mt-3 p-3 rounded-lg bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Offered Salary:</span>
                    <span className="font-bold text-slate-900 font-mono">{job.salary}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Required Exp:</span>
                    <span className="font-medium text-slate-700">{job.experience}</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1 text-[11px] text-slate-500">
                  {job.benefits.map((b, i) => (
                    <span key={i} className="text-slate-600">
                      ✓ {b} {i < job.benefits.length - 1 ? '· ' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold text-amber-700 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {job.deadline}
                </span>

                <button
                  onClick={() => onApplyJob(job)}
                  className="px-3.5 py-1.5 bg-blue-950 hover:bg-blue-900 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Apply Now</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Country Corridors Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center justify-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5 text-amber-500" />
            <span>International Employment Corridors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Explore Prime Emigration Destinations
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Fully licensed and compliant placement corridors covering the GCC states and European Union member countries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNTRIES.slice(0, 6).map((country) => (
            <div
              key={country.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{country.flag}</span>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base">
                        {country.name}
                      </h3>
                      <div className="text-xs text-slate-500">
                        {country.region} · {country.currency}
                      </div>
                    </div>
                  </div>
                  {country.popular && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                      TOP DEMAND
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                  {country.description}
                </p>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Processing Time:</span>
                    <span className="font-mono font-semibold text-slate-800">{country.processingTime}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-500">Salary Benchmark:</span>
                    <span className="font-semibold text-emerald-700">{country.salaryRange}</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-500">Contract Tenure:</span>
                    <span className="font-medium text-slate-700">{country.contractDuration}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('countries')}
                  className="text-xs font-bold text-blue-950 hover:text-amber-600 flex items-center gap-1 transition-colors"
                >
                  <span>View Requirements & Visas</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('countries')}
            className="px-6 py-3 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-xl text-xs transition-colors inline-flex items-center gap-2"
          >
            <span>View All 10+ GCC & European Countries</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </section>

      {/* 5-Stage Recruitment Timeline Overview */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              TRANSPARENT & LEGAL ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 text-white">
              The 5-Stage Recruitment & Emigration Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every applicant is protected under the Emigration Act. Complete tracking from skill testing to airport departure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Skill Screening', time: '1-3 Days', desc: 'Trade evaluation & background checks at our approved center.' },
              { num: '02', title: 'Client Selection', time: '3-7 Days', desc: 'Face-to-face or virtual interview directly with employer delegates.' },
              { num: '03', title: 'GAMCA & Attestation', time: '5-10 Days', desc: 'Biometric medical test & MEA / Embassy stamping of certificates.' },
              { num: '04', title: 'Visa & PoE Clearance', time: '7-20 Days', desc: 'Ministry work visa issuance & Protector of Emigrants clearance.' },
              { num: '05', title: 'Pre-Departure Briefing', time: '1-2 Days', desc: 'Cultural camp, flight tickets handover & airport send-off.' },
            ].map((step, idx) => (
              <div
                key={step.num}
                className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 hover:border-amber-500/50 transition-colors relative"
              >
                <div className="text-2xl font-black font-mono text-amber-400 mb-2">
                  {step.num}
                </div>
                <h3 className="font-bold text-sm text-white mb-1">
                  {step.title}
                </h3>
                <div className="text-[10px] font-mono text-emerald-400 mb-2">
                  Duration: {step.time}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('process')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center gap-2"
            >
              <span>Inspect Full Timeline & Document Checklist</span>
              <ChevronRight className="w-4 h-4 text-slate-950" />
            </button>
            <button
              onClick={() => onOpenTracker()}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              Track an Active Application
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Ethical Accreditations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Ethical Recruitment Mandate</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Candidates & Global Principals Trust Laiba Emigration
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Founded on the bedrock of transparency, candidate dignity, and compliance with the International Labour Organization (ILO) standards. We bridge human aspirations with genuine international industry needs.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Unregulated Sub-Agent Fees</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We deal directly with applicants. No ghost brokers, hidden commission cuts, or fake job promises.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Official Government Licensure</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Operating under Ministry of External Affairs License No: B-0872/MUM/COM/1000+/5/9823/2012 with complete statutory bank guarantees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Ground Offices in Dubai & South Asia</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Our own staff welcomes candidates at destination airports, conducts accommodation audits, and assists with local SIMs and bank accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Spotlight Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-800 ml-2">4.9 / 5.0 (2,400+ Verified Candidate Reviews)</span>
            </div>

            <blockquote className="text-slate-700 text-sm italic leading-relaxed">
              "{TESTIMONIALS[0].quote}"
            </blockquote>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <img
                  src={TESTIMONIALS[0].avatar}
                  alt={TESTIMONIALS[0].name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>{TESTIMONIALS[0].name}</span>
                    <span>{TESTIMONIALS[0].flag}</span>
                  </div>
                  <div className="text-xs text-slate-500">{TESTIMONIALS[0].role} · {TESTIMONIALS[0].country}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Salary Growth</div>
                <div className="text-xs font-bold text-emerald-700 font-mono">{TESTIMONIALS[0].newSalary}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Consultation CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-left">
            <div className="text-xs font-bold font-mono tracking-widest uppercase text-amber-400">
              READY TO COMMENCE YOUR OVERSEAS CAREER?
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Book a Free Emigration & Profile Assessment
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our registered advisors evaluate your trade credentials, passport validity, and direct you to the highest paying overseas openings.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-lg"
            >
              Book 1-on-1 Appointment
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs border border-white/20 transition-colors"
            >
              Contact Branch Offices
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
