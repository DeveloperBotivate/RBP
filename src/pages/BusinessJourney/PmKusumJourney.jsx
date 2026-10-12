import React from 'react';
import { SectionShell, serif } from '../MyProfile/shared';
import CountUp from '../../components/CountUp';

const Stat = ({ value, label }) => (
  <div className="bg-white text-gray-800 rounded-xl p-6 text-center">
    <div className="text-2xl font-bold text-emerald-950" style={serif}><CountUp value={value} /></div>
    <div className="mt-1 text-[11px] uppercase tracking-wider text-amber-700 font-semibold">{label}</div>
  </div>
);

const PmKusumJourney = () => (
  <SectionShell id="pm-kusum-journey" title="PM-KUSUM Journey" dark>
    <p className="text-emerald-100 leading-relaxed max-w-4xl">
      The launch of PM-KUSUM represented another significant opportunity — promoting decentralised solar generation,
      enhancing farmer income, improving energy access and reducing dependence on conventional power. For RBP Energy,
      PM-KUSUM was more than an EPC opportunity: it was an entry point into utility-scale project development.
    </p>

    <div className="mt-8 grid lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-4" style={serif}>First Utility-Scale Milestone</h3>
        <div className="grid grid-cols-3 gap-3">
          <Stat value="2.6 MW" label="Capacity (DC)" />
          <Stat value="2 MW" label="Capacity (AC)" />
          <Stat value="Chhindwara" label="Madhya Pradesh" />
        </div>
        <p className="mt-4 text-sm text-emerald-100 leading-relaxed">
          This project demonstrated the organisation&apos;s ability to identify opportunities, develop projects,
          manage approvals, execute utility-scale infrastructure, and commission and operationalise renewable energy
          assets — marking an important milestone in the evolution of the business.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-4" style={serif}>Development Pipeline</h3>
        <div className="grid grid-cols-2 gap-3">
          <Stat value="44" label="PM-KUSUM projects" />
          <Stat value="85.85 MW" label="Aggregate capacity" />
        </div>
        <p className="mt-4 text-sm text-emerald-100 leading-relaxed">
          This pipeline provides visibility into future growth and establishes the group as an emerging renewable
          energy developer.
        </p>
      </div>
    </div>
  </SectionShell>
);

export default PmKusumJourney;
