import React from 'react';
import { GraduationCap, Briefcase, Sun } from 'lucide-react';
import { SectionShell, serif } from './shared';

const QUALIFICATIONS = [
  {
    icon: GraduationCap,
    title: 'Bachelor of Technology — Electronics & Telecommunication',
    org: 'Pt. Ravishankar Shukla University, Raipur',
    text: 'The programme provided a strong grounding in electrical systems, electronics, power systems, instrumentation, communication technologies and engineering project management — a technical foundation that has played a significant role in the successful development of renewable energy projects.',
  },
  {
    icon: Briefcase,
    title: 'Family Managed Business Programme',
    org: 'S.P. Jain Institute of Management & Research (SPJIMR), Mumbai',
    text: 'Exposure to corporate governance, strategic planning, family-business management, financial decision-making, organisational leadership and growth management. His contribution towards organising the Family Managed Business Seminar at Raipur was formally recognised by the institute.',
  },
  {
    icon: Sun,
    title: 'Solar Professional Programme',
    org: 'Gujarat Energy Research & Management Institute (GERMI)',
    text: 'Completed the Solar Power Professional Workshop covering solar PV system design, installation methodologies, testing and commissioning, grid-connected solar systems, O&M practices and renewable energy technologies.',
  },
];

const Qualifications = () => (
  <SectionShell id="qualifications" eyebrow="Qualifications" title="Educational & Professional Qualifications" dark>
    <div className="grid lg:grid-cols-3 gap-6">
      {QUALIFICATIONS.map(({ icon: Icon, title, org, text }) => (
        <div key={title} className="bg-white text-gray-800 rounded-xl p-7 shadow-sm">
          <Icon className="text-amber-600 mb-4" size={28} strokeWidth={1.5} />
          <h3 className="text-lg font-bold text-emerald-950 leading-snug" style={serif}>{title}</h3>
          <p className="mt-1 text-xs font-semibold tracking-wider uppercase text-amber-700">{org}</p>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default Qualifications;
