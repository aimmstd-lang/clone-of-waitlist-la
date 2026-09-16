import { Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PageFooter } from "@/components/PageFooter";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { GlowingCursor } from "@/components/GlowingCursor";
import { SEO } from "@/components/SEO";
import { PricingCards } from "@/components/PricingCards";
import { ROICalculator } from "@/components/ROICalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What's included in the $97/mo Starter plan?",
    a: "The Starter plan includes the full CRM, unlimited funnels, website builder, email marketing, 2-way SMS, booking, workflow automations, surveys, and unlimited contacts and team members. It replaces $1,600+ in separate tool subscriptions.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade at any time from your account dashboard. Upgrades take effect immediately, and downgrades take effect at the next billing cycle.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every paid plan starts with a 14-day free trial. You can cancel anytime during or after the trial.",
  },
  {
    q: "How does annual billing work?",
    a: "Annual billing lets you pay once per year and saves you roughly two months compared to monthly billing. You'll be billed the annual total upfront, and your subscription renews each year unless cancelled.",
  },
  {
    q: "What does the Enterprise plan include?",
    a: "The Enterprise plan is built for multi-location and large-scale organizations. It includes everything in Pro plus multi-location management, a dedicated account manager, SSO, API access, custom contracts, and an SLA with a 99.9% uptime guarantee. Contact our sales team for a custom quote.",
  },
  {
    q: "Do you offer discounts for multiple locations?",
    a: "Yes. The Enterprise plan includes volume-based pricing for multi-location businesses. Contact sales for a tailored quote based on the number of locations and seats you need.",
  },
  {
    q: "Are there any setup or hidden fees?",
    a: "No. There are no setup fees, hidden costs, or long-term contracts on any plan. You pay the listed monthly or annual price, and you can cancel anytime.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <SEO
        title="Pricing — Simple, Transparent Plans for Education Businesses"
        description="Waitlist Lab pricing starts at $97/mo or $81/mo billed annually. Replace 14+ marketing tools with one all-in-one platform for education and training businesses. 14-day free trial, cancel anytime."
        path="/pricing"
        keywords="marketing software pricing, education CRM pricing, all-in-one marketing platform cost, education business software plans, annual billing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: "97",
          unitText: "per month",
          url: "https://waitlistlab.com/pricing",
        }}
      />
      <BackgroundEffects />
      <GlowingCursor />
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="ds-section relative overflow-hidden">
          <div className="ds-container max-w-4xl text-center">
            <span className="ds-eyebrow mb-6 ds-reveal">Pricing</span>
            <h1 className="ds-h1 mb-6 text-balance ds-reveal ds-reveal-delay-1">
              One platform.{" "}
              <span className="text-gradient-primary">Every tool.</span> Simple
              pricing.
            </h1>
            <p className="ds-lead mb-10 max-w-2xl mx-auto ds-reveal ds-reveal-delay-2">
              Replace 14+ expensive subscriptions with a single platform built
              for education and training businesses. Start free for 14 days —
              cancel anytime.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground ds-reveal ds-reveal-delay-3">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> 14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> 24/7 customer support
              </span>
            </div>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="pb-20">
          <div className="ds-container">
            <PricingCards />
          </div>
        </section>

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Comparison table */}
        <section className="ds-section bg-surface-2">
          <div className="ds-container max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="ds-h2 mb-4 text-balance">
                Compare what's included
              </h2>
              <p className="ds-body max-w-xl mx-auto">
                Every plan includes the full platform — the difference is scale,
                support, and advanced features.
              </p>
            </div>

            <div className="overflow-x-auto custom-scrollbar rounded-2xl border border-border-subtle">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-3">
                    <th className="p-4 font-semibold text-foreground">
                      Feature
                    </th>
                    <th className="p-4 text-center font-semibold text-foreground">
                      Starter
                    </th>
                    <th className="p-4 text-center font-semibold text-primary">
                      Pro
                    </th>
                    <th className="p-4 text-center font-semibold text-foreground">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["CRM & pipeline management", true, true, true],
                    ["Unlimited funnels & websites", true, true, true],
                    ["Email & SMS marketing", true, true, true],
                    ["Booking & appointments", true, true, true],
                    ["Workflow automations", true, true, true],
                    ["Unlimited contacts & team", true, true, true],
                    ["Courses & communities", false, true, true],
                    ["Reputation management", false, true, true],
                    ["Call tracking", false, true, true],
                    ["Document signing", false, true, true],
                    ["Advanced analytics", false, true, true],
                    ["Multi-location management", false, false, true],
                    ["Dedicated account manager", false, false, true],
                    ["SSO & advanced security", false, false, true],
                    ["API access & webhooks", false, false, true],
                    ["SLA & uptime guarantee", false, false, true],
                  ].map(([feature, s, p, e], i) => (
                    <tr
                      key={i}
                      className={`border-b border-border-subtle ${i % 2 === 0 ? "bg-transparent" : "bg-surface-1/50"}`}
                    >
                      <td className="p-4 font-medium text-foreground/90">
                        {feature}
                      </td>
                      {[s, p, e].map((val, j) => (
                        <td key={j} className="p-4 text-center">
                          {val ? (
                            <Check className="mx-auto h-4 w-4 text-primary" />
                          ) : (
                            <span className="mx-auto block h-1 w-3 rounded-full bg-muted-foreground/30" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="ds-section">
          <div className="ds-container max-w-3xl">
            <div className="mb-12 text-center">
              <span className="ds-eyebrow mb-4">FAQ</span>
              <h2 className="ds-h2 mb-4 text-balance">
                Pricing questions, answered
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="ds-section bg-surface-2">
          <div className="ds-container max-w-4xl">
            <div className="rounded-[2rem] border border-border-subtle bg-surface-1 p-8 text-center md:p-16 shadow-[var(--shadow-elevated)]">
              <h2 className="ds-h2 mb-4 text-balance">Ready to get started?</h2>
              <p className="ds-lead mb-8 max-w-xl mx-auto">
                Start your 14-day free trial today. No contracts, cancel
                anytime.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="/pricing" className="ds-btn-primary">
                  Start free trial
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/contact-sales" className="ds-btn-secondary">
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
