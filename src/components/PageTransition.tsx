import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop + Page Transition Loader.
 * On every route change:
 *   1. Instantly scrolls to top so the new page starts at the top.
 *   2. Shows a brief branded loading overlay so the user clearly sees
 *      they've navigated to a new page.
 */
export const PageTransition = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const firstRender = useRef(true);
  const prevPath = useRef(location.pathname);

  // Temporarily disable smooth scrolling so route changes snap to top instantly
  const instantScrollToTop = () => {
    // Stop Lenis if it's running, jump to top, then resume after a tick
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.stop();
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
      setTimeout(() => lenis.start(), 150);
    } else {
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = prev;
    }
  };

  useEffect(() => {
    // Skip the loader on the very first render
    if (firstRender.current) {
      firstRender.current = false;
      prevPath.current = location.pathname;
      instantScrollToTop();
      return;
    }

    // Only trigger if the path actually changed
    if (prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;

    // Scroll to top instantly
    instantScrollToTop();

    // Show the loading screen
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 650);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md"
      style={{ animation: "page-fade-in 0.15s ease-out forwards" }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo mark */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background:
                "radial-gradient(circle, hsl(86 100% 50% / 0.3), transparent 70%)",
            }}
          />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8L2 14L6 20"
                stroke="hsl(86 100% 50%)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 8L26 14L22 20"
                stroke="hsl(86 100% 50%)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 5L12 23"
                stroke="hsl(86 100% 50%)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="relative h-1 w-32 overflow-hidden rounded-full bg-surface-hover">
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, hsl(86 100% 50%), hsl(86 100% 65%))",
              animation: "page-loader-bar 0.6s ease-out forwards",
            }}
          />
        </div>

        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Loading
        </span>
      </div>

      <style>{`
        @keyframes page-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes page-fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes page-loader-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};
