'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll — Client-side Lenis smooth scroll wrapper.
 *
 * - Respects `prefers-reduced-motion`: bypasses smooth scroll if active.
 * - Uses requestAnimationFrame for the scroll loop.
 * - Cleans up Lenis instance and RAF on unmount.
 * - Exposes the Lenis instance on `window.__lenis` for future GSAP
 *   ScrollTrigger synchronization.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Respect accessibility preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with momentum physics
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    // Expose for future GSAP ScrollTrigger sync
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__lenis = lenis;

    // RAF loop
    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).__lenis;
    };
  }, []);

  return <>{children}</>;
}
