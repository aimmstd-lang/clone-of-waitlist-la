import { useState } from "react";
import {
  Check,
  ArrowRight,
  Sparkles,
  Building2,
  Zap,
  Star,
} from "lucide-react";

type BillingCycle = "monthly" | "annual";

export const pricingTiers = [
  {
    name: "Starter",
    icon: Zap,
    monthly: 97,
    annual: 81,
    tagline: "Everything you need to launch your marketing.",
    description:
      "Perfect for single-location education and training businesses getting started with all-in-one marketing.",
    cta: "Start 14-day trial",
    ctaSubtext: "Cancel anytime",
    valueAnchor: "$1,600+",
    highlighted: false,
    features: [
      "Full CRM & pipeline management",
      "Unlimited sales funnels",
      "Website builder",
      "Email marketing",
      "2-way SMS marketing",
      "Booking & appointments",
      "Workflow automations",
      "Surveys & forms",
      "Unlimited contacts",
      "Unlimited team members",
    ],
  },
  {
    name: "Pro",
    icon: Sparkles,
    monthly: 297,
    annual: 248,
    tagline: "Scale enrollments with advanced automation.",
    description:
      "For growing education businesses that need advanced automation, courses, and reputation management.",
    cta: "Start 14-day trial",
    ctaSubtext: "Cancel anytime",
    valueAnchor: "$1,600+",
    highlighted: true,
    features: [
      "Everything in Starter, plus:",
      "Courses & products",
      "Communities",
      "Reputation management",
      "Call tracking",
      "Document signing",
      "Advanced analytics & reporting",
      "Priority support",
      "Custom integrations",
      "Migration assistance",
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    monthly: null as number | null,
    annual: null as number | null,
    tagline: "For multi-location & enterprise organizations.",
    description:
      "Tailored for multi-location businesses, franchises, and enterprise organizations with custom needs.",
    cta: "Contact sales",
    ctaSubtext: "Get a custom quote",
    valueAnchor: null as string | null,
    highlighted: false,
    custom: true,
    features: [
      "Everything in Pro, plus:",
      "Multi-location management",
      "Dedicated account manager",
      "Custom onboarding & training",
      "SSO & advanced security",
      "API access & webhooks",
      "SLA & 99.9% uptime guarantee",
      "Volume sending discounts",
      "Custom contracts & invoicing",
      "White-glove migration",
    ],
  },
];

interface PricingCardsProps {
  initialCycle?: BillingCycle;
  showToggle?: boolean;
  productName?: string;
}

export const PricingCards = ({
  initialCycle = "monthly",
  showToggle = true,
  productName,
}: PricingCardsProps) => {
  const [cycle, setCycle] = useState<BillingCycle>(initialCycle);

  return (
    <div>
      {showToggle && (
        <div className="mb-12 flex items-center justify-center gap-3">
          <div className="inline-flex items-center rounded-xl border border-border-subtle bg-surface-1 p-1">
            <button
              onClick={() => setCycle("monthly")}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                cycle === "monthly"
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(86_100%_50%_/_0.25)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setCycle("annual")}
              className={`flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                cycle === "annual"
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(86_100%_50%_/_0.25)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                  cycle === "annual"
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-primary/15 text-primary"
                }`}
              >
                Save 17%
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {pricingTiers.map((tier, idx) => {
          const Icon = tier.icon;
          const isCustom = tier.custom;
          const price = cycle === "annual" ? tier.annual : tier.monthly;
          const annualSavings =
            !isCustom && tier.monthly
              ? (tier.monthly - (tier.annual ?? 0)) * 12
              : 0;
          const featureList =
            productName && idx === 0
              ? [`Full access to ${productName}`, ...tier.features]
              : tier.features;

          return (
            <div
              key={tier.name}
              className={`flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                tier.highlighted
                  ? "border-primary/40 bg-surface-1 shadow-[var(--glow-primary-strong)] lg:-translate-y-4 lg:scale-[1.03] relative"
                  : "border-border-subtle bg-surface-1 hover:border-border-default hover:-translate-y-1"
              }`}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {tier.highlighted && (
                <>
                  {/* Glow ring on popular plan */}
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/20 to-transparent pointer-events-none -z-10" />
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </span>
                </>
              )}

              <div className="mb-6 flex items-center gap-3">
                <div className="ds-icon-box">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="ds-h4">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tier.tagline}
                  </p>
                </div>
              </div>

              <div className="mb-2 flex items-end gap-1">
                {isCustom ? (
                  <span className="text-4xl font-bold tracking-tight">
                    Custom
                  </span>
                ) : (
                  <>
                    <span className="text-2xl font-semibold text-muted-foreground">
                      $
                    </span>
                    <span className="text-5xl font-bold tracking-tight">
                      {price}
                    </span>
                    <span className="mb-1.5 text-lg text-muted-foreground">
                      /mo
                    </span>
                  </>
                )}
              </div>

              {!isCustom && cycle === "annual" && (
                <p className="mb-1 text-xs font-medium text-primary">
                  Billed annually · ${price! * 12}/yr
                </p>
              )}
              {!isCustom && cycle === "annual" && annualSavings > 0 && (
                <p className="mb-2 text-xs font-semibold text-primary">
                  You save ${annualSavings}/year
                </p>
              )}
              {tier.valueAnchor && (
                <p className="mb-2 text-xs font-medium text-muted-foreground">
                  Replaces{" "}
                  <span className="font-semibold text-foreground">
                    {tier.valueAnchor}/mo
                  </span>{" "}
                  in separate tools
                </p>
              )}
              <p className="mb-6 text-sm text-muted-foreground">
                {tier.description}
              </p>

              <div className="ds-divider mb-6" />

              <ul className="mb-8 space-y-3 flex-1">
                {featureList.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span
                      className={`text-sm ${feature.endsWith(":") ? "font-semibold text-foreground" : "text-foreground/80"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Social proof microcopy above CTA on highlighted plan */}
              {tier.highlighted && (
                <div className="mb-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span>Trusted by 500+ education businesses</span>
                </div>
              )}

              <a
                href={
                  isCustom
                    ? "/contact-sales"
                    : `/checkout?plan=${encodeURIComponent(tier.name)}&cycle=${cycle}`
                }
                className={
                  tier.highlighted
                    ? "ds-btn-primary w-full"
                    : "ds-btn-secondary w-full"
                }
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {tier.ctaSubtext}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
