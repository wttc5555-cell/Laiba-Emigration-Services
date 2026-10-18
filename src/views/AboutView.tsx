import React from 'react';
import {
  ShieldCheck,
  Award,
  Globe2,
  Users,
  Target,
  Compass,
  FileCheck,
  Building2,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

export const AboutView: React.FC<{ onConsultation: () => void }> = ({ onConsultation }) => {
  const leadership = [
    {
      name: 'Farhan A. Qureshi',
      title: 'Managing Director & Founder',
      experience: '22+ Years in International Human Capital & GCC Trade Corridors',
      bio: 'Pioneered ethical overseas recruitment in India, having facilitated thousands of skilled workers into major infrastructure and industrial projects across the Gulf and Europe.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Capt. Rashid Al-Maktoum (Ret.)',
      title: 'Director of Middle East Operations (Dubai Hub)',
      experience: '18+ Years GCC Corporate Relations & Labor Affairs',
      bio: 'Coordinates principal client relations in UAE, Saudi Arabia, and Qatar, overseeing accommodation audits, worker welfare, and local regulatory liaison.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Advocate Sneha Deshmukh',
      title: 'Chief Emigration & Legal Compliance Officer',
      experience: '15+ Years International Immigration & Maritime Law',
      bio: 'Directs government licensing, e-Migrate approvals, bilateral labor agreements, and ensures strict adherence to the Indian Emigration Act and ILO conventions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Eng. Vikramaditya Rathore',
      title: 'Director of Technical Trade Testing (Thane Skill Center)',
      experience: '19+ Years Mechanical, MEP & Industrial Plant Engineering',
      bio: 'Manages our multi-bay skill assessment workshop, overseeing rigorous welding, electrical, HVAC, and mechanical proficiency tests.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const pillars = [
    {
      title: 'Ethical & Transparent Recruitment',
      desc: 'We operate under strict zero-fee principles for bulk corporate campaigns. All contract terms, wages, and working hours are clearly explained before signing.',
      icon: ShieldCheck,
      color: 'emerald',
    },
    {
      title: 'Certified Skill Evaluation',
      desc: 'Our proprietary skill testing facilities test trade workers on actual industrial equipment before presenting them to overseas employers, guaranteeing high productivity.',
      icon: Award,
      color: 'blue',
    },
    {
      title: 'Candidate Welfare & On-Ground Support',
      desc: 'We are one of the few agencies with permanent branch offices in Dubai and regional partner desks in Poland and Saudi Arabia to assist candidates post-arrival.',
      icon: Users,
      color: 'amber',
    },
    {
      title: 'Full Regulatory Compliance',
      desc: 'Licensed by the Ministry of External Affairs (Govt. of India), ISO 9001 certified, and integrated with official e-Migrate and Protector of Emigrants portals.',
      icon: FileCheck,
      color: 'indigo',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
              <Compass className="w-3.5 h-3.5" />
              <span>About Laiba Emigration Services Pvt Ltd</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Shaping Global Futures with Integrity & Diligence
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Founded over a decade ago, Laiba Emigration Services Pvt Ltd has evolved into one of South Asia’s most respected and government-licensed overseas recruitment and visa consultancies.
            </p>
          </div>
        </div>
      </section>

      {/* Official Government Credentials & License Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-amber-400/30 shadow-md p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-0 opacity-40"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>OFFICIAL STATUTORY LICENSURE & ACCREDITATION</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Ministry of External Affairs (Govt of India) Approved
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating under statutory registration number <strong className="text-slate-900 font-mono">B-0872/MUM/COM/1000+/5/9823/2012</strong>, granted under Section 11 of the Emigration Act 1983. We maintain permanent statutory security deposits and full e-Migrate connectivity.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">License Category</div>
                  <div className="font-bold text-slate-800 mt-0.5">1000+ Unlimited Capacity</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Quality Standard</div>
                  <div className="font-bold text-slate-800 mt-0.5">ISO 9001:2015 Certified</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Ethical Standard</div>
                  <div className="font-bold text-slate-800 mt-0.5">IOM / IRIS Compliant</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 bg-gradient-to-b from-blue-950 to-slate-900 text-white rounded-xl text-center shadow-inner">
              <ShieldCheck className="w-12 h-12 text-amber-400 mb-2" />
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                VERIFIED REGISTRATION
              </div>
              <div className="text-sm font-bold text-white mt-1">
                PROTECTOR OF EMIGRANTS
              </div>
              <div className="text-[11px] text-slate-300 font-mono mt-1">
                VALID & AUDITED 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To empower hardworking candidates with life-changing, lawful international careers while delivering premier, highly skilled manpower to global enterprises with unmatched speed, transparency, and statutory compliance.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be the benchmark for ethical international recruitment in Asia and the Middle East, eradicating deceitful agency practices and creating a seamless, dignified employment pathway for every skilled artisan, nurse, and engineer.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            The Pillars That Define Our Practice
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every candidate departure and client mandate adheres strictly to these non-negotiable principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
            EXPERIENCED LEADERSHIP
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Meet the Directors Guiding Your Emigration Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Decades of combined experience in overseas recruitment, consular legalities, and engineering skill testing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{member.name}</h4>
                  <div className="text-xs font-semibold text-blue-900 mt-0.5">{member.title}</div>
                  <div className="text-[11px] font-mono text-amber-700 mt-1">{member.experience}</div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Want to discuss overseas hiring or individual career assessment?</h3>
            <p className="text-xs text-slate-600 mt-1">Speak with our senior emigration specialists at our Mumbai headquarters or Dubai operations desk.</p>
          </div>
          <button
            onClick={onConsultation}
            className="px-5 py-3 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-xl text-xs shrink-0 transition-colors"
          >
            Connect With Our Advisors
          </button>
        </div>
      </section>
    </div>
  );
};
