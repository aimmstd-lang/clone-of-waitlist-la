import { ArrowRight, type LucideIcon } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  breadcrumbs: { label: string; href?: string }[];
}

export const PageHero = ({
  eyebrow,
  title,
  description,
  icon: Icon,
  breadcrumbs,
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="ds-container">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
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

        {/* Icon */}
        <div className="ds-icon-box-lg mb-6">
          <Icon className="h-7 w-7 text-primary" />
        </div>

        {/* Eyebrow */}
        <span className="ds-eyebrow mb-4">{eyebrow}</span>

        {/* Title */}
        <h1 className="ds-h1 mb-6 max-w-4xl text-balance">{title}</h1>

        {/* Description */}
        <p className="ds-lead max-w-2xl text-balance">{description}</p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/pricing" className="ds-btn-primary">
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className="ds-btn-secondary">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};
