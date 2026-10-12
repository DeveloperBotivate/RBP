import React from 'react';
import { Sun, Factory, Zap, BatteryCharging } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';

const PILLARS = [
  { icon: Sun, tag: 'EPC', title: 'Renewable Energy EPC' },
  { icon: Factory, tag: 'Mfg.', title: 'Manufacturing' },
  { icon: Zap, tag: 'Utility', title: 'Utility Solar Development' },
  { icon: BatteryCharging, tag: 'Storage', title: 'Energy Storage Infrastructure' },
];

const PlatformOverview = () => (
  <SectionShell
    id="business-platform"
    title="Building an Integrated Platform"
    intro="An integrated renewable energy infrastructure platform built on four strategic pillars."
  >
    <p className="text-gray-600 leading-relaxed max-w-4xl">
      Over the last thirteen years, RBP Energy and its associated group companies have evolved from a renewable
      energy EPC organisation into a diversified renewable energy infrastructure platform. The business today rests on
      four strategic pillars.
    </p>

    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {PILLARS.map(({ icon: Icon, tag, title }) => (
        <div key={tag} className="bg-emerald-950 text-white rounded-xl p-6">
          <div className="w-11 h-11 rounded-full border border-amber-600 flex items-center justify-center mb-4">
            <Icon size={20} className="text-amber-500" strokeWidth={1.5} />
          </div>
          <div className="text-2xl font-bold text-amber-400" style={serif}>{tag}</div>
          <div className="mt-1 text-xs uppercase tracking-wider text-emerald-100">{title}</div>
        </div>
      ))}
    </div>

    <p className="mt-8 text-gray-600 leading-relaxed max-w-4xl">
      This diversification has strengthened resilience, reduced concentration risk and created multiple growth
      engines. Unlike organisations dependent on a single segment, the group participates across multiple stages of the
      renewable energy value chain.
    </p>
  </SectionShell>
);

export default PlatformOverview;
