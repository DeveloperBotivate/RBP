import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';
import CountUp from '../../components/CountUp';

const IMPORTANCE = [
  { title: 'Revenue Visibility', text: 'A clear stream of future development opportunities.' },
  { title: 'Asset Creation Potential', text: 'Opportunity to create long-term energy assets.' },
  { title: 'Geographic Expansion', text: 'Broader market presence.' },
  { title: 'Institutional Funding', text: 'Enhanced eligibility for project finance.' },
];

const STRATEGY = [
  'PM-KUSUM projects',
  'Open-access solar projects',
  'Captive solar projects',
  'Industrial renewable solutions',
  'Hybrid renewable projects',
  'Solar parks',
];

const PmKusumPipeline = () => (
  <SectionShell id="pm-kusum-pipeline" title="PM-KUSUM Platform & Pipeline" dark>
    <div className="grid lg:grid-cols-[1fr_360px] gap-8">
      <p className="text-emerald-100 leading-relaxed">
        PM-KUSUM is one of India&apos;s most significant renewable energy initiatives — increasing renewable capacity,
        supporting farmers, reducing transmission losses, enhancing energy security and promoting decentralised
        generation. The programme aligns closely with the group&apos;s strengths in rural renewable infrastructure and
        agricultural solar.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white text-gray-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-emerald-950" style={serif}><CountUp value="44" /></div>
          <div className="mt-1 text-[11px] uppercase tracking-wider text-amber-700 font-semibold">Projects in pipeline</div>
        </div>
        <div className="bg-amber-600 text-white rounded-xl p-5 text-center">
          <div className="text-3xl font-bold" style={serif}><CountUp value="85.85 MW" /></div>
          <div className="mt-1 text-[11px] uppercase tracking-wider font-semibold">Aggregate capacity</div>
        </div>
      </div>
    </div>

    <div className="mt-10 grid lg:grid-cols-[1fr_340px] gap-8">
      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-4" style={serif}>Strategic Importance of the Pipeline</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {IMPORTANCE.map((i) => (
            <div key={i.title} className="border border-emerald-800 rounded-xl p-5">
              <div className="font-semibold">{i.title}</div>
              <p className="mt-1 text-sm text-emerald-100">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white text-gray-800 rounded-xl p-6">
        <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-4">Long-Term Utility Solar Strategy</h3>
        <ul className="space-y-3">
          {STRATEGY.map((s) => (
            <li key={s} className="flex items-center gap-3 text-sm text-emerald-950">
              <CheckCircle2 size={18} className="text-amber-600 flex-shrink-0" strokeWidth={1.75} />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionShell>
);

export default PmKusumPipeline;
