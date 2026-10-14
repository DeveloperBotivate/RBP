import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';

const MILESTONES = [
  ['2005', 'Joined Bhilai Builders Pvt. Ltd.'],
  ['2010', 'Recognition by SPJIMR Family Managed Business Programme'],
  ['2012', 'Formation of RBP Energy (India) Pvt. Ltd.'],
  ['2015', 'GERMI Solar Professional Certification'],
  ['2015–20', 'Execution of large-scale CREDA renewable energy programmes'],
  ['2020–25', 'Installed solar portfolio exceeds 151 MW'],
  ['2021', 'Entry into manufacturing through Varyaa Renewable Pvt. Ltd.'],
  ['2025', 'Commissioning of 2 MW AC PM-KUSUM solar project'],
  ['2025', 'Development pipeline reaches 85.85 MW'],
  ['2026', 'Entry into Battery Energy Storage Systems (15 MW / 30 MWh)'],
];

const PROGRESSION = [
  'Infrastructure & Real Estate',
  'Renewable Energy EPC',
  'Government Renewable Programmes',
  'Large-Scale Execution',
  'Manufacturing',
  'Utility Solar Development',
  'Energy Storage',
];

const MajorMilestones = () => (
  <SectionShell id="major-milestones" title="Major Milestones">
    <div className="grid lg:grid-cols-[1fr_340px] gap-10">
      <ul className="divide-y divide-gray-100 border border-gray-200 rounded-xl">
        {MILESTONES.map(([year, text]) => (
          <li key={`${year}-${text}`} className="flex gap-4 px-5 py-3.5">
            <span className="w-20 flex-shrink-0 text-sm font-bold text-amber-700">{year}</span>
            <span className="text-sm text-gray-700">{text}</span>
          </li>
        ))}
      </ul>

      <div className="bg-emerald-950 text-white rounded-xl p-7">
        <h3 className="text-lg font-bold text-amber-400 mb-4" style={serif}>A Disciplined Progression</h3>
        <ol className="flex flex-col items-center gap-1 text-center text-sm">
          {PROGRESSION.map((p, i) => (
            <li key={p} className="flex flex-col items-center gap-1 w-full">
              <span className="w-full border border-emerald-700 rounded-lg py-2 px-3">{p}</span>
              {i < PROGRESSION.length - 1 && <ChevronDown size={16} className="text-amber-500" />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  </SectionShell>
);

export default MajorMilestones;
