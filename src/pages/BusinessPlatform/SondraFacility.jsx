import React from 'react';
import { MapPin, Truck, Maximize2, Wrench, CheckCircle2 } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';
import CountUp from '../../components/CountUp';

const COMPONENTS = [
  'Fabrication workshops',
  'GI shed area',
  'Raw-material yard',
  'Finished-goods storage',
  'Utility infrastructure',
  'Administrative block',
  'Laboratory',
  'Warehouse',
  'Weighbridge',
  'Future expansion area',
];

const ADVANTAGES = [
  { icon: MapPin, title: 'Central Location', text: 'Access to key renewable energy markets.' },
  { icon: Truck, title: 'Logistics Efficiency', text: 'Smooth movement of raw materials and finished goods.' },
  { icon: Maximize2, title: 'Expansion Potential', text: 'Room for future capacity enhancement.' },
  { icon: Wrench, title: 'Project Support', text: 'Directly supports renewable energy execution activities.' },
];

const SondraFacility = () => (
  <SectionShell id="sondra-facility" title="Sondra Industrial Facility" dark>
    <div className="grid lg:grid-cols-[1fr_340px] gap-8">
      <p className="text-emerald-100 leading-relaxed">
        The Sondra facility represents one of the most important strategic assets within the group. Located near Raipur
        and transitioning from leased to owned premises, it has been designed to support large-scale industrial
        manufacturing and future expansion.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white text-gray-800 rounded-xl p-5 text-center">
          <div className="text-2xl font-bold text-emerald-950" style={serif}><CountUp value="22,395 m²" /></div>
          <div className="mt-1 text-[11px] uppercase tracking-wider text-amber-700 font-semibold">Total area</div>
        </div>
        <div className="bg-white text-gray-800 rounded-xl p-5 text-center">
          <div className="text-2xl font-bold text-emerald-950" style={serif}><CountUp value="5.53 acres" /></div>
          <div className="mt-1 text-[11px] uppercase tracking-wider text-amber-700 font-semibold">Approximate area</div>
        </div>
      </div>
    </div>

    <div className="mt-10 grid lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-4" style={serif}>Facility Components</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {COMPONENTS.map((c) => (
            <li key={c} className="flex items-center gap-3 text-sm">
              <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0" strokeWidth={1.75} />
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-4" style={serif}>Strategic Advantages</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {ADVANTAGES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border border-emerald-800 rounded-xl p-4">
              <Icon className="text-amber-500 mb-2" size={20} strokeWidth={1.5} />
              <div className="text-sm font-semibold">{title}</div>
              <p className="mt-1 text-xs text-emerald-100 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionShell>
);

export default SondraFacility;
