import React, { useState } from 'react';
import { Plane, CheckCircle2, QrCode, Shield, Sparkles, ExternalLink } from 'lucide-react';

interface PassportTicketCardProps {
  onTrackSample: (trackingId: string) => void;
}

const SAMPLE_PASSES = [
  {
    destination: 'United Arab Emirates',
    destinationCity: 'DUBAI (DXB)',
    origin: 'BOM / MUMBAI',
    flightNo: 'EK-501',
    gate: 'T2-B12',
    candidateName: 'MOHAMMED TARIQ KHAN',
    passportNo: 'P9842104',
    trade: 'HVAC TECHNICIAN',
    trackingId: 'LBA-8842-UAE',
    visaType: 'EMPLOYMENT RESIDENCE 2-YR',
    status: 'VISA STAMPED & CLEARED',
    stampColor: 'emerald',
    salary: 'AED 3,800 + FOOD/ACC',
  },
  {
    destination: 'Saudi Arabia',
    destinationCity: 'RIYADH (RUH)',
    origin: 'DEL / NEW DELHI',
    flightNo: 'SV-752',
    gate: 'T3-C08',
    candidateName: 'RAMESHWAR VERMA',
    passportNo: 'V7319022',
    trade: 'HEAVY CRANE OPERATOR',
    trackingId: 'LBA-9102-KSA',
    visaType: 'QIWA WORK PERMIT (SVP APPROVED)',
    status: 'READY FOR DEPARTURE',
    stampColor: 'emerald',
    salary: 'SAR 4,200 + OVERTIME',
  },
  {
    destination: 'Poland (EU)',
    destinationCity: 'WARSAW (WAW)',
    origin: 'BOM / MUMBAI',
    flightNo: 'LO-076',
    gate: 'T2-A04',
    candidateName: 'GURPREET SINGH DHILLON',
    passportNo: 'Z4105831',
    trade: 'CNC MILLING MACHINIST',
    trackingId: 'LBA-7651-POL',
    visaType: 'NATIONAL TYPE D / SCHENGEN',
    status: 'VOIVODESHIP PERMIT ISSUED',
    stampColor: 'amber',
    salary: 'PLN 5,800 (€1,350)',
  },
];

export const PassportTicketCard: React.FC<PassportTicketCardProps> = ({ onTrackSample }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentPass = SAMPLE_PASSES[selectedIndex];

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Interactive Corridor Switcher Tabs above ticket */}
      <div className="flex items-center justify-between mb-3 px-1 text-xs text-slate-400">
        <span className="flex items-center gap-1 font-medium text-slate-600">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Interactive Candidate Boarding Card:
        </span>
        <div className="flex gap-1.5 bg-slate-200/80 p-0.5 rounded-md">
          {SAMPLE_PASSES.map((pass, idx) => (
            <button
              key={pass.destination}
              onClick={() => setSelectedIndex(idx)}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                selectedIndex === idx
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {pass.destination.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Ticket Container */}
      <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden text-slate-800 transition-all hover:shadow-2xl">
        {/* Top Gold & Navy Accent Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white px-5 py-3 flex items-center justify-between border-b border-amber-500/40">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-xs">
              LBA
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase font-semibold text-amber-400">
                LAIBA EMIGRATION SERVICES PVT LTD
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                OVERSEAS EMPLOYMENT BOARDING CARD
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-2 py-0.5 bg-emerald-500/20 border border-emerald-400/40 rounded text-[10px] font-mono font-bold text-emerald-300">
              PROTECTOR VERIFIED
            </span>
          </div>
        </div>

        {/* Flight & Corridor Route */}
        <div className="p-5 pb-4">
          <div className="flex items-center justify-between pb-4 border-b border-dashed border-slate-200">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Origin
              </div>
              <div className="text-xl font-black text-slate-900 tracking-tight">
                {currentPass.origin}
              </div>
              <div className="text-xs text-slate-500">Chhatrapati Shivaji Intl</div>
            </div>

            <div className="flex flex-col items-center px-3">
              <div className="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full mb-1">
                {currentPass.flightNo}
              </div>
              <div className="relative w-24 flex items-center justify-center">
                <div className="w-full border-t border-slate-300"></div>
                <Plane className="w-4 h-4 text-blue-900 mx-1 absolute bg-white px-0.5 rotate-90" />
              </div>
              <div className="text-[10px] text-slate-400 mt-1 font-mono">
                GATE {currentPass.gate}
              </div>
            </div>

            <div className="text-right">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Destination
              </div>
              <div className="text-xl font-black text-blue-950 tracking-tight">
                {currentPass.destinationCity}
              </div>
              <div className="text-xs font-medium text-emerald-700 font-sans">
                {currentPass.destination}
              </div>
            </div>
          </div>

          {/* Candidate & Visa Specifics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 text-left border-b border-dashed border-slate-200">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Candidate Name
              </div>
              <div className="text-xs font-bold text-slate-900 truncate">
                {currentPass.candidateName}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Passport No.
              </div>
              <div className="text-xs font-mono font-bold text-slate-800">
                {currentPass.passportNo}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Selected Trade
              </div>
              <div className="text-xs font-bold text-slate-800 truncate">
                {currentPass.trade}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Salary Package
              </div>
              <div className="text-xs font-bold text-emerald-700">
                {currentPass.salary}
              </div>
            </div>
          </div>

          {/* Visa Class & Official Rubber Stamp */}
          <div className="pt-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Visa Endorsement Class
              </div>
              <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-600" />
                <span>{currentPass.visaType}</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                Ref: {currentPass.trackingId}
              </div>
            </div>

            {/* Simulated Vintage Rubber Ink Stamp */}
            <div className="rotate-[-6deg] border-2 border-emerald-600/80 bg-emerald-50/70 text-emerald-800 px-3 py-1.5 rounded-md text-center shadow-xs">
              <div className="text-[8px] font-mono tracking-widest uppercase font-bold text-emerald-700">
                BUREAU OF EMIGRATION
              </div>
              <div className="text-[11px] font-black tracking-wider uppercase text-emerald-900 flex items-center gap-1 justify-center">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>CLEARED / FIT</span>
              </div>
              <div className="text-[8px] font-mono text-emerald-600">
                LAIBA AUTH · 2026
              </div>
            </div>
          </div>
        </div>

        {/* Perforated Stub Line with Circle Cutouts */}
        <div className="relative border-t-2 border-dashed border-slate-300 bg-slate-50 px-5 py-3 flex items-center justify-between">
          {/* Left Notch */}
          <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-slate-50 border border-slate-300/80" />
          {/* Right Notch */}
          <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-slate-50 border border-slate-300/80" />

          {/* Barcode & Verification Link */}
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded border border-slate-200 shadow-2xs">
              <QrCode className="w-7 h-7 text-slate-800" />
            </div>
            <div>
              {/* Simulated Barcode */}
              <div className="font-mono text-sm tracking-widest text-slate-800 font-bold select-none h-4 overflow-hidden flex items-center">
                ||| | |||| || | ||||| | ||| |||| |
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                AUTH TICKET ID: {currentPass.trackingId}
              </div>
            </div>
          </div>

          <button
            onClick={() => onTrackSample(currentPass.trackingId)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-950 hover:bg-blue-900 text-white rounded-lg text-xs font-semibold shadow-xs transition-all hover:scale-[1.02]"
          >
            <span>Live Status</span>
            <ExternalLink className="w-3 h-3 text-amber-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
