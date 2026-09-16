import { useParams, Navigate } from "react-router-dom";
import { SolutionLayout } from "@/components/SolutionLayout";
import { SEO } from "@/components/SEO";
import { getSolutionBySlug } from "@/data/solutions";

export default function SolutionPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? getSolutionBySlug(slug) : undefined;

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <>
      <SEO
        title={`${solution.name} — Waitlist Lab Solution`}
        description={solution.description}
        path={`/solutions/${solution.slug}`}
        keywords={`${solution.name.toLowerCase()}, education marketing, ${solution.group.toLowerCase()}, CRM, scheduling, enrollment, automation`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Waitlist Lab for ${solution.name}`,
            serviceType: `Marketing and management platform for ${solution.name.toLowerCase()}`,
            provider: {
              "@type": "Organization",
              name: "Waitlist Lab",
              url: "https://waitlistlab.com",
            },
            description: solution.longDescription,
            url: `https://waitlistlab.com/solutions/${solution.slug}`,
            areaServed: "Worldwide",
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
                name: "Solutions",
                item: "https://waitlistlab.com/solutions",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: solution.name,
                item: `https://waitlistlab.com/solutions/${solution.slug}`,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: solution.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]}
      />
      <SolutionLayout solution={solution} />
    </>
  );
}
