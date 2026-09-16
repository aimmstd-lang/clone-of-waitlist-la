import { ArrowRight, Check } from "lucide-react";
import { LottieVisual } from "./LottieVisual";
import type { FlowStep } from "@/data/products";

interface HowItWorksProps {
  steps: FlowStep[];
  title?: string;
  subtitle?: string;
}

export const HowItWorks = ({
  steps,
  title = "How it works",
  subtitle = "Follow these steps to get up and running in minutes.",
}: HowItWorksProps) => {
  return (
    <section id="how-it-works" className="ds-section bg-surface-1">
      <div className="ds-container">
        <div className="mb-16 max-w-2xl">
          <h2 className="ds-h2 mb-4 text-balance">{title}</h2>
          <p className="ds-body">{subtitle}</p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {steps.map((step, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={i}
                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
              >
                {/* Text column */}
                <div className={isReversed ? "lg:order-2" : ""}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-lg font-bold text-primary">
                      {i + 1}
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {step.preHeadline}
                    </span>
                  </div>
                  <h3 className="ds-h3 mb-4 text-balance">{step.headline}</h3>
                  <p className="ds-body mb-6">{step.description}</p>

                  {/* Bullets */}
                  <ul className="mb-8 space-y-4">
                    {step.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {bullet.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {bullet.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href="/pricing" className="ds-btn-primary">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  {/* Trust signal */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                    {step.trustSignal}
                  </div>
                </div>

                {/* Visual column */}
                <div className={isReversed ? "lg:order-1" : ""}>
                  <LottieVisual type={step.visualType} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
