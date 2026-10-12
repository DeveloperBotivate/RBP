import React from 'react';

export const serif = { fontFamily: '"Playfair Display", Georgia, serif' };

// Common section wrapper so every My Profile page has the same eyebrow / heading / spacing.
export const SectionShell = ({ id, eyebrow, title, intro, dark = false, children }) => (
  <section id={id} className={`scroll-mt-16 py-14 ${dark ? 'bg-emerald-950 text-white' : 'bg-white'}`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {eyebrow && (
        <p className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${dark ? 'text-amber-500' : 'text-amber-700'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold leading-snug ${dark ? 'text-white' : 'text-emerald-950'}`} style={serif}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-3 max-w-3xl leading-relaxed ${dark ? 'text-emerald-100' : 'text-gray-600'}`}>{intro}</p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);
