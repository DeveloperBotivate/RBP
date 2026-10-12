import React from 'react';
import { Scaling, Anchor, BarChart3, Landmark } from 'lucide-react';
import { SectionShell, serif } from '../MyProfile/shared';
import CountUp from '../../components/CountUp';

const REVENUE = [
  ['FY 2022-23', '₹ 131.90 Crore'],
  ['FY 2023-24', '₹ 168.93 Crore'],
  ['FY 2024-25', '₹ 167.76 Crore'],
];

const ANALYSIS = [
  { icon: Scaling, title: 'Scalability', text: 'Project volumes have expanded without compromising execution capability.' },
  { icon: Anchor, title: 'Stability', text: 'Sustained revenue indicates business continuity and market acceptance.' },
  { icon: BarChart3, title: 'Market Position', text: 'Turnover at these levels reflects a strong presence within the sector.' },
  { icon: Landmark, title: 'Banking Confidence', text: 'Consistent execution and turnover strengthen lender confidence in implementation capability.' },
];

const FinancialPerformance = () => (
  <SectionShell
    id="financial-performance"
    title="Financial Performance"
    intro="The financial performance of RBP Energy reflects its ability to execute projects at scale while maintaining sustainable growth."
    dark
  >
    <div className="grid lg:grid-cols-[400px_1fr] gap-8">
      <div className="bg-white text-gray-800 rounded-xl overflow-x-auto self-start">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-stone-50 text-left text-[11px] uppercase tracking-wider text-amber-700">
              <th className="px-5 py-3 font-semibold">Financial Year</th>
              <th className="px-5 py-3 font-semibold text-right">Revenue</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {REVENUE.map(([fy, rev]) => (
              <tr key={fy}>
                <td className="px-5 py-4 font-medium text-emerald-950">{fy}</td>
                <td className="px-5 py-4 text-right font-bold text-emerald-950"><CountUp value={rev} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-4" style={serif}>Analysis of Growth</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {ANALYSIS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border border-emerald-800 rounded-xl p-5">
              <Icon className="text-amber-500 mb-2" size={22} strokeWidth={1.5} />
              <div className="font-semibold">{title}</div>
              <p className="mt-1 text-sm text-emerald-100 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionShell>
);

export default FinancialPerformance;
