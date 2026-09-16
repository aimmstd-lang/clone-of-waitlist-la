import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export const CTASection = ({
  title = "Ready to replace 14+ tools with one?",
  description = "Join education and training businesses growing with Waitlist Lab. Start your 14-day trial today — cancel anytime.",
}: CTASectionProps) => {
  return (
    <section id="get-started" className="ds-section">
      <div className="ds-container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-surface-1 px-6 py-16 text-center sm:px-16 sm:py-20">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
          </div>

          <h2 className="ds-h2 mb-4 max-w-2xl mx-auto text-balance">{title}</h2>
          <p className="ds-lead mb-8 max-w-xl mx-auto text-balance">
            {description}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/pricing" className="ds-btn-primary">
              Get Started Today
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/pricing" className="ds-btn-secondary">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
