import type { ProductFeature } from "@/data/products";

interface FeaturesGridProps {
  features: ProductFeature[];
  title?: string;
  subtitle?: string;
}

export const FeaturesGrid = ({
  features,
  title = "Everything you need",
  subtitle = "Powerful features designed to help your education business grow.",
}: FeaturesGridProps) => {
  return (
    <section id="features" className="ds-section">
      <div className="ds-container">
        <div className="mb-12 max-w-2xl">
          <h2 className="ds-h2 mb-4 text-balance">{title}</h2>
          <p className="ds-body">{subtitle}</p>
        </div>

        <div className="ds-grid-3">
          {features.map((feature) => (
            <div key={feature.title} className="ds-card-feature">
              <h3 className="ds-h4 mb-2">{feature.title}</h3>
              <p className="ds-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
