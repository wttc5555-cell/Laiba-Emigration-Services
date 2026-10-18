import React, { useState } from 'react';
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ShieldCheck,
  Search,
  Plane,
  ChevronDown,
  ChevronUp,
  UserCheck,
  Download,
} from 'lucide-react';
import { PROCESS_STAGES } from '../data/mockData';

interface ProcessViewProps {
  onOpenTracker: (sampleId?: string) => void;
  onOpenConsultation: () => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({
  onOpenTracker,
  onOpenConsultation,
}) => {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    item1: true,
    item2: true,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
  });

  const toggleChecklist = (id: string) => {
    setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
              <Clock className="w-3.5 h-3.5" />
              <span>Full Transparency Roadmap</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The 5-Stage Recruitment & Emigration Process
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Step-by-step transparency from initial trade screening and employer interviews to GAMCA medicals, Ministry visa endorsement, and airport departure.
            </p>
          </div>
        </div>
      </section>

      {/* Main 5-Stage Timeline Accordion / Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {PROCESS_STAGES.map((stage) => {
            const isExpanded = expandedStep === stage.step;
            return (
              <div
                key={stage.step}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all"
              >
                <button
                  onClick={() => setExpandedStep(isExpanded ? null : stage.step)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 font-bold font-mono text-base flex items-center justify-center shrink-0">
                      0{stage.step}
                    </div>
                    <div>
                      <div className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-wider">
                        Stage {stage.step} · Typical Turnaround: {stage.duration}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {stage.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 mt-2 text-slate-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                          Mandatory Stage Deliverables:
                        </div>
                        <div className="space-y-2">
                          {stage.keyChecklist.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                            Involved Authorities & Parties:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {stage.involvedParties.map((party, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                              >
                                {party}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-mono">Stage Status: Online Trackable</span>
                          <button
                            onClick={() => onOpenTracker()}
                            className="font-bold text-blue-950 hover:text-amber-600 transition-colors"
                          >
                            Check Candidate Docket →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Embedded Live Visa Tracker Callout Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              CANDIDATE SELF-SERVICE PORTAL
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Already Registered? Track Your Application Milestones
            </h3>
            <p className="text-xs text-slate-300">
              Inspect your practical test ratings, employer interview results, GAMCA medical clearance, and visa endorsement date in real time.
            </p>
          </div>

          <button
            onClick={() => onOpenTracker('LBA-8842-UAE')}
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shrink-0 flex items-center gap-2 shadow-lg"
          >
            <Search className="w-4 h-4 text-slate-950" />
            <span>Launch Live Visa Tracker</span>
          </button>
        </div>
      </section>

      {/* Interactive Candidate Document Readiness Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
                APPLICANT READINESS CHECKLIST
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Candidate Document Verification Checklist
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Check off your personal documents before arriving at our Mumbai or New Delhi interview centers.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold self-start sm:self-auto transition-colors"
            >
              Need Attestation Assistance?
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              {
                id: 'item1',
                title: 'Original Passport (Minimum 8 months remaining validity)',
                desc: 'Must have at least 4 blank visa pages and no damaged biometric chip.',
              },
              {
                id: 'item2',
                title: 'White Background Photographs (Recent, 35mm x 45mm)',
                desc: '12 copies without glasses, 80% face coverage.',
              },
              {
                id: 'item3',
                title: 'Attested Trade Diploma or Degree Certificates',
                desc: 'Authenticated by State HRD and Ministry of External Affairs (MEA).',
              },
              {
                id: 'item4',
                title: 'Police Clearance Certificate (PCC)',
                desc: 'Issued by Regional Passport Office (RPO) within the last 6 months.',
              },
              {
                id: 'item5',
                title: 'Valid GCC Driving License (If applying for Driver positions)',
                desc: 'Original physical card + color copy of both sides.',
              },
              {
                id: 'item6',
                title: 'GAMCA / Wafid Biometric Slip',
                desc: 'Appointment slip confirming medical exam at authorized clinic.',
              },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => toggleChecklist(item.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                  checklist[item.id]
                    ? 'bg-emerald-50/50 border-emerald-300'
                    : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100/50'
                }`}
              >
                <div className="mt-0.5">
                  <input
                    type="checkbox"
                    checked={checklist[item.id]}
                    onChange={() => {}}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${checklist[item.id] ? 'text-emerald-950 line-through' : 'text-slate-900'}`}>
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
