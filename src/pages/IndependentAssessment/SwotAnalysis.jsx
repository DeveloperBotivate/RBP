import React from 'react';
import { SectionShell, serif } from '../MyProfile/shared';

const QUADRANTS = [
  {
    title: 'Strengths',
    tone: 'bg-emerald-950 text-white',
    head: 'text-amber-400',
    items: [
      'Strong entrepreneurial background',
      'Proven execution capability',
      'Government project credentials',
      'Manufacturing diversification',
      'Utility solar pipeline',
      'Technical expertise & financial scale',
      'Energy-storage participation',
    ],
  },
  {
    title: 'Weaknesses',
    tone: 'bg-stone-50 border border-gray-200 text-gray-800',
    head: 'text-amber-700',
    items: [
      'Utility asset portfolio still developing',
      'Manufacturing capacity expansion under implementation',
      'Dependence on policy-driven sectors for certain segments',
    ],
  },
  {
    title: 'Opportunities',
    tone: 'bg-amber-600 text-white',
    head: 'text-white',
    items: [
      'PM-KUSUM expansion',
      'Utility & open-access solar development',
      'Captive renewable energy',
      'BESS deployment',
      'Renewable manufacturing growth',
      'Institutional-capital participation',
    ],
  },
  {
    title: 'Threats',
    tone: 'bg-stone-50 border border-gray-200 text-gray-800',
    head: 'text-amber-700',
    items: [
      'Policy changes',
      'Commodity price volatility',
      'Increased competition',
      'Interest-rate fluctuations',
      'Supply-chain disruptions',
    ],
  },
];

const SwotAnalysis = () => (
  <SectionShell id="swot-analysis" title="SWOT Analysis">
    <div className="grid md:grid-cols-2 gap-5">
      {QUADRANTS.map((q) => (
        <div key={q.title} className={`rounded-xl p-6 ${q.tone}`}>
          <h3 className={`text-lg font-bold tracking-wide uppercase ${q.head}`} style={serif}>{q.title}</h3>
          <ul className="mt-4 space-y-2 text-sm list-disc list-inside marker:text-current">
            {q.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      ))}
    </div>
    <p className="mt-6 text-sm text-gray-600">
      The diversified nature of the group&apos;s business model helps mitigate several of these risks.
    </p>
  </SectionShell>
);

export default SwotAnalysis;
