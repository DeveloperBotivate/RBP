import React from 'react';
import { Building, Cpu, LineChart, Flag } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';

const FACTORS = [
  { icon: Building, title: 'Infrastructure Scale', text: 'Renewable energy would require large-scale infrastructure creation.' },
  { icon: Cpu, title: 'Technology Orientation', text: 'Engineering and technical capabilities would be critical.' },
  { icon: LineChart, title: 'Long-Term Growth Potential', text: 'The market would continue expanding for decades.' },
  { icon: Flag, title: 'National Importance', text: "Renewable energy would become central to India's development agenda." },
];

const RenewableOpportunity = () => (
  <SectionShell id="renewable-opportunity" title="The Renewable Energy Opportunity" dark>
    <p className="text-emerald-100 leading-relaxed max-w-4xl">
      By 2010–11, India had begun placing increased emphasis on renewable energy deployment. Several trends became
      visible: rising electricity demand, increasing energy costs, growing government support, rapid improvements in
      solar technology and rising environmental awareness. Mr. Jain recognised that renewable energy represented not
      merely a business opportunity but a structural transformation of India&apos;s energy sector.
    </p>
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {FACTORS.map(({ icon: Icon, title, text }) => (
        <div key={title} className="bg-white text-gray-800 rounded-xl p-6">
          <Icon className="text-amber-600 mb-3" size={26} strokeWidth={1.5} />
          <div className="font-bold text-emerald-950" style={serif}>{title}</div>
          <p className="mt-1 text-sm text-gray-500 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
    <p className="mt-6 text-amber-400 text-sm">These factors led to the decision to establish a dedicated renewable energy business.</p>
  </SectionShell>
);

export default RenewableOpportunity;
