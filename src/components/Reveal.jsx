import React, { useEffect, useRef, useState } from 'react';

// True once the element has scrolled into view (and stays true). Falls back to "seen" when the
// browser has no IntersectionObserver or the user prefers reduced motion.
export const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      setSeen(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        observer.disconnect();
      }
    }, { threshold });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, seen];
};

// Fade + slide-up wrapper used to make each block appear as it enters the viewport.
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, seen] = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${seen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
