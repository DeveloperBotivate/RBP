import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';
import CountUp from '../../components/CountUp';

const APPLICATIONS = [
  { title: 'Solar Mounting Structures', text: 'For utility-scale solar projects.' },
  { title: 'Ground-Mounted Structures', text: 'For PM-KUSUM and large solar installations.' },
  { title: 'Industrial Structures', text: 'For infrastructure and industrial projects.' },
  { title: 'Customised Fabrication', text: 'For specialised renewable energy applications.' },
];

const BENEFITS = [
  { title: 'Supply-Chain Control', text: 'Reduced dependence on third-party suppliers.' },
  { title: 'Improved Profitability', text: 'Additional value captured within the manufacturing chain.' },
  { title: 'Faster Execution', text: 'Reduced procurement lead times.' },
  { title: 'Quality Assurance', text: 'Greater control over production standards.' },
  { title: 'Market Expansion', text: 'Ability to serve external customers and infrastructure projects.' },
];

const MODEL = [
  'Renewable Energy EPC',
  'Manufacturing',
  'Utility Solar Development',
  'Energy Storage Infrastructure',
  'Future Independent Power Production',
];

const GiExpansion = () => (
  <SectionShell id="gi-expansion" title="GI Manufacturing Expansion">
    <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-center">
      <p className="text-gray-600 leading-relaxed">
        The group&apos;s next major initiative is expansion into GI (galvanised-iron) manufacturing — a strategic move
        towards becoming a fully integrated renewable energy manufacturing platform.
      </p>
      <div className="bg-emerald-950 text-white rounded-xl p-6 text-center">
        <div className="text-4xl font-bold text-amber-400"><CountUp value="2,000 MT" /></div>
        <div className="mt-1 text-xs tracking-[0.2em] uppercase">Proposed capacity per month</div>
      </div>
    </div>

    <h3 className="mt-10 mb-4 text-xl font-bold text-emerald-950" style={serif}>Expected Product Applications</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {APPLICATIONS.map((a) => (
        <div key={a.title} className="border border-gray-200 rounded-xl p-5 hover:border-amber-600 transition-colors">
          <div className="font-bold text-emerald-950" style={serif}>{a.title}</div>
          <p className="mt-1 text-sm text-gray-500">{a.text}</p>
        </div>
      ))}
    </div>

    <div className="mt-10 grid lg:grid-cols-[1fr_320px] gap-8">
      <div>
        <h3 className="mb-4 text-xl font-bold text-emerald-950" style={serif}>Strategic Benefits</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="bg-stone-50 rounded-xl p-4">
              <div className="text-sm font-semibold text-emerald-950">{b.title}</div>
              <p className="mt-1 text-xs text-gray-500">{b.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-950 text-white rounded-xl p-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4" style={serif}>Group Business Model</h3>
        <ol className="flex flex-col items-center gap-1 text-center text-sm">
          {MODEL.map((m, i) => (
            <li key={m} className="flex flex-col items-center gap-1 w-full">
              <span className="w-full border border-emerald-700 rounded-lg py-2 px-3">{m}</span>
              {i < MODEL.length - 1 && <ChevronDown size={16} className="text-amber-500" />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  </SectionShell>
);

export default GiExpansion;
