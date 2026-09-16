import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PageFooter } from "@/components/PageFooter";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { GlowingCursor } from "@/components/GlowingCursor";
import {
  Check,
  ArrowRight,
  Calendar,
  Clock,
  Building2,
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

// Generate next 14 days, weekdays only
const getAvailableDays = () => {
  const days: { date: Date; label: string; dayNum: string; month: string }[] =
    [];
  const today = new Date();
  let count = 0;
  let offset = 1;
  while (count < 10) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      days.push({
        date: d,
        label: d.toLocaleDateString("en-US", { weekday: "short" }),
        dayNum: d.getDate().toString(),
        month: d.toLocaleDateString("en-US", { month: "short" }),
      });
      count++;
    }
    offset++;
  }
  return days;
};

export default function ContactSales() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    locations: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const days = getAvailableDays();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const canProceedToStep2 = selectedDay !== null && selectedTime !== null;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <SEO
        title="Contact Sales — Book a Demo for Multi-Location Education Businesses"
        description="Book a personalized demo of Waitlist Lab for your multi-location education or training business. Talk to our sales team about Enterprise pricing, custom onboarding, and multi-location management."
        path="/contact-sales"
        keywords="contact sales, book a demo, enterprise marketing software, multi-location education CRM, education business demo"
      />
      <BackgroundEffects />
      <GlowingCursor />
      <Navbar />

      <main className="pt-20">
        {/* Hero / header */}
        <section className="ds-section relative overflow-hidden pb-8">
          <div className="ds-container max-w-4xl text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to pricing
            </Link>
            <span className="ds-eyebrow mb-6 ds-reveal">Enterprise</span>
            <h1 className="ds-h1 mb-6 text-balance ds-reveal ds-reveal-delay-1">
              Talk to our{" "}
              <span className="text-gradient-primary">sales team</span>
            </h1>
            <p className="ds-lead mb-10 max-w-2xl mx-auto ds-reveal ds-reveal-delay-2">
              Book a personalized demo to see how Waitlist Lab can scale across
              your locations. Fill in your details and pick a time that works
              for you.
            </p>
          </div>
        </section>

        {/* Booking widget */}
        <section className="pb-20">
          <div className="ds-container max-w-3xl">
            {submitted ? (
              /* Success state */
              <div className="ds-card text-center p-8 md:p-12 ds-reveal">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h2 className="ds-h3 mb-3">Booking confirmed!</h2>
                <p className="ds-body mb-2 max-w-md mx-auto">
                  Thanks
                  {formData.name ? `, ${formData.name.split(" ")[0]}` : ""}!
                  We've received your request for:
                </p>
                <div className="my-6 inline-flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-2 px-5 py-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {selectedDay !== null && days[selectedDay]
                      ? `${days[selectedDay].label}, ${days[selectedDay].month} ${days[selectedDay].dayNum}`
                      : ""}{" "}
                    at {selectedTime}
                  </span>
                </div>
                <p className="ds-body mb-8 max-w-md mx-auto">
                  A calendar invitation and confirmation email will be sent to{" "}
                  <span className="text-foreground font-medium">
                    {formData.email}
                  </span>
                  . Our team will reach out shortly to confirm.
                </p>
                <Link to="/" className="ds-btn-secondary">
                  Back to home
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <div className="ds-card p-6 md:p-10 ds-reveal">
                {/* Step indicator */}
                <div className="mb-8 flex items-center justify-center gap-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                          step >= s
                            ? "bg-primary text-primary-foreground"
                            : "bg-surface-3 text-muted-foreground"
                        }`}
                      >
                        {step > s ? <Check className="h-4 w-4" /> : s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`h-0.5 w-8 sm:w-16 rounded-full transition-all duration-300 ${step > s ? "bg-primary" : "bg-surface-3"}`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1: Date & time */}
                {step === 1 && (
                  <div className="ds-reveal">
                    <div className="mb-6 text-center">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="ds-h4 mb-1">Pick a date & time</h2>
                      <p className="text-sm text-muted-foreground">
                        All times shown in your local timezone.
                      </p>
                    </div>

                    {/* Day picker — horizontal scroll */}
                    <div className="mb-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Select a day
                      </p>
                      <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
                        {days.map((day, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedDay(i)}
                            className={`flex-shrink-0 w-16 rounded-xl border p-3 text-center transition-all duration-200 ${
                              selectedDay === i
                                ? "border-primary bg-primary/10 shadow-[var(--glow-primary)]"
                                : "border-border-subtle bg-surface-2 hover:border-border-default"
                            }`}
                          >
                            <p className="text-xs text-muted-foreground">
                              {day.label}
                            </p>
                            <p className="text-lg font-bold text-foreground">
                              {day.dayNum}
                            </p>
                            <p className="text-[10px] text-muted-foreground">
                              {day.month}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time picker */}
                    {selectedDay !== null && (
                      <div className="ds-reveal">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Select a time
                        </p>
                        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                                selectedTime === time
                                  ? "border-primary bg-primary/10 text-primary shadow-[var(--glow-primary)]"
                                  : "border-border-subtle bg-surface-2 text-foreground/80 hover:border-border-default hover:text-foreground"
                              }`}
                            >
                              <Clock className="h-3.5 w-3.5" />
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => canProceedToStep2 && setStep(2)}
                      disabled={!canProceedToStep2}
                      className={`mt-8 w-full ${canProceedToStep2 ? "ds-btn-primary" : "ds-btn-secondary opacity-50 cursor-not-allowed"}`}
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {/* Step 2: Contact details */}
                {step === 2 && (
                  <form
                    className="ds-reveal space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStep(3);
                    }}
                  >
                    <div className="mb-2 text-center">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="ds-h4 mb-1">Your details</h2>
                      <p className="text-sm text-muted-foreground">
                        So we can prepare a tailored demo for you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Full name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Jane Smith"
                            className="w-full rounded-xl border border-border-subtle bg-surface-2 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Work email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="jane@company.com"
                            className="w-full rounded-xl border border-border-subtle bg-surface-2 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Phone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+1 (555) 000-0000"
                            className="w-full rounded-xl border border-border-subtle bg-surface-2 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Company *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            required
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            placeholder="Acme Education"
                            className="w-full rounded-xl border border-border-subtle bg-surface-2 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Number of locations
                      </label>
                      <select
                        value={formData.locations}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            locations: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-border-subtle bg-surface-2 py-3 px-4 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="1-5">1–5 locations</option>
                        <option value="6-20">6–20 locations</option>
                        <option value="21-50">21–50 locations</option>
                        <option value="50+">50+ locations</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Anything we should know?
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          placeholder="Tell us about your current setup and what you're looking to achieve..."
                          className="w-full rounded-xl border border-border-subtle bg-surface-2 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="ds-btn-secondary flex-1"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Back
                      </button>
                      <button type="submit" className="ds-btn-primary flex-1">
                        Review booking
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Step 3: Confirm */}
                {step === 3 && (
                  <div className="ds-reveal">
                    <div className="mb-6 text-center">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="ds-h4 mb-1">Confirm your booking</h2>
                      <p className="text-sm text-muted-foreground">
                        Review the details below and confirm.
                      </p>
                    </div>

                    <div className="mb-6 space-y-3 rounded-2xl border border-border-subtle bg-surface-2 p-5">
                      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                        <span className="text-sm text-muted-foreground">
                          Date & time
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {selectedDay !== null && days[selectedDay]
                            ? `${days[selectedDay].label}, ${days[selectedDay].month} ${days[selectedDay].dayNum} at ${selectedTime}`
                            : ""}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                        <span className="text-sm text-muted-foreground">
                          Name
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {formData.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                        <span className="text-sm text-muted-foreground">
                          Email
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {formData.email}
                        </span>
                      </div>
                      {formData.phone && (
                        <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                          <span className="text-sm text-muted-foreground">
                            Phone
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {formData.phone}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                        <span className="text-sm text-muted-foreground">
                          Company
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {formData.company}
                        </span>
                      </div>
                      {formData.locations && (
                        <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                          <span className="text-sm text-muted-foreground">
                            Locations
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            {formData.locations}
                          </span>
                        </div>
                      )}
                      {formData.message && (
                        <div className="pt-1">
                          <span className="mb-1 block text-sm text-muted-foreground">
                            Notes
                          </span>
                          <span className="text-sm text-foreground/80">
                            {formData.message}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="ds-btn-secondary flex-1"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="ds-btn-primary flex-1"
                      >
                        Confirm booking
                        <Check className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Trust signals below widget */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> No commitment
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> 30-minute demo
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Tailored to your
                business
              </span>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
