import { PricingCards } from "@/components/PricingCards";

interface ProductPricingSectionProps {
  productName: string;
}

export const ProductPricingSection = ({
  productName,
}: ProductPricingSectionProps) => {
  return (
    <section id="pricing" className="ds-section">
      <div className="ds-container">
        <div className="mb-12 text-center">
          <span className="ds-eyebrow mb-4">Pricing</span>
          <h2 className="ds-h2 mb-4 text-balance">
            Simple, all-inclusive pricing
          </h2>
          <p className="ds-body max-w-xl mx-auto">
            {productName} is included with your Waitlist Lab subscription —
            along with every other tool. No per-feature pricing, no hidden fees.
          </p>
        </div>

        <PricingCards productName={productName} />

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Cancel anytime · No contracts ·{" "}
          <a href="/pricing" className="ds-link">
            See full pricing comparison
          </a>
        </p>
      </div>
    </section>
  );
};
