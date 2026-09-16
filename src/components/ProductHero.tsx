import { ArrowRight, ShieldCheck, type LucideIcon } from "lucide-react";
import { FlowVisual } from "./FlowVisual";

interface ProductHeroProps {
  productName: string;
  tagline: string;
  description: string;
  categoryName: string;
  icon: LucideIcon;
  visualType: string;
  breadcrumbs: { label: string; href?: string }[];
}

export const ProductHero = ({
  productName,
  tagline,
  description,
  categoryName,
  icon: Icon,
  visualType,
  breadcrumbs,
}: ProductHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-24">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[300px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="ds-container">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="transition-colors hover:text-primary"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-foreground/80">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className="text-muted-foreground/40">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Text */}
          <div className="ds-reveal">
            <div className="ds-icon-box-lg mb-6">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <span className="ds-eyebrow mb-4">{categoryName}</span>
            <h1 className="ds-h1 mb-4 text-balance">{productName}</h1>
            <p className="ds-lead mb-4 max-w-xl text-balance">{tagline}</p>
            <p className="ds-body mb-8 max-w-xl">{description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="/pricing" className="ds-btn-primary">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#how-it-works" className="ds-btn-secondary">
                See how it works
              </a>
            </div>
            {/* Trust signal */}
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Enterprise-grade security & 99.9% uptime SLA</span>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="ds-reveal ds-reveal-delay-2 relative">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />
            </div>
            <FlowVisual type={visualType} />
          </div>
        </div>
      </div>
    </section>
  );
};
