import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { FeaturesAudience } from "@/components/FeaturesAudience";
import { FeatureDetails } from "@/components/FeatureDetails";
import { PricingAndFAQ } from "@/components/PricingAndFAQ";
import { ROICalculator } from "@/components/ROICalculator";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { GlowingCursor } from "@/components/GlowingCursor";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <SEO
        title="Waitlist Lab (Wait List Lab) — All-in-One Marketing Software for Education & Training"
        description="Waitlist Lab (also known as Wait List Lab) is the all-in-one marketing platform for education and training businesses. Replace 14+ tools—CRM, funnels, email, SMS, bookings, courses, and reputation management—for $97/mo."
        path="/"
        keywords="Waitlist Lab, Wait List Lab, waitlistlab, wait list lab, marketing software, education CRM, training business marketing, lead generation, enrollment software, school marketing, course platform, SMS marketing, email marketing, funnel builder, booking software, reputation management, all-in-one marketing"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Waitlist Lab",
            url: "https://waitlistlab.com",
            description:
              "All-in-one marketing software for education and training businesses.",
            publisher: {
              "@type": "Organization",
              name: "Waitlist Lab",
              url: "https://waitlistlab.com",
            },
          },
        ]}
      />
      <BackgroundEffects />
      <GlowingCursor />
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <FeaturesAudience />
        <FeatureDetails />
        <ROICalculator />
        <PricingAndFAQ />
      </main>
    </div>
  );
};

export default Index;
