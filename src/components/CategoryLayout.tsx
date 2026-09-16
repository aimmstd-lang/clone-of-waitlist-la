import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "./PageHero";
import { FeaturesGrid } from "./FeaturesGrid";
import { CTASection } from "./CTASection";
import { PageFooter } from "./PageFooter";
import { Navbar } from "./Navbar";
import { BackgroundEffects } from "./BackgroundEffects";
import { GlowingCursor } from "./GlowingCursor";
import type { ProductCategory } from "@/data/products";

interface CategoryPageProps {
  category: ProductCategory;
}

export const CategoryLayout = ({ category }: CategoryPageProps) => {
  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <BackgroundEffects />
      <GlowingCursor />
      <Navbar />

      <main>
        <PageHero
          eyebrow="Platform"
          title={category.title}
          description={category.longDescription}
          icon={Icon}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: category.title },
          ]}
        />

        <FeaturesGrid
          features={category.features}
          title={`What's included in ${category.title}`}
          subtitle={category.description}
        />

        {/* Products in this category */}
        <section className="ds-section bg-surface-1">
          <div className="ds-container">
            <h2 className="ds-h2 mb-4 text-balance">Tools in this category</h2>
            <p className="ds-body mb-12">
              {category.items.length} powerful tools to{" "}
              {category.tagline.toLowerCase()}.
            </p>

            <div className="ds-grid-2">
              {category.items.map((product) => {
                const ProductIcon = product.icon;
                return (
                  <Link
                    key={product.slug}
                    to={`/products/${category.slug}/${product.slug}`}
                    className="ds-card ds-card-hover group flex flex-col"
                  >
                    <div className="flex items-start gap-4">
                      <div className="ds-icon-box">
                        <ProductIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="ds-h4 mb-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="ds-body">{product.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <PageFooter />
    </div>
  );
};
