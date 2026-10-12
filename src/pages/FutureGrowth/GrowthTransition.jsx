import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionShell } from '../MyProfile/shared';

const STEPS = [
  { title: 'EPC Contractor', note: 'Where the journey began' },
  { title: 'Renewable Energy Infrastructure Developer', note: 'Current phase' },
  { title: 'Independent Power Producer (IPP)', note: 'Long-term objective' },
];

const GrowthTransition = () => (
  <SectionShell
    id="future-growth"
    title="From EPC to Energy-Infrastructure Ownership"
    intro="Transitioning from EPC contractor to renewable energy infrastructure owner — and ultimately an Independent Power Producer."
  >
    <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-center">
      <p className="text-gray-600 leading-relaxed">
        The first phase of growth centred on renewable energy execution; the second on manufacturing and industrial
        integration. The third phase, now underway, focuses on creating long-term renewable energy assets and
        energy-infrastructure businesses — a strategic transition from EPC contractor to renewable energy
        infrastructure developer, and ultimately to Independent Power Producer (IPP).
      </p>
      <ol className="flex flex-col items-center gap-1 text-center">
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex flex-col items-center gap-1 w-full">
            <div className={`w-full rounded-xl py-4 px-4 ${i === 1 ? 'bg-amber-600 text-white' : 'bg-emerald-950 text-white'}`}>
              <div className="font-semibold">{s.title}</div>
              <div className={`text-xs mt-0.5 ${i === 1 ? 'text-amber-50' : 'text-emerald-100'}`}>{s.note}</div>
            </div>
            {i < STEPS.length - 1 && <ChevronDown size={18} className="text-amber-600" />}
          </li>
        ))}
      </ol>
    </div>
  </SectionShell>
);

export default GrowthTransition;
