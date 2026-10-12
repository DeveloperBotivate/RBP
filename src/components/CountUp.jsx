import React, { useEffect, useRef, useState } from 'react';

// Animated number for highlight stats. Pass the display string as-is ("121+ MW", "15,033+", "₹ 76 Cr",
// "85.85 MW"): the first number in it counts up from 0 once it scrolls into view, keeping its prefix,
// suffix, decimals and thousands separator. Strings with no number render unchanged.
const NUMBER = /\d[\d,]*(?:\.\d+)?/;

const format = (n, decimals, grouped) =>
  grouped
    ? n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : n.toFixed(decimals);

const CountUp = ({ value, duration = 1600, className = '' }) => {
  const ref = useRef(null);
  const match = typeof value === 'string' ? value.match(NUMBER) : null;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!match) return undefined;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      setProgress(1);
      return undefined;
    }

    let raf;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        setProgress(1 - Math.pow(1 - t, 3)); // ease-out
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.3 });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  if (!match) return <span className={className}>{value}</span>;

  const raw = match[0];
  const target = parseFloat(raw.replace(/,/g, ''));
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
  const grouped = raw.includes(',');
  const prefix = value.slice(0, match.index);
  const suffix = value.slice(match.index + raw.length);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}{format(target * progress, decimals, grouped)}{suffix}
    </span>
  );
};

export default CountUp;
