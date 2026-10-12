import React from 'react';
import { SectionShell } from '../MyProfile/shared';

const FOCUS = ['Team building', 'Capability development', 'Market understanding', 'Technology adoption', 'Process creation'];
const COMPETENCE = ['Solar EPC', 'Rooftop solar', 'Distributed renewable energy', 'Government renewable programmes'];
const SUPPORT = ['Vendor networks', 'Project-management capability', 'Quality systems', 'Service infrastructure'];

const Chips = ({ items }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((i) => (
      <li key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-stone-50 border border-amber-600/40 text-emerald-950">{i}</li>
    ))}
  </ul>
);

const EarlyYears = () => (
  <SectionShell id="early-years" eyebrow="2012 – 2015" title="Formation & Early Years of RBP Energy">
    <p className="text-gray-600 leading-relaxed max-w-4xl">
      In 2012, RBP Energy (India) Pvt. Ltd. was established with a clear mission: to contribute meaningfully to
      India&apos;s renewable energy transition through quality execution, technical excellence and long-term customer
      value.
    </p>
    <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
      The initial years focused on the areas below. Rather than chasing short-term opportunities, the company
      concentrated on building genuine technical competence.
    </p>
    <div className="mt-6 grid lg:grid-cols-3 gap-8">
      <div><h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3">Early focus</h3><Chips items={FOCUS} /></div>
      <div><h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3">Technical competence</h3><Chips items={COMPETENCE} /></div>
      <div><h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-700 mb-3">Supported by</h3><Chips items={SUPPORT} /></div>
    </div>
    <blockquote className="mt-8 border-l-4 border-amber-600 pl-5 text-lg text-emerald-950 italic">
      Build trust through performance. This principle continues to define the organisation today.
    </blockquote>
  </SectionShell>
);

export default EarlyYears;
