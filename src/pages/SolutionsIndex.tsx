import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { PageFooter } from "@/components/PageFooter";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { GlowingCursor } from "@/components/GlowingCursor";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/data/solutions";

const groupOrder = [
  "Creators & Coaches",
  "Schools & Academies",
  "Studios & Specialty",
  "Consulting & Professional Services",
];

export default function SolutionsIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <SEO
        title="Solutions — Waitlist Lab for Every Type of Education Business"
        description="Explore Waitlist Lab solutions for course creators, coaching businesses, consulting firms, tutoring centers, trade schools, early childhood education, sports academies, language schools, music & arts studios, fitness studios, and more."
        path="/solutions"
        keywords="education solutions, course creator software, coaching platform, tutoring center management, trade school CRM, early childhood education software, sports academy management, language school software, music school booking, fitness studio marketing, dance studio management"
      />
      <BackgroundEffects />
      <GlowingCursor />
      <Navbar />

      <main>
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-48 lg:pb-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
          </div>
          <div className="ds-container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="ds-eyebrow mb-4">Solutions</span>
              <h1 className="ds-h1 mb-6 text-balance">
                Built for every type of education business
              </h1>
              <p className="ds-lead mb-8 text-balance">
                Whether you're a solo course creator or a multi-location
                academy, Waitlist Lab adapts to your workflow. Explore the
                platform tailored to your industry.
              </p>
            </div>
          </div>
        </section>

        {groupOrder.map((group) => {
          const groupSolutions = solutions.filter((s) => s.group === group);
          return (
            <section key={group} className="ds-section">
              <div className="ds-container">
                <h2 className="ds-h2 mb-10 text-balance">{group}</h2>
                <div className="ds-grid-3">
                  {groupSolutions.map((solution) => {
                    const Icon = solution.icon;
                    return (
                      <Link
                        key={solution.slug}
                        to={`/solutions/${solution.slug}`}
                        className="ds-card ds-card-hover group"
                      >
                        <div className="ds-icon-box mb-4">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {solution.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {solution.tagline}
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
        })}
      </main>

      <PageFooter />
    </div>
  );
}
