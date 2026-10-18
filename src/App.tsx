import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { CountriesView } from './views/CountriesView';
import { ProcessView } from './views/ProcessView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';
import { VisaTrackerModal } from './components/VisaTrackerModal';
import { ConsultationModal } from './components/ConsultationModal';
import { JobApplicationModal } from './components/JobApplicationModal';
import { JobOpening } from './types';
import { MessageSquare, Search } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [trackerInitialId, setTrackerInitialId] = useState<string | undefined>(undefined);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationCountry, setConsultationCountry] = useState<string | undefined>(undefined);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  // Sync with initial URL hash
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'countries', 'process', 'gallery', 'contact'].includes(hash)) {
        setActiveTab(hash);
      } else if (['uae', 'saudi', 'qatar', 'oman', 'kuwait', 'bahrain', 'poland', 'romania', 'germany', 'canada'].includes(hash)) {
        setActiveTab('countries');
      }
    };
    handleInitialHash();
    window.addEventListener('hashchange', handleInitialHash);
    return () => window.removeEventListener('hashchange', handleInitialHash);
  }, []);

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', `#${tabId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTracker = (sampleId?: string) => {
    setTrackerInitialId(sampleId);
    setIsTrackerOpen(true);
  };

  const handleOpenConsultation = (countryId?: string) => {
    setConsultationCountry(countryId);
    setIsConsultationOpen(true);
  };

  const handleApplyJob = (job: JobOpening) => {
    setSelectedJob(job);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* Sticky Header with navigation & search */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenTracker={handleOpenTracker}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenTracker={handleOpenTracker}
            onOpenConsultation={() => handleOpenConsultation()}
            onApplyJob={handleApplyJob}
          />
        )}
        {activeTab === 'about' && (
          <AboutView onConsultation={() => handleOpenConsultation()} />
        )}
        {activeTab === 'services' && (
          <ServicesView onConsultation={() => handleOpenConsultation()} />
        )}
        {activeTab === 'countries' && (
          <CountriesView
            onSelectCountryForConsultation={(cId) => handleOpenConsultation(cId)}
          />
        )}
        {activeTab === 'process' && (
          <ProcessView
            onOpenTracker={handleOpenTracker}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {activeTab === 'gallery' && <GalleryView />}
        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTracker={() => handleOpenTracker()}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Action Buttons: Live Status & WhatsApp */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={() => handleOpenTracker()}
          className="px-3.5 py-2.5 bg-blue-950 text-white rounded-full shadow-lg hover:bg-blue-900 transition-all flex items-center gap-2 text-xs font-bold border border-amber-400/30 hover:scale-105"
          title="Track Visa Status"
        >
          <Search className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">Track Visa</span>
        </button>

        <a
          href="https://wa.me/919820045112"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-all hover:scale-110 flex items-center justify-center border-2 border-white"
          title="Chat with Caseworker on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>

      {/* Modals */}
      <VisaTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        initialTrackingId={trackerInitialId}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedCountry={consultationCountry}
      />

      <JobApplicationModal
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  );
}
