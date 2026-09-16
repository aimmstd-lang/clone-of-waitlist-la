import { useEffect, useState } from "react";

export const BackgroundEffects = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-[-1] opacity-70 will-change-transform"
        style={{
          transform: `translateY(${-scrollY * 0.15}px)`,
          background: `radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.15) 0%, transparent 60%)`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-[-1] opacity-40 will-change-transform"
        style={{
          transform: `translateY(${-scrollY * 0.1}px)`,
          background: `radial-gradient(circle at 80% 400px, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-[-1] opacity-30 will-change-transform"
        style={{
          transform: `translateY(${-scrollY * 0.05}px)`,
          background: `radial-gradient(circle at 20% 800px, hsl(var(--primary) / 0.08) 0%, transparent 40%)`,
        }}
      />
    </>
  );
};
