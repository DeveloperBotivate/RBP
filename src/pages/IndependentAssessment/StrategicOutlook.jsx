import React from 'react';
import { SectionShell, serif } from '../MyProfile/shared';

const PHASES = [
  ['Phase 1', 'Infrastructure & Real Estate', '2005–2011'],
  ['Phase 2', 'Renewable Energy EPC', '2012–2015'],
  ['Phase 3', 'Government Renewable Programmes', '2015–2020'],
  ['Phase 4', 'Scale & Diversification', '2020–2025'],
  ['Phase 5', 'Manufacturing Platform', '2021–present'],
  ['Phase 6', 'Utility Solar Development', '2025–present'],
  ['Phase 7', 'Battery Energy Storage Systems', '2026 onwards'],
  ['Phase 8', 'Integrated Renewable Energy Platform', 'Vision 2035'],
];

const StrategicOutlook = () => (
  <SectionShell id="strategic-outlook" title="Strategic Outlook">
    <ol className="relative border-l-2 border-amber-600/40 ml-3 sm:ml-4 space-y-5">
      {PHASES.map(([phase, title, period], i) => (
        <li key={phase} className="pl-6 sm:pl-8 relative">
          <span
            className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-4 border-white ${i === PHASES.length - 1 ? 'bg-emerald-950' : 'bg-amber-600'}`}
          />
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-xs font-bold tracking-wider uppercase text-amber-700 sm:w-20 flex-shrink-0">{phase}</span>
            <div>
              <h3 className="font-bold text-emerald-950" style={serif}>{title}</h3>
              <p className="text-sm text-gray-500">{period}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </SectionShell>
);

export default StrategicOutlook;
