import React from 'react';
import { CheckCircle2, Sun, Wheat, Home } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';

const SPECIALISES = [
  'Utility-scale solar projects',
  'Ground-mounted solar plants',
  'Solar irrigation systems',
  'Solar water-supply systems',
  'Rooftop solar projects',
  'Rural electrification',
  'Operations & maintenance services',
  'Renewable infrastructure development',
];

const SEGMENTS = [
  {
    icon: Sun,
    title: 'Solar EPC',
    text: 'End-to-end engineering, procurement, construction, commissioning and O&M for solar systems.',
  },
  {
    icon: Wheat,
    title: 'Agricultural Solar Solutions',
    text: 'Solar irrigation pumps, agricultural solar, PM-KUSUM projects and rural solar infrastructure executed at decentralised scale.',
  },
  {
    icon: Home,
    title: 'Rural Renewable Infrastructure',
    text: 'Solar home-lighting systems, water-supply systems, village electrification and rural energy-access initiatives.',
  },
];

const RbpEnergyOverview = () => (
  <SectionShell id="rbp-energy-overview" title="RBP Energy — Business Overview" dark>
    <div className="grid lg:grid-cols-[1fr_380px] gap-8">
      <p className="text-emerald-100 leading-relaxed">
        Established in 2012, RBP Energy (India) Pvt. Ltd. has grown into one of Central India&apos;s recognised
        renewable energy companies, with capabilities across project development, engineering, procurement,
        construction, commissioning and long-term maintenance. The organisation specialises in the areas listed here.
      </p>
      <ul className="bg-white text-gray-800 rounded-xl p-6 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {SPECIALISES.map((s) => (
          <li key={s} className="flex items-center gap-3 text-sm">
            <CheckCircle2 size={18} className="text-amber-600 flex-shrink-0" strokeWidth={1.75} />
            {s}
          </li>
        ))}
      </ul>
    </div>

    <h3 className="mt-12 mb-5 text-xl font-bold text-amber-400" style={serif}>Core Business Segments</h3>
    <div className="grid md:grid-cols-3 gap-5">
      {SEGMENTS.map(({ icon: Icon, title, text }) => (
        <div key={title} className="border border-emerald-800 rounded-xl p-6">
          <Icon className="text-amber-500 mb-3" size={26} strokeWidth={1.5} />
          <div className="font-bold" style={serif}>{title}</div>
          <p className="mt-1 text-sm text-emerald-100 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default RbpEnergyOverview;
