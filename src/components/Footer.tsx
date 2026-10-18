import React from 'react';
import {
  Compass,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  FileText,
  Lock,
} from 'lucide-react';
import { COUNTRIES } from '../data/mockData';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenTracker: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenTracker,
  onOpenConsultation,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Top Pre-Footer Accreditation Bar */}
      <div className="border-b border-slate-900 bg-slate-900/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-white font-bold text-xs">
                Government Approved Overseas Recruitment Agency
              </div>
              <div className="text-slate-400 text-[11px] font-mono">
                Lic. No: B-0872/MUM/COM/1000+/5/9823/2012 · Ministry of External Affairs
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>e-Migrate Integrated</span>
            </span>
            <span>·</span>
            <span>GAMCA / Wafid Certified</span>
            <span>·</span>
            <span>Takamol SVP Accredited</span>
            <span>·</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center text-amber-400 border border-amber-400/30">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  LAIBA EMIGRATION
                </span>
                <span className="text-[10px] text-amber-500 uppercase tracking-widest font-semibold block">
                  Services Pvt Ltd
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              South Asia’s premier government-regulated overseas recruitment and emigration consultancy. Deploying skilled professionals, technicians, and healthcare workers to top-tier GCC and European corporations with ethical dignity.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>BKC, CST Road, Mumbai 400051, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+91 (22) 6890 4500 / +971 4 382 9100</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>contact@laibaemigration.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us & Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Our Core Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="hover:text-white transition-colors"
                >
                  Country Corridors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors"
                >
                  5-Stage Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Operational Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Country Corridors */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono">
              Key Corridors
            </h4>
            <ul className="space-y-2 text-slate-400">
              {COUNTRIES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => onNavigate('countries')}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Candidate Services & Action */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-mono">
              Candidate Portal
            </h4>
            <p className="text-slate-400 text-xs">
              Check live status of your embassy visa endorsement or pre-departure kit.
            </p>
            <div className="pt-1 space-y-2">
              <button
                onClick={onOpenTracker}
                className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
              >
                <span>Track Application</span>
              </button>
              <button
                onClick={onOpenConsultation}
                className="w-full py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold transition-colors shadow-sm"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Ethical Recruitment Notice */}
        <div className="mt-10 p-4 bg-slate-900/80 rounded-xl border border-slate-800/90 text-slate-400 text-[11px] leading-relaxed">
          <strong className="text-slate-200">Statutory Emigration & Ethical Notice:</strong> Laiba Emigration Services Pvt Ltd conducts its operations strictly in accordance with Section 10 & 11 of the Indian Emigration Act 1983. In compliance with the International Labour Organization (ILO) standards, no unlawful recruitment fees are charged to candidates for bulk employer demand orders. All candidates are advised to verify that their work permit and salary agreement match their registered e-Migrate contract before departure. Beware of fraudulent sub-agents using fake letterheads.
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © <span className="year-now">{currentYear}</span> Laiba Emigration Services Pvt Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>256-Bit SSL Encrypted Verification</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
