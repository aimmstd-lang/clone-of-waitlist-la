import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

interface RelatedProductsProps {
  title: string;
  products: { product: Product; categorySlug: string }[];
  currentSlug?: string;
}

export const RelatedProducts = ({
  title,
  products,
  currentSlug,
}: RelatedProductsProps) => {
  const filtered = currentSlug
    ? products.filter((p) => p.product.slug !== currentSlug)
    : products;

  if (filtered.length === 0) return null;

  return (
    <section className="ds-section">
      <div className="ds-container">
        <h2 className="ds-h2 mb-12 text-balance">{title}</h2>
        <div className="ds-grid-4">
          {filtered.map(({ product, categorySlug }) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.slug}
                to={`/products/${categorySlug}/${product.slug}`}
                className="ds-card ds-card-hover group"
              >
                <div className="ds-icon-box mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {product.tagline}
                </p>
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
  );
};
