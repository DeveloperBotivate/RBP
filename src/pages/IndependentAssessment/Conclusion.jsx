import React from 'react';
import { SectionShell, serif } from '../MyProfile/shared';

const Conclusion = () => (
  <SectionShell id="conclusion" title="Conclusion" dark>
    <div className="space-y-4 text-emerald-100 leading-relaxed max-w-4xl">
      <p>
        The story of Mr. Gaurav Jain and the RBP Group is one of entrepreneurial evolution, strategic foresight and
        disciplined execution. From its origins in infrastructure and real estate, the journey has progressed through
        renewable energy EPC, government renewable programmes, manufacturing, utility solar development and energy
        storage.
      </p>
      <p>
        The group today possesses strong execution credentials, demonstrated financial capability, manufacturing
        infrastructure, utility solar development expertise, energy-storage participation and a clear long-term growth
        strategy. With more than 151 MW of installed solar capacity, over 15,033 CREDA solar pumps, over 12,000 PM-KUSUM
        Component-B pumps, an industrial manufacturing platform, an 85.85 MW PM-KUSUM development pipeline and
        participation in a 15 MW / 30 MWh BESS project, the group has established a solid foundation for future
        expansion that aligns closely with India&apos;s long-term energy-transition objectives.
      </p>
    </div>

    <div className="mt-10 bg-white text-gray-800 rounded-xl p-8 border-l-4 border-amber-600">
      <div className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">Final Positioning Statement</div>
      <p className="mt-3 text-lg leading-relaxed text-emerald-950" style={serif}>
        Mr. Gaurav Jain is a Renewable Energy Infrastructure Developer, Manufacturer and Energy Storage Entrepreneur
        with more than two decades of entrepreneurial experience and over fifteen years of specialised renewable energy
        expertise. Under his leadership, the RBP Group has evolved into a diversified platform spanning renewable energy
        EPC, government renewable programmes, manufacturing, utility-scale solar development and battery energy
        storage. With a demonstrated execution record of more than 151 MW, extensive CREDA credentials, a diversified
        renewable energy platform, an 85.85 MW development pipeline and entry into BESS infrastructure, the group is
        strategically positioned to participate in the next phase of India&apos;s renewable energy and energy-storage
        growth story.
      </p>
    </div>
  </SectionShell>
);

export default Conclusion;
