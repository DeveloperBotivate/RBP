import React from 'react';
import { SectionShell, serif } from '../MyProfile/shared';

const PILLARS = [
  {
    title: 'Renewable Energy EPC Leadership',
    text: 'Strengthen execution while expanding into larger, more sophisticated utility, captive and industrial solar projects.',
  },
  {
    title: 'Manufacturing Excellence',
    text: 'Develop Varyaa Renewable into a significant platform; commission GI manufacturing and grow manufacturing revenues.',
  },
  {
    title: 'Utility Solar Asset Portfolio',
    text: 'Build a meaningful portfolio across PM-KUSUM, open access, captive power and utility solar parks.',
  },
  {
    title: 'Energy Storage Infrastructure',
    text: 'Establish presence in BESS, hybrid renewable projects and grid infrastructure.',
  },
  {
    title: 'Independent Power Producer Platform',
    text: 'Create long-term renewable assets generating recurring revenue — enhancing enterprise value, stability and investor appeal.',
  },
];

const Vision2035 = () => (
  <SectionShell id="vision-2035" title="Vision 2035" dark>
    <p className="text-emerald-100 leading-relaxed max-w-4xl">
      The long-term vision extends beyond individual projects or segments: to create an integrated renewable energy
      infrastructure platform participating across the entire value chain. Five strategic pillars anchor that vision.
    </p>
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {PILLARS.map((p, i) => (
        <div key={p.title} className="bg-white text-gray-800 rounded-xl p-5">
          <div className="text-xs font-bold tracking-[0.15em] uppercase text-amber-700">Pillar {i + 1}</div>
          <div className="mt-2 font-bold text-emerald-950 leading-snug" style={serif}>{p.title}</div>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">{p.text}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default Vision2035;
