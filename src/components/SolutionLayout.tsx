import { SolutionHero } from "./SolutionHero";
import { TrustBar } from "./TrustBar";
import { SolutionCards } from "./SolutionCards";
import { HowItWorks } from "./HowItWorks";
import { ToolsSection } from "./ToolsSection";
import { OutcomesSection } from "./OutcomesSection";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { AuthoritySection } from "./AuthoritySection";
import { ProductPricingSection } from "./ProductPricingSection";
import { GettingStartedSection } from "./GettingStartedSection";
import { ProductFAQSection } from "./ProductFAQSection";
import { CTASection } from "./CTASection";
import { RelatedProducts } from "./RelatedProducts";
import { PageFooter } from "./PageFooter";
import { Navbar } from "./Navbar";
import { BackgroundEffects } from "./BackgroundEffects";
import { GlowingCursor } from "./GlowingCursor";
import { type Solution } from "@/data/solutions";
import { getAllProducts } from "@/data/products";

interface SolutionLayoutProps {
  solution: Solution;
}

export const SolutionLayout = ({ solution }: SolutionLayoutProps) => {
  const Icon = solution.icon;

  // Build related products from slugs
  const allProducts = getAllProducts();
  const relatedProducts = solution.relatedProductSlugs
    .map((slug) => {
      const found = allProducts.find((p) => p.slug === slug);
      return found
        ? { product: found, categorySlug: found.categorySlug }
        : null;
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <BackgroundEffects />
      <GlowingCursor />
      <Navbar />

      <main>
        {/* 1. Hero */}
        <SolutionHero
          name={solution.name}
          tagline={solution.tagline}
          description={solution.longDescription}
          group={solution.group}
          icon={Icon}
          heroImage={solution.heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: solution.name },
          ]}
        />

        {/* 2. Trust bar — solution-specific integrations */}
        <TrustBar integrations={solution.integrations} />

        {/* 3. Solution cards (promise / benefits) */}
        <SolutionCards
          benefits={solution.benefits}
          title={`Why ${solution.name} choose Waitlist Lab`}
          subtitle={solution.tagline}
        />

        {/* 4. How it works (step-by-step flow) */}
        <HowItWorks
          steps={solution.flowSteps}
          title={`How it works for ${solution.name.toLowerCase()}`}
          subtitle="A simple, step-by-step flow to get you from setup to results."
        />

        {/* 5. Tools / integrations — solution-specific */}
        <ToolsSection integrations={solution.integrations} />

        {/* 6. Outcomes (quantified stats) */}
        <OutcomesSection
          outcomes={solution.outcomes}
          title={`Real results for ${solution.name.toLowerCase()}`}
          subtitle="The measurable impact businesses in this space see after implementing the platform."
        />

        {/* 7. Case studies (testimonials, before/after metrics) */}
        <CaseStudiesSection
          testimonials={solution.testimonials}
          title={`Success stories from ${solution.name.toLowerCase()}`}
          subtitle="See how businesses like yours are growing with Waitlist Lab."
        />

        {/* 8. Authority layer (uptime, compliance, certifications) */}
        <AuthoritySection badges={solution.authority} />

        {/* 9. Pricing */}
        <ProductPricingSection productName={solution.name} />

        {/* 10. How to get started */}
        <GettingStartedSection steps={solution.gettingStarted} />

        {/* 11. FAQ */}
        <ProductFAQSection faqs={solution.faqs} />

        {/* 12. Related products — solution-specific */}
        {relatedProducts.length > 0 && (
          <RelatedProducts
            title="Products that power this solution"
            products={relatedProducts}
          />
        )}

        {/* 13. CTA */}
        <CTASection
          title={`Ready to grow your ${solution.name.toLowerCase().includes("school") ? "school" : "business"}?`}
          description="Start your 14-day trial — cancel anytime. Every tool included."
        />

        {/* 14. Bottom trust strip — solution-specific integrations */}
        <TrustBar
          integrations={solution.integrations}
          label={`Works with the tools ${solution.name.toLowerCase()} already use`}
        />
      </main>

      <PageFooter />
    </div>
  );
};
