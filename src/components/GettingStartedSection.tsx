import { ArrowRight, Check } from "lucide-react";
import type { GettingStartedStep } from "@/data/products";

interface GettingStartedSectionProps {
  steps: GettingStartedStep[];
  title?: string;
  subtitle?: string;
}

export const GettingStartedSection = ({
  steps,
  title = "Get started in minutes",
  subtitle = "No complicated setup, no long onboarding. You'll be up and running before lunch.",
}: GettingStartedSectionProps) => {
  return (
    <section id="how-to-get-started" className="ds-section">
      <div className="ds-container">
        <div className="mb-12 max-w-2xl">
          <span className="ds-eyebrow mb-4">Getting Started</span>
          <h2 className="ds-h2 mb-4 text-balance">{title}</h2>
          <p className="ds-body">{subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border-subtle bg-surface-1 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-surface-2"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-lg font-bold text-primary">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-surface-1 p-8 text-center lg:w-80">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-[200px] w-[300px] -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Ready to begin?
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              14-day free trial. Cancel anytime.
            </p>
            <a href="/pricing" className="ds-btn-primary w-full">
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-6 space-y-2 text-left">
              {[
                "No long-term contracts",
                "All features included",
                "Free migration support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
