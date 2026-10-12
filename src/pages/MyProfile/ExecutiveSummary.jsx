import React from 'react';
import { SectionShell } from './shared';
import CountUp from '../../components/CountUp';

const GLANCE = [
  { value: '121+ MW', label: 'Solar Capacity Executed' },
  { value: '15,033+', label: 'CREDA Solar Pumps' },
  { value: '30,000+', label: 'Total Pumps Deployed' },
  { value: '1,150+', label: 'Villages Benefited' },
  { value: '₹240+ Cr', label: 'Combined Annual Business' },
  { value: '85.85 MW', label: 'PM-KUSUM Pipeline' },
];

const PARAGRAPHS = [
  "Mr. Gaurav Jain is a renewable energy entrepreneur with more than twenty years of entrepreneurial experience and over thirteen years of specialised expertise in renewable energy infrastructure.",
  'Beginning his career in the infrastructure and real-estate sector through Bhilai Builders Pvt. Ltd. in 2005, Mr. Jain built a strong foundation in project management, construction execution, financial administration and stakeholder management — the platform on which he later built a successful renewable energy enterprise.',
  "In 2012 he established RBP Energy (India) Pvt. Ltd. Under his leadership the company has grown into one of Central India's recognised renewable energy execution platforms, with expertise across solar EPC, solar irrigation systems, rural electrification, water infrastructure and utility-scale solar development.",
  'The organisation has executed more than 121 MW of solar projects and deployed over 15,033 solar irrigation pumps under CREDA programmes, alongside an additional 12,000+ solar irrigation pumps under PM-KUSUM Component-B across multiple states. Through these activities the company has helped serve more than 1,100 villages and install over 12,000 solar home-lighting systems.',
  'RBP Energy has demonstrated strong financial performance, with turnover of ₹131.90 crore in FY 2022-23, ₹168.93 crore in FY 2023-24 and ₹167.76 crore in FY 2024-25. Recognising the strategic importance of manufacturing integration, Mr. Jain expanded into industrial manufacturing through Varyaa Renewable Pvt. Ltd., which achieved turnover of approximately ₹76 crore in FY 2024-25 and is developing a GI-structure manufacturing facility with a proposed capacity of 2,000 MT per month.',
  'The group has further expanded into utility-scale development through PM-KUSUM Component-A, commissioning a 2.6 MW DC / 2 MW AC solar power project at Chhindwara, Madhya Pradesh, and currently holds a development pipeline of 44 PM-KUSUM projects aggregating approximately 85.85 MW. As part of its future-growth strategy, the group has entered the Battery Energy Storage System (BESS) segment through a 15 MW / 30 MWh project awarded under a CSPDCL tender via group entities Om Renewable and Hamar Energy.',
  'Mr. Jain’s education includes a Bachelor of Technology in Electronics & Telecommunication Engineering, participation in the Family Managed Business Programme at SPJIMR, Mumbai, and specialised solar training at GERMI. Today the promoter group is positioned as an integrated renewable energy platform encompassing project development, EPC execution, manufacturing, utility-scale solar development and energy-storage infrastructure.',
];

const ExecutiveSummary = () => (
  <>
    <SectionShell id="executive-summary" eyebrow="Executive Summary" title="Executive Summary">
      <div className="space-y-4 text-gray-600 leading-relaxed max-w-4xl">
        {PARAGRAPHS.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
      </div>
    </SectionShell>

    <section className="bg-emerald-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500 mb-6 text-center">
          Platform at a Glance
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {GLANCE.map((g) => (
            <div key={g.label} className="text-center border border-emerald-800 rounded-xl py-6 px-3">
              <div className="text-2xl font-bold text-amber-400"><CountUp value={g.value} /></div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-emerald-100">{g.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ExecutiveSummary;
