import type { OutcomeStat } from "@/data/products";

interface OutcomesSectionProps {
  outcomes: OutcomeStat[];
  title?: string;
  subtitle?: string;
}

export const OutcomesSection = ({
  outcomes,
  title = "Real results, quantified",
  subtitle = "The measurable impact businesses see after implementing this tool.",
}: OutcomesSectionProps) => {
  return (
    <section id="outcomes" className="ds-section">
      <div className="ds-container">
        <div className="mb-12 max-w-2xl">
          <span className="ds-eyebrow mb-4">Outcomes</span>
          <h2 className="ds-h2 mb-4 text-balance">{title}</h2>
          <p className="ds-body">{subtitle}</p>
        </div>

        <div className="ds-grid-3">
          {outcomes.map((stat, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-2 p-8"
            >
              {/* Glow accent */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative">
                <div className="mb-3 text-5xl font-bold text-gradient-royal">
                  {stat.value}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
