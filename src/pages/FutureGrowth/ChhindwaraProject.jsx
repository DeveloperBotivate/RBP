import React from 'react';
import { SectionShell } from '../MyProfile/shared';

const DETAILS = [
  ['Capacity', '2.6 MW DC / 2 MW AC'],
  ['Location', 'Chhindwara, Madhya Pradesh'],
  ['Scheme', 'PM-KUSUM Component-A'],
  ['Beneficiary', 'Mr. Prathmesh Talewar'],
  ['Status', 'Successfully Commissioned'],
];

const ChhindwaraProject = () => (
  <SectionShell id="chhindwara-project" title="Chhindwara Project — First Utility Milestone">
    <div className="grid lg:grid-cols-[420px_1fr] gap-8 items-start">
      <div className="border border-gray-200 rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-emerald-950 text-white text-left text-[11px] uppercase tracking-wider">
              <th className="px-5 py-3 font-semibold">Parameter</th>
              <th className="px-5 py-3 font-semibold">Detail</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {DETAILS.map(([k, v]) => (
              <tr key={k}>
                <td className="px-5 py-3.5 font-semibold text-amber-700">{k}</td>
                <td className="px-5 py-3.5 text-emerald-950">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-600 leading-relaxed">
        The significance of this project extends beyond installed capacity. It demonstrates the group&apos;s ability to
        evaluate project viability, coordinate land, approvals and technical planning, manage large-scale
        implementation, deliver fully operational generation facilities and coordinate with utilities, authorities and
        beneficiaries — serving as a foundation for future utility-scale development.
      </p>
    </div>
  </SectionShell>
);

export default ChhindwaraProject;
