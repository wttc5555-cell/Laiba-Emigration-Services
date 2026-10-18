import React, { useState, useEffect } from 'react';
import {
  Globe2,
  CheckCircle2,
  Clock,
  Briefcase,
  FileText,
  DollarSign,
  Shield,
  Plane,
  Building,
  Sparkles,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { COUNTRIES } from '../data/mockData';
import { CountryInfo } from '../types';

interface CountriesViewProps {
  onSelectCountryForConsultation: (countryId: string) => void;
}

export const CountriesView: React.FC<CountriesViewProps> = ({
  onSelectCountryForConsultation,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeCountryId, setActiveCountryId] = useState<string>('uae');

  // Support URL hash deep-linking (e.g., #countries#germany or #germany)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const matched = COUNTRIES.find((c) => c.id.toLowerCase() === hash);
      if (matched) {
        setActiveCountryId(matched.id);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filteredCountries = COUNTRIES.filter((c) => {
    if (selectedRegion === 'all') return true;
    if (selectedRegion === 'gcc') return c.region === 'Gulf / GCC';
    if (selectedRegion === 'europe') return c.region === 'Europe';
    if (selectedRegion === 'na') return c.region === 'North America';
    return true;
  });

  const activeCountry = COUNTRIES.find((c) => c.id === activeCountryId) || COUNTRIES[0];

  const handleCountryClick = (id: string) => {
    setActiveCountryId(id);
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
              <Globe2 className="w-3.5 h-3.5" />
              <span>International Recruitment Corridors</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Global Destinations & Visa Guidelines
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Explore work permit regulations, standard salary benchmarks, in-demand technical trades, and verified visa processing timelines across the Middle East and Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Region Filter Segmented Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedRegion === 'all'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Destinations ({COUNTRIES.length})
            </button>
            <button
              onClick={() => setSelectedRegion('gcc')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedRegion === 'gcc'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gulf / GCC Corridors (6)
            </button>
            <button
              onClick={() => setSelectedRegion('europe')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedRegion === 'europe'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              European Union (3)
            </button>
            <button
              onClick={() => setSelectedRegion('na')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedRegion === 'na'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              North America (1)
            </button>
          </div>

          <div className="text-xs text-slate-500">
            Click any country button to view full visa regulations
          </div>
        </div>

        {/* Layout: Left Country Buttons + Right Country In-Depth Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Left Column: Selectable Country List */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Select Destination Corridor
            </div>

            <div className="space-y-2">
              {filteredCountries.map((country) => {
                const isCurrent = country.id === activeCountry.id;
                return (
                  <button
                    key={country.id}
                    onClick={() => handleCountryClick(country.id)}
                    className={`w-full p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                      isCurrent
                        ? 'bg-blue-950 text-white border-blue-900 shadow-md ring-2 ring-amber-400/50'
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <div
                          className={`text-sm font-bold ${
                            isCurrent ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {country.name}
                        </div>
                        <div
                          className={`text-xs ${
                            isCurrent ? 'text-slate-300' : 'text-slate-500'
                          }`}
                        >
                          {country.currency} · {country.processingTime}
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 ${
                        isCurrent ? 'text-amber-400' : 'text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: In-Depth Country Dossier Card */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
              {/* Dossier Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{activeCountry.flag}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {activeCountry.name}
                      </h2>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-blue-900 uppercase">
                        {activeCountry.region}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Capital: {activeCountry.capital} · Currency: {activeCountry.currency}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onSelectCountryForConsultation(activeCountry.id)}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Apply for {activeCountry.name.split(' ')[0]}</span>
                </button>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-sm leading-relaxed">
                {activeCountry.description}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Processing Turnaround
                  </div>
                  <div className="text-base font-extrabold text-blue-950 font-mono mt-0.5">
                    {activeCountry.processingTime}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">From biometric medical</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Typical Monthly Wage
                  </div>
                  <div className="text-base font-extrabold text-emerald-700 font-mono mt-0.5">
                    {activeCountry.salaryRange}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Statutory minimums guaranteed</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Contract Validity
                  </div>
                  <div className="text-base font-extrabold text-slate-900 font-mono mt-0.5">
                    {activeCountry.contractDuration}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Renewable under labor law</div>
                </div>
              </div>

              {/* In-Demand Job Profiles */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-blue-700" />
                  <span>Highest Demanded Technical & Professional Roles</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeCountry.inDemandJobs.map((job, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center gap-2 text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                      <span>{job}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visa Types Issued */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>Eligible Visa & Work Permit Classes</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeCountry.visaTypes.map((v, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mandatory Documentation Requirements */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-amber-600" />
                  <span>Mandatory Documents Required for Submission</span>
                </h3>
                <div className="space-y-2">
                  {activeCountry.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guaranteed Worker Protections & Statutory Benefits */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Statutory Employer Benefits Mandated by Law
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {activeCountry.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  All contracts vetted by Protector of Emigrants (PoE)
                </span>
                <button
                  onClick={() => onSelectCountryForConsultation(activeCountry.id)}
                  className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-lg text-xs transition-colors"
                >
                  Schedule Interview for {activeCountry.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
