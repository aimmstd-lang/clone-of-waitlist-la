import { useParams, Navigate } from "react-router-dom";
import { ProductLayout } from "@/components/ProductLayout";
import { getCategoryBySlug, getProductBySlug } from "@/data/products";
import { SEO } from "@/components/SEO";

export default function ProductPageRoute() {
  const { categorySlug, productSlug } = useParams<{
    categorySlug: string;
    productSlug: string;
  }>();

  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const product =
    categorySlug && productSlug
      ? getProductBySlug(categorySlug, productSlug)
      : undefined;

  if (!category || !product) return <Navigate to="/products" replace />;

  const path = `/products/${category.slug}/${product.slug}`;

  return (
    <>
      <SEO
        title={`${product.name} — ${product.tagline} | Waitlist Lab`}
        description={product.longDescription}
        path={path}
        type="product"
        keywords={`${product.name.toLowerCase()}, ${product.tagline.toLowerCase()}, ${category.title.toLowerCase()} tools, education marketing software, waitlist lab ${product.name.toLowerCase()}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: `${product.name} — Waitlist Lab`,
            description: product.longDescription,
            url: `https://waitlistlab.com${path}`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            isPartOf: {
              "@type": "SoftwareApplication",
              name: "Waitlist Lab",
              url: "https://waitlistlab.com",
            },
            offers: {
              "@type": "Offer",
              price: "97",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "97",
                priceCurrency: "USD",
                unitText: "per month",
              },
            },
            featureList: product.features.map((f) => f.title),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://waitlistlab.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: "https://waitlistlab.com/products",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: category.title,
                item: `https://waitlistlab.com/products/${category.slug}`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: product.name,
                item: `https://waitlistlab.com${path}`,
              },
            ],
          },
        ]}
      />
      <ProductLayout product={product} category={category} />
    </>
  );
}
