import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

/**
 * Global smooth scrolling powered by Lenis.
 * Provides buttery, GSAP-style momentum scrolling across every page.
 * Handles route changes by instantly scrolling to top (bypassing smooth),
 * then re-enabling smooth scrolling for the new page.
 */
export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const firstRender = useRef(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });
    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      (window as any).__lenis = null;
    };
  }, []);

  // On route change: instantly scroll to top, then let Lenis resume
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      prevPath.current = location.pathname;
      return;
    }
    if (prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;

    // Stop Lenis smooth scroll, jump to top instantly, then resume
    if (lenisRef.current) {
      lenisRef.current.stop();
      window.scrollTo(0, 0);
      // Brief delay before resuming so the jump is instant
      const resumeTimer = setTimeout(() => {
        lenisRef.current?.start();
      }, 100);
      return () => clearTimeout(resumeTimer);
    }
  }, [location.pathname]);

  return <>{children}</>;
};
