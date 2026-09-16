import { useParams, Navigate } from "react-router-dom";
import { CategoryLayout } from "@/components/CategoryLayout";
import { getCategoryBySlug } from "@/data/products";
import { SEO } from "@/components/SEO";

export default function CategoryPageRoute() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  if (!category) return <Navigate to="/products" replace />;

  const path = `/products/${category.slug}`;

  return (
    <>
      <SEO
        title={`${category.title} — ${category.tagline} | Waitlist Lab`}
        description={category.longDescription}
        path={path}
        keywords={`${category.title.toLowerCase()} tools, ${category.title.toLowerCase()} software, education ${category.title.toLowerCase()}, marketing platform ${category.title.toLowerCase()}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${category.title} — Waitlist Lab`,
            description: category.longDescription,
            url: `https://waitlistlab.com${path}`,
            isPartOf: {
              "@type": "WebSite",
              name: "Waitlist Lab",
              url: "https://waitlistlab.com",
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: category.items.map((item, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: item.name,
                url: `https://waitlistlab.com${path}/${item.slug}`,
              })),
            },
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
                item: `https://waitlistlab.com${path}`,
              },
            ],
          },
        ]}
      />
      <CategoryLayout category={category} />
    </>
  );
}
