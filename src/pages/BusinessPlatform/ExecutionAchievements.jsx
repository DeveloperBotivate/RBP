import React from 'react';
import { SectionShell } from '../MyProfile/shared';
import CountUp from '../../components/CountUp';

const STATS = [
  { value: '151+ MW', label: 'Installed solar capacity' },
  { value: '15,033+', label: 'CREDA solar pumps' },
  { value: '30,000+', label: 'Total pumps (incl. KUSUM-B)' },
  { value: '5,000+', label: 'Solar power plants' },
  { value: '12,000+', label: 'Solar home-lighting systems' },
  { value: '1,100+', label: 'Solar dual pumps' },
  { value: '60+', label: 'Solar high masts' },
  { value: '1,150+', label: 'Villages benefited' },
  { value: '6', label: 'States served' },
];

const STATES = ['Maharashtra', 'Jharkhand', 'Uttar Pradesh', 'Haryana', 'Rajasthan', 'Chhattisgarh'];

const ExecutionAchievements = () => (
  <SectionShell
    id="execution-achievements"
    title="Execution Achievements"
    intro="The scale achieved by the organisation demonstrates its operational capability across decentralised, multi-state deployment."
  >
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className={`rounded-xl p-6 text-center ${i === 0 ? 'bg-amber-600 text-white' : 'bg-stone-50 border border-gray-100'}`}
        >
          <div className={`text-2xl font-bold ${i === 0 ? '' : 'text-emerald-950'}`}><CountUp value={s.value} /></div>
          <div className={`mt-1 text-[11px] uppercase tracking-wider ${i === 0 ? 'text-amber-50' : 'text-gray-500'}`}>{s.label}</div>
        </div>
      ))}
    </div>

    <div className="mt-8">
      <p className="text-gray-600 leading-relaxed max-w-4xl">
        States served include Maharashtra, Jharkhand, Uttar Pradesh, Haryana, Rajasthan and Chhattisgarh — placing the
        organisation among the significant renewable energy execution platforms in Central India.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {STATES.map((s) => (
          <li key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-600/50 text-emerald-950">{s}</li>
        ))}
      </ul>
    </div>
  </SectionShell>
);

export default ExecutionAchievements;
