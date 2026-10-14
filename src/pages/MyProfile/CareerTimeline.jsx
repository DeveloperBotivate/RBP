import React from 'react';
import { SectionShell, serif } from './shared';

const TIMELINE = [
  { year: '2005', title: 'Joined Bhilai Builders Pvt. Ltd.', text: 'Entry into the family infrastructure & real-estate business.' },
  { year: '2005–11', title: 'Infrastructure & Real-Estate Development', text: 'Hands-on grounding in project execution and business management.' },
  { year: '2010', title: 'SPJIMR Recognition', text: 'Family Managed Business Programme — formal recognition.' },
  { year: '2012', title: 'Formation of RBP Energy (India) Pvt. Ltd.', text: 'A dedicated renewable energy enterprise is born.' },
  { year: '2015', title: 'GERMI Solar Professional Certification' },
  { year: '2015–20', title: 'Expansion through CREDA Programmes', text: 'Large-scale solar irrigation and rural renewable deployment.' },
  { year: '2020–25', title: 'Scale-Up Phase', text: '151+ MW installed • 15,033+ CREDA pumps • multi-state operations.' },
  { year: '2021', title: 'Entry into Manufacturing', text: 'Varyaa Renewable Pvt. Ltd. established.' },
  { year: '2025', title: 'First Utility-Scale Project Commissioned', text: '2.6 MW DC / 2 MW AC PM-KUSUM solar plant, Chhindwara (MP).' },
  { year: '2025', title: 'Pipeline Expanded to 85.85 MW', text: '44 PM-KUSUM projects under development.' },
  { year: '2026', title: 'Award of 15 MW / 30 MWh BESS Project', text: 'Entry into battery energy storage via CSPDCL tender.' },
];

const CareerTimeline = () => (
  <SectionShell
    id="career-timeline"
    title="Career Timeline"
    intro="A two-decade arc from infrastructure entrepreneurship to renewable energy and energy-storage leadership."
  >
    <ol className="relative border-l-2 border-amber-600/40 ml-3 sm:ml-4 space-y-8">
      {TIMELINE.map((t) => (
        <li key={`${t.year}-${t.title}`} className="pl-6 sm:pl-8 relative">
          <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white" />
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-sm font-bold text-amber-700 sm:w-24 flex-shrink-0 tracking-wide">{t.year}</span>
            <div>
              <h3 className="font-bold text-emerald-950" style={serif}>{t.title}</h3>
              {t.text && <p className="text-sm text-gray-600 mt-0.5">{t.text}</p>}
            </div>
          </div>
        </li>
      ))}
    </ol>

    <div className="mt-12 bg-emerald-950 text-white rounded-xl py-6 px-6 text-center">
      <span className="text-xs tracking-[0.2em] uppercase text-amber-500">Future</span>
      <p className="mt-1 text-lg" style={serif}>Integrated Renewable Energy Infrastructure Platform</p>
    </div>
  </SectionShell>
);

export default CareerTimeline;
