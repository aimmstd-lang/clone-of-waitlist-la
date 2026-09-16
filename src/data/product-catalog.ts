import {
  TrendingUp,
  Target,
  Share2,
  FileText,
  LayoutTemplate,
  ClipboardList,
  MessageSquare,
  Inbox,
  Bot,
  Zap,
  Send,
  Mail,
  Users,
  CalendarCheck,
  CreditCard,
  Gift,
  GraduationCap,
  Star,
  Video,
  Megaphone,
  BarChart3,
  UserSearch,
  MapPin,
  Ticket,
  Package,
  Truck,
  ClipboardList as TasksIcon,
  type LucideIcon,
} from "lucide-react";

import type {
  Product,
  ProductCategory,
  ProductFeature,
  FlowStep,
  Integration,
  OutcomeStat,
  Testimonial,
  AuthorityBadge,
  GettingStartedStep,
  ProductFAQ,
} from "./product-types";

export const categories: ProductCategory[] = [
  {
    slug: "lead-generation",
    title: "Lead Generation",
    tagline: "Attract new prospects",
    icon: TrendingUp,
    description:
      "Get found by more prospective students and fill your pipeline with qualified leads.",
    longDescription:
      "Lead Generation gives you the tools to attract prospective students at scale. From SEO and paid ads to social media and content marketing, every channel feeds into one unified pipeline so you always know where your best leads come from.",
    features: [
      {
        title: "Multi-channel attribution",
        description: "See exactly which campaigns drive enrollments.",
      },
      {
        title: "Automated lead scoring",
        description: "Prioritize hot leads based on engagement signals.",
      },
      {
        title: "Unified pipeline",
        description: "Every lead source flows into one CRM pipeline.",
      },
    ],
    items: [
      {
        slug: "seo-manager",
        name: "SEO Manager",
        tagline: "Rank higher and get found organically",
        description: "Rank higher and get found organically",
        icon: TrendingUp,
        longDescription:
          "SEO Manager helps your education business rank at the top of search results. Optimize pages, track keyword positions, and get AI-powered recommendations to grow organic traffic without hiring an agency.",
        features: [
          {
            title: "Keyword rank tracking",
            description: "Monitor your positions across Google and Bing daily.",
          },
          {
            title: "On-page SEO editor",
            description: "Get real-time suggestions as you build pages.",
          },
          {
            title: "AI content recommendations",
            description:
              "Generate SEO-friendly outlines and meta tags instantly.",
          },
          {
            title: "Backlink monitoring",
            description: "Track your link profile and spot new opportunities.",
          },
        ],
        benefits: [
          "Increase organic traffic without paid ads",
          "Rank for local education keywords",
          "Save thousands on SEO agencies",
        ],
      },
      {
        slug: "ad-manager",
        name: "Ad Manager",
        tagline: "Run and track paid ad campaigns",
        description: "Run and track paid ad campaigns",
        icon: Target,
        longDescription:
          "Ad Manager lets you launch, track, and optimize paid ad campaigns across Google, Facebook, and Instagram — all from one dashboard. Connect your ad accounts, set budgets, and see which campaigns drive real enrollments.",
        features: [
          {
            title: "Cross-platform campaign builder",
            description: "Create ads for Google, Meta, and more in one place.",
          },
          {
            title: "Conversion tracking",
            description: "Attribute enrollments back to specific ad campaigns.",
          },
          {
            title: "Budget optimization",
            description:
              "AI suggestions to reallocate spend to top performers.",
          },
          {
            title: "A/B testing",
            description:
              "Test creatives and copy with automatic winner detection.",
          },
        ],
        benefits: [
          "Lower cost per lead",
          "Stop wasting budget on underperforming ads",
          "Full ROI visibility per channel",
        ],
      },
      {
        slug: "social-planner",
        name: "Social Planner",
        tagline: "Plan and schedule social posts",
        description: "Plan and schedule social posts",
        icon: Share2,
        longDescription:
          "Social Planner lets you schedule and publish content across Facebook, Instagram, LinkedIn, and Google Business Profile from a single calendar. Plan a month of content in minutes and keep your brand consistently visible.",
        features: [
          {
            title: "Unified content calendar",
            description: "Drag-and-drop scheduling across all platforms.",
          },
          {
            title: "Bulk upload",
            description: "Schedule weeks of content with a single CSV upload.",
          },
          {
            title: "Best-time suggestions",
            description: "AI recommends optimal posting times per platform.",
          },
          {
            title: "Engagement analytics",
            description: "Track likes, comments, and clicks per post.",
          },
        ],
        benefits: [
          "Save hours every week on social media",
          "Maintain a consistent brand presence",
          "Turn followers into prospective students",
        ],
      },
      {
        slug: "blogs-content",
        name: "Blogs & Content",
        tagline: "Publish SEO-friendly blog content",
        description: "Publish SEO-friendly blog content",
        icon: FileText,
        longDescription:
          "Blogs & Content gives you a full content marketing engine. Write, optimize, and publish blog posts that rank on Google and educate your audience. AI writing assistant helps you produce high-quality content in minutes.",
        features: [
          {
            title: "Drag-and-drop blog editor",
            description: "Build beautiful articles with no code.",
          },
          {
            title: "AI writing assistant",
            description: "Generate drafts, outlines, and meta descriptions.",
          },
          {
            title: "Built-in SEO scoring",
            description: "Real-time feedback on readability and keywords.",
          },
          {
            title: "Content scheduling",
            description:
              "Publish on a schedule that keeps readers coming back.",
          },
        ],
        benefits: [
          "Drive organic traffic with every post",
          "Establish authority in your niche",
          "Nurture leads with educational content",
        ],
      },
      {
        slug: "prospecting",
        name: "Prospecting",
        tagline: "Find B2B and B2I leads at scale",
        description: "Find B2B and B2I leads at scale",
        icon: UserSearch,
        longDescription:
          "Prospecting helps you discover and qualify B2B and B2I (business-to-influencer) leads at scale. Build targeted lists from a database of millions of companies and creators, enrich contacts with verified emails and social profiles, and push hot prospects straight into your CRM pipeline.",
        features: [
          {
            title: "B2B company search",
            description:
              "Filter millions of companies by industry, size, location, and revenue.",
          },
          {
            title: "B2I influencer discovery",
            description:
              "Find creators and influencers by niche, audience size, and engagement.",
          },
          {
            title: "Contact enrichment",
            description:
              "Auto-fill verified emails, phone numbers, and social profiles.",
          },
          {
            title: "One-click CRM push",
            description:
              "Send qualified prospects directly into your pipeline with tags.",
          },
        ],
        benefits: [
          "Build targeted lead lists in minutes, not weeks",
          "Reach decision-makers and influencers directly",
          "Fill your pipeline with verified, enriched contacts",
        ],
      },
      {
        slug: "listings",
        name: "Listings",
        tagline: "Manage business listings everywhere",
        description: "Manage business listings everywhere",
        icon: MapPin,
        longDescription:
          "Listings lets you publish and sync your business information across Google Business Profile, Apple Maps, Bing, Yelp, and dozens of directories from one dashboard. Keep NAP (name, address, phone) consistent everywhere, manage reviews per location, and get found by more local prospects searching for your services.",
        features: [
          {
            title: "Multi-directory sync",
            description:
              "Push your business info to Google, Apple, Bing, Yelp, and more at once.",
          },
          {
            title: "NAP consistency",
            description:
              "Automatically keep name, address, and phone identical across every directory.",
          },
          {
            title: "Location management",
            description:
              "Manage multiple locations, hours, and holiday schedules from one place.",
          },
          {
            title: "Review aggregation",
            description:
              "Monitor and respond to reviews across every listing directory.",
          },
        ],
        benefits: [
          "Rank higher in local search with consistent listings",
          "Update every directory from one dashboard",
          "Turn local searches into booked appointments",
        ],
      },
    ],
  },
  {
    slug: "lead-capture",
    title: "Lead Capture",
    tagline: "Turn visitors into leads",
    icon: LayoutTemplate,
    description:
      "Convert website traffic into qualified leads with high-converting pages, forms, and chat.",
    longDescription:
      "Lead Capture turns your website traffic into a steady stream of qualified leads. Build landing pages and funnels, deploy chat widgets, and create forms and surveys — all designed to maximize conversions and capture every opportunity.",
    features: [
      {
        title: "High-converting templates",
        description: "Start from proven, education-specific page templates.",
      },
      {
        title: "Real-time chat",
        description: "Engage visitors the moment they show interest.",
      },
      {
        title: "Smart forms",
        description:
          "Conditional logic forms that capture exactly what you need.",
      },
    ],
    items: [
      {
        slug: "websites-funnels",
        name: "Websites & Funnels",
        tagline: "Build high-converting landing pages",
        description: "Build high-converting landing pages",
        icon: LayoutTemplate,
        longDescription:
          "Websites & Funnels is a drag-and-drop builder for landing pages, sales funnels, and full websites. Choose from hundreds of education-specific templates, customize without code, and publish in minutes.",
        features: [
          {
            title: "Drag-and-drop builder",
            description: "Design pages visually with live preview.",
          },
          {
            title: "Funnel templates",
            description:
              "Pre-built funnels for enrollments, webinars, and trials.",
          },
          {
            title: "Mobile-responsive",
            description: "Every template looks perfect on any device.",
          },
          {
            title: "A/B testing",
            description: "Test page variants to maximize conversions.",
          },
        ],
        benefits: [
          "Launch pages in minutes, not weeks",
          "No developer or designer needed",
          "Higher conversion rates with proven templates",
        ],
      },
      {
        slug: "forms-surveys",
        name: "Forms & Surveys",
        tagline: "Capture info with custom forms",
        description: "Capture info with custom forms",
        icon: ClipboardList,
        longDescription:
          "Forms & Surveys lets you build intelligent forms and surveys with conditional logic. Capture exactly the information you need, qualify leads automatically, and route responses into your CRM instantly.",
        features: [
          {
            title: "Conditional logic",
            description: "Show or hide fields based on previous answers.",
          },
          {
            title: "Lead qualification",
            description: "Score and route leads based on form responses.",
          },
          {
            title: "Custom branding",
            description: "Match every form to your brand identity.",
          },
          {
            title: "Auto-responses",
            description: "Trigger instant emails or SMS on submission.",
          },
        ],
        benefits: [
          "Qualify leads before they reach your team",
          "Higher form completion with smart logic",
          "Richer data for better follow-up",
        ],
      },
      {
        slug: "chat-widgets",
        name: "Chat Widgets",
        tagline: "Engage site visitors in real time",
        description: "Engage site visitors in real time",
        icon: MessageSquare,
        longDescription:
          "Chat Widgets add a live chat experience to your website that captures visitors the moment they're ready to engage. Route chats to your team or let AI handle common questions 24/7.",
        features: [
          {
            title: "Live chat",
            description: "Real-time conversations with site visitors.",
          },
          {
            title: "AI-powered responses",
            description: "Bot handles FAQs while you focus on hot leads.",
          },
          {
            title: "Proactive triggers",
            description:
              "Start chats based on visitor behavior and time on page.",
          },
          {
            title: "Unified inbox",
            description: "All chats flow into your shared message inbox.",
          },
        ],
        benefits: [
          "Capture leads before they leave",
          "Instant responses, even after hours",
          "Higher engagement than forms alone",
        ],
      },
      {
        slug: "inbound-leads",
        name: "Inbound Leads",
        tagline: "Centralize every inbound lead source",
        description: "Centralize every inbound lead source",
        icon: Inbox,
        longDescription:
          "Inbound Leads centralizes every lead source — web forms, chat, phone, ads, and imports — into one unified inbox. Never lose a lead to a forgotten spreadsheet or disconnected tool again.",
        features: [
          {
            title: "Unified lead inbox",
            description: "Every source in one searchable view.",
          },
          {
            title: "Source attribution",
            description: "Know exactly where each lead came from.",
          },
          {
            title: "Duplicate detection",
            description: "Automatically merge repeat submissions.",
          },
          {
            title: "Instant routing",
            description: "Assign leads to the right rep automatically.",
          },
        ],
        benefits: [
          "Never lose a lead to a disconnected tool",
          "Faster response times with unified inbox",
          "Clear ROI per lead source",
        ],
      },
    ],
  },
  {
    slug: "lead-engagement",
    title: "Lead Engagement",
    tagline: "Connect across every channel",
    icon: MessageSquare,
    description:
      "Engage leads instantly across SMS, email, WhatsApp, Facebook, and AI chat.",
    longDescription:
      "Lead Engagement ensures every lead gets an instant, personalized response across every channel. From AI chatbots to multi-channel outreach, you'll connect with prospects the moment they're ready to talk.",
    features: [
      {
        title: "Unified inbox",
        description: "All messages in one conversation view.",
      },
      {
        title: "AI automation",
        description: "Bots handle routine conversations 24/7.",
      },
      {
        title: "Multi-channel",
        description: "SMS, WhatsApp, Facebook, email — all connected.",
      },
    ],
    items: [
      {
        slug: "unified-inbox",
        name: "Unified Inbox",
        tagline: "All messages in one conversation view",
        description: "All messages in one conversation view",
        icon: Inbox,
        longDescription:
          "Unified Inbox brings every conversation — SMS, email, WhatsApp, Facebook Messenger, Instagram DMs, and Google Business messages — into a single, threaded view. Your team sees the full context of every lead in one place.",
        features: [
          {
            title: "All channels, one view",
            description: "SMS, email, social DMs threaded per contact.",
          },
          {
            title: "Team assignment",
            description: "Assign conversations and track response times.",
          },
          {
            title: "Internal notes",
            description: "Collaborate behind the scenes on any conversation.",
          },
          {
            title: "Message templates",
            description: "Save and insert canned responses in one click.",
          },
        ],
        benefits: [
          "Faster response times across all channels",
          "Full conversation history per lead",
          "No messages lost between tools",
        ],
      },
      {
        slug: "ai-chat-bots",
        name: "AI Chat Bots",
        tagline: "Automated 24/7 conversational AI",
        description: "Automated 24/7 conversational AI",
        icon: Bot,
        longDescription:
          "AI Chat Bots handle conversations with your leads 24/7. Answer FAQs, book appointments, qualify leads, and route hot prospects to your team — all without human intervention until it's needed.",
        features: [
          {
            title: "Conversational AI",
            description: "Natural language responses trained on your business.",
          },
          {
            title: "Appointment booking",
            description: "Bot schedules meetings directly into your calendar.",
          },
          {
            title: "Lead qualification",
            description: "Ask qualifying questions and score responses.",
          },
          {
            title: "Human handoff",
            description: "Seamlessly transfer to a rep when needed.",
          },
        ],
        benefits: [
          "Respond to leads in seconds, 24/7",
          "Book appointments while you sleep",
          "Free your team from repetitive questions",
        ],
      },
      {
        slug: "messaging-automation",
        name: "Messaging Automation",
        tagline: "Smart workflows that respond instantly",
        description: "Smart workflows that respond instantly",
        icon: Zap,
        longDescription:
          "Messaging Automation lets you build smart workflows that respond to leads instantly. Trigger messages based on behavior, time delays, or form submissions — and nurture every lead with the right message at the right time.",
        features: [
          {
            title: "Visual workflow builder",
            description: "Drag-and-drop automation with branching logic.",
          },
          {
            title: "Behavior triggers",
            description:
              "Fire messages on page visits, form fills, or link clicks.",
          },
          {
            title: "Time-based delays",
            description: "Wait hours or days between steps for natural pacing.",
          },
          {
            title: "Multi-step sequences",
            description: "Chain SMS, email, and tasks into one flow.",
          },
        ],
        benefits: [
          "Instant responses without manual effort",
          "Consistent follow-up every time",
          "Scale engagement without scaling headcount",
        ],
      },
      {
        slug: "multi-channel-outreach",
        name: "Multi-Channel Outreach",
        tagline: "SMS, WhatsApp, Facebook & email",
        description: "SMS, WhatsApp, Facebook & email",
        icon: Send,
        longDescription:
          "Multi-Channel Outreach lets you connect with leads wherever they are — SMS, WhatsApp, Facebook Messenger, Instagram, and email. Reach more prospects, get higher response rates, and manage it all from one platform.",
        features: [
          {
            title: "SMS & WhatsApp",
            description: "Send and receive text messages globally.",
          },
          {
            title: "Social messaging",
            description: "Facebook, Instagram, and Google Business messages.",
          },
          {
            title: "Email outreach",
            description: "Personalized email sequences with tracking.",
          },
          {
            title: "Compliance tools",
            description: "Opt-out management and consent tracking built in.",
          },
        ],
        benefits: [
          "Higher response rates than email alone",
          "Meet leads on their preferred channel",
          "One platform for every messaging app",
        ],
      },
    ],
  },
  {
    slug: "nurturing",
    title: "Nurturing",
    tagline: "Build relationships at scale",
    icon: Mail,
    description:
      "Keep leads warm with automated email, SMS, and workflow sequences.",
    longDescription:
      "Nurturing helps you build relationships with leads at scale. Automated email and SMS campaigns, smart workflow sequences, and contact segmentation ensure every lead gets the right message at the right time — without manual effort.",
    features: [
      {
        title: "Automated sequences",
        description: "Multi-step nurture flows that run on autopilot.",
      },
      {
        title: "Smart segmentation",
        description: "Group leads by behavior, source, or stage.",
      },
      {
        title: "Drag-and-drop builder",
        description: "Design campaigns visually, no code needed.",
      },
    ],
    items: [
      {
        slug: "email-marketing",
        name: "Email Marketing",
        tagline: "Beautiful campaigns and automations",
        description: "Beautiful campaigns and automations",
        icon: Mail,
        longDescription:
          "Email Marketing gives you a full toolkit for designing beautiful campaigns and automated email sequences. Drag-and-drop builder, smart segmentation, and detailed analytics help you turn cold leads into enrolled students.",
        features: [
          {
            title: "Drag-and-drop email builder",
            description: "Design responsive emails with live preview.",
          },
          {
            title: "Automation sequences",
            description: "Welcome, nurture, and re-engagement flows.",
          },
          {
            title: "Smart segmentation",
            description: "Target by behavior, tags, or pipeline stage.",
          },
          {
            title: "A/B testing",
            description: "Test subject lines and content automatically.",
          },
        ],
        benefits: [
          "Higher open and click rates",
          "Automated nurture without manual sends",
          "Detailed analytics to optimize every campaign",
        ],
        flowSteps: [
          {
            preHeadline: "Connect · Step 1",
            headline: "Register or connect your email",
            description:
              "Connect an existing email address or register a new one — all in a few clicks. We handle deliverability so your messages land in the inbox, not spam.",
            bullets: [
              {
                title: "Connect any inbox",
                description:
                  "Link your existing email or register a new one instantly.",
              },
              {
                title: "Automatic DNS setup",
                description: "SPF, DKIM, and DMARC configured for you.",
              },
            ],
            trustSignal: "Inbox-ready in under 5 minutes",
            visualType: "inbox",
          },
          {
            preHeadline: "Warm Up · Step 2",
            headline: "Warm up your email",
            description:
              "Automatically build sender reputation before you send a single campaign. Our warm-up engine gradually ramps up volume so providers trust your domain.",
            bullets: [
              {
                title: "Smart warm-up schedule",
                description:
                  "Gradual volume increases tailored to your domain.",
              },
              {
                title: "Reputation monitoring",
                description: "Track deliverability score in real time.",
              },
            ],
            trustSignal: "98% inbox placement on average",
            visualType: "chart",
          },
          {
            preHeadline: "Design · Step 3",
            headline: "Write great emails",
            description:
              "Drag-and-drop builder, plain-text mode, or AI-generated copy — choose your style. Every email is responsive and on-brand.",
            bullets: [
              {
                title: "Drag-and-drop builder",
                description: "Design responsive emails with live preview.",
              },
              {
                title: "AI writing assistant",
                description: "Generate subject lines and body copy in seconds.",
              },
              {
                title: "Plain-text or HTML",
                description: "Full control over format and styling.",
              },
            ],
            trustSignal: "No design skills required",
            visualType: "editor",
          },
          {
            preHeadline: "Send · Step 4",
            headline: "Create and send campaigns",
            description:
              "Send a newsletter, schedule a campaign, or trigger automated workflows. Reach the right segment at the right time with precision.",
            bullets: [
              {
                title: "Broadcasts & newsletters",
                description: "Send to your entire list or a segment instantly.",
              },
              {
                title: "Scheduled sends",
                description: "Pick the perfect time or let AI choose.",
              },
              {
                title: "Workflow automation",
                description:
                  "Trigger emails on actions, tags, or pipeline stages.",
              },
            ],
            trustSignal: "Send to thousands in one click",
            visualType: "workflow",
          },
          {
            preHeadline: "Analyze · Step 5",
            headline: "View analytics and optimize",
            description:
              "Track every open, click, and conversion. See exactly what's working and where to improve — then optimize your next campaign for better results.",
            bullets: [
              {
                title: "Track every click",
                description:
                  "Open rates, click maps, and link-level analytics.",
              },
              {
                title: "Conversion attribution",
                description: "See which emails drive enrollments and revenue.",
              },
              {
                title: "AI optimization tips",
                description:
                  "Get recommendations to improve subject lines and timing.",
              },
            ],
            trustSignal: "Make data-driven decisions every send",
            visualType: "dashboard",
          },
        ],
      },
      {
        slug: "sms-marketing",
        name: "SMS Marketing",
        tagline: "Reach leads instantly via text",
        description: "Reach leads instantly via text",
        icon: MessageSquare,
        longDescription:
          "SMS Marketing lets you reach leads instantly with text messages that get 98% open rates. Send broadcasts, automate drip campaigns, and have two-way conversations — all from one platform.",
        features: [
          {
            title: "Bulk SMS broadcasts",
            description: "Send text campaigns to segments instantly.",
          },
          {
            title: "2-way SMS",
            description: "Reply to texts in your unified inbox.",
          },
          {
            title: "Automated drip campaigns",
            description: "Schedule multi-message SMS sequences.",
          },
          {
            title: "Compliance & opt-out",
            description: "Built-in consent tracking and opt-out management.",
          },
        ],
        benefits: [
          "98% open rate vs. 20% for email",
          "Instant delivery and response",
          "Perfect for time-sensitive offers",
        ],
      },
      {
        slug: "workflow-builder",
        name: "Workflow Builder",
        tagline: "Automate multi-step nurture sequences",
        description: "Automate multi-step nurture sequences",
        icon: Zap,
        longDescription:
          "Workflow Builder is a visual automation engine that lets you design multi-step nurture sequences. Combine email, SMS, tasks, and delays into sophisticated flows that run on autopilot — no developer needed.",
        features: [
          {
            title: "Visual flow builder",
            description: "Drag-and-drop nodes with branching logic.",
          },
          {
            title: "Multi-channel steps",
            description: "Email, SMS, calls, tasks, and waits in one flow.",
          },
          {
            title: "Conditional branching",
            description: "Route leads differently based on behavior.",
          },
          {
            title: "Goal-based exits",
            description: "Stop nurturing when a lead converts.",
          },
        ],
        benefits: [
          "Automate complex nurture without code",
          "Consistent follow-up every single time",
          "Free your team to focus on closing",
        ],
      },
      {
        slug: "contact-manager",
        name: "Contact Manager",
        tagline: "Segment and manage every lead",
        description: "Segment and manage every lead",
        icon: Users,
        longDescription:
          "Contact Manager is your centralized CRM for every lead and student. Segment contacts by behavior, tag them for targeted campaigns, and see the full history of every interaction in one profile.",
        features: [
          {
            title: "360° contact profiles",
            description: "Every interaction, note, and message in one view.",
          },
          {
            title: "Smart tags & segments",
            description: "Group contacts for targeted outreach.",
          },
          {
            title: "Custom fields",
            description: "Capture any data point specific to your business.",
          },
          {
            title: "Import & export",
            description: "Bulk import from CSV or sync with other tools.",
          },
        ],
        benefits: [
          "Never lose track of a lead's history",
          "Target campaigns with precision segments",
          "One CRM instead of scattered spreadsheets",
        ],
      },
    ],
  },
  {
    slug: "conversion",
    title: "Conversion",
    tagline: "Close more enrollments",
    icon: CalendarCheck,
    description:
      "Turn leads into paying students with bookings, payments, and pipeline tracking.",
    longDescription:
      "Conversion gives you everything you need to turn qualified leads into paying students. Self-serve appointment booking, online payment collection, pipeline management, and branded proposals — all in one place.",
    features: [
      {
        title: "Self-serve booking",
        description: "Let leads book appointments without back-and-forth.",
      },
      {
        title: "Online payments",
        description: "Accept deposits and full payments securely.",
      },
      {
        title: "Pipeline tracking",
        description: "See every deal from lead to close.",
      },
    ],
    items: [
      {
        slug: "appointments-bookings",
        name: "Appointments & Bookings",
        tagline: "Self-serve calendar scheduling",
        description: "Self-serve calendar scheduling",
        icon: CalendarCheck,
        longDescription:
          "Appointments & Bookings lets prospective students book meetings, tours, or consultations directly into your calendar. Eliminate back-and-forth emails and fill your schedule automatically.",
        features: [
          {
            title: "Self-serve calendar",
            description: "Leads pick a time from your real availability.",
          },
          {
            title: "Automated reminders",
            description: "SMS and email reminders to reduce no-shows.",
          },
          {
            title: "Round-robin scheduling",
            description: "Distribute bookings across your team evenly.",
          },
          {
            title: "Buffer times & buffers",
            description: "Set prep and travel time between meetings.",
          },
        ],
        benefits: [
          "Eliminate scheduling back-and-forth",
          "Fewer no-shows with automatic reminders",
          "Book more meetings with less effort",
        ],
      },
      {
        slug: "payment-collection",
        name: "Payment Collection",
        tagline: "Accept payments and deposits online",
        description: "Accept payments and deposits online",
        icon: CreditCard,
        longDescription:
          "Payment Collection lets you accept deposits, full payments, and recurring billing online. Secure, integrated, and seamless — get paid faster without a separate payment tool.",
        features: [
          {
            title: "Secure online payments",
            description: "Accept cards and ACH with built-in processing.",
          },
          {
            title: "Deposits & installments",
            description: "Split payments into deposits and plans.",
          },
          {
            title: "Recurring billing",
            description: "Automate monthly or weekly subscription charges.",
          },
          {
            title: "Invoicing",
            description: "Send branded invoices and track payment status.",
          },
        ],
        benefits: [
          "Get paid faster with online payments",
          "No separate payment processor needed",
          "Increase cash flow with deposits",
        ],
      },
      {
        slug: "pipelines-deals",
        name: "Pipelines & Deals",
        tagline: "Track every deal from lead to close",
        description: "Track every deal from lead to close",
        icon: Target,
        longDescription:
          "Pipelines & Deals is a visual sales pipeline that tracks every prospect from first contact to enrollment. Drag-and-drop stages, automated follow-ups, and revenue forecasting in one intuitive board.",
        features: [
          {
            title: "Visual drag-and-drop pipeline",
            description: "Move deals through stages with a simple drag.",
          },
          {
            title: "Automated stage actions",
            description: "Trigger tasks and messages when deals move.",
          },
          {
            title: "Revenue forecasting",
            description: "Project revenue based on pipeline value.",
          },
          {
            title: "Multiple pipelines",
            description: "Separate pipelines for different programs.",
          },
        ],
        benefits: [
          "Never lose track of a deal",
          "Forecast revenue with confidence",
          "Automate follow-up at every stage",
        ],
      },
      {
        slug: "proposals-quotes",
        name: "Proposals & Quotes",
        tagline: "Send branded proposals fast",
        description: "Send branded proposals fast",
        icon: FileText,
        longDescription:
          "Proposals & Quotes lets you create and send professional, branded proposals in minutes. Templates, e-signatures, and payment links built in — so prospects can sign and pay in one flow.",
        features: [
          {
            title: "Proposal templates",
            description: "Start from proven, customizable templates.",
          },
          {
            title: "E-signatures",
            description: "Legally binding signatures online.",
          },
          {
            title: "Payment links",
            description: "Attach a payment link so clients pay on sign.",
          },
          {
            title: "Tracking & analytics",
            description: "See when proposals are opened and viewed.",
          },
        ],
        benefits: [
          "Close deals faster with one-click sign and pay",
          "Professional proposals without a designer",
          "Track engagement to follow up at the right time",
        ],
      },
      {
        slug: "coupons",
        name: "Coupons",
        tagline: "Create and track discount codes",
        description: "Create and track discount codes",
        icon: Ticket,
        longDescription:
          "Coupons lets you create, distribute, and track discount codes and promotional offers across your funnels, courses, and checkout pages. Drive urgency, reward loyalty, and measure exactly how each coupon impacts revenue.",
        features: [
          {
            title: "Flexible discount types",
            description:
              "Percentage off, fixed amount, free shipping, or buy-one-get-one.",
          },
          {
            title: "Usage limits & expiry",
            description:
              "Cap redemptions per customer or total and set expiration dates.",
          },
          {
            title: "Auto-apply at checkout",
            description:
              "Codes apply instantly on funnels, courses, and product pages.",
          },
          {
            title: "Revenue tracking",
            description:
              "See redemptions, revenue influenced, and ROI per coupon.",
          },
        ],
        benefits: [
          "Boost conversions with time-sensitive offers",
          "Reward repeat students with exclusive codes",
          "Measure exactly which promotions drive revenue",
        ],
      },
    ],
  },
  {
    slug: "delivery",
    title: "Delivery",
    tagline: "Fulfill orders and deliver",
    icon: Package,
    description:
      "Manage fulfillment, order tracking, course delivery, and projects in one place.",
    longDescription:
      "Delivery brings everything that happens after a sale into one place. Fulfill physical and digital orders, track shipments and rentals, deliver online courses, and run internal projects — all without stitching together separate tools.",
    features: [
      {
        title: "Order fulfillment",
        description:
          "Process and fulfill physical, digital, and rental orders.",
      },
      {
        title: "Order tracking",
        description:
          "Track shipments, rentals, and service bookings end to end.",
      },
      {
        title: "Course delivery",
        description: "Host and deliver online courses with secure access.",
      },
      {
        title: "Project management",
        description: "Plan, assign, and track internal projects and tasks.",
      },
    ],
    items: [
      {
        slug: "order-fulfillment",
        name: "Order Fulfillment",
        tagline: "Process and ship every order",
        description: "Process and ship every order",
        icon: Package,
        group: "Fulfillment",
        longDescription:
          "Order Fulfillment lets you process and fulfill physical, digital, and rental orders from one dashboard. Manage inventory, print packing slips, and update customers automatically as orders move through fulfillment.",
        features: [
          {
            title: "Unified order dashboard",
            description:
              "Every order — physical, digital, rental — in one view.",
          },
          {
            title: "Inventory management",
            description: "Track stock levels and get low-stock alerts.",
          },
          {
            title: "Packing slips & labels",
            description:
              "Generate packing slips and shipping labels in one click.",
          },
          {
            title: "Auto status updates",
            description:
              "Notify customers automatically at each fulfillment stage.",
          },
        ],
        benefits: [
          "Fulfill orders faster from one dashboard",
          "Never oversell with real-time inventory",
          "Keep customers informed at every step",
        ],
      },
      {
        slug: "order-tracking",
        name: "Order Tracking",
        tagline: "Track shipments, rentals & services",
        description: "Track shipments, rentals & services",
        icon: Truck,
        group: "Tracking",
        longDescription:
          "Order Tracking gives your customers and team full visibility into every shipment, rental, and service booking. Track packages in transit, manage rental returns, and monitor service or class schedules — all in real time.",
        features: [
          {
            title: "Shipment tracking",
            description: "Live carrier tracking synced to each order.",
          },
          {
            title: "Rental management",
            description: "Track checkouts, due dates, and returns for rentals.",
          },
          {
            title: "Service & class scheduling",
            description: "Monitor upcoming service visits and class sessions.",
          },
          {
            title: "Customer tracking page",
            description: "A branded page where customers follow their orders.",
          },
        ],
        benefits: [
          "Reduce support tickets with self-serve tracking",
          "Never lose track of a rental or service booking",
          "Build trust with real-time order visibility",
        ],
      },
      {
        slug: "courses",
        name: "Courses",
        tagline: "Host and sell online courses",
        description: "Host and sell online courses",
        icon: GraduationCap,
        group: "Learning",
        longDescription:
          "Courses lets you build, host, and sell online courses with video lessons, downloadable resources, quizzes, and certificates. Deliver a complete learning experience without a separate LMS.",
        features: [
          {
            title: "Video lessons",
            description: "Host and stream video content securely.",
          },
          {
            title: "Quizzes & assessments",
            description: "Test knowledge with auto-graded quizzes.",
          },
          {
            title: "Completion certificates",
            description: "Award branded certificates automatically.",
          },
          {
            title: "Drip scheduling",
            description: "Release lessons on a schedule to keep pace.",
          },
        ],
        benefits: [
          "Sell courses as a new revenue stream",
          "Engaging learning experience for students",
          "No separate LMS needed",
        ],
      },
      {
        slug: "project-manager",
        name: "Project Manager",
        tagline: "Plan and track internal projects",
        description: "Plan and track internal projects",
        icon: TasksIcon,
        group: "Projects",
        longDescription:
          "Project Manager gives your team a central place to plan, assign, and track internal projects and tasks. Boards, deadlines, and dependencies keep everyone aligned without a separate project management tool.",
        features: [
          {
            title: "Kanban task boards",
            description: "Drag-and-drop tasks across stages and assign owners.",
          },
          {
            title: "Deadlines & dependencies",
            description: "Set due dates and link tasks that block each other.",
          },
          {
            title: "Team workloads",
            description: "See capacity and rebalance work across your team.",
          },
          {
            title: "Project templates",
            description: "Reuse proven workflows for repeatable projects.",
          },
        ],
        benefits: [
          "Keep every project on schedule",
          "One tool for tasks instead of a separate app",
          "Clear ownership and accountability",
        ],
      },
    ],
  },
  {
    slug: "retention-loyalty",
    title: "Retention & Loyalty",
    tagline: "Keep students coming back",
    icon: Gift,
    description:
      "Deliver courses, memberships, and loyalty programs that keep students engaged.",
    longDescription:
      "Retention & Loyalty gives you the tools to keep students engaged long after enrollment. Host courses, manage memberships, run loyalty programs, and give every student a dedicated portal — all within the same platform.",
    features: [
      {
        title: "Course hosting",
        description: "Deliver lessons, modules, and assessments.",
      },
      {
        title: "Member portals",
        description: "A dedicated hub for every student.",
      },
      {
        title: "Loyalty programs",
        description: "Reward repeat business and referrals.",
      },
    ],
    items: [
      {
        slug: "memberships",
        name: "Memberships",
        tagline: "Gated member portals and content",
        description: "Gated member portals and content",
        icon: GraduationCap,
        longDescription:
          "Memberships lets you create gated, recurring-revenue member areas. Control access with tiers, deliver exclusive content, and manage subscriptions — all without a separate membership platform.",
        features: [
          {
            title: "Tiered access levels",
            description:
              "Create multiple membership tiers with different content.",
          },
          {
            title: "Gated content delivery",
            description: "Drip content on a schedule or unlock instantly.",
          },
          {
            title: "Subscription billing",
            description: "Automate recurring membership payments.",
          },
          {
            title: "Member management",
            description: "Track active, past-due, and cancelled members.",
          },
        ],
        benefits: [
          "Recurring revenue without a separate tool",
          "Exclusive content keeps members engaged",
          "Full control over access and billing",
        ],
      },
      {
        slug: "gift-cards",
        name: "Gift Cards",
        tagline: "Sell and redeem digital gift cards",
        description: "Sell and redeem digital gift cards",
        icon: Gift,
        longDescription:
          "Gift Cards lets you sell branded digital gift cards that students can purchase and redeem for courses, memberships, classes, or products. A simple way to add a new revenue stream and turn your community into advocates who gift your services.",
        features: [
          {
            title: "Branded digital cards",
            description: "Customize designs with your logo and messaging.",
          },
          {
            title: "Flexible denominations",
            description: "Offer fixed amounts or let buyers choose the value.",
          },
          {
            title: "Auto-delivery & scheduling",
            description:
              "Email cards instantly or schedule for a special date.",
          },
          {
            title: "Redemption tracking",
            description: "Track balances, redemptions, and unused card value.",
          },
        ],
        benefits: [
          "New revenue stream with upfront cash flow",
          "Turn students into advocates who gift your services",
          "Drive new enrollments through gift recipients",
        ],
      },
      {
        slug: "loyalty-program",
        name: "Loyalty Program",
        tagline: "Reward repeat customers and referrals",
        description: "Reward repeat customers and referrals",
        icon: Gift,
        longDescription:
          "Loyalty Program lets you reward students for repeat business and referrals. Points, tiers, and automated rewards keep your community engaged and coming back.",
        features: [
          {
            title: "Points & rewards",
            description:
              "Earn points for purchases, referrals, and engagement.",
          },
          {
            title: "Tiered loyalty levels",
            description: "Unlock perks as members move up tiers.",
          },
          {
            title: "Referral rewards",
            description: "Automatic rewards when referrals convert.",
          },
          {
            title: "Reward redemption",
            description: "Members redeem points for discounts or perks.",
          },
        ],
        benefits: [
          "Increase student lifetime value",
          "Turn happy students into referrers",
          "Build a community that sticks around",
        ],
      },
      {
        slug: "client-portal",
        name: "Client Portal",
        tagline: "A dedicated hub for every student",
        description: "A dedicated hub for every student",
        icon: Users,
        longDescription:
          "Client Portal gives every student a personalized hub where they can view their courses, invoices, appointments, and messages. Reduce support tickets and increase engagement with a self-serve experience.",
        features: [
          {
            title: "Personalized dashboard",
            description: "Each student sees their own courses and info.",
          },
          {
            title: "Invoice & payment history",
            description: "Self-serve access to billing records.",
          },
          {
            title: "Appointment management",
            description: "Book and manage upcoming sessions.",
          },
          {
            title: "Secure messaging",
            description: "Chat with your team without leaving the portal.",
          },
        ],
        benefits: [
          "Fewer support tickets with self-serve access",
          "Higher engagement with a personal hub",
          "Professional experience for every student",
        ],
      },
    ],
  },
  {
    slug: "advocacy",
    title: "Advocacy",
    tagline: "Turn students into promoters",
    icon: Star,
    description:
      "Generate reviews, testimonials, and referrals that drive new enrollments.",
    longDescription:
      "Advocacy turns your happy students into your most powerful marketing channel. Automate review requests, collect video testimonials, and run referral programs that drive new enrollments on autopilot.",
    features: [
      {
        title: "Automated review requests",
        description: "Get more Google and Facebook reviews.",
      },
      {
        title: "Video testimonials",
        description: "Collect authentic stories from students.",
      },
      {
        title: "Referral tracking",
        description: "Reward advocates for sending new students.",
      },
    ],
    items: [
      {
        slug: "reputation-management",
        name: "Reputation Management",
        tagline: "Monitor and respond to reviews",
        description: "Monitor and respond to reviews",
        icon: Star,
        longDescription:
          "Reputation Management monitors your reviews across Google, Facebook, and more — all in one dashboard. Respond to feedback, track your rating, and spot trends before they impact your business.",
        features: [
          {
            title: "Unified review dashboard",
            description: "See reviews from Google, Facebook, and more.",
          },
          {
            title: "Response management",
            description: "Reply to reviews without leaving the platform.",
          },
          {
            title: "Rating tracking",
            description: "Monitor your average rating over time.",
          },
          {
            title: "Review alerts",
            description: "Get notified the moment a new review is posted.",
          },
        ],
        benefits: [
          "Protect and grow your online reputation",
          "Respond to reviews faster",
          "Spot issues before they escalate",
        ],
      },
      {
        slug: "review-requests",
        name: "Review Requests",
        tagline: "Automated Google & Facebook reviews",
        description: "Automated Google & Facebook reviews",
        icon: Star,
        longDescription:
          "Review Requests automates the process of asking happy students for reviews. Trigger requests via SMS or email at the perfect moment, and watch your Google and Facebook ratings climb.",
        features: [
          {
            title: "Automated triggers",
            description:
              "Send requests after course completion or positive feedback.",
          },
          {
            title: "SMS & email delivery",
            description: "Reach students on the channel they check most.",
          },
          {
            title: "Smart filtering",
            description:
              "Route negative feedback privately before it goes public.",
          },
          {
            title: "Template library",
            description: "Proven request templates that get results.",
          },
        ],
        benefits: [
          "More 5-star reviews on autopilot",
          "Higher local search rankings",
          "Social proof that converts new students",
        ],
      },
      {
        slug: "video-testimonials",
        name: "Video Testimonials",
        tagline: "Collect authentic video stories",
        description: "Collect authentic video stories",
        icon: Video,
        longDescription:
          "Video Testimonials lets you collect authentic, video stories from your students with a simple link. No app to download, no editing required — just real stories that build trust and drive enrollments.",
        features: [
          {
            title: "One-click recording",
            description: "Students record via a simple browser link.",
          },
          {
            title: "Guided prompts",
            description: "AI prompts guide students through their story.",
          },
          {
            title: "Auto-transcription",
            description:
              "Every video is transcribed for SEO and accessibility.",
          },
          {
            title: "Embed anywhere",
            description: "Display testimonials on your site or funnels.",
          },
        ],
        benefits: [
          "Authentic social proof that converts",
          "Stand out from competitors with text-only reviews",
          "Repurpose testimonials across marketing",
        ],
      },
      {
        slug: "referral-engine",
        name: "Referral Engine",
        tagline: "Built-in referral tracking and rewards",
        description: "Built-in referral tracking and rewards",
        icon: Megaphone,
        longDescription:
          "Referral Engine turns your best students into a referral machine. Track referrals, automate rewards, and give advocates their own unique links — all without a separate referral platform.",
        features: [
          {
            title: "Unique referral links",
            description: "Every advocate gets a trackable share link.",
          },
          {
            title: "Automatic rewards",
            description: "Trigger rewards when referrals convert.",
          },
          {
            title: "Referral dashboard",
            description: "Advocates track their referrals and rewards.",
          },
          {
            title: "Custom reward types",
            description: "Offer discounts, credits, or cash rewards.",
          },
        ],
        benefits: [
          "Lower cost per acquisition with referrals",
          "Leverage your happiest students as promoters",
          "Track every referral end-to-end",
        ],
      },
    ],
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    tagline: "Know what's working",
    icon: BarChart3,
    description:
      "Track performance, attribute enrollments, and make data-driven decisions.",
    longDescription:
      "Analytics & Reporting gives you a clear, real-time picture of what's working. Custom dashboards, attribution reporting, and call tracking help you make data-driven decisions and prove ROI to stakeholders.",
    features: [
      {
        title: "Real-time dashboards",
        description: "See performance at a glance, anytime.",
      },
      {
        title: "Attribution reporting",
        description: "Know which channels drive enrollments.",
      },
      {
        title: "Call tracking",
        description: "Record and analyze every inbound call.",
      },
    ],
    items: [
      {
        slug: "dashboards",
        name: "Dashboards",
        tagline: "Real-time performance at a glance",
        description: "Real-time performance at a glance",
        icon: BarChart3,
        longDescription:
          "Dashboards give you a real-time, visual overview of your entire marketing and sales performance. Track leads, conversions, revenue, and campaign ROI in one customizable view.",
        features: [
          {
            title: "Custom widgets",
            description:
              "Build dashboards with the metrics that matter to you.",
          },
          {
            title: "Real-time data",
            description: "See updates the moment they happen.",
          },
          {
            title: "Team performance",
            description: "Track individual and team KPIs.",
          },
          {
            title: "Export & share",
            description: "Download reports or share with stakeholders.",
          },
        ],
        benefits: [
          "Make decisions with real-time data",
          "One view of all your KPIs",
          "Share performance with your team or board",
        ],
      },
      {
        slug: "attribution-reporting",
        name: "Attribution Reporting",
        tagline: "See which channels drive enrollments",
        description: "See which channels drive enrollments",
        icon: TrendingUp,
        longDescription:
          "Attribution Reporting shows you exactly which marketing channels drive enrollments and revenue. Stop guessing and start investing in the channels that actually produce students.",
        features: [
          {
            title: "Multi-touch attribution",
            description: "Credit every touchpoint in the student journey.",
          },
          {
            title: "Channel ROI",
            description: "Compare cost per lead and per enrollment by channel.",
          },
          {
            title: "Funnel visualization",
            description: "See where leads drop off in your funnel.",
          },
          {
            title: "Custom date ranges",
            description: "Analyze any period with flexible filtering.",
          },
        ],
        benefits: [
          "Invest confidently in top-performing channels",
          "Prove marketing ROI to stakeholders",
          "Find and fix funnel bottlenecks",
        ],
      },
      {
        slug: "call-tracking",
        name: "Call Tracking",
        tagline: "Record and analyze every call",
        description: "Record and analyze every call",
        icon: BarChart3,
        longDescription:
          "Call Tracking records, transcribes, and analyzes every inbound call so you never miss a lead. See which campaigns drive calls, review call quality, and coach your team with real recordings.",
        features: [
          {
            title: "Call recording",
            description:
              "Automatically record every inbound and outbound call.",
          },
          {
            title: "AI transcription",
            description: "Read and search call transcripts instantly.",
          },
          {
            title: "Source tracking",
            description: "Attribute calls to specific campaigns or pages.",
          },
          {
            title: "Call scoring",
            description:
              "AI rates call quality and flags coaching opportunities.",
          },
        ],
        benefits: [
          "Never miss a lead from phone calls",
          "Coach your team with real recordings",
          "Attribute calls to the right campaigns",
        ],
      },
      {
        slug: "custom-reports",
        name: "Custom Reports",
        tagline: "Build reports tailored to your KPIs",
        description: "Build reports tailored to your KPIs",
        icon: FileText,
        longDescription:
          "Custom Reports lets you build reports tailored to your exact KPIs. Pull data from any part of the platform, schedule automatic delivery, and share insights with your team or stakeholders.",
        features: [
          {
            title: "Drag-and-drop builder",
            description: "Assemble reports from any data source.",
          },
          {
            title: "Scheduled delivery",
            description: "Automatically email reports on a schedule.",
          },
          {
            title: "Custom metrics",
            description: "Define and track the KPIs unique to your business.",
          },
          {
            title: "White-label export",
            description: "Brand reports with your logo and colors.",
          },
        ],
        benefits: [
          "Reports tailored to your business",
          "Automated delivery saves hours",
          "Professional, branded reporting for clients",
        ],
      },
    ],
  },
];
