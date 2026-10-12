import React, { useState, useEffect, useRef } from 'react';
import portrait from '../../Assets/2.jpg';
import Footer from '../../components/Footer';
import CountUp from '../../components/CountUp';
import Reveal from '../../components/Reveal';
import {
  User, Building2, Factory, Sun, BatteryCharging, Menu, X,
} from 'lucide-react';
import { Profile, Journey, Platform, Growth, Assessment, Annexures, serif } from './Sections';

// Business owner profile content — edit here to update the page.
const OWNER = {
  name: 'Gaurav Jain',
  title: 'Promoter & Director',
  eyebrow: 'PROMOTER PROFILE & BUSINESS DOSSIER',
  roles: ['Renewable Energy Infrastructure Developer', 'Manufacturer', 'Energy Storage Entrepreneur'],
  intro:
    'An integrated renewable energy infrastructure platform spanning EPC execution, manufacturing, utility-scale solar development and energy storage.',
  note: 'Prepared for Banking & Financial Institutions • Confidential',
  email: 'info@gauravjain.com',
  phone: '+91 00000 00000',
  location: 'India',
};

const STATS = [
  { icon: Building2, value: '20+ Years', label: 'Entrepreneurial experience, since 2005' },
  { icon: Sun, value: '13+ Years', label: 'Specialised in renewable energy infrastructure' },
  { icon: Factory, value: 'RBP Energy (India) Pvt. Ltd.', label: 'Founded in 2012' },
  { icon: BatteryCharging, value: 'B.Tech, SPJIMR, GERMI', label: 'Engineering, family-business and solar training' },
];

const NAV = [
  { href: '#about', label: 'My Profile' },
  { href: '#business-journey', label: 'Business Journey' },
  { href: '#business-platform', label: 'Business Platform' },
  { href: '#future-growth', label: 'Future Growth' },
  { href: '#independent-assessment', label: 'Independent Assessment' },
  { href: '#annexures', label: 'Annexures' },
];

// Every section on the page, for scroll tracking.
const SECTION_IDS = ['home', 'about', 'business-journey', 'business-platform', 'future-growth', 'independent-assessment', 'annexures'];

const script = { fontFamily: '"Great Vibes", cursive' };

const IconCircle = ({ icon: Icon, size = 'w-14 h-14', iconSize = 24 }) => (
  <div className={`${size} rounded-full border border-amber-600 flex items-center justify-center flex-shrink-0`}>
    <Icon size={iconSize} className="text-amber-600" strokeWidth={1.5} />
  </div>
);

// Placeholder shown until a real photo is added (drop a photo in /public and set `src`).
const Portrait = ({ src, className = '' }) =>
  src ? (
    <img src={src} alt={OWNER.name} className={`object-cover object-top ${className}`} />
  ) : (
    <div className={`bg-gradient-to-br from-emerald-900 to-emerald-700 flex items-center justify-center ${className}`}>
      <User className="text-emerald-200/70 w-1/3 h-1/3" strokeWidth={1} />
    </div>
  );

const Home = () => {
  const [active, setActive] = useState('#about');
  const clickLock = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile/tablet menu links: the open menu makes the sticky header taller, so a plain #anchor jump is
  // computed with the menu open and lands in the wrong place once it closes. Close first, then scroll.
  const goTo = (href) => {
    clickLock.current = Date.now() + 1000;
    setMenuOpen(false);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const el = document.querySelector(href);
      if (!el) return;
      const headerH = document.querySelector('header')?.offsetHeight ?? 64;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH, behavior: 'smooth' });
    }));
  };

  // Move the underline to whichever section is currently in view while scrolling.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id))
      .filter(Boolean)
      .sort((a, b) => a.offsetTop - b.offsetTop);
    const onScroll = () => {
      // A just-clicked link wins while the page is still scrolling to it.
      if (Date.now() < clickLock.current) return;
      const line = window.scrollY + 120;
      let current = NAV[0].href;
      sections.forEach((s) => {
        if (s.offsetTop <= line) current = `#${s.id}`;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}>
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-amber-600 text-white flex items-center justify-center font-bold text-sm">GJ</div>
            <div className="leading-tight">
              <div className="text-lg font-bold text-emerald-950" style={serif}>{OWNER.name}</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-gray-500">{OWNER.title}</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] whitespace-nowrap">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => {
                  clickLock.current = Date.now() + 800;
                  setActive(n.href);
                }}
                className={`py-5 border-b-2 transition-colors ${active === n.href ? 'text-amber-700 border-amber-600' : 'text-gray-700 border-transparent hover:text-amber-700'}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="lg:hidden p-2 rounded-lg text-emerald-950 hover:bg-amber-50 transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu — every nav item stays reachable below the lg breakpoint */}
        {menuOpen && (
          <nav className="lg:hidden border-t border-gray-100 bg-white max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <ul className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(n.href);
                      goTo(n.href);
                    }}
                    className={`block py-3 text-sm border-l-4 pl-3 ${active === n.href ? 'text-amber-700 border-amber-600 font-semibold' : 'text-gray-700 border-transparent'}`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="scroll-mt-16 bg-stone-50 lg:bg-gradient-to-r lg:from-white lg:via-stone-50 lg:to-emerald-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 items-center gap-6">
          <div className="py-12 lg:py-20 text-center lg:text-left">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-700 mb-5">{OWNER.eyebrow}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-950 leading-[1.05]" style={serif}>
              {OWNER.name}
            </h1>
            <p className="mt-2 text-2xl sm:text-3xl text-amber-700" style={serif}>{OWNER.title}</p>
            <ul className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {OWNER.roles.map((r) => (
                <li key={r} className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-emerald-950 shadow-sm">{r}</li>
              ))}
            </ul>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">{OWNER.intro}</p>
            <p className="mt-4 text-[11px] tracking-wider uppercase text-gray-500">{OWNER.note}</p>
          </div>
          <div className="relative flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-end gap-6 pt-8 lg:pt-0 -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0 bg-emerald-950 lg:bg-transparent rounded-t-3xl lg:rounded-none">
            <Portrait src={portrait} className="w-64 lg:w-80 h-72 lg:h-[26rem] rounded-t-3xl lg:mr-24" />
            <div className="flex lg:hidden w-44 flex-col items-center text-center text-white pb-8 lg:pb-0">
              <span className="text-3xl text-amber-400" style={script}>{OWNER.name}</span>
              <span className="mt-2 text-[10px] tracking-[0.25em] uppercase">{OWNER.title}</span>
              <span className="mt-3 w-16 h-px bg-amber-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Key facts band */}
      <section className="bg-emerald-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ icon, value, label }) => (
            <Reveal key={label}>
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4">
                <IconCircle icon={icon} />
                <div className="min-w-0">
                  <div className="text-lg font-bold leading-tight"><CountUp value={value} /></div>
                  <div className="text-xs text-emerald-100 leading-snug">{label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Profile />
      <Journey />
      <Platform />
      <Growth />
      <Assessment />
      <Annexures />

      <Footer />
    </div>
  );
};

export default Home;
