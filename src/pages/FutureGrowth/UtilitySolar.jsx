import React from 'react';
import { Repeat, Landmark, Wallet, Users, Layers } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';

const OBJECTIVES = [
  { icon: Repeat, title: 'Recurring Revenue', text: 'Generation assets create long-term revenue streams.' },
  { icon: Landmark, title: 'Asset Creation', text: 'Projects contribute towards enterprise value.' },
  { icon: Wallet, title: 'Stable Cash Flows', text: 'Long-term PPAs provide predictable income.' },
  { icon: Users, title: 'Investor Interest', text: 'Infrastructure investors prefer operational assets.' },
  { icon: Layers, title: 'Scalability', text: 'Large project portfolios create significant growth opportunities.' },
];

const UtilitySolar = () => (
  <SectionShell id="utility-solar" title="Utility Solar Development" dark>
    <p className="text-emerald-100 leading-relaxed max-w-4xl">
      Every successful renewable energy company eventually reaches a stage where execution capability evolves into
      ownership capability. The group&apos;s extensive experience in solar EPC, government renewable programmes, solar
      irrigation and utility-scale construction has created the foundation required for utility-scale project
      development — making this a natural progression rather than a new venture.
    </p>
    <h3 className="mt-10 mb-5 text-xl font-bold text-amber-400" style={serif}>Strategic Objectives</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {OBJECTIVES.map(({ icon: Icon, title, text }) => (
        <div key={title} className="bg-white text-gray-800 rounded-xl p-5">
          <Icon className="text-amber-600 mb-3" size={24} strokeWidth={1.5} />
          <div className="font-bold text-emerald-950" style={serif}>{title}</div>
          <p className="mt-1 text-sm text-gray-500 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default UtilitySolar;
