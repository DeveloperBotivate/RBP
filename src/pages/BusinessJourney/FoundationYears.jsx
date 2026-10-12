import React from 'react';
import {
  ClipboardList, HardHat, Wallet, Users, FileCheck2, TrendingUp,
  Target, Banknote, Handshake, Layers,
} from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';

const SKILLS = [
  { icon: ClipboardList, title: 'Project Planning', text: 'Understanding project life cycles from concept to completion.' },
  { icon: HardHat, title: 'Construction Management', text: 'Coordination of contractors, vendors and site-execution teams.' },
  { icon: Wallet, title: 'Financial Administration', text: 'Cash-flow management, project costing and budgeting.' },
  { icon: Users, title: 'Customer Relationships', text: 'Managing client expectations and long-term relationships.' },
  { icon: FileCheck2, title: 'Regulatory Compliance', text: 'Navigating approvals, documentation and statutory requirements.' },
  { icon: TrendingUp, title: 'Business Development', text: 'Identifying opportunities and building commercial relationships.' },
];

const LESSONS = [
  { icon: Target, title: 'Execution creates reputation', text: 'Projects are remembered not for promises but for successful delivery.' },
  { icon: Banknote, title: 'Cash flow is critical', text: 'Sustainable growth requires strong financial discipline.' },
  { icon: Handshake, title: 'Relationships matter', text: 'Long-term success depends upon trust and credibility.' },
  { icon: Layers, title: 'Scale requires systems', text: 'Growth must be supported by processes and organisational capability.' },
];

const FoundationYears = () => (
  <SectionShell id="foundation-years" eyebrow="2005 – 2011" title="Foundation Years — Bhilai Builders Pvt. Ltd.">
    <p className="text-gray-600 leading-relaxed max-w-4xl">
      Mr. Jain&apos;s professional journey began in 2005 through active participation in Bhilai Builders Pvt. Ltd., a
      family enterprise engaged in infrastructure and real-estate development. India was then experiencing rapid
      urbanisation, and the sector offered rich, practical exposure to project execution and business management.
      Unlike formal classroom education, these years delivered hands-on entrepreneurial training.
    </p>

    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {SKILLS.map(({ icon: Icon, title, text }) => (
        <div key={title} className="border border-gray-200 rounded-xl p-6 hover:border-amber-600 transition-colors">
          <div className="w-11 h-11 rounded-full border border-amber-600 flex items-center justify-center mb-4">
            <Icon size={20} className="text-amber-600" strokeWidth={1.5} />
          </div>
          <div className="font-bold text-emerald-950" style={serif}>{title}</div>
          <p className="mt-1 text-sm text-gray-500 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 bg-emerald-950 text-white rounded-xl p-8">
      <h3 className="text-xl font-bold" style={serif}>Lessons That Shaped a Culture</h3>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {LESSONS.map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <Icon className="text-amber-500 mb-2" size={24} strokeWidth={1.5} />
            <div className="font-semibold">{title}</div>
            <p className="mt-1 text-sm text-emerald-100 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 pt-4 border-t border-emerald-800 text-sm text-amber-400">
        These principles later became central to the culture of RBP Energy.
      </p>
    </div>
  </SectionShell>
);

export default FoundationYears;
