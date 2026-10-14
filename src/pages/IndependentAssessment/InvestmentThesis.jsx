import React from 'react';
import { SectionShell, serif } from '../MyProfile/shared';

const POINTS = [
  {
    title: 'Proven Entrepreneurial Capability',
    text: 'More than twenty years of experience across infrastructure, real estate, renewable energy and manufacturing — demonstrating continuity, adaptability, risk management and strategic decision-making across multiple business cycles.',
  },
  {
    title: 'Strong Renewable Energy Track Record',
    text: '151+ MW installed, 15,033+ CREDA pumps, 30,000+ pump deployments, 12,000+ solar home-lighting systems and 1,100+ villages served — execution capability at scale.',
  },
  {
    title: 'Government Project Credentials',
    text: 'Extensive CREDA and PM-KUSUM experience demonstrating technical, financial, administrative and compliance discipline that strengthens institutional credibility.',
  },
  {
    title: 'Operational Scale',
    text: 'Proven execution capability and sustained performance across multiple project cycles, supported by integrated manufacturing and utility-scale development.',
  },
  {
    title: 'Manufacturing Integration',
    text: 'Varyaa Renewable provides supply-chain control, improved margins, reduced procurement risk and quality management, with the GI facility strengthening this positioning further.',
  },
  {
    title: 'Transition Towards Asset Development',
    text: 'A commissioned 2 MW AC / 2.6 MW DC utility asset and a 44-project / 85.85 MW development portfolio point towards recurring revenue and enhanced enterprise value.',
  },
  {
    title: 'Entry into Energy Storage',
    text: "Participation in a 15 MW / 30 MWh BESS project aligns with the future direction of India's power sector and positions the group early in an emerging segment.",
  },
];

const InvestmentThesis = () => (
  <SectionShell
    id="independent-assessment"
    title="Investment Thesis"
    intro="An objective evaluation of promoter quality, business strength and the investment thesis — from a lender's perspective."
  >
    <p className="text-gray-600 leading-relaxed max-w-4xl">
      India&apos;s renewable energy sector is undergoing a structural transformation driven by rising power demand,
      decarbonisation goals, energy-security requirements and supportive policy. Within this environment,
      organisations possessing execution capability, technical expertise, manufacturing integration and
      project-development experience are positioned to emerge as long-term industry leaders. The RBP Group possesses
      several characteristics that distinguish it from a conventional EPC contractor.
    </p>

    <div className="mt-8 grid md:grid-cols-2 gap-5">
      {POINTS.map((p, i) => (
        <div key={p.title} className="flex gap-4 border border-gray-200 rounded-xl p-5 hover:border-amber-600 transition-colors">
          <div className="w-9 h-9 rounded-full bg-emerald-950 text-amber-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
            {i + 1}
          </div>
          <div>
            <div className="font-bold text-emerald-950" style={serif}>{p.title}</div>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">{p.text}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default InvestmentThesis;
