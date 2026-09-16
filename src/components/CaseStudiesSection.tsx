import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/products";

interface CaseStudiesSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export const CaseStudiesSection = ({
  testimonials,
  title = "Results from real businesses",
  subtitle = "See how education and training companies are using this tool to grow.",
}: CaseStudiesSectionProps) => {
  return (
    <section id="case-studies" className="ds-section">
      <div className="ds-container">
        <div className="mb-12 max-w-2xl">
          <span className="ds-eyebrow mb-4">Case Studies</span>
          <h2 className="ds-h2 mb-4 text-balance">{title}</h2>
          <p className="ds-body">{subtitle}</p>
        </div>

        <div className="ds-grid-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-2xl border border-border-subtle bg-surface-1 p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-primary/20 hover:shadow-[var(--glow-primary)]"
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-primary/30" />

              {/* Metric badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                <span className="text-lg font-bold text-primary">
                  {t.metric}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {t.metricLabel}
                </span>
              </div>

              {/* Quote */}
              <p className="mb-6 flex-1 text-sm text-foreground/90 leading-relaxed">
                "{t.quote}"
              </p>

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border-subtle pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
