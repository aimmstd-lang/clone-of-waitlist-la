import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Lock,
  ShieldCheck,
  CreditCard,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PageFooter } from "@/components/PageFooter";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { GlowingCursor } from "@/components/GlowingCursor";
import { SEO } from "@/components/SEO";
import { pricingTiers } from "@/components/PricingCards";

export default function Checkout() {
  const [params] = useSearchParams();
  const planName = params.get("plan") || "Starter";
  const cycle = (params.get("cycle") as "monthly" | "annual") || "monthly";

  const tier = useMemo(
    () =>
      pricingTiers.find(
        (t) => t.name.toLowerCase() === planName.toLowerCase(),
      ) ?? pricingTiers[0],
    [planName],
  );

  const isCustom = Boolean(tier.custom);
  const price = cycle === "annual" ? tier.annual : tier.monthly;
  const Icon = tier.icon;

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    address: "",
    city: "",
    zip: "",
    country: "United States",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const subtotal = price ?? 0;
  const tax = Math.round(subtotal * 0.08);
  const totalToday = cycle === "annual" ? subtotal * 12 + tax : subtotal + tax;

  if (isCustom) {
    // Enterprise redirects to contact-sales; guard in case of direct nav
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <BackgroundEffects />
        <GlowingCursor />
        <Navbar />
        <main className="pt-20 ds-section">
          <div className="ds-container max-w-xl text-center">
            <h1 className="ds-h2 mb-4">Let's talk custom pricing</h1>
            <p className="ds-body mb-8">
              The Enterprise plan is tailored to your organization. Reach out to
              our sales team for a personalized quote.
            </p>
            <Link to="/contact-sales" className="ds-btn-primary">
              Contact sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </main>
        <PageFooter />
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <BackgroundEffects />
        <GlowingCursor />
        <Navbar />
        <main className="pt-20 ds-section">
          <div className="ds-container max-w-xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/15"
            >
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </motion.div>
            <h1 className="ds-h2 mb-4">You're all set!</h1>
            <p className="ds-body mb-2">
              Your{" "}
              <span className="font-semibold text-foreground">{tier.name}</span>{" "}
              plan trial has been activated.
            </p>
            <p className="ds-body mb-8 text-muted-foreground">
              A confirmation has been sent to {form.email || "your email"}. Your
              14-day free trial starts now.
            </p>
            <Link to="/" className="ds-btn-primary">
              Go to dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </main>
        <PageFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <SEO
        title={`Checkout — ${tier.name} Plan | Waitlist Lab`}
        description="Complete your checkout to start your 14-day free trial of Waitlist Lab. Secure, encrypted payment. Cancel anytime."
        path="/checkout"
      />
      <BackgroundEffects />
      <GlowingCursor />
      <Navbar />

      <main className="pt-20">
        <section className="ds-section">
          <div className="ds-container max-w-5xl">
            <Link
              to="/pricing"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to pricing
            </Link>

            <div className="mb-8">
              <span className="ds-eyebrow mb-3">Checkout</span>
              <h1 className="ds-h1 mb-2">Complete your order</h1>
              <p className="ds-body text-muted-foreground">
                Start your 14-day free trial. You won't be charged until your
                trial ends.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-5">
              {/* Order summary */}
              <div className="lg:col-span-2 lg:order-2">
                <div className="sticky top-24 rounded-2xl border border-border-subtle bg-surface-1 p-6 shadow-[var(--shadow-elevated)] sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="ds-icon-box">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="ds-h4">{tier.name} plan</h3>
                      <p className="text-sm text-muted-foreground">
                        {cycle === "annual"
                          ? "Billed annually"
                          : "Billed monthly"}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6 flex items-end gap-1">
                    <span className="text-2xl font-semibold text-muted-foreground">
                      $
                    </span>
                    <span className="text-4xl font-bold tracking-tight">
                      {price}
                    </span>
                    <span className="mb-1.5 text-lg text-muted-foreground">
                      /mo
                    </span>
                  </div>

                  {cycle === "annual" && (
                    <p className="mb-4 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary">
                      You save ${(tier.monthly! - tier.annual!) * 12}/year with
                      annual billing
                    </p>
                  )}

                  <div className="ds-divider mb-6" />

                  <div className="mb-6 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">
                        {cycle === "annual" ? `$${price! * 12}` : `$${price}`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax (est.)</span>
                      <span className="font-medium">${tax}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Trial discount
                      </span>
                      <span className="font-medium text-primary">
                        First 14 days free
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 flex items-center justify-between border-t border-border-subtle pt-4">
                    <span className="font-semibold">Due today</span>
                    <span className="text-xl font-bold">${totalToday}</span>
                  </div>

                  <ul className="space-y-2.5">
                    {tier.features.slice(0, 6).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    256-bit encrypted · PCI compliant
                  </div>
                </div>
              </div>

              {/* Checkout form */}
              <div className="lg:col-span-3 lg:order-1">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="rounded-2xl border border-border-subtle bg-surface-1 p-6 sm:p-8"
                >
                  {/* Account */}
                  <h3 className="ds-h4 mb-1">Account details</h3>
                  <p className="mb-5 text-sm text-muted-foreground">
                    We'll use this to create your Waitlist Lab account.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="First name"
                      value={form.firstName}
                      onChange={(v) => update("firstName", v)}
                      required
                      placeholder="Jane"
                    />
                    <Field
                      label="Last name"
                      value={form.lastName}
                      onChange={(v) => update("lastName", v)}
                      required
                      placeholder="Doe"
                    />
                  </div>
                  <div className="mt-4">
                    <Field
                      label="Work email"
                      type="email"
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      required
                      placeholder="jane@school.com"
                    />
                  </div>
                  <div className="mt-4">
                    <Field
                      label="Company / organization"
                      value={form.company}
                      onChange={(v) => update("company", v)}
                      placeholder="Bright Future Academy"
                    />
                  </div>

                  <div className="ds-divider my-8" />

                  {/* Payment */}
                  <div className="mb-5 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <h3 className="ds-h4">Payment details</h3>
                  </div>

                  <div className="mb-4">
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Card number
                    </label>
                    <input
                      required
                      inputMode="numeric"
                      value={form.cardNumber}
                      onChange={(e) =>
                        update(
                          "cardNumber",
                          e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 16)
                            .replace(/(.{4})/g, "$1 ")
                            .trim(),
                        )
                      }
                      placeholder="4242 4242 4242 4242"
                      className="ds-input font-mono"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Expiry
                      </label>
                      <input
                        required
                        value={form.expiry}
                        onChange={(e) => {
                          let v = e.target.value.replace(/\D/g, "").slice(0, 4);
                          if (v.length >= 3)
                            v = v.slice(0, 2) + "/" + v.slice(2);
                          update("expiry", v);
                        }}
                        placeholder="MM/YY"
                        className="ds-input font-mono"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        CVC
                      </label>
                      <input
                        required
                        inputMode="numeric"
                        value={form.cvc}
                        onChange={(e) =>
                          update(
                            "cvc",
                            e.target.value.replace(/\D/g, "").slice(0, 4),
                          )
                        }
                        placeholder="123"
                        className="ds-input font-mono"
                      />
                    </div>
                  </div>

                  <div className="ds-divider my-8" />

                  {/* Billing address */}
                  <h3 className="ds-h4 mb-5">Billing address</h3>

                  <div className="mb-4">
                    <Field
                      label="Street address"
                      value={form.address}
                      onChange={(v) => update("address", v)}
                      required
                      placeholder="123 Main St"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field
                      label="City"
                      value={form.city}
                      onChange={(v) => update("city", v)}
                      required
                      placeholder="Austin"
                    />
                    <Field
                      label="ZIP"
                      value={form.zip}
                      onChange={(v) => update("zip", v)}
                      required
                      placeholder="78701"
                    />
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Country
                      </label>
                      <select
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                        className="ds-input"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="ds-btn-primary mt-8 w-full text-base"
                  >
                    <Lock className="h-4 w-4" />
                    Start 14-day free trial
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" /> 14-day free
                      trial
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" /> Cancel
                      anytime
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" /> 24/7
                      customer support
                    </span>
                  </div>

                  {tier.highlighted && (
                    <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                      <Sparkles className="h-3.5 w-3.5 text-primary" />
                      Most popular plan — trusted by 500+ education businesses
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="ds-input"
      />
    </div>
  );
}
