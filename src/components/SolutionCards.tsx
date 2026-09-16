import { CheckCircle } from "lucide-react";

interface SolutionCardsProps {
  benefits: string[];
  title?: string;
  subtitle?: string;
}

const cardDescriptions = [
  "Built directly into your workflow — no extra tools needed.",
  "Automated and tracked, so you see real results fast.",
  "Designed specifically for education and training businesses.",
  "Everything syncs with your CRM in real time.",
];

export const SolutionCards = ({
  benefits,
  title = "What you get",
  subtitle = "Everything included to help you succeed.",
}: SolutionCardsProps) => {
  return (
    <section className="ds-section">
      <div className="ds-container">
        <div className="mb-12 max-w-2xl">
          <h2 className="ds-h2 mb-4 text-balance">{title}</h2>
          <p className="ds-body">{subtitle}</p>
        </div>
        <div className="ds-grid-3">
          {benefits.map((benefit, i) => (
            <div key={i} className="ds-card-feature">
              <div className="ds-icon-box mb-4">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="ds-h4 mb-2 text-balance">{benefit}</h3>
              <p className="ds-body">
                {cardDescriptions[i % cardDescriptions.length]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
