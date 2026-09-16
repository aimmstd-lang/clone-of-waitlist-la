import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";
import { PricingCards } from "@/components/PricingCards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const PricingAndFAQ = () => {
  const comparison = [
    {
      feature: "CRM & PIPELINE MANAGEMENT",
      replaces: "Salesforce, Hubspot",
      other: "$99/MONTHLY",
    },
    {
      feature: "UNLIMITED SALES FUNNELS",
      replaces: "ClickFunnels, Clickfunnels",
      other: "$297/MONTHLY",
    },
    {
      feature: "WEBSITE BUILDER",
      replaces: "WordPress, Wix",
      other: "$29/MONTHLY",
    },
    {
      feature: "SURVEYS & FORMS",
      replaces: "Typeform, SurveyMonkey",
      other: "$49/MONTHLY",
    },
    {
      feature: "EMAIL MARKETING",
      replaces: "Mailchimp, ActiveCampaign",
      other: "$99/MONTHLY",
    },
    {
      feature: "2-WAY SMS MARKETING",
      replaces: "Twilio, Podium",
      other: "$99/MONTHLY",
    },
    {
      feature: "BOOKING & APPOINTMENTS",
      replaces: "Calendly, Acuity",
      other: "$29/MONTHLY",
    },
    {
      feature: "WORKFLOW AUTOMATIONS",
      replaces: "Zapier, Make",
      other: "$169/MONTHLY",
    },
    {
      feature: "COURSES/PRODUCTS",
      replaces: "Kajabi, Teachable",
      other: "$199/MONTHLY",
    },
    { feature: "CALL TRACKING", replaces: "CallRail", other: "$49/MONTHLY" },
    {
      feature: "REPUTATION MANAGEMENT",
      replaces: "Birdeye, Yext",
      other: "$199/MONTHLY",
    },
    {
      feature: "TRACKING & ANALYTICS",
      replaces: "Google Analytics",
      other: "$299/MONTHLY",
    },
    {
      feature: "COMMUNITIES",
      replaces: "Circle, Mighty Networks",
      other: "$89/MONTHLY",
    },
    {
      feature: "DOCUMENT SIGNING",
      replaces: "DocuSign, PandaDoc",
      other: "$47/MONTHLY",
    },
  ];

  const faqs = [
    {
      q: "What is Waitlist Lab?",
      a: "Waitlist Lab is an all-in-one marketing and CRM platform specifically designed for education and training businesses. It replaces dozens of separate tools by bringing your website, sales funnels, email marketing, SMS, bookings, and student management into one unified system.",
    },
    {
      q: "Do I need technical skills to use it?",
      a: "Not at all! Our platform is built to be user-friendly with drag-and-drop builders for websites and funnels, plus pre-built templates specifically for education businesses. If you can use email, you can use Waitlist Lab.",
    },
    {
      q: "Can I migrate from my current software?",
      a: "Yes! We make migration seamless. You can easily import your contacts, pipelines, and calendars from your existing tools with just a few clicks.",
    },
    {
      q: "Is there a long-term contract?",
      a: "No, Waitlist Lab is a month-to-month service. There are no long-term contracts or hidden cancellation fees. You can cancel your subscription at any time.",
    },
    {
      q: "Do you provide customer support?",
      a: "Absolutely. We offer comprehensive customer support, plus access to our knowledge base and an exclusive community of education business owners.",
    },
  ];

  return (
    <>
      <section
        className="py-24 bg-background overflow-hidden relative"
        aria-label="Pricing comparison and tool integrations"
        id="pricing"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 animate-fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
              Integrates with 500+ Tools
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500 mb-8 px-2">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VlPmE816zMf6pKNELvwM/media/135dd716-748d-4e0c-aea8-74069ae22bfc.svg+xml"
                alt="Quickbooks integration"
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zkiiMGG0BNg3hmiVMNdq/media/beda15df-7740-448e-846e-7c4cb1509ad5.png"
                alt="Facebook integration"
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VlPmE816zMf6pKNELvwM/media/aae08473-cd6f-4f76-bb34-d2872f46f862.svg+xml"
                alt="WhatsApp integration"
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VlPmE816zMf6pKNELvwM/media/1e8f4b6b-67eb-4cfc-8761-37829b596b4d.svg+xml"
                alt="Stripe payment integration"
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VlPmE816zMf6pKNELvwM/media/5a44b0bc-72f7-4317-8c9b-a41d30800abe.svg+xml"
                alt="LinkedIn integration"
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VlPmE816zMf6pKNELvwM/media/8d429096-7c8e-4974-bf3b-ba59c1a6e653.svg+xml"
                alt="TikTok integration"
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>

            <p className="font-semibold tracking-widest text-sm text-muted-foreground">
              AND MORE
            </p>
          </div>

          <div
            className="max-w-5xl mx-auto text-center mt-32 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-primary font-semibold tracking-wider mb-4 uppercase text-sm md:text-base">
              A one stop shop for education and training marketing
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              HUGE COST SAVINGS & EVERYTHING ALL IN ONE PLACE!
            </h2>
            <p className="text-xl text-muted-foreground mb-16 uppercase tracking-wider font-medium">
              Cancel all your expensive tools
            </p>

            <div className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border-subtle overflow-hidden mb-16 text-left shadow-[var(--shadow-elevated)]">
              <div className="overflow-x-auto custom-scrollbar">
                <div className="min-w-[640px]">
                  <div className="grid grid-cols-4 bg-primary text-primary-foreground font-bold p-4 md:p-5 text-xs md:text-base">
                    <div className="col-span-1">FEATURES</div>
                    <div className="col-span-1 text-center">REPLACES</div>
                    <div className="col-span-1 text-center">OTHER TOOLS</div>
                    <div className="col-span-1 text-center flex items-center justify-center gap-2">
                      <img
                        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/197d2227-4acc-43f1-895b-54087ee948fe.svg+xml"
                        alt="Waitlist Lab"
                        className="h-5 brightness-0"
                      />
                    </div>
                  </div>

                  {comparison.map((item, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-4 p-4 md:p-5 items-center text-xs md:text-sm transition-colors hover:bg-surface-hover ${idx % 2 === 0 ? "bg-transparent" : "bg-muted/10"}`}
                    >
                      <div className="col-span-1 font-medium pr-2">
                        {item.feature}
                      </div>
                      <div className="col-span-1 text-center text-muted-foreground text-[10px] md:text-xs">
                        {item.replaces}
                      </div>
                      <div className="col-span-1 text-center font-mono opacity-70 text-[10px] md:text-sm">
                        {item.other}
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                    </div>
                  ))}

                  <div className="grid grid-cols-4 bg-primary text-primary-foreground font-bold p-4 md:p-6 text-sm md:text-lg">
                    <div className="col-span-2 text-right pr-4">
                      TOTAL PRICE
                    </div>
                    <div className="col-span-1 text-center text-xs md:text-base">
                      $1,600+ PER MONTH
                    </div>
                    <div className="col-span-1 text-center text-xs md:text-base">
                      $97 PER MONTH
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button className="text-lg px-8 py-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold group transition-all duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:-translate-y-1">
              GET STARTED TODAY
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section className="ds-section">
        <div className="ds-container">
          <div className="mb-12 text-center">
            <span className="ds-eyebrow mb-4">Pricing</span>
            <h2 className="ds-h2 mb-4 text-balance">
              Simple, all-inclusive pricing
            </h2>
            <p className="ds-body max-w-xl mx-auto">
              Every tool included — no per-feature pricing, no hidden fees.
              Start your 14-day trial today.
            </p>
          </div>

          <PricingCards />

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Cancel anytime · No contracts ·{" "}
            <a href="/pricing" className="ds-link">
              See full pricing comparison
            </a>
          </p>
        </div>
      </section>

      <section
        className="ds-section bg-surface-1"
        aria-label="Frequently asked questions about Waitlist Lab"
        id="faq"
      >
        <div className="ds-container max-w-3xl">
          <div className="mb-12 text-center">
            <span className="ds-eyebrow mb-4">FAQ</span>
            <h2 className="ds-h2 mb-4 text-balance">
              Frequently asked questions
            </h2>
            <p className="ds-body">
              Everything you need to know about Waitlist Lab and how it can
              transform your business.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <a href="/pricing" className="ds-btn-primary">
              Get started today
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 animate-fade-up">
          <div className="max-w-4xl mx-auto bg-background/60 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-20 text-center border border-border-default shadow-[var(--shadow-elevated)]">
            <h3 className="text-primary font-semibold tracking-wider mb-4 uppercase text-sm md:text-base">
              READY TO GIVE US A GO?
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Get Started Today!
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Join hundreds of education and training businesses that have
              streamlined their marketing, reduced their software costs, and
              scaled their enrollments with Waitlist Lab.
            </p>
            <Button
              asChild
              className="text-lg px-10 py-8 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold group transition-all duration-300 shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
            >
              <Link to="/pricing">
                GET STARTED TODAY
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer
        className="py-12 bg-background border-t border-border/50 text-center text-muted-foreground text-sm"
        role="contentinfo"
      >
        <div className="container mx-auto px-4">
          <nav
            aria-label="Footer"
            className="flex flex-wrap justify-center gap-6 mb-4"
          >
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <a
              href="#features"
              className="hover:text-primary transition-colors"
            >
              Features
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          <p className="mb-2">
            Copyrights 2026 | Waitlist Lab | Terms & Conditions
          </p>
        </div>
      </footer>
    </>
  );
};
