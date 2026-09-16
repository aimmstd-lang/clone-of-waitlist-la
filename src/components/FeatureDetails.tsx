import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import * as SimpleIcons from "simple-icons";

/* ------------------------------------------------------------------ */
/*  REAL brand logos via simple-icons (bundled SVG paths + brand hex)  */
/*  Falls back to Clearbit Logo API for niche brands not in the package */
/*  Rendered inside circular badges, grayed out, hover to color         */
/* ------------------------------------------------------------------ */

// Brand → { simpleIcon key, domain for Clearbit fallback, brand hex color }
const BRAND_DATA: Record<string, { si?: string; domain: string; hex: string }> =
  {
    ClickFunnels: {
      si: "siClickfunnels",
      domain: "clickfunnels.com",
      hex: "#e63a2e",
    },
    Leadpages: { si: "siLeadpages", domain: "leadpages.com", hex: "#00b4d8" },
    Instapage: { si: "siInstapage", domain: "instapage.com", hex: "#2d2dff" },
    Typeform: { si: "siTypeform", domain: "typeform.com", hex: "#262627" },
    Calendly: { si: "siCalendly", domain: "calendly.com", hex: "#006bff" },
    "Acuity Scheduling": {
      si: "siAcuityscheduling",
      domain: "acuityscheduling.com",
      hex: "#19a3b3",
    },
    ActiveCampaign: {
      si: "siActivecampaign",
      domain: "activecampaign.com",
      hex: "#356ae6",
    },
    Mailchimp: { si: "siMailchimp", domain: "mailchimp.com", hex: "#ffe01b" },
    Twilio: { si: "siTwilio", domain: "twilio.com", hex: "#f22f46" },
    HubSpot: { si: "siHubspot", domain: "hubspot.com", hex: "#ff7a59" },
    Intercom: { si: "siIntercom", domain: "intercom.com", hex: "#1f8ded" },
    Drift: { si: "siDrift", domain: "drift.com", hex: "#ff5c00" },
    "Clara Labs": { domain: "claralabs.com", hex: "#5d3fd3" },
    Salesforce: {
      si: "siSalesforce",
      domain: "salesforce.com",
      hex: "#00a1e0",
    },
    Pipedrive: { si: "siPipedrive", domain: "pipedrive.com", hex: "#1a1a1a" },
    "Monday.com": { si: "siMonday", domain: "monday.com", hex: "#ff3d00" },
    Stripe: { si: "siStripe", domain: "stripe.com", hex: "#635bff" },
    DocuSign: { si: "siDocusign", domain: "docusign.com", hex: "#cdd62e" },
    Kajabi: { si: "siKajabi", domain: "kajabi.com", hex: "#f5a623" },
    Teachable: { si: "siTeachable", domain: "teachable.com", hex: "#008bf0" },
    Thinkific: { si: "siThinkific", domain: "thinkific.com", hex: "#7b61ff" },
    "Circle.so": { domain: "circle.so", hex: "#5d3fd3" },
    Skool: { si: "siSkool", domain: "skool.com", hex: "#ff5c00" },
    Shopify: { si: "siShopify", domain: "shopify.com", hex: "#95bf47" },
    WooCommerce: {
      si: "siWoocommerce",
      domain: "woocommerce.com",
      hex: "#7f54b3",
    },
    Gumroad: { si: "siGumroad", domain: "gumroad.com", hex: "#ff90e8" },
    SamCart: { domain: "samcart.com", hex: "#1a1a1a" },
  };

// Render a real brand icon from simple-icons SVG path data
const BrandIcon = ({
  brand,
  className,
}: {
  brand: string;
  className?: string;
}) => {
  const data = BRAND_DATA[brand];
  if (!data?.si) return null;
  const icon = (SimpleIcons as Record<string, { path: string; title: string }>)[
    data.si
  ];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-label={brand}
    >
      <path d={icon.path} />
    </svg>
  );
};

// Overlapping circular logo badges with REAL brand logos, grayed out
const Replaces = ({ tools }: { tools: string[] }) => (
  <div className="mt-6 flex items-center gap-3">
    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      Replaces
    </p>
    <div className="flex -space-x-2.5">
      {tools.map((t) => {
        const data = BRAND_DATA[t];
        if (!data) return null;
        const hasSI =
          data.si && (SimpleIcons as Record<string, unknown>)[data.si];
        return (
          <div
            key={t}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background opacity-40 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0"
            style={{ backgroundColor: data.hex }}
            title={t}
          >
            {hasSI ? (
              <BrandIcon brand={t} className="h-5 w-5 text-white" />
            ) : (
              <img
                src={`https://logo.clearbit.com/${data.domain}`}
                alt={t}
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export const FeatureDetails = () => {
  const sections = [
    {
      title: "Capture New Leads",
      prehead: "Stop losing students to slow follow-up",
      subtitle: "Get the Attention of Interested Students",
      image:
        "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/f2945800-bfce-4b1b-94d5-e7a85f6c263a.gif",
      reverse: false,
      items: [
        {
          title: "Create Engaging Websites, Funnels, & Landing Pages:",
          desc: "Easily develop comprehensive websites with custom menus or build focused landing pages designed to attract prospective students and families.",
        },
        {
          title: "Drag & Drop Surveys and Forms:",
          desc: "Effortlessly gather important information using built-in surveys and forms. Integrate them directly with our page builder or embed them on your school's existing website.",
        },
        {
          title: "Streamlined Event Scheduling:",
          desc: "Simplify the process of booking campus tours, open houses, and other important events with our integrated calendar. Manage and schedule visits seamlessly, all within the platform.",
        },
      ],
      replaces: [
        "ClickFunnels",
        "Leadpages",
        "Instapage",
        "Typeform",
        "Calendly",
      ],
    },
    {
      title: "Nurture Leads Into Students",
      prehead: "Never let a hot lead go cold again",
      subtitle: "Turn Interests into Committed Applications",
      image:
        "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/e3aba88c-cd8e-46c3-aa2b-e73dcf8ca0f9.gif",
      reverse: true,
      items: [
        {
          title: "Easily Customize Your Follow-Up Campaigns:",
          desc: "Automate personalized follow-ups to engage prospective students and families. Use multi-channel campaigns to keep your communication timely and effective.",
        },
        {
          title: "Create Multi-Channel Campaigns:",
          desc: "Connect with leads through Phone Calls, Voicemail Messages, SMS/MMS, Emails, and even Facebook Messenger. Reach them through their preferred communication method.",
        },
        {
          title: "Two-Way Communication on Any Device:",
          desc: "Use our mobile app to interact with leads on any device. Ensure smooth communication, whether they're on a smartphone, tablet, or computer.",
        },
      ],
      replaces: [
        "ActiveCampaign",
        "Mailchimp",
        "Twilio",
        "HubSpot",
        "Intercom",
      ],
    },
    {
      title: "AI-Driven Event & Appointment Scheduling",
      prehead: "Fill your calendar on autopilot",
      subtitle: "Turn Interests into Committed Applications",
      image:
        "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/4938b58e-7240-42b1-8d9e-d6725709c3bf.gif",
      reverse: false,
      items: [
        {
          title: "Effortless Appointment Booking:",
          desc: "Automatically schedule campus tours, consultations, and meetings directly into your calendar without manual input.",
        },
        {
          title: "AI-Powered Engagement Conversations:",
          desc: "Create text-based interactions to automatically book appointments, with no need for manual follow-up.",
        },
        {
          title: "Customizable Messaging:",
          desc: "Use our campaign builder to tailor your messaging to fit your business's branding and communication needs.",
        },
      ],
      replaces: ["Calendly", "Acuity Scheduling", "Drift", "Clara Labs"],
    },
    {
      title: "Secure More Enrollments",
      prehead: "Close more students with less effort",
      subtitle: "Manage Each Stage Of Enrollment Till Onboarding",
      image:
        "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/636b9561-5ba4-4b60-9ad9-f7f10929ab37.gif",
      reverse: true,
      items: [
        {
          title: "Manage Your Enrollment Process:",
          desc: "Use our Pipeline Management tool to track where each student lead is in the enrollment process.",
        },
        {
          title: "Collect Payments Easily:",
          desc: "Integrate with Stripe to handle payments for tuition, fees, and other school-related services directly on your website or booking forms.",
        },
        {
          title: "Comprehensive Analytics & Reports:",
          desc: "View all your enrollment data and financial reports in one place. Monitor lead progress and revenue at each stage of the process",
        },
      ],
      replaces: ["Salesforce", "Pipedrive", "Monday.com", "Stripe", "DocuSign"],
    },
    {
      title: "Create Membership Areas",
      prehead: "Keep students engaged long after they enroll",
      subtitle: "Create A Place For Your Students To Hang Out Online",
      image:
        "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/217c8ade-741c-482a-89dd-6c1d79365245.gif",
      reverse: false,
      items: [
        {
          title: "Create Membership Areas Complete Course Management:",
          desc: "Build and manage full courses with unlimited video hosting and no restrictions on the number of students.",
        },
        {
          title: "Offer Free and Paid Courses:",
          desc: "Easily provide both free and paid courses, all from one platform.",
        },
        {
          title: "Unlimited Access:",
          desc: "Create unlimited courses, enrollments, and student groups. Perfect for managing your school's educational programs or client offerings.",
        },
      ],
      replaces: ["Kajabi", "Teachable", "Thinkific", "Circle.so", "Skool"],
    },
    {
      title: "Sell Products Online",
      prehead: "Turn your knowledge into revenue",
      subtitle: "Create A Place For Your Students To Hang Out Online",
      image:
        "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/aef9eb0b-4a95-40c2-92f3-68ffbdded3ce.gif",
      reverse: true,
      items: [
        {
          title: "Easy Product Listings:",
          desc: "Quickly add and manage educational products, school supplies, and merchandise on your site.",
        },
        {
          title: "Customizable Storefront:",
          desc: "Create a personalized online store that reflects your school's brand and provides a seamless shopping experience for parents and students.",
        },
        {
          title: "Real-Time Sales Tracking:",
          desc: "Monitor sales performance and inventory levels with detailed analytics to keep track of your store's success.",
        },
      ],
      replaces: ["Shopify", "WooCommerce", "Gumroad", "SamCart"],
    },
  ];

  return (
    <section
      className="py-24 bg-card"
      aria-label="Detailed feature walkthrough"
      id="feature-details"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-32">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-12 lg:gap-24 items-center animate-fade-up ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              <div className="flex-1 w-full relative flex justify-center lg:justify-start">
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
                <img
                  src={section.image}
                  alt={`${section.title} — ${section.subtitle}`}
                  className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-none h-auto relative z-10 rounded-2xl border border-border-subtle shadow-[var(--shadow-elevated)] object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 w-full">
                {/* Preheadline */}
                <span className="ds-eyebrow mb-4">{section.prehead}</span>

                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight mt-4">
                  {section.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 font-medium">
                  {section.subtitle}
                </p>

                <div className="space-y-6 mb-10">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="text-lg px-8 py-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold group transition-all duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:-translate-y-1"
                >
                  <Link to="/pricing">
                    GET STARTED TODAY
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                {/* Trust signal: tools this replaces */}
                <Replaces tools={section.replaces} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
