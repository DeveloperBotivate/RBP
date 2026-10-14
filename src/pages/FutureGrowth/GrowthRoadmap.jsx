import React from 'react';
import { SectionShell, serif } from '../MyProfile/shared';
import CountUp from '../../components/CountUp';

const ROADMAP = [
  {
    period: '2025–27',
    title: 'Manufacturing Expansion & PM-KUSUM Execution',
    text: 'GI plant commissioning • 44 projects / 85.85 MW portfolio • first utility storage project.',
  },
  {
    period: '2027–30',
    title: 'Utility Solar Expansion & Manufacturing Scale-Up',
    text: 'Open-access and captive power projects • expanded product offerings • additional BESS opportunities.',
  },
  {
    period: '2030–35',
    title: 'Renewable Asset Ownership at Scale',
    text: 'Large utility solar portfolio • energy-storage assets • national expansion • institutional-investment readiness.',
  },
];

const POSITIONED = [
  { value: '151+ MW', label: 'Execution experience' },
  { value: 'CREDA', label: 'Government credentials' },
  { value: '2,000 MT', label: 'Proposed monthly capacity' },
  { value: '5.53 ac', label: 'Industrial infrastructure' },
  { value: '85.85 MW', label: 'Utility solar pipeline' },
  { value: '15 MW', label: 'Energy-storage entry' },
];

const GrowthRoadmap = () => (
  <SectionShell id="growth-roadmap" title="Growth Roadmap 2025–2035">
    <div className="grid md:grid-cols-3 gap-5">
      {ROADMAP.map((r, i) => (
        <div key={r.period} className="relative border border-gray-200 rounded-xl p-6 hover:border-amber-600 transition-colors">
          <span className="absolute -top-3 left-5 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {r.period}
          </span>
          <div className="mt-2 text-xs font-semibold tracking-wider uppercase text-gray-400">Phase {i + 1}</div>
          <div className="mt-1 font-bold text-emerald-950 leading-snug" style={serif}>{r.title}</div>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">{r.text}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 bg-emerald-950 text-white rounded-xl p-8">
      <h3 className="text-xl font-bold text-amber-400 mb-6" style={serif}>Why the Group Is Well Positioned</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {POSITIONED.map((p) => (
          <div key={p.label} className="text-center border border-emerald-800 rounded-xl py-5 px-2">
            <div className="text-xl font-bold text-amber-400"><CountUp value={p.value} /></div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-emerald-100">{p.label}</div>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
);

export default GrowthRoadmap;
