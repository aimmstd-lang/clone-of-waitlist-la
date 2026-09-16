import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  TrendingDown,
  Clock,
  DollarSign,
} from "lucide-react";

/* Tools that Waitlist Lab replaces — used for the interactive selector */
const TOOL_CATALOG: { name: string; price: number }[] = [
  { name: "CRM (Salesforce/HubSpot)", price: 99 },
  { name: "Funnel Builder (ClickFunnels)", price: 297 },
  { name: "Website Builder (Wix/WP)", price: 29 },
  { name: "Surveys & Forms (Typeform)", price: 49 },
  { name: "Email Marketing (Mailchimp)", price: 99 },
  { name: "SMS Marketing (Twilio/Podium)", price: 99 },
  { name: "Booking (Calendly/Acuity)", price: 29 },
  { name: "Automations (Zapier/Make)", price: 169 },
  { name: "Courses (Kajabi/Teachable)", price: 199 },
  { name: "Call Tracking (CallRail)", price: 49 },
  { name: "Reputation (Birdeye/Yext)", price: 199 },
  { name: "Analytics (advanced)", price: 299 },
  { name: "Communities (Circle)", price: 89 },
  { name: "Document Signing (DocuSign)", price: 47 },
];

const WAITLIST_LAB_PRICE = 97;

export const ROICalculator = () => {
  const [selectedTools, setSelectedTools] = useState<Set<number>>(
    new Set(TOOL_CATALOG.map((_, i) => i)),
  );
  const [teamMembers, setTeamMembers] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(35);

  const toggleTool = (idx: number) => {
    setSelectedTools((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const calculations = useMemo(() => {
    const currentToolCost = TOOL_CATALOG.filter((_, i) =>
      selectedTools.has(i),
    ).reduce((sum, t) => sum + t.price, 0);
    const monthlyToolSavings = Math.max(
      0,
      currentToolCost - WAITLIST_LAB_PRICE,
    );
    const annualToolSavings = monthlyToolSavings * 12;

    const monthlyTimeValue =
      hoursPerWeek *
      4.33 *
      hourlyRate *
      (teamMembers > 1 ? teamMembers * 0.7 : 1);
    const annualTimeValue = monthlyTimeValue * 12;

    const totalAnnualSavings = annualToolSavings + annualTimeValue;
    const monthlyEquivalent = totalAnnualSavings / 12;

    return {
      currentToolCost,
      monthlyToolSavings,
      annualToolSavings,
      monthlyTimeValue,
      annualTimeValue,
      totalAnnualSavings,
      monthlyEquivalent,
    };
  }, [selectedTools, teamMembers, hoursPerWeek, hourlyRate]);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <section
      className="ds-section bg-surface-1"
      aria-label="ROI calculator"
      id="roi-calculator"
    >
      <div className="ds-container max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="ds-eyebrow mb-4">
            <Calculator className="h-3.5 w-3.5" />
            ROI Calculator
          </span>
          <h2 className="ds-h2 mb-4 text-balance">
            See how much you'll{" "}
            <span className="text-gradient-primary">save</span>
          </h2>
          <p className="ds-body max-w-xl mx-auto">
            Select the tools you currently pay for and estimate your time
            savings. We'll calculate your total annual savings when you switch
            to Waitlist Lab.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Inputs */}
          <div className="lg:col-span-3">
            <div className="ds-card p-6 sm:p-8">
              {/* Tool selector */}
              <h3 className="ds-h4 mb-1">Which tools are you paying for?</h3>
              <p className="mb-5 text-sm text-muted-foreground">
                Toggle the tools you currently use. We'll compare against
                Waitlist Lab's {fmt(WAITLIST_LAB_PRICE)}/mo plan.
              </p>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {TOOL_CATALOG.map((tool, idx) => {
                  const active = selectedTools.has(idx);
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleTool(idx)}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ${
                        active
                          ? "border-primary/40 bg-primary/10 text-foreground"
                          : "border-border-subtle bg-surface-2 text-muted-foreground hover:border-border-default hover:text-foreground"
                      }`}
                    >
                      <span className="font-medium">{tool.name}</span>
                      <span
                        className={`font-mono text-xs ${active ? "text-primary" : "text-muted-foreground/60"}`}
                      >
                        {fmt(tool.price)}/mo
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Sliders */}
              <div className="mt-8 space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">
                      Team members
                    </label>
                    <span className="font-mono text-sm text-primary">
                      {teamMembers}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={teamMembers}
                    onChange={(e) => setTeamMembers(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">
                      Hours saved per week
                    </label>
                    <span className="font-mono text-sm text-primary">
                      {hoursPerWeek} hrs
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={40}
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">
                      Avg. hourly rate
                    </label>
                    <span className="font-mono text-sm text-primary">
                      {fmt(hourlyRate)}/hr
                    </span>
                  </div>
                  <input
                    type="range"
                    min={15}
                    max={100}
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-primary/20 bg-gradient-to-b from-surface-2 to-surface-1 p-6 shadow-[var(--glow-primary)] sm:p-8"
              >
                {/* Big number */}
                <div className="mb-6 text-center">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Estimated annual savings
                  </p>
                  <motion.p
                    key={calculations.totalAnnualSavings}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-bold text-gradient-primary sm:text-5xl"
                  >
                    {fmt(calculations.totalAnnualSavings)}
                  </motion.p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    ≈ {fmt(calculations.monthlyEquivalent)}/mo saved
                  </p>
                </div>

                {/* Breakdown */}
                <div className="space-y-4 border-t border-border-subtle pt-5">
                  <div className="flex items-start gap-3">
                    <div className="ds-icon-box h-10 w-10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        Tool cost savings
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {fmt(calculations.currentToolCost)}/mo →{" "}
                        {fmt(WAITLIST_LAB_PRICE)}/mo
                      </p>
                      <p className="mt-0.5 font-mono text-sm text-primary">
                        {fmt(calculations.annualToolSavings)}/yr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="ds-icon-box h-10 w-10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        Time value recovered
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {hoursPerWeek} hrs/wk × {teamMembers}{" "}
                        {teamMembers === 1 ? "person" : "people"}
                      </p>
                      <p className="mt-0.5 font-mono text-sm text-primary">
                        {fmt(calculations.annualTimeValue)}/yr
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 border-t border-border-subtle pt-5">
                  <Link to="/pricing" className="ds-btn-primary w-full">
                    Start saving today
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    14-day free trial · Cancel anytime
                  </p>
                </div>
              </motion.div>

              {/* Mini stat below */}
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <TrendingDown className="h-4 w-4 text-primary" />
                <span>{selectedTools.size} tools replaced with 1 platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
