import React, { useState, useEffect } from 'react';
import {
  Compass,
  Phone,
  Mail,
  ShieldCheck,
  Search,
  Menu,
  X,
  FileText,
  Globe2,
  ChevronRight,
  Clock,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenTracker: (sampleId?: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenTracker,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to hash changes for deep linking (e.g., #countries, #process)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'services', 'countries', 'process', 'gallery', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setActiveTab]);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'countries', label: 'Country Corridors' },
    { id: 'process', label: '5-Stage Process' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & FAQs' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.history.pushState(null, '', `#${tabId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Government Reg. & Emergency Hotline Banner */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Govt. Regd. Lic. No: B-0872/MUM/COM/1000+/5/9823/2012
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Approved by Ministry of External Affairs (MEA)</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+912268904500"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Helpline: +91 (22) 6890 4500</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:contact@laibaemigration.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>contact@laibaemigration.com</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            {/* Custom Emblem Logo */}
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center text-amber-400 shadow-md border border-amber-500/30 group-hover:border-amber-400 transition-colors shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial from-amber-400/10 to-transparent opacity-60"></div>
              <Compass className="w-6 h-6 text-amber-400 relative z-10 animate-spin-slow group-hover:scale-105 transition-transform" />
              <div className="absolute -bottom-1 -right-1 text-[9px] font-black text-amber-500/80 px-1 font-mono">
                LBA
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold tracking-tight text-xl text-slate-950 group-hover:text-blue-950 transition-colors">
                  LAIBA
                </span>
                <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                  Emigration
                </span>
              </div>
              <div className="text-[11px] font-medium tracking-wider text-slate-500 uppercase flex items-center gap-1">
                <span>Services Pvt Ltd</span>
                <span className="text-emerald-600 font-semibold">· ISO 9001</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all relative ${
                    isActive
                      ? 'text-blue-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: Track Visa & Consultation */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenTracker()}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
              title="Track application by tracking number or passport"
            >
              <Search className="w-3.5 h-3.5 text-blue-600" />
              <span>Track Visa</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 shadow-sm rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-700"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenTracker()}
              className="p-2 text-slate-700 bg-slate-100 rounded-lg sm:hidden hover:bg-slate-200"
              title="Track Application"
            >
              <Search className="w-4 h-4 text-blue-700" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Box */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-sm">
                    LBA
                  </div>
                  <div>
                    <div className="font-bold text-slate-950 text-base leading-tight">
                      LAIBA EMIGRATION
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Services Pvt Ltd
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation List */}
              <div className="py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeTab === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-950 font-bold border-l-4 border-amber-500'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  );
                })}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTracker();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <Search className="w-4 h-4 text-blue-600" />
                  <span>Track Visa Status</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Book Free Consultation</span>
                </button>
              </div>
            </div>

            {/* Bottom Contact Footer inside Mobile Menu */}
            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 space-y-2">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>+91 (22) 6890 4500</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>contact@laibaemigration.com</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Govt Reg Lic No: B-0872/MUM/COM/1000+/5/9823/2012
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
