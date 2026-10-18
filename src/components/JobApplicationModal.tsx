import React, { useState } from 'react';
import { X, Send, CheckCircle2, Briefcase, FileUp, ShieldCheck } from 'lucide-react';
import { JobOpening } from '../types';

interface JobApplicationModalProps {
  job: JobOpening | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  job,
  isOpen,
  onClose,
}) => {
  const [candidateName, setCandidateName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [experienceYears, setExperienceYears] = useState('3-5');
  const [hasPassport, setHasPassport] = useState(true);
  const [hasTradeCert, setHasTradeCert] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [successCode, setSuccessCode] = useState<string | null>(null);

  if (!isOpen || !job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const code = `LBA-APP-${job.countryCode}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSuccessCode(code);
      setSubmitting(false);
    }, 600);
  };

  const handleClose = () => {
    setSuccessCode(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity" onClick={handleClose} />
      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 text-center">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-lg border border-slate-200">
          <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{job.flag}</span>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">
                  Application for {job.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {job.city}, {job.country} · Salary: {job.salary}
                </p>
              </div>
            </div>
            <button onClick={handleClose} className="p-1 text-slate-300 hover:text-white rounded-md">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-6">
            {successCode ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Application Submitted!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your profile has been shortlisted for client interview delegation. Keep your phone handy for trade testing verification.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 max-w-xs mx-auto">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Application Reference</span>
                  <span className="text-lg font-mono font-bold text-blue-950">{successCode}</span>
                </div>
                <button
                  onClick={handleClose}
                  className="px-6 py-2 bg-blue-950 text-white rounded-lg text-xs font-semibold hover:bg-blue-900"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Candidate Full Name (As in Passport) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar Patel"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      International Passport Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. P1234567"
                      value={passportNumber}
                      onChange={(e) => setPassportNumber(e.target.value.toUpperCase())}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg font-mono uppercase focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasPassport}
                      onChange={(e) => setHasPassport(e.target.checked)}
                      className="rounded text-blue-900"
                    />
                    <span className="text-slate-700">Valid Passport (&gt;6 mo)</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasTradeCert}
                      onChange={(e) => setHasTradeCert(e.target.checked)}
                      className="rounded text-blue-900"
                    />
                    <span className="text-slate-700">Trade Diploma / ITI</span>
                  </label>
                </div>

                <div className="p-3 bg-slate-50 border border-dashed border-slate-300 rounded-lg text-center cursor-pointer hover:bg-slate-100 transition-colors">
                  <FileUp className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                  <span className="text-xs text-slate-600 font-medium block">
                    Upload Resume / CV (PDF or DOC)
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Trade test score & prior overseas experience
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-3.5 py-2 text-xs text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 disabled:opacity-60"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>{submitting ? 'Transmitting Profile...' : 'Submit Application'}</span>
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
