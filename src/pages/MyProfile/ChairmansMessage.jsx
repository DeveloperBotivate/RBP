import React from 'react';
import { Quote } from 'lucide-react';
import { SectionShell, serif } from './shared';

const PARAGRAPHS = [
  'India is witnessing one of the most significant energy transitions in modern history. Rising demand for clean energy, rapid industrial growth, evolving power-infrastructure requirements and global sustainability commitments are together creating unprecedented opportunities for organisations capable of delivering reliable and scalable renewable energy solutions.',
  'My entrepreneurial journey began in 2005 through active involvement in our family business, where I gained practical exposure to infrastructure development, project execution, stakeholder management and business operations. Those formative years taught me lessons in discipline, commitment, execution excellence and long-term value creation that continue to guide me today.',
  "Recognising the transformative potential of renewable energy, I founded RBP Energy (India) Pvt. Ltd. in 2012 with a vision to contribute meaningfully to India's sustainable-development journey. What began as a modest initiative has evolved into a diversified renewable energy platform spanning solar EPC, government renewable programmes, solar irrigation, rural electrification, utility-scale solar development and manufacturing.",
  "Over the years our organisation has participated in some of India's most impactful renewable energy initiatives, including large-scale projects under CREDA and PM-KUSUM. Through these efforts we have helped enhance agricultural productivity, improve rural livelihoods, expand energy access and support sustainable infrastructure development.",
  'Today our journey has entered a new phase. Alongside renewable energy execution, we are developing manufacturing capabilities through Varyaa Renewable Pvt. Ltd., expanding into utility-scale solar asset development and participating in emerging energy-storage opportunities.',
];

const ChairmansMessage = () => (
  <SectionShell id="chairmans-message" eyebrow="Chairman's Message" title="A Note from the Promoter">
    <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
      <div className="space-y-4 text-gray-600 leading-relaxed">
        {PARAGRAPHS.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
      </div>
      <div className="bg-emerald-950 text-white rounded-xl p-7 lg:sticky lg:top-24">
        <Quote className="text-amber-500 mb-3" size={28} strokeWidth={1.5} />
        <p className="text-xl leading-snug" style={serif}>
          We believe that renewable energy is not merely an industry; it is a national mission.
        </p>
        <p className="mt-4 text-sm text-emerald-100 leading-relaxed">
          We are proud to contribute to that mission and remain committed to creating long-term value for our
          customers, communities, employees, lenders and stakeholders.
        </p>
        <div className="mt-6 pt-4 border-t border-emerald-800">
          <div className="text-2xl text-amber-400" style={{ fontFamily: '"Great Vibes", cursive' }}>Gaurav Jain</div>
          <div className="text-[11px] tracking-[0.2em] uppercase mt-1">Promoter &amp; Director, RBP Group</div>
        </div>
      </div>
    </div>
  </SectionShell>
);

export default ChairmansMessage;
