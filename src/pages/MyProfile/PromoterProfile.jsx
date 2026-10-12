import React from 'react';
import { CheckCircle2, Target, BookOpen, Scale, Flag } from 'lucide-react';
import { SectionShell, serif } from './shared';

const PHILOSOPHY = [
  'Long-term value creation',
  'Sustainable growth',
  'Technical excellence',
  'Operational discipline',
  'Strategic diversification',
  'Responsible entrepreneurship',
];

const PRINCIPLES = [
  { icon: Target, title: 'Execution Excellence', text: 'Projects must be completed to the highest standards of quality, safety and performance.' },
  { icon: BookOpen, title: 'Continuous Learning', text: 'Technology, policy and markets evolve continuously — and organisations must evolve with them.' },
  { icon: Scale, title: 'Sustainable Growth', text: 'Growth must be balanced with financial discipline and operational stability.' },
  { icon: Flag, title: 'Nation Building', text: 'Infrastructure development and renewable energy deployment contribute directly to national development.' },
];

const PromoterProfile = () => (
  <SectionShell
    id="promoter-profile"
    title="Personal Overview & Leadership Philosophy"
    intro="The individual behind the platform — background, philosophy and the principles that guide how the group is run."
  >
    <div className="grid lg:grid-cols-[1fr_360px] gap-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-emerald-950 mb-2" style={serif}>Personal Overview</h3>
          <p className="text-gray-600 leading-relaxed">
            Mr. Gaurav Jain belongs to a business family with a longstanding association with infrastructure and
            development. His entrepreneurial journey reflects a progressive evolution from traditional infrastructure
            into advanced renewable energy and energy-storage businesses. Throughout his career he has demonstrated the
            ability to identify emerging opportunities, build execution capabilities and create scalable business
            platforms.
          </p>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Unlike many entrepreneurs who remain focused on a single vertical, Mr. Jain has consciously pursued
          capability-building across multiple segments of the renewable energy value chain — creating a diversified
          platform spanning EPC, manufacturing, project development and energy storage.
        </p>
      </div>

      <div className="bg-stone-50 rounded-xl p-6">
        <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-amber-700 mb-4">
          Guiding Business Philosophy
        </h3>
        <ul className="space-y-3">
          {PHILOSOPHY.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm text-emerald-950">
              <CheckCircle2 size={18} className="text-amber-600 flex-shrink-0" strokeWidth={1.75} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-12">
      <h3 className="text-xl font-bold text-emerald-950 mb-2" style={serif}>Leadership Philosophy</h3>
      <p className="text-gray-600 max-w-3xl leading-relaxed">
        Mr. Jain believes that long-term success in infrastructure depends on execution capability rather than
        opportunity identification alone. His management approach rests on four core principles.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PRINCIPLES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="border border-gray-200 rounded-xl p-6 hover:border-amber-600 transition-colors">
            <div className="w-11 h-11 rounded-full border border-amber-600 flex items-center justify-center mb-4">
              <Icon size={20} className="text-amber-600" strokeWidth={1.5} />
            </div>
            <div className="font-bold text-emerald-950" style={serif}>{title}</div>
            <p className="mt-1 text-sm text-gray-500 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
);

export default PromoterProfile;
