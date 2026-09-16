import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { GlowingCursor } from "@/components/GlowingCursor";
import { PageFooter } from "@/components/PageFooter";
import { CTASection } from "@/components/CTASection";
import { SEO } from "@/components/SEO";

export default function ProductsIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <SEO
        title="All Products — 38+ Marketing Tools for Education Businesses"
        description="Explore all 38+ marketing tools in the Waitlist Lab platform across 9 categories: lead generation, lead capture, lead engagement, nurturing, conversion, delivery, retention, advocacy, and analytics."
        path="/products"
        keywords="marketing tools for education, all-in-one CRM platform, lead generation tools, education marketing software, funnel builder, email marketing, SMS marketing, booking software"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Waitlist Lab Product Categories",
          itemListElement: categories.map((cat, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: cat.title,
            url: `https://waitlistlab.com/products/${cat.slug}`,
          })),
        }}
      />
      <BackgroundEffects />
      <GlowingCursor />
      <Navbar />

      <main>
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          </div>

          <div className="ds-container">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="transition-colors hover:text-primary">
                    Home
                  </a>
                  <span className="mx-2 text-muted-foreground/40">/</span>
                </li>
                <li className="text-foreground/80">Products</li>
              </ol>
            </nav>

            <span className="ds-eyebrow mb-4">Platform</span>
            <h1 className="ds-h1 mb-6 max-w-4xl text-balance">
              Every tool you need,{" "}
              <span className="text-gradient-primary">in one platform</span>
            </h1>
            <p className="ds-lead max-w-2xl text-balance">
              Explore 9 categories and 39+ tools designed to take your education
              business from first click to enrolled student — all without
              juggling separate software.
            </p>
          </div>
        </section>

        {/* Category cards */}
        <section className="ds-section">
          <div className="ds-container">
            <div className="ds-grid-4">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.slug}
                    to={`/products/${cat.slug}`}
                    className="ds-card ds-card-hover group flex flex-col"
                  >
                    <div className="ds-icon-box mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="ds-h4 mb-1 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {cat.tagline}
                    </p>
                    <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Explore {cat.items.length} tools
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
}
