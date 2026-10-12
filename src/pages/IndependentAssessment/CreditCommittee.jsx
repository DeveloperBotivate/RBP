import React from 'react';
import { SectionShell, serif } from '../MyProfile/shared';

const PROMOTER = [
  { title: 'Experience', rating: 'STRONG', text: '20+ years of entrepreneurial experience and 13 years of renewable energy specialisation.' },
  { title: 'Technical Competence', rating: 'STRONG', points: ['Engineering degree', 'GERMI certification', 'Practical project experience'] },
  { title: 'Management Capability', rating: 'STRONG', points: ['SPJIMR Family Managed Business Programme', 'Large-scale project execution', 'Manufacturing diversification'] },
  { title: 'Industry Knowledge', rating: 'VERY STRONG', points: ['Solar EPC & agricultural solar', 'Rural infrastructure & utility solar', 'Manufacturing & energy storage'] },
];

const BUSINESS = [
  { title: 'Execution Capability', rating: 'VERY STRONG', points: ['121+ MW installed portfolio', '15,033+ CREDA solar pumps', 'Large-scale decentralised execution'] },
  { title: 'Market Position', rating: 'STRONG', points: ['Established presence across multiple states', 'Strong government-sector participation', 'Growing private-sector opportunities'] },
  { title: 'Manufacturing Capability', rating: 'STRONG', points: ['₹76 Cr manufacturing platform', '5.53-acre industrial facility', 'GI manufacturing expansion'] },
  { title: 'Utility Development', rating: 'STRONG', points: ['Commissioned utility-scale project', '85.85 MW development pipeline', 'Growing development expertise'] },
  { title: 'Energy-Storage Readiness', rating: 'EMERGING STRONG', points: ['Initial participation via CSPDCL BESS', 'Potential for future expansion'] },
];

const BADGE = {
  'VERY STRONG': 'bg-amber-600 text-white',
  STRONG: 'bg-emerald-900 text-white',
  'EMERGING STRONG': 'bg-white text-emerald-950 border border-amber-600',
};

const Card = ({ item }) => (
  <div className="bg-white text-gray-800 rounded-xl p-5 flex flex-col">
    <div className="flex items-start justify-between gap-3">
      <div className="font-bold text-emerald-950 leading-snug" style={serif}>{item.title}</div>
      <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap ${BADGE[item.rating]}`}>
        {item.rating}
      </span>
    </div>
    {item.text && <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.text}</p>}
    {item.points && (
      <ul className="mt-3 space-y-1.5 text-sm text-gray-600 list-disc list-inside marker:text-amber-600">
        {item.points.map((p) => <li key={p}>{p}</li>)}
      </ul>
    )}
  </div>
);

const CreditCommittee = () => (
  <SectionShell id="credit-committee" title="Credit Committee Assessment" dark>
    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500 mb-4">Promoter Evaluation</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {PROMOTER.map((i) => <Card key={i.title} item={i} />)}
    </div>

    <h3 className="mt-10 text-xs font-semibold tracking-[0.2em] uppercase text-amber-500 mb-4">Business Evaluation</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {BUSINESS.map((i) => <Card key={i.title} item={i} />)}
    </div>
  </SectionShell>
);

export default CreditCommittee;
