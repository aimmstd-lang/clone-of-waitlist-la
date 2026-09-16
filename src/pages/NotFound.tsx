import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Home,
  Search,
  ArrowRight,
  Sparkles,
  Zap,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { categories } from "@/data/products";

const glitchChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?<>{}[]";

const GlitchText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(Math.random() > 0.7);
      const intensity = glitching ? 0.5 : 0.88;
      const glitched = text
        .split("")
        .map((char) =>
          Math.random() > intensity
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : char,
        )
        .join("");
      setDisplay(glitched);
    }, 90);
    return () => clearInterval(interval);
  }, [text, glitching]);

  return <>{display}</>;
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <SEO
        title="Page Not Found (404) — Waitlist Lab"
        description="The page you're looking for doesn't exist. Explore Waitlist Lab's all-in-one marketing platform for education and training businesses."
        path={location.pathname}
        noindex
      />

      {/* Animated background layers */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px] animate-pulse" />
        <div
          className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/10 blur-[130px] animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />
        <div
          className="absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-[120px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Scan line */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.15]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(143,255,0,0.03) 3px, transparent 4px)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
        {/* Terminal-style path indicator */}
        <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-border-default bg-surface-2/80 px-4 py-2 font-mono text-xs text-muted-foreground backdrop-blur">
          <Terminal className="h-3.5 w-3.5 text-primary" />
          <span className="text-text-3">~/waitlist-lab</span>
          <ChevronRight className="h-3 w-3 text-text-3" />
          <span className="text-primary">{location.pathname}</span>
        </div>

        {/* Massive glitch 404 */}
        <div className="relative mb-6 select-none">
          <h1
            className="text-[140px] sm:text-[200px] md:text-[260px] font-black leading-[0.85] tracking-tighter text-primary"
            style={{ textShadow: "0 0 80px rgba(143,255,0,0.35)" }}
          >
            <GlitchText text="404" />
          </h1>
          {/* Glitch layers */}
          <h1
            className="absolute inset-0 text-[140px] sm:text-[200px] md:text-[260px] font-black leading-[0.85] tracking-tighter text-blue-500/40 select-none animate-pulse"
            style={{
              animationDuration: "1.6s",
              transform: "translate(-4px, -2px)",
            }}
          >
            404
          </h1>
          <h1
            className="absolute inset-0 text-[140px] sm:text-[200px] md:text-[260px] font-black leading-[0.85] tracking-tighter text-red-500/25 select-none"
            style={{ transform: "translate(4px, 2px)" }}
          >
            404
          </h1>
        </div>

        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Zap className="h-3.5 w-3.5" />
          Signal Lost
        </div>

        {/* Headline */}
        <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          This page took a <span className="text-gradient-primary">detour</span>
        </h2>
        <p className="mb-12 mx-auto max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
          The page you're looking for doesn't exist or has been moved. But your
          marketing stack shouldn't skip a beat — let's get you back on track.
        </p>

        {/* Primary CTA — big, bold */}
        <div className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="group bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg px-8 py-3.5 text-base transition-all duration-300 shadow-[0_0_30px_rgba(143,255,0,0.2)] hover:shadow-[0_0_50px_rgba(143,255,0,0.4)] hover:-translate-y-1"
          >
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Back to Home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-lg px-8 py-3.5 text-base border-border-strong hover:border-primary/50 hover:bg-primary/5"
          >
            <Link to="/products" className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Browse Products
            </Link>
          </Button>
        </div>

        {/* Quick links grid */}
        <div className="border-t border-border-subtle pt-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Popular destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/pricing"
              className="group inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface-1 px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              Pricing
              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              to="/contact-sales"
              className="group inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface-1 px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              Contact Sales
              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            {categories.slice(0, 5).map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="group inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface-1 px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                {cat.title}
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Sparkle accent at bottom */}
        <div className="mt-16 flex items-center justify-center gap-2 text-xs text-text-3">
          <Sparkles className="h-3 w-3 text-primary/50" />
          <span>
            Waitlist Lab — All-in-one marketing for education & training
          </span>
          <Sparkles className="h-3 w-3 text-primary/50" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
