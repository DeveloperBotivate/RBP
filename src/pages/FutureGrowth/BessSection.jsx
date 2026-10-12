import React from 'react';
import { SectionShell, serif } from '../MyProfile/shared';

const DETAILS = [
  ['Awarded Capacity', '15 MW / 30 MWh'],
  ['Tender', 'CSPDCL'],
  ['Executing Entities', 'Om Renewable • Hamar Energy (consortium)'],
  ['Current Status', 'Letter of Award awaited'],
];

const WHY = [
  { title: 'Future-Oriented Business', text: 'Positions the group in a high-growth segment.' },
  { title: 'Technology Leadership', text: 'Demonstrates willingness to adopt advanced energy technologies.' },
  { title: 'Infrastructure Diversification', text: 'Adds a new business vertical.' },
  { title: 'Utility-Sector Integration', text: 'Creates opportunities within grid infrastructure.' },
];

const BessSection = () => (
  <SectionShell id="bess" title="Battery Energy Storage Systems (BESS)">
    <p className="text-gray-600 leading-relaxed max-w-4xl">
      As renewable penetration increases, energy storage is becoming one of the most critical infrastructure
      requirements in the power sector. Because solar generation is inherently variable, storage provides the
      flexibility required to balance supply and demand, improve grid stability, enhance renewable integration, support
      peak-load management and improve reliability. BESS is expected to be among the fastest-growing infrastructure
      sectors of the coming decade.
    </p>

    <div className="mt-8 grid lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold text-emerald-950 mb-4" style={serif}>Entry into BESS</h3>
        <div className="border border-gray-200 rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-950 text-white text-left text-[11px] uppercase tracking-wider">
                <th className="px-5 py-3 font-semibold">Parameter</th>
                <th className="px-5 py-3 font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {DETAILS.map(([k, v]) => (
                <tr key={k}>
                  <td className="px-5 py-3.5 font-semibold text-amber-700">{k}</td>
                  <td className="px-5 py-3.5 text-emerald-950">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-emerald-950 mb-4" style={serif}>Why BESS Matters</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {WHY.map((w) => (
            <div key={w.title} className="bg-stone-50 rounded-xl p-4">
              <div className="text-sm font-semibold text-emerald-950">{w.title}</div>
              <p className="mt-1 text-xs text-gray-500 leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionShell>
);

export default BessSection;
