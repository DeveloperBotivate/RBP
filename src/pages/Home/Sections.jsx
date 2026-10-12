import React from 'react';
import { Sun, Factory, Zap, BatteryCharging, ShieldCheck, Quote } from 'lucide-react';
import CountUp from '../../components/CountUp';
import Reveal, { useInView } from '../../components/Reveal';
import annexure3 from '../../Assets/3.jpg';
import annexure4 from '../../Assets/4.jpg';
import annexure5 from '../../Assets/5.jpg';

export const serif = { fontFamily: '"Playfair Display", Georgia, serif' };

// Shared section frame: one small label, one big headline, nothing else.
const Frame = ({ id, label, title, dark = false, children }) => (
  <section id={id} className={`scroll-mt-16 py-16 sm:py-20 ${dark ? 'bg-emerald-950 text-white' : 'bg-white'}`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center lg:text-left">
      <Reveal>
        <p className={`text-xs font-semibold tracking-[0.25em] uppercase ${dark ? 'text-amber-500' : 'text-amber-700'}`}>{label}</p>
        <h2 className={`mt-3 text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto lg:mx-0 ${dark ? 'text-white' : 'text-emerald-950'}`} style={serif}>
          {title}
        </h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

/* ---------- My Profile ---------- */
const PRINCIPLES = ['Execution Excellence', 'Continuous Learning', 'Sustainable Growth', 'Nation Building'];
const CREDENTIALS = ['B.Tech — Electronics & Telecom', 'SPJIMR Family Managed Business', 'GERMI Solar Professional'];

export const Profile = () => (
  <Frame id="about" label="My Profile" title="Two decades of building. One national mission.">
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
      <Reveal>
        <div className="bg-emerald-950 text-white rounded-2xl p-8 sm:p-10 relative">
          <Quote className="text-amber-500 mb-4 mx-auto lg:mx-0" size={32} strokeWidth={1.5} />
          <p className="text-2xl sm:text-3xl leading-snug" style={serif}>
            Renewable energy is not merely an industry; it is a national mission.
          </p>
          <p className="mt-6 text-sm text-emerald-100">— Gaurav Jain, Promoter &amp; Director</p>
        </div>
      </Reveal>
      <Reveal delay={150}>
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">How he leads</h3>
        <ul className="mt-3 flex flex-wrap justify-center lg:justify-start gap-2">
          {PRINCIPLES.map((p) => (
            <li key={p} className="text-sm font-semibold px-4 py-2 rounded-full border border-amber-600/50 text-emerald-950">{p}</li>
          ))}
        </ul>
        <h3 className="mt-8 text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">Credentials</h3>
        <ul className="mt-3 space-y-2">
          {CREDENTIALS.map((c) => (
            <li key={c} className="flex items-center justify-center lg:justify-start gap-3 text-sm text-emerald-950">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />{c}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </Frame>
);

/* ---------- Business Journey ---------- */
const JOURNEY = [
  ['2005', 'Infrastructure & real estate'],
  ['2012', 'RBP Energy founded'],
  ['2015–20', 'CREDA solar programmes'],
  ['2021', 'Manufacturing begins'],
  ['2025', 'First utility-scale plant'],
  ['2026', 'Energy storage (BESS)'],
];

export const Journey = () => (
  <Frame id="business-journey" label="Business Journey" title="From infrastructure to energy leadership." dark>
    <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 relative">
      <span className="hidden lg:block absolute top-[7px] left-0 right-0 h-px bg-amber-600/40" />
      {JOURNEY.map(([year, text], i) => (
        <Reveal key={year} delay={i * 90}>
          <li className="relative">
            <span className="block mx-auto lg:mx-0 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-emerald-950 relative" />
            <div className="mt-4 text-2xl font-bold text-amber-400" style={serif}>{year}</div>
            <p className="mt-1 text-sm text-emerald-100 leading-snug">{text}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  </Frame>
);

/* ---------- Business Platform ---------- */
const PILLARS = [
  { icon: Sun, name: 'Solar EPC', value: '121+ MW', note: 'installed' },
  { icon: Factory, name: 'Manufacturing', value: '₹ 76 Cr', note: 'FY25 turnover' },
  { icon: Zap, name: 'Utility Solar', value: '85.85 MW', note: 'pipeline' },
  { icon: BatteryCharging, name: 'Energy Storage', value: '15 MW', note: '30 MWh BESS' },
];

const REVENUE = [
  { fy: 'FY23', cr: 131.9 },
  { fy: 'FY24', cr: 168.93 },
  { fy: 'FY25', cr: 167.76 },
];

const RevenueChart = () => {
  const [ref, seen] = useInView(0.3);
  const max = 200;
  return (
    <div ref={ref} className="bg-stone-50 rounded-2xl p-6 sm:p-8">
      <div className="flex items-baseline justify-between">
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">RBP Energy revenue</h3>
        <span className="text-xs text-gray-500">₹ crore</span>
      </div>
      <div className="mt-6 flex items-end gap-5 h-44" role="img" aria-label="Revenue FY23 131.90, FY24 168.93, FY25 167.76 crore rupees">
        {REVENUE.map((r, i) => (
          <div key={r.fy} className="flex-1 flex flex-col items-center justify-end h-full">
            <span className="text-sm font-bold text-emerald-950 mb-2">{r.cr}</span>
            <div
              className="w-full rounded-t-lg bg-gradient-to-t from-emerald-950 to-emerald-700 transition-all duration-1000 ease-out"
              style={{ height: seen ? `${(r.cr / max) * 100}%` : '0%', transitionDelay: `${i * 150}ms` }}
            />
            <span className="mt-2 text-xs font-semibold text-gray-500">{r.fy}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TRACK = [
  { value: '15,033+', label: 'CREDA solar pumps' },
  { value: '1,150+', label: 'Villages benefited' },
  { value: '6', label: 'States served' },
  { value: '₹240+ Cr', label: 'Combined annual business' },
];

export const Platform = () => (
  <Frame id="business-platform" label="Business Platform" title="Four engines. One integrated platform.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {PILLARS.map(({ icon: Icon, name, value, note }, i) => (
        <Reveal key={name} delay={i * 100}>
          <div className="h-full rounded-2xl border border-gray-200 p-6 hover:border-amber-600 hover:shadow-lg transition-all">
            <div className="w-11 h-11 mx-auto lg:mx-0 rounded-full border border-amber-600 flex items-center justify-center">
              <Icon size={20} className="text-amber-600" strokeWidth={1.5} />
            </div>
            <div className="mt-5 text-3xl font-bold text-emerald-950" style={serif}><CountUp value={value} /></div>
            <div className="text-xs uppercase tracking-wider text-gray-500">{note}</div>
            <div className="mt-3 font-semibold text-emerald-950">{name}</div>
          </div>
        </Reveal>
      ))}
    </div>

    <div className="mt-8 grid lg:grid-cols-[1fr_1.1fr] gap-6 items-stretch">
      <Reveal><RevenueChart /></Reveal>
      <Reveal delay={150}>
        <div className="h-full grid grid-cols-2 gap-4">
          {TRACK.map((t) => (
            <div key={t.label} className="rounded-2xl bg-emerald-950 text-white p-6 flex flex-col justify-center">
              <div className="text-3xl font-bold text-amber-400" style={serif}><CountUp value={t.value} /></div>
              <div className="mt-1 text-xs uppercase tracking-wider text-emerald-100">{t.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </Frame>
);

/* ---------- Future Growth ---------- */
const PHASES = [
  { period: '2025–27', title: 'Scale manufacturing & PM-KUSUM', text: 'GI plant · 44 projects · first BESS' },
  { period: '2027–30', title: 'Expand utility solar', text: 'Open-access · captive · more storage' },
  { period: '2030–35', title: 'Own assets at scale', text: 'IPP platform · national reach' },
];

export const Growth = () => (
  <Frame id="future-growth" label="Future Growth" title="From EPC contractor to Independent Power Producer." dark>
    <div className="grid md:grid-cols-3 gap-5">
      {PHASES.map((p, i) => (
        <Reveal key={p.period} delay={i * 120}>
          <div className="h-full rounded-2xl border border-emerald-800 p-7 hover:border-amber-500 transition-colors">
            <span className="inline-block text-xs font-bold bg-amber-600 text-white px-3 py-1 rounded-full">{p.period}</span>
            <h3 className="mt-5 text-xl font-bold leading-snug" style={serif}>{p.title}</h3>
            <p className="mt-2 text-sm text-emerald-100">{p.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Frame>
);

/* ---------- Independent Assessment ---------- */
const CONFIDENCE = [
  'Long operating history',
  'Strong CREDA credentials',
  'Manufacturing diversification',
  'Utility-scale development',
  'Entry into energy storage',
];

const RATINGS = [
  ['Execution capability', 'Very strong'],
  ['Industry knowledge', 'Very strong'],
  ['Promoter experience', 'Strong'],
  ['Market position', 'Strong'],
];

export const Assessment = () => (
  <Frame id="independent-assessment" label="Independent Assessment" title="Why lenders can have confidence.">
    <div className="grid lg:grid-cols-2 gap-8">
      <Reveal>
        <ul className="space-y-3">
          {CONFIDENCE.map((c) => (
            <li key={c} className="flex items-center justify-center lg:justify-start gap-4 rounded-xl bg-stone-50 px-5 py-4">
              <ShieldCheck size={22} className="text-amber-600 flex-shrink-0" strokeWidth={1.5} />
              <span className="font-semibold text-emerald-950">{c}</span>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={150}>
        <div className="h-full rounded-2xl bg-emerald-950 text-white p-7 sm:p-8">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-500">Credit committee view</h3>
          <ul className="mt-5 divide-y divide-emerald-800">
            {RATINGS.map(([k, v]) => (
              <li key={k} className="flex items-center justify-between py-3.5">
                <span className="text-sm">{k}</span>
                <span className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${v === 'Very strong' ? 'bg-amber-600 text-white' : 'border border-emerald-600 text-emerald-100'}`}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </Frame>
);

/* ---------- Annexures ---------- */
const ANNEXURES = [
  { src: annexure3, title: 'Annexure 1' },
  { src: annexure4, title: 'Annexure 2' },
  { src: annexure5, title: 'Annexure 3' },
];

export const Annexures = () => {
  const [open, setOpen] = React.useState(null);

  React.useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      else if (e.key === 'ArrowRight') setOpen((o) => (o + 1) % ANNEXURES.length);
      else if (e.key === 'ArrowLeft') setOpen((o) => (o - 1 + ANNEXURES.length) % ANNEXURES.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <Frame id="annexures" label="Annexures" title="Supporting documents." dark>
      <div className="grid md:grid-cols-3 gap-6">
        {ANNEXURES.map((a, i) => (
          <Reveal key={a.title} delay={i * 120}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="block w-full rounded-2xl overflow-hidden border border-emerald-800 hover:border-amber-500 transition-colors bg-white cursor-zoom-in"
            >
              <img src={a.src} alt={a.title} loading="lazy" className="w-full h-auto" />
            </button>
            <p className="mt-3 text-sm font-semibold text-emerald-100">{a.title}</p>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={ANNEXURES[open].title}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-emerald-950 text-2xl leading-none flex items-center justify-center"
          >
            ×
          </button>
          <img
            src={ANNEXURES[open].src}
            alt={ANNEXURES[open].title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-lg bg-white"
          />
        </div>
      )}
    </Frame>
  );
};
