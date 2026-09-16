import { Check } from "lucide-react";

interface BenefitsSectionProps {
  benefits: string[];
  title?: string;
}

export const BenefitsSection = ({
  benefits,
  title = "Why it matters",
}: BenefitsSectionProps) => {
  return (
    <section className="ds-section bg-surface-1">
      <div className="ds-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="ds-h2 mb-6 text-balance">{title}</h2>
            <p className="ds-body">
              Every feature is designed with one goal: helping your education
              business grow faster with less effort.
            </p>
          </div>
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-base text-foreground/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
