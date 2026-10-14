import React from 'react';
import { Link2, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';
import CountUp from '../../components/CountUp';

const OBJECTIVES = [
  { icon: Link2, title: 'Backward integration', text: 'Reducing dependence on external suppliers.' },
  { icon: ShieldCheck, title: 'Quality control', text: 'Maintaining standards internally.' },
  { icon: TrendingUp, title: 'Margin enhancement', text: 'Capturing additional value within the supply chain.' },
];

const ACTIVITIES = [
  'MS fabrication',
  'Solar mounting structures',
  'Industrial fabrication',
  'Renewable energy components',
  'Structural manufacturing',
];

const VaryaaRenewable = () => (
  <SectionShell id="varyaa-renewable" title="Strategic Diversification & Varyaa Renewable Pvt. Ltd.">
    <p className="text-gray-600 leading-relaxed max-w-4xl">
      Many EPC companies remain dependent on project-execution revenue and face cyclical demand, margin pressure,
      working-capital intensity and competitive bidding. Recognising these limitations, the group adopted a strategy of
      diversification to create multiple revenue streams — a strategy that ultimately led to the establishment of
      Varyaa Renewable Pvt. Ltd.
    </p>

    <h3 className="mt-10 text-xl font-bold text-emerald-950" style={serif}>Varyaa Renewable Pvt. Ltd.</h3>
    <p className="mt-2 text-gray-600 leading-relaxed max-w-4xl">
      Varyaa Renewable was established as the manufacturing arm of the group, conceived around three objectives.
    </p>
    <div className="mt-6 grid md:grid-cols-3 gap-5">
      {OBJECTIVES.map(({ icon: Icon, title, text }) => (
        <div key={title} className="border border-gray-200 rounded-xl p-6 hover:border-amber-600 transition-colors">
          <Icon className="text-amber-600 mb-3" size={24} strokeWidth={1.5} />
          <div className="font-bold text-emerald-950" style={serif}>{title}</div>
          <p className="mt-1 text-sm text-gray-500">{text}</p>
        </div>
      ))}
    </div>

    <div className="mt-8 grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="bg-stone-50 rounded-xl p-6">
        <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-4">Current Activities</h4>
        <ul className="grid sm:grid-cols-2 gap-3">
          {ACTIVITIES.map((a) => (
            <li key={a} className="flex items-center gap-3 text-sm text-emerald-950">
              <CheckCircle2 size={18} className="text-amber-600 flex-shrink-0" strokeWidth={1.75} />
              {a}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-emerald-950 text-white rounded-xl p-6 text-center flex flex-col justify-center">
        <div className="text-4xl font-bold text-amber-400"><CountUp value="2,000 MT" /></div>
        <div className="mt-1 text-xs tracking-[0.2em] uppercase">Monthly Proposed Capacity</div>
      </div>
    </div>
    <p className="mt-4 text-sm text-gray-600">
      This demonstrates that manufacturing is already an established business vertical rather than a future proposal.
    </p>
  </SectionShell>
);

export default VaryaaRenewable;
