import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';

const NOTEWORTHY = [
  'A long operating history',
  'Strong CREDA credentials',
  'Manufacturing diversification',
  'Utility-scale project development',
  'Entry into energy storage',
];

const LenderConfidence = () => (
  <SectionShell id="lender-confidence" title="Why Lenders Can Have Confidence" dark>
    <div className="grid lg:grid-cols-[1fr_380px] gap-8">
      <div className="space-y-4 text-emerald-100 leading-relaxed">
        <p>
          Financial institutions evaluating renewable energy businesses typically focus on promoter quality, execution
          capability, financial discipline, sector knowledge, growth potential and governance standards. The group
          demonstrates positive characteristics across all of these parameters.
        </p>
        <p>
          These factors collectively strengthen lender confidence in the group&apos;s implementation capability and
          long-term sustainability.
        </p>
      </div>
      <div className="bg-white text-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-emerald-950 mb-4" style={serif}>Particularly Noteworthy</h3>
        <ul className="space-y-3">
          {NOTEWORTHY.map((n) => (
            <li key={n} className="flex items-center gap-3 text-sm text-emerald-950">
              <CheckCircle2 size={18} className="text-amber-600 flex-shrink-0" strokeWidth={1.75} />
              {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionShell>
);

export default LenderConfidence;
