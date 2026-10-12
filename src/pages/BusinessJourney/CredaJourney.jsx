import React from 'react';
import { Wheat, Home, Zap, Leaf, IndianRupee } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';
import CountUp from '../../components/CountUp';

const IMPACT = [
  { icon: Wheat, title: 'Agriculture', text: 'Improved irrigation access' },
  { icon: Home, title: 'Rural Dev.', text: 'Infrastructure in underserved areas' },
  { icon: Zap, title: 'Energy Access', text: 'Reliable power in remote regions' },
  { icon: Leaf, title: 'Sustainability', text: 'Reduced fossil-fuel dependence' },
  { icon: IndianRupee, title: 'Economic', text: 'Lower operating costs for farmers' },
];

const SCALE = [
  ['Scale', 'Thousands of installations across districts'],
  ['Logistics capability', 'Decentralised deployment at numerous locations'],
  ['Technical competence', 'Commissioning under diverse site conditions'],
  ['Service capability', 'Long-term support obligations'],
];

const CredaJourney = () => (
  <SectionShell id="creda-journey" title="The CREDA Journey & Solar Irrigation Transformation">
    <div className="space-y-4 text-gray-600 leading-relaxed max-w-4xl">
      <p>
        The turning point in the organisation&apos;s growth came through participation in projects implemented by the
        Chhattisgarh State Renewable Energy Development Agency (CREDA), which has played a crucial role in promoting
        renewable energy across rural and agricultural Chhattisgarh. Participation required technical competence,
        financial capability, execution discipline, service infrastructure and a long-term maintenance commitment —
        making successful execution a significant achievement in itself.
      </p>
      <h3 className="text-xl font-bold text-emerald-950 pt-2" style={serif}>Solar Irrigation Transformation</h3>
      <p>
        Agriculture remains the backbone of rural India, yet reliable irrigation has long been a challenge. Solar
        irrigation emerged as an effective solution — reducing dependence on diesel, lowering operating costs,
        providing reliable water access and enhancing agricultural productivity. RBP Energy participated actively in
        these initiatives.
      </p>
    </div>

    <div className="mt-8 grid lg:grid-cols-[320px_1fr] gap-6">
      <div className="bg-emerald-950 text-white rounded-xl p-8 text-center flex flex-col justify-center">
        <div className="text-5xl font-bold text-amber-400"><CountUp value="15,033+" /></div>
        <div className="mt-1 text-xs tracking-[0.2em] uppercase">Solar irrigation pumps</div>
        <p className="mt-4 text-sm text-emerald-100">Installed and commissioned under various CREDA programmes.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-emerald-950 mb-4" style={serif}>CREDA Execution Achievement</h3>
        <dl className="grid sm:grid-cols-2 gap-4">
          {SCALE.map(([t, d]) => (
            <div key={t} className="border border-gray-200 rounded-xl p-4">
              <dt className="text-sm font-semibold text-emerald-950">{t}</dt>
              <dd className="text-sm text-gray-500 mt-0.5">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    <div className="mt-8 grid grid-cols-2 lg:grid-cols-6 gap-4">
      {IMPACT.map(({ icon: Icon, title, text }) => (
        <div key={title} className="bg-stone-50 rounded-xl p-5 text-center">
          <Icon className="text-amber-600 mx-auto mb-2" size={24} strokeWidth={1.5} />
          <div className="text-sm font-semibold text-emerald-950">{title}</div>
          <div className="text-[11px] uppercase tracking-wide text-gray-500 mt-1">{text}</div>
        </div>
      ))}
      <div className="bg-amber-600 text-white rounded-xl p-5 text-center flex flex-col justify-center">
        <div className="text-2xl font-bold"><CountUp value="1,150+" /></div>
        <div className="text-[11px] uppercase tracking-wide">Villages benefited</div>
      </div>
    </div>
  </SectionShell>
);

export default CredaJourney;
