import { ProductHero } from "./ProductHero";
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
import {
  getProductFlowSteps,
  getProductIntegrations,
  getProductOutcomes,
  getProductTestimonials,
  getProductAuthority,
  getProductGettingStarted,
  getProductFAQs,
  getRelatedProducts,
  type Product,
  type ProductCategory,
} from "@/data/products";

interface ProductPageProps {
  product: Product;
  category: ProductCategory;
}

export const ProductLayout = ({ product, category }: ProductPageProps) => {
  const Icon = product.icon;
  const flowSteps = getProductFlowSteps(product, category.slug);
  const integrations = getProductIntegrations(product, category.slug);
  const outcomes = getProductOutcomes(product, category.slug);
  const testimonials = getProductTestimonials(product);
  const authority = getProductAuthority(product);
  const gettingStarted = getProductGettingStarted(product);
  const faqs = getProductFAQs(product);
  const relatedProducts = getRelatedProducts(product, category);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <BackgroundEffects />
      <GlowingCursor />
      <Navbar />

      <main>
        {/* 1. Hero */}
        <ProductHero
          productName={product.name}
          tagline={product.tagline}
          description={product.longDescription}
          categoryName={category.title}
          icon={Icon}
          visualType={flowSteps[0]?.visualType || "dashboard"}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: category.title, href: `/products/${category.slug}` },
            { label: product.name },
          ]}
        />

        {/* 2. Trust bar — product-specific integrations */}
        <TrustBar integrations={integrations} />

        {/* 3. Solution cards (promise / benefits) */}
        <SolutionCards
          benefits={product.benefits}
          title={`Why ${product.name}`}
          subtitle={product.tagline}
        />

        {/* 4. How it works (step-by-step flow) */}
        <HowItWorks
          steps={flowSteps}
          title={`How ${product.name} works`}
          subtitle="A simple, step-by-step flow to get you from setup to results."
        />

        {/* 5. Tools / integrations — product-specific */}
        <ToolsSection integrations={integrations} />

        {/* 6. Outcomes (quantified stats) */}
        <OutcomesSection outcomes={outcomes} />

        {/* 7. Case studies (testimonials, before/after metrics) */}
        <CaseStudiesSection testimonials={testimonials} />

        {/* 8. Authority layer (uptime, compliance, certifications) */}
        <AuthoritySection badges={authority} />

        {/* 9. Pricing */}
        <ProductPricingSection productName={product.name} />

        {/* 10. How to get started */}
        <GettingStartedSection steps={gettingStarted} />

        {/* 11. FAQ */}
        <ProductFAQSection faqs={faqs} />

        {/* 12. Related products — product-specific, cross-category */}
        <RelatedProducts
          title={`Products that work with ${product.name}`}
          products={relatedProducts}
          currentSlug={product.slug}
        />

        {/* 13. CTA */}
        <CTASection
          title={`Ready to grow with ${product.name}?`}
          description={`Start your 14-day trial — cancel anytime.`}
        />

        {/* 14. Bottom trust strip — product-specific integrations */}
        <TrustBar
          integrations={integrations}
          label={`Works with your favorite ${product.name.toLowerCase()} tools`}
        />
      </main>

      <PageFooter />
    </div>
  );
};
