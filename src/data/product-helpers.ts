import type {
  Product,
  ProductCategory,
  FlowStep,
  Integration,
  OutcomeStat,
  Testimonial,
  AuthorityBadge,
  GettingStartedStep,
  ProductFAQ,
} from "./product-types";
import { categories } from "./product-catalog";

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getProductBySlug = (categorySlug: string, productSlug: string) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.items.find((p) => p.slug === productSlug);
};

export const getAllProducts = () =>
  categories.flatMap((c) =>
    c.items.map((p) => ({
      ...p,
      categorySlug: c.slug,
      categoryTitle: c.title,
    })),
  );

/* Flow step generator — creates a user journey from product features */
const categoryStepLabels: Record<string, string[]> = {
  "lead-generation": ["Attract", "Optimize", "Publish", "Track"],
  "lead-capture": ["Build", "Deploy", "Capture", "Centralize"],
  "lead-engagement": ["Connect", "Automate", "Respond", "Reach"],
  nurturing: ["Set Up", "Design", "Automate", "Manage"],
  conversion: ["Schedule", "Collect", "Track", "Close"],
  delivery: ["Fulfill", "Track", "Deliver", "Manage"],
  "retention-loyalty": ["Create", "Deliver", "Reward", "Engage"],
  advocacy: ["Monitor", "Request", "Collect", "Track"],
  "analytics-reporting": ["Visualize", "Attribute", "Track", "Report"],
};

const categoryVisualTypes: Record<string, string[]> = {
  "lead-generation": ["chart", "editor", "social", "dashboard"],
  "lead-capture": ["form", "chat", "form", "inbox"],
  "lead-engagement": ["inbox", "chat", "workflow", "chat"],
  nurturing: ["editor", "chat", "workflow", "dashboard"],
  conversion: ["calendar", "payment", "pipeline", "editor"],
  delivery: ["dashboard", "pipeline", "video", "workflow"],
  "retention-loyalty": ["video", "dashboard", "pipeline", "dashboard"],
  advocacy: ["dashboard", "video", "chart", "dashboard"],
  "analytics-reporting": ["dashboard", "chart", "dashboard", "editor"],
};

export const getProductFlowSteps = (
  product: Product,
  categorySlug: string,
): FlowStep[] => {
  if (product.flowSteps && product.flowSteps.length > 0)
    return product.flowSteps;

  const labels = categoryStepLabels[categorySlug] || [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
  ];
  const visuals = categoryVisualTypes[categorySlug] || [
    "dashboard",
    "chart",
    "editor",
    "workflow",
  ];

  return product.features.map((feature, i) => ({
    preHeadline: `${labels[i % labels.length]} · Step ${i + 1}`,
    headline: feature.title,
    description: feature.description,
    bullets: [
      { title: feature.title, description: feature.description },
      ...(product.benefits[i % product.benefits.length]
        ? [
            {
              title: product.benefits[i % product.benefits.length],
              description: "Measured, tracked, and optimized for real results.",
            },
          ]
        : []),
    ],
    trustSignal:
      product.benefits[i % product.benefits.length] || product.tagline,
    visualType: visuals[i % visuals.length],
  }));
};

/* Product-specific integrations — only tools related to that particular product */
const productIntegrations: Record<string, Integration[]> = {
  "seo-manager": [
    { name: "Google Search Console", category: "SEO" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Ahrefs", category: "SEO" },
    { name: "SEMrush", category: "SEO" },
  ],
  "ad-manager": [
    { name: "Google Ads", category: "Advertising" },
    { name: "Facebook Ads", category: "Advertising" },
    { name: "Instagram Ads", category: "Advertising" },
    { name: "Google Analytics", category: "Analytics" },
  ],
  "social-planner": [
    { name: "Facebook", category: "Social" },
    { name: "Instagram", category: "Social" },
    { name: "LinkedIn", category: "Social" },
    { name: "Google Business Profile", category: "Social" },
  ],
  "blogs-content": [
    { name: "WordPress", category: "CMS" },
    { name: "Google Search Console", category: "SEO" },
    { name: "Grammarly", category: "Writing" },
    { name: "Unsplash", category: "Images" },
  ],
  prospecting: [
    { name: "LinkedIn", category: "B2B" },
    { name: "Apollo", category: "B2B" },
    { name: "Instagram", category: "Influencer" },
    { name: "Hunter", category: "Enrichment" },
  ],
  listings: [
    { name: "Google Business Profile", category: "Listings" },
    { name: "Apple Maps", category: "Listings" },
    { name: "Yelp", category: "Listings" },
    { name: "Bing Places", category: "Listings" },
  ],
  "websites-funnels": [
    { name: "WordPress", category: "CMS" },
    { name: "Stripe", category: "Payments" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Zapier", category: "Automation" },
  ],
  "forms-surveys": [
    { name: "Zapier", category: "Automation" },
    { name: "Mailchimp", category: "Email" },
    { name: "Stripe", category: "Payments" },
    { name: "Google Sheets", category: "Spreadsheets" },
  ],
  "chat-widgets": [
    { name: "Facebook Messenger", category: "Messaging" },
    { name: "WhatsApp", category: "Messaging" },
    { name: "Slack", category: "Internal" },
    { name: "Zapier", category: "Automation" },
  ],
  "inbound-leads": [
    { name: "Zapier", category: "Automation" },
    { name: "Facebook Lead Ads", category: "Advertising" },
    { name: "Google Forms", category: "Forms" },
    { name: "Calendly", category: "Scheduling" },
  ],
  "unified-inbox": [
    { name: "WhatsApp", category: "Messaging" },
    { name: "Facebook Messenger", category: "Messaging" },
    { name: "Instagram DMs", category: "Messaging" },
    { name: "Google Business Messages", category: "Messaging" },
  ],
  "ai-chat-bots": [
    { name: "OpenAI", category: "AI" },
    { name: "Dialogflow", category: "AI" },
    { name: "Slack", category: "Internal" },
    { name: "Zapier", category: "Automation" },
  ],
  "messaging-automation": [
    { name: "Zapier", category: "Automation" },
    { name: "Twilio", category: "SMS" },
    { name: "Mailchimp", category: "Email" },
    { name: "Webhooks", category: "Automation" },
  ],
  "multi-channel-outreach": [
    { name: "WhatsApp", category: "Messaging" },
    { name: "Facebook Messenger", category: "Messaging" },
    { name: "Instagram", category: "Social" },
    { name: "Twilio", category: "SMS" },
  ],
  "email-marketing": [
    { name: "Mailchimp", category: "Email" },
    { name: "Gmail", category: "Email" },
    { name: "Outlook", category: "Email" },
    { name: "SendGrid", category: "Email" },
  ],
  "sms-marketing": [
    { name: "Twilio", category: "SMS" },
    { name: "WhatsApp", category: "Messaging" },
    { name: "Zapier", category: "Automation" },
    { name: "Mailchimp", category: "Email" },
  ],
  "workflow-builder": [
    { name: "Zapier", category: "Automation" },
    { name: "Twilio", category: "SMS" },
    { name: "Mailchimp", category: "Email" },
    { name: "Webhooks", category: "Automation" },
  ],
  "contact-manager": [
    { name: "Google Contacts", category: "Contacts" },
    { name: "Outlook", category: "Contacts" },
    { name: "Salesforce", category: "CRM" },
    { name: "Zapier", category: "Automation" },
  ],
  "appointments-bookings": [
    { name: "Google Calendar", category: "Calendar" },
    { name: "Outlook", category: "Calendar" },
    { name: "Apple Calendar", category: "Calendar" },
    { name: "Zoom", category: "Video" },
  ],
  "payment-collection": [
    { name: "Stripe", category: "Payments" },
    { name: "PayPal", category: "Payments" },
    { name: "Square", category: "Payments" },
    { name: "QuickBooks", category: "Accounting" },
  ],
  "pipelines-deals": [
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Zapier", category: "Automation" },
    { name: "Google Sheets", category: "Spreadsheets" },
  ],
  "proposals-quotes": [
    { name: "Stripe", category: "Payments" },
    { name: "DocuSign", category: "E-Signature" },
    { name: "Google Docs", category: "Documents" },
    { name: "PandaDoc", category: "Proposals" },
  ],
  coupons: [
    { name: "Stripe", category: "Payments" },
    { name: "Shopify", category: "Ecommerce" },
    { name: "Mailchimp", category: "Email" },
    { name: "Zapier", category: "Automation" },
  ],
  "order-fulfillment": [
    { name: "Shopify", category: "Ecommerce" },
    { name: "Shippo", category: "Shipping" },
    { name: "Stripe", category: "Payments" },
    { name: "QuickBooks", category: "Accounting" },
  ],
  "order-tracking": [
    { name: "Shippo", category: "Shipping" },
    { name: "Shopify", category: "Ecommerce" },
    { name: "Stripe", category: "Payments" },
    { name: "Google Sheets", category: "Spreadsheets" },
  ],
  "project-manager": [
    { name: "Slack", category: "Internal" },
    { name: "Google Calendar", category: "Calendar" },
    { name: "Zapier", category: "Automation" },
    { name: "Google Sheets", category: "Spreadsheets" },
  ],
  "gift-cards": [
    { name: "Stripe", category: "Payments" },
    { name: "Mailchimp", category: "Email" },
    { name: "Shopify", category: "Ecommerce" },
    { name: "Zapier", category: "Automation" },
  ],
  memberships: [
    { name: "Stripe", category: "Payments" },
    { name: "Discord", category: "Community" },
    { name: "Zoom", category: "Video" },
    { name: "Zapier", category: "Automation" },
  ],
  courses: [
    { name: "Vimeo", category: "Video" },
    { name: "Zoom", category: "Video" },
    { name: "YouTube", category: "Video" },
    { name: "Stripe", category: "Payments" },
  ],
  "loyalty-program": [
    { name: "Stripe", category: "Payments" },
    { name: "Mailchimp", category: "Email" },
    { name: "Zapier", category: "Automation" },
    { name: "Google Sheets", category: "Spreadsheets" },
  ],
  "client-portal": [
    { name: "Stripe", category: "Payments" },
    { name: "Zoom", category: "Video" },
    { name: "Slack", category: "Internal" },
    { name: "Zapier", category: "Automation" },
  ],
  "reputation-management": [
    { name: "Google Business", category: "Reviews" },
    { name: "Facebook", category: "Reviews" },
    { name: "Trustpilot", category: "Reviews" },
    { name: "Yelp", category: "Reviews" },
  ],
  "review-requests": [
    { name: "Google Business", category: "Reviews" },
    { name: "Facebook", category: "Reviews" },
    { name: "Twilio", category: "SMS" },
    { name: "Mailchimp", category: "Email" },
  ],
  "video-testimonials": [
    { name: "YouTube", category: "Video" },
    { name: "Vimeo", category: "Video" },
    { name: "Zapier", category: "Automation" },
    { name: "WordPress", category: "CMS" },
  ],
  "referral-engine": [
    { name: "Stripe", category: "Payments" },
    { name: "Mailchimp", category: "Email" },
    { name: "Twilio", category: "SMS" },
    { name: "Zapier", category: "Automation" },
  ],
  dashboards: [
    { name: "Google Analytics", category: "Analytics" },
    { name: "Salesforce", category: "CRM" },
    { name: "Stripe", category: "Payments" },
    { name: "Looker", category: "BI" },
  ],
  "attribution-reporting": [
    { name: "Google Analytics", category: "Analytics" },
    { name: "Google Ads", category: "Advertising" },
    { name: "Facebook Ads", category: "Advertising" },
    { name: "HubSpot", category: "CRM" },
  ],
  "call-tracking": [
    { name: "Twilio", category: "Telephony" },
    { name: "Google Ads", category: "Advertising" },
    { name: "Zapier", category: "Automation" },
    { name: "Google Analytics", category: "Analytics" },
  ],
  "custom-reports": [
    { name: "Google Analytics", category: "Analytics" },
    { name: "Looker", category: "BI" },
    { name: "Salesforce", category: "CRM" },
    { name: "Google Sheets", category: "Spreadsheets" },
  ],
};

/* Default integrations per category (fallback) */
const categoryIntegrations: Record<string, Integration[]> = {
  "lead-generation": [
    { name: "Google Ads", category: "Advertising" },
    { name: "Facebook Ads", category: "Advertising" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Search Console", category: "SEO" },
  ],
  "lead-capture": [
    { name: "WordPress", category: "CMS" },
    { name: "Zapier", category: "Automation" },
    { name: "Stripe", category: "Payments" },
    { name: "Mailchimp", category: "Email" },
  ],
  "lead-engagement": [
    { name: "WhatsApp", category: "Messaging" },
    { name: "Facebook Messenger", category: "Messaging" },
    { name: "Instagram", category: "Social" },
    { name: "Slack", category: "Internal" },
  ],
  nurturing: [
    { name: "Mailchimp", category: "Email" },
    { name: "ActiveCampaign", category: "Automation" },
    { name: "Twilio", category: "SMS" },
    { name: "Zapier", category: "Automation" },
  ],
  conversion: [
    { name: "Stripe", category: "Payments" },
    { name: "PayPal", category: "Payments" },
    { name: "Google Calendar", category: "Calendar" },
    { name: "Outlook", category: "Calendar" },
  ],
  delivery: [
    { name: "Stripe", category: "Payments" },
    { name: "Shopify", category: "Ecommerce" },
    { name: "Shippo", category: "Shipping" },
    { name: "Zoom", category: "Video" },
  ],
  "retention-loyalty": [
    { name: "Stripe", category: "Payments" },
    { name: "Zoom", category: "Video" },
    { name: "Vimeo", category: "Video" },
    { name: "Discord", category: "Community" },
  ],
  advocacy: [
    { name: "Google Business", category: "Reviews" },
    { name: "Facebook", category: "Reviews" },
    { name: "Trustpilot", category: "Reviews" },
    { name: "Zapier", category: "Automation" },
  ],
  "analytics-reporting": [
    { name: "Google Analytics", category: "Analytics" },
    { name: "Looker", category: "BI" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
  ],
};

export const getProductIntegrations = (
  product: Product,
  categorySlug: string,
): Integration[] => {
  if (product.integrations && product.integrations.length > 0)
    return product.integrations;
  if (productIntegrations[product.slug])
    return productIntegrations[product.slug];
  return (
    categoryIntegrations[categorySlug] ||
    categoryIntegrations["lead-generation"]
  );
};

/* ==========================================================================
   PRODUCT RELATIONS — related products are product-specific, not just
   same-category siblings. Each product maps to products in OTHER categories
   that complement it (e.g. Email Marketing → SMS Marketing, Workflow Builder).
   ========================================================================== */
const productRelations: Record<string, string[]> = {
  "seo-manager": [
    "blogs-content",
    "ad-manager",
    "social-planner",
    "websites-funnels",
  ],
  "ad-manager": [
    "seo-manager",
    "social-planner",
    "forms-surveys",
    "attribution-reporting",
  ],
  "social-planner": [
    "blogs-content",
    "ad-manager",
    "reputation-management",
    "review-requests",
  ],
  "blogs-content": [
    "seo-manager",
    "social-planner",
    "email-marketing",
    "websites-funnels",
  ],
  prospecting: [
    "contact-manager",
    "multi-channel-outreach",
    "pipelines-deals",
    "email-marketing",
  ],
  listings: [
    "seo-manager",
    "reputation-management",
    "review-requests",
    "social-planner",
  ],
  "websites-funnels": [
    "forms-surveys",
    "chat-widgets",
    "seo-manager",
    "payment-collection",
  ],
  "forms-surveys": [
    "websites-funnels",
    "inbound-leads",
    "email-marketing",
    "contact-manager",
  ],
  "chat-widgets": [
    "ai-chat-bots",
    "unified-inbox",
    "messaging-automation",
    "forms-surveys",
  ],
  "inbound-leads": [
    "unified-inbox",
    "contact-manager",
    "forms-surveys",
    "messaging-automation",
  ],
  "unified-inbox": [
    "ai-chat-bots",
    "messaging-automation",
    "multi-channel-outreach",
    "inbound-leads",
  ],
  "ai-chat-bots": [
    "unified-inbox",
    "messaging-automation",
    "chat-widgets",
    "appointments-bookings",
  ],
  "messaging-automation": [
    "unified-inbox",
    "workflow-builder",
    "ai-chat-bots",
    "email-marketing",
  ],
  "multi-channel-outreach": [
    "unified-inbox",
    "sms-marketing",
    "messaging-automation",
    "contact-manager",
  ],
  "email-marketing": [
    "sms-marketing",
    "workflow-builder",
    "contact-manager",
    "messaging-automation",
  ],
  "sms-marketing": [
    "email-marketing",
    "multi-channel-outreach",
    "messaging-automation",
    "workflow-builder",
  ],
  "workflow-builder": [
    "email-marketing",
    "sms-marketing",
    "messaging-automation",
    "contact-manager",
  ],
  "contact-manager": [
    "pipelines-deals",
    "email-marketing",
    "unified-inbox",
    "inbound-leads",
  ],
  "appointments-bookings": [
    "payment-collection",
    "pipelines-deals",
    "unified-inbox",
    "ai-chat-bots",
  ],
  "payment-collection": [
    "appointments-bookings",
    "proposals-quotes",
    "pipelines-deals",
    "memberships",
  ],
  "pipelines-deals": [
    "appointments-bookings",
    "proposals-quotes",
    "contact-manager",
    "attribution-reporting",
  ],
  "proposals-quotes": [
    "payment-collection",
    "pipelines-deals",
    "contact-manager",
    "email-marketing",
  ],
  coupons: [
    "payment-collection",
    "websites-funnels",
    "email-marketing",
    "courses",
  ],
  "order-fulfillment": [
    "order-tracking",
    "payment-collection",
    "courses",
    "project-manager",
  ],
  "order-tracking": [
    "order-fulfillment",
    "payment-collection",
    "client-portal",
    "courses",
  ],
  "project-manager": [
    "order-fulfillment",
    "courses",
    "workflow-builder",
    "contact-manager",
  ],
  memberships: [
    "courses",
    "payment-collection",
    "loyalty-program",
    "client-portal",
  ],
  courses: [
    "order-fulfillment",
    "order-tracking",
    "memberships",
    "project-manager",
  ],
  "loyalty-program": [
    "referral-engine",
    "memberships",
    "review-requests",
    "email-marketing",
  ],
  "gift-cards": [
    "loyalty-program",
    "memberships",
    "payment-collection",
    "email-marketing",
  ],
  "client-portal": [
    "courses",
    "memberships",
    "appointments-bookings",
    "payment-collection",
  ],
  "reputation-management": [
    "review-requests",
    "video-testimonials",
    "social-planner",
    "referral-engine",
  ],
  "review-requests": [
    "reputation-management",
    "video-testimonials",
    "referral-engine",
    "sms-marketing",
  ],
  "video-testimonials": [
    "review-requests",
    "reputation-management",
    "referral-engine",
    "social-planner",
  ],
  "referral-engine": [
    "loyalty-program",
    "review-requests",
    "video-testimonials",
    "contact-manager",
  ],
  dashboards: [
    "attribution-reporting",
    "call-tracking",
    "custom-reports",
    "pipelines-deals",
  ],
  "attribution-reporting": [
    "dashboards",
    "call-tracking",
    "custom-reports",
    "ad-manager",
  ],
  "call-tracking": [
    "attribution-reporting",
    "dashboards",
    "custom-reports",
    "unified-inbox",
  ],
  "custom-reports": [
    "dashboards",
    "attribution-reporting",
    "call-tracking",
    "pipelines-deals",
  ],
};

export const getRelatedProducts = (
  product: Product,
  category: ProductCategory,
) => {
  const relationSlugs = productRelations[product.slug] || [];
  const allProducts = getAllProducts();
  const related = relationSlugs
    .map((slug) => allProducts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  // If we have fewer than 3 product-specific relations, fill with same-category siblings
  if (related.length < 3) {
    const existingSlugs = new Set([
      ...related.map((p) => p.slug),
      product.slug,
    ]);
    const siblings = category.items
      .filter((p) => !existingSlugs.has(p.slug))
      .map((p) => ({
        ...p,
        categorySlug: category.slug,
        categoryTitle: category.title,
      }));
    while (related.length < 4 && siblings.length > 0) {
      const next = siblings.shift();
      if (next) related.push(next);
    }
  }

  return related.slice(0, 4).map((p) => ({
    product: p as unknown as Product,
    categorySlug: p.categorySlug,
  }));
};

/* Default outcome stats per category */
const categoryOutcomes: Record<string, OutcomeStat[]> = {
  "lead-generation": [
    {
      value: "3.5x",
      label: "More qualified leads",
      description:
        "Businesses see a 3.5x increase in qualified leads within 90 days.",
    },
    {
      value: "47%",
      label: "Lower cost per lead",
      description: "Average reduction in cost per lead across all channels.",
    },
    {
      value: "12 hrs",
      label: "Saved weekly",
      description: "Time saved on manual campaign management and reporting.",
    },
  ],
  "lead-capture": [
    {
      value: "2.8x",
      label: "Higher conversion",
      description: "Landing pages convert 2.8x better than industry average.",
    },
    {
      value: "65%",
      label: "Form completion",
      description: "Smart forms achieve 65% completion rates.",
    },
    {
      value: "24/7",
      label: "Lead capture",
      description: "Chat widgets capture leads around the clock.",
    },
  ],
  "lead-engagement": [
    {
      value: "< 60s",
      label: "Response time",
      description: "Average first response time drops to under 60 seconds.",
    },
    {
      value: "3x",
      label: "Engagement rate",
      description: "Multi-channel outreach drives 3x higher engagement.",
    },
    {
      value: "40%",
      label: "More conversations",
      description: "AI chatbots handle 40% of conversations automatically.",
    },
  ],
  nurturing: [
    {
      value: "98%",
      label: "Inbox placement",
      description:
        "Warm-up and deliverability tools ensure 98% inbox placement.",
    },
    {
      value: "2.5x",
      label: "Open rates",
      description: "Segmented campaigns achieve 2.5x higher open rates.",
    },
    {
      value: "5x",
      label: "ROI on nurture",
      description: "Automated nurture sequences deliver 5x ROI on average.",
    },
  ],
  conversion: [
    {
      value: "35%",
      label: "Fewer no-shows",
      description: "Automated reminders reduce no-shows by 35%.",
    },
    {
      value: "2x",
      label: "Faster payments",
      description: "Online payment collection gets you paid 2x faster.",
    },
    {
      value: "28%",
      label: "Higher close rate",
      description: "Pipeline tracking lifts close rates by 28%.",
    },
  ],
  delivery: [
    {
      value: "3x",
      label: "Faster fulfillment",
      description: "Unified order processing fulfills orders 3x faster.",
    },
    {
      value: "60%",
      label: "Fewer support tickets",
      description: "Self-serve tracking cuts order inquiries by 60%.",
    },
    {
      value: "100%",
      label: "Delivery visibility",
      description: "Track every shipment, rental, and course in real time.",
    },
  ],
  "retention-loyalty": [
    {
      value: "45%",
      label: "Higher retention",
      description: "Member portals and courses boost retention by 45%.",
    },
    {
      value: "2.3x",
      label: "Lifetime value",
      description: "Loyalty programs increase student LTV by 2.3x.",
    },
    {
      value: "60%",
      label: "More referrals",
      description: "Engaged members refer 60% more new students.",
    },
  ],
  advocacy: [
    {
      value: "4x",
      label: "More reviews",
      description: "Automated requests generate 4x more Google reviews.",
    },
    {
      value: "0.8",
      label: "Star rating lift",
      description: "Average rating improvement within 6 months.",
    },
    {
      value: "3x",
      label: "Referral revenue",
      description: "Referral engines drive 3x more word-of-mouth revenue.",
    },
  ],
  "analytics-reporting": [
    {
      value: "100%",
      label: "Attribution clarity",
      description: "See exactly which channels drive every enrollment.",
    },
    {
      value: "8 hrs",
      label: "Saved weekly",
      description:
        "Automated reports save 8 hours of manual analysis per week.",
    },
    {
      value: "2x",
      label: "Faster decisions",
      description:
        "Real-time dashboards enable 2x faster data-driven decisions.",
    },
  ],
};

export const getProductOutcomes = (
  product: Product,
  categorySlug: string,
): OutcomeStat[] => {
  if (product.outcomes && product.outcomes.length > 0) return product.outcomes;
  return categoryOutcomes[categorySlug] || categoryOutcomes["lead-generation"];
};

/* Default testimonials per category */
const categoryTestimonials: Record<string, Testimonial[]> = {
  default: [
    {
      quote:
        "We replaced five separate tools with this one platform. Our team finally has a single source of truth for every lead and student.",
      author: "Sarah Mitchell",
      role: "Director",
      company: "BrightPath Academy",
      metric: "3.2x",
      metricLabel: "More enrollments",
    },
    {
      quote:
        "The automation alone saves us 15 hours a week. We're responding to leads in seconds instead of hours, and our conversion rates show it.",
      author: "James Chen",
      role: "Founder",
      company: "SkillForge Training",
      metric: "15 hrs",
      metricLabel: "Saved weekly",
    },
    {
      quote:
        "I was paying over $1,600 a month for a dozen tools. Now I pay a fraction of that and everything actually works together.",
      author: "Maria Rodriguez",
      role: "Owner",
      company: "LearnWell Institute",
      metric: "$1,500",
      metricLabel: "Saved monthly",
    },
  ],
};

export const getProductTestimonials = (product: Product): Testimonial[] => {
  if (product.testimonials && product.testimonials.length > 0)
    return product.testimonials;
  return categoryTestimonials.default;
};

/* Default authority badges */
const defaultAuthority: AuthorityBadge[] = [
  {
    label: "99.9% Uptime",
    description: "Enterprise-grade infrastructure with guaranteed uptime.",
  },
  {
    label: "SOC 2 Type II",
    description: "Audited and certified for security and data protection.",
  },
  {
    label: "GDPR Compliant",
    description: "Full compliance with EU data protection regulations.",
  },
  {
    label: "12,000+ Businesses",
    description: "Trusted by education and training businesses worldwide.",
  },
];

export const getProductAuthority = (product: Product): AuthorityBadge[] => {
  if (product.authority && product.authority.length > 0)
    return product.authority;
  return defaultAuthority;
};

/* Default getting started steps */
const categoryGettingStarted: Record<string, GettingStartedStep[]> = {
  default: [
    {
      title: "Start your 14-day trial",
      description: "Cancel anytime. Get instant access to every feature.",
    },
    {
      title: "Import your existing data",
      description:
        "Migrate contacts, pipelines, and calendars in a few clicks.",
    },
    {
      title: "Customize your setup",
      description:
        "Use our templates or build from scratch with drag-and-drop tools.",
    },
    {
      title: "Launch and grow",
      description: "Go live and start seeing results within the first week.",
    },
  ],
};

export const getProductGettingStarted = (
  product: Product,
): GettingStartedStep[] => {
  if (product.gettingStarted && product.gettingStarted.length > 0)
    return product.gettingStarted;
  return categoryGettingStarted.default;
};

/* Default product FAQs */
const categoryFAQs: Record<string, ProductFAQ[]> = {
  default: [
    {
      question: "Do I need any technical skills to use this?",
      answer:
        "Not at all. Every tool is built with drag-and-drop builders and pre-made templates designed for education businesses. If you can use email, you can use this.",
    },
    {
      question: "Can I migrate from my current tools?",
      answer:
        "Yes. You can import contacts, pipelines, and calendars from your existing tools in a few clicks. Our team is also available to help with larger migrations.",
    },
    {
      question: "Is there a long-term contract?",
      answer:
        "No. Waitlist Lab is month-to-month with no contracts or cancellation fees. You can cancel anytime.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Every product is included in your single $97/month subscription. No per-feature pricing, no hidden fees, no upsells.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide live chat support, a comprehensive knowledge base, video tutorials, and an active community of education business owners.",
    },
  ],
};

export const getProductFAQs = (product: Product): ProductFAQ[] => {
  if (product.faqs && product.faqs.length > 0) return product.faqs;
  return categoryFAQs.default;
};
