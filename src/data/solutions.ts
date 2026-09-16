import {
  GraduationCap,
  Brain,
  Users,
  BookOpen,
  Wrench,
  School,
  Building2,
  Languages,
  Music,
  Dumbbell,
  Palette,
  Baby,
  Trophy,
  Briefcase,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import type {
  FlowStep,
  Integration,
  OutcomeStat,
  Testimonial,
  AuthorityBadge,
  GettingStartedStep,
  ProductFAQ,
} from "./products";

export interface Solution {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  group: string;
  heroImage: string;
  benefits: string[];
  flowSteps: FlowStep[];
  integrations: Integration[];
  outcomes: OutcomeStat[];
  testimonials: Testimonial[];
  authority: AuthorityBadge[];
  gettingStarted: GettingStartedStep[];
  faqs: ProductFAQ[];
  relatedProductSlugs: string[];
}

export const solutions: Solution[] = [
  /* ================================================================ */
  /* 1. ONLINE COURSE CREATORS */
  /* ================================================================ */
  {
    slug: "online-course-creators",
    name: "Online Course Creators",
    tagline:
      "Sell courses, host lessons, and automate student onboarding — all in one place.",
    description:
      "Everything you need to launch, sell, and scale your online courses without stitching together a dozen tools.",
    longDescription:
      "Build beautiful course pages, process payments, deliver gated content, and automate student onboarding — all from a single dashboard designed for course creators who want to focus on teaching, not tech.",
    icon: GraduationCap,
    group: "Creators & Coaches",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/62d57e3b-a8c6-48d7-89f9-8e1d06efda9a.png",
    benefits: [
      "Host and sell unlimited courses with drag-and-drop lesson builders",
      "Automate student onboarding with welcome sequences and drip schedules",
      "Collect payments and subscriptions with built-in checkout and Stripe",
      "Track student progress, completion rates, and revenue in real time",
      "Engage students with email campaigns, SMS reminders, and community forums",
    ],
    flowSteps: [
      {
        preHeadline: "Build · Step 1",
        headline: "Create your course",
        description:
          "Use the drag-and-drop lesson builder to structure modules, upload videos, and add downloadable resources.",
        bullets: [
          {
            title: "Drag-and-drop lesson builder",
            description:
              "Arrange modules and lessons visually — no coding required.",
          },
          {
            title: "Host video, audio, and PDFs",
            description:
              "Upload your content directly or embed from Vimeo and YouTube.",
          },
          {
            title: "Drip-release scheduling",
            description:
              "Release lessons on a schedule to keep students engaged.",
          },
        ],
        trustSignal: "Unlimited courses and students — no per-seat fees.",
        visualType: "video",
      },
      {
        preHeadline: "Sell · Step 2",
        headline: "Set up your sales funnel",
        description:
          "Build a high-converting landing page, connect Stripe, and launch your checkout in minutes.",
        bullets: [
          {
            title: "One-click checkout",
            description:
              "Stripe and PayPal built in — no separate payment processor needed.",
          },
          {
            title: "Sales funnel builder",
            description:
              "Lead capture page → thank you page → upsell, all in one flow.",
          },
          {
            title: "Coupons and payment plans",
            description:
              "Offer discounts, installments, and subscription pricing.",
          },
        ],
        trustSignal:
          "Average creator launches their first course in under 48 hours.",
        visualType: "payment",
      },
      {
        preHeadline: "Automate · Step 3",
        headline: "Onboard students automatically",
        description:
          "New enrollments trigger a welcome email sequence, grant course access, and send login details — instantly.",
        bullets: [
          {
            title: "Welcome email automation",
            description:
              "New students get a personalized onboarding sequence automatically.",
          },
          {
            title: "Progress-based triggers",
            description:
              "Send nudges when students fall behind or celebrate completions.",
          },
          {
            title: "SMS reminders",
            description:
              "Reduce dropout with text reminders for new lessons and deadlines.",
          },
        ],
        trustSignal: "Automated onboarding saves 10+ hours per cohort.",
        visualType: "workflow",
      },
      {
        preHeadline: "Scale · Step 4",
        headline: "Track and optimize revenue",
        description:
          "See enrollment trends, revenue, completion rates, and student engagement in one dashboard.",
        bullets: [
          {
            title: "Revenue analytics",
            description:
              "Track MRR, course sales, refund rates, and lifetime value.",
          },
          {
            title: "Student progress tracking",
            description: "See completion rates and identify at-risk students.",
          },
          {
            title: "Attribution reporting",
            description:
              "Know exactly which marketing channel drives each enrollment.",
          },
        ],
        trustSignal:
          "Creators see 2.5x revenue growth within 90 days on average.",
        visualType: "dashboard",
      },
    ],
    integrations: [
      { name: "Stripe", category: "Payments" },
      { name: "Vimeo", category: "Video Hosting" },
      { name: "Zoom", category: "Live Sessions" },
      { name: "Mailchimp", category: "Email" },
    ],
    outcomes: [
      {
        value: "2.5x",
        label: "Revenue growth",
        description:
          "Course creators see 2.5x revenue growth within 90 days of switching.",
      },
      {
        value: "48 hrs",
        label: "To launch",
        description:
          "Average time from signup to publishing your first course.",
      },
      {
        value: "10 hrs",
        label: "Saved per cohort",
        description: "Automated onboarding eliminates manual student setup.",
      },
    ],
    testimonials: [
      {
        quote:
          "I was paying for Teachable, ConvertKit, Calendly, and Stripe separately. Now it's all in one place and my students get a way better experience.",
        author: "Jessica Walsh",
        role: "Course Creator",
        company: "Design Mastery Academy",
        metric: "2.5x",
        metricLabel: "Revenue growth",
      },
      {
        quote:
          "The automated onboarding alone saved me 10 hours a week. My students get instant access and a welcome sequence — I just focus on creating content.",
        author: "Marcus Lee",
        role: "Founder",
        company: "CodeCraft Courses",
        metric: "10 hrs",
        metricLabel: "Saved weekly",
      },
      {
        quote:
          "I launched my first course in under 48 hours. The funnel builder and checkout were so intuitive — I didn't need a developer at all.",
        author: "Priya Sharma",
        role: "Instructor",
        company: "YogaFlow Online",
        metric: "48 hrs",
        metricLabel: "To launch",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description:
          "Your courses are always available with enterprise-grade hosting.",
      },
      {
        label: "SCORM Compliant",
        description: "Supports standard e-learning content formats.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Payment processing meets the highest security standards.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling student data globally.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description:
          "Cancel anytime. Get instant access to the course builder.",
      },
      {
        title: "Build your first course",
        description:
          "Use our templates or start from scratch with the drag-and-drop builder.",
      },
      {
        title: "Connect Stripe",
        description:
          "Link your payment processor and set up your checkout in minutes.",
      },
      {
        title: "Launch and enroll",
        description:
          "Publish your course, share your funnel, and start enrolling students.",
      },
    ],
    faqs: [
      {
        question: "Can I host both video and text-based courses?",
        answer:
          "Yes. You can upload video files, embed from Vimeo or YouTube, add PDFs, create text lessons, and even host live Zoom sessions — all within the same course.",
      },
      {
        question: "Do you charge per student or per course?",
        answer:
          "No. Every plan includes unlimited courses and unlimited students. You keep 100% of your revenue — we don't take a cut of your sales.",
      },
      {
        question: "Can I offer payment plans and subscriptions?",
        answer:
          "Absolutely. You can set up one-time payments, installments, monthly subscriptions, and even drip-released content for membership-style courses.",
      },
      {
        question: "How does automated student onboarding work?",
        answer:
          "When a student purchases your course, they automatically receive a welcome email, login credentials, and access to the content. You can also trigger drip schedules and progress-based emails.",
      },
      {
        question: "Can I migrate my existing courses from another platform?",
        answer:
          "Yes. We support importing from Teachable, Thinkific, Kajabi, and other platforms. Our team will help you migrate your content and student data at no cost.",
      },
    ],
    relatedProductSlugs: [
      "courses",
      "memberships",
      "email-marketing",
      "websites-funnels",
    ],
  },

  /* ================================================================ */
  /* 2. COACHING & CONSULTING */
  /* ================================================================ */
  {
    slug: "coaching-consulting",
    name: "Coaching & Consulting",
    tagline:
      "Book sessions, manage clients, and scale your coaching practice — without the admin overhead.",
    description:
      "From scheduling to payments to client follow-ups, run your entire coaching practice from one dashboard.",
    longDescription:
      "Stop juggling Calendly, Stripe, Google Sheets, and your email. Manage every client relationship, session, and payment from a single platform built for coaches and consultants who bill for their time.",
    icon: Brain,
    group: "Creators & Coaches",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/aa83eeb4-0335-4ff4-aa90-ad84b59ab6b1.png",
    benefits: [
      "Automated session booking with calendar sync and smart reminders",
      "Process payments and packages with built-in invoicing and Stripe",
      "Track every client relationship in a unified CRM pipeline",
      "Automate follow-ups, homework, and check-ins between sessions",
      "Build sales funnels that turn leads into booked coaching calls",
    ],
    flowSteps: [
      {
        preHeadline: "Capture · Step 1",
        headline: "Turn leads into booked calls",
        description:
          "Build a landing page with an embedded booking calendar so prospects schedule directly — no back-and-forth emails.",
        bullets: [
          {
            title: "Smart booking calendar",
            description:
              "Clients see your real-time availability and book instantly.",
          },
          {
            title: "Automated intake forms",
            description: "Collect pre-call questionnaires when they book.",
          },
          {
            title: "Lead capture funnels",
            description:
              "Turn cold traffic into discovery calls with a proven funnel template.",
          },
        ],
        trustSignal:
          "Coaches see 40% more booked calls with embedded scheduling.",
        visualType: "calendar",
      },
      {
        preHeadline: "Manage · Step 2",
        headline: "Track every client in one CRM",
        description:
          "See every client's history, notes, session count, and payment status in a single pipeline view.",
        bullets: [
          {
            title: "Client pipeline",
            description:
              "Move clients from prospect → active → retained with visual stages.",
          },
          {
            title: "Session notes and history",
            description:
              "Log notes after every call and track progress over time.",
          },
          {
            title: "Package tracking",
            description:
              "See how many sessions each client has used and remaining.",
          },
        ],
        trustSignal: "Never lose track of a client relationship again.",
        visualType: "pipeline",
      },
      {
        preHeadline: "Bill · Step 3",
        headline: "Get paid automatically",
        description:
          "Send invoices, process payments, and set up recurring billing for coaching packages — all automated.",
        bullets: [
          {
            title: "Automated invoicing",
            description:
              "Invoices sent and paid automatically after each session.",
          },
          {
            title: "Recurring billing",
            description: "Set up monthly retainers and multi-session packages.",
          },
          {
            title: "Payment reminders",
            description: "Automatic follow-ups for overdue invoices.",
          },
        ],
        trustSignal: "Get paid 2x faster with automated billing.",
        visualType: "payment",
      },
      {
        preHeadline: "Scale · Step 4",
        headline: "Automate follow-ups and homework",
        description:
          "Send session summaries, homework assignments, and check-in emails automatically between sessions.",
        bullets: [
          {
            title: "Post-session automation",
            description:
              "Automatically send a summary and action items after each call.",
          },
          {
            title: "Homework delivery",
            description: "Drip worksheets and resources on a schedule.",
          },
          {
            title: "Re-engagement sequences",
            description:
              "Win back past clients with automated nurture campaigns.",
          },
        ],
        trustSignal: "Automated follow-ups increase client retention by 35%.",
        visualType: "workflow",
      },
    ],
    integrations: [
      { name: "Google Calendar", category: "Calendar" },
      { name: "Zoom", category: "Video Calls" },
      { name: "Stripe", category: "Payments" },
      { name: "Calendly", category: "Scheduling" },
    ],
    outcomes: [
      {
        value: "40%",
        label: "More booked calls",
        description:
          "Embedded scheduling increases discovery call bookings by 40%.",
      },
      {
        value: "2x",
        label: "Faster payments",
        description:
          "Automated invoicing gets you paid 2x faster than manual billing.",
      },
      {
        value: "35%",
        label: "Higher retention",
        description:
          "Automated follow-ups keep clients engaged between sessions.",
      },
    ],
    testimonials: [
      {
        quote:
          "I was losing clients because I couldn't keep up with the admin. Now booking, billing, and follow-ups are all automated — I just coach.",
        author: "David Kim",
        role: "Business Coach",
        company: "ScaleUp Coaching",
        metric: "35%",
        metricLabel: "Higher retention",
      },
      {
        quote:
          "My clients book themselves, pay automatically, and get a follow-up email after every session. I've cut 12 hours of admin work per week.",
        author: "Rachel Torres",
        role: "Executive Coach",
        company: "LeadWith Purpose",
        metric: "12 hrs",
        metricLabel: "Saved weekly",
      },
      {
        quote:
          "The CRM pipeline is a game-changer. I can see exactly where every client is, what they've paid, and when their next session is.",
        author: "Tom Anderson",
        role: "Consultant",
        company: "GrowthLab Consulting",
        metric: "2x",
        metricLabel: "Faster payments",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description:
          "Your booking calendar and client data are always available.",
      },
      {
        label: "HIPAA-Ready",
        description:
          "Secure handling of sensitive client conversations and notes.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Payment processing meets the highest security standards.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling client data across regions.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description:
          "Cancel anytime. Set up your coaching dashboard in minutes.",
      },
      {
        title: "Connect your calendar",
        description:
          "Sync Google or Outlook calendar so clients can book instantly.",
      },
      {
        title: "Create coaching packages",
        description:
          "Set up single sessions, multi-session packages, and monthly retainers.",
      },
      {
        title: "Launch your booking funnel",
        description: "Share your scheduling link and start taking bookings.",
      },
    ],
    faqs: [
      {
        question: "Can I sync with my existing Google or Outlook calendar?",
        answer:
          "Yes. Two-way calendar sync works with Google Calendar, Outlook, and Apple Calendar. Clients see your real-time availability and bookings appear instantly on your calendar.",
      },
      {
        question: "Can I sell coaching packages, not just single sessions?",
        answer:
          "Absolutely. You can create multi-session packages, monthly retainers, and even subscription-based coaching programs with automatic recurring billing.",
      },
      {
        question: "How do automated follow-ups work?",
        answer:
          "After each session, the platform can automatically send a summary email, homework assignment, or check-in message. You customize the templates and the triggers.",
      },
      {
        question: "Can I run group coaching programs?",
        answer:
          "Yes. You can book group sessions, manage cohorts, and deliver group content through the same platform — with individual progress tracking for each participant.",
      },
      {
        question: "Do I need a separate video call tool?",
        answer:
          "Zoom integrates natively, so sessions can launch directly from the platform. You can also use Google Meet or any other video tool — the booking link includes the meeting details automatically.",
      },
    ],
    relatedProductSlugs: [
      "appointments-bookings",
      "pipelines-deals",
      "email-marketing",
      "payment-collection",
    ],
  },

  /* ================================================================ */
  /* 3. MEMBERSHIP COMMUNITIES */
  /* ================================================================ */
  {
    slug: "membership-communities",
    name: "Membership Communities",
    tagline:
      "Run paid memberships with gated content, forums, and recurring billing — all automated.",
    description:
      "Build a thriving membership community with gated content, discussion forums, and recurring revenue.",
    longDescription:
      "Launch and manage a paid membership community with gated content, member directories, discussion forums, and automated billing. Keep members engaged with drip content, email sequences, and community events.",
    icon: Users,
    group: "Creators & Coaches",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/7fcd5d01-7991-4e93-9d33-96a6a3422b73.png",
    benefits: [
      "Gate content behind membership tiers with flexible access controls",
      "Run discussion forums and member directories natively",
      "Automate recurring billing, renewals, and failed payment recovery",
      "Drip-release content to keep members engaged month after month",
      "Track member activity, engagement, and churn in real time",
    ],
    flowSteps: [
      {
        preHeadline: "Build · Step 1",
        headline: "Create your membership tiers",
        description:
          "Set up multiple membership levels with different pricing, content access, and perks.",
        bullets: [
          {
            title: "Tiered access control",
            description:
              "Free, basic, premium — gate content by membership level.",
          },
          {
            title: "Recurring billing",
            description:
              "Monthly or annual subscriptions with automatic renewals.",
          },
          {
            title: "Free trial setup",
            description:
              "Offer 7-day or 14-day free trials to boost conversions.",
          },
        ],
        trustSignal: "Memberships with free trials convert 60% higher.",
        visualType: "payment",
      },
      {
        preHeadline: "Engage · Step 2",
        headline: "Launch your community space",
        description:
          "Create discussion forums, member directories, and gated content libraries.",
        bullets: [
          {
            title: "Discussion forums",
            description:
              "Members can post, comment, and connect with each other.",
          },
          {
            title: "Member directory",
            description: "Members create profiles and network with peers.",
          },
          {
            title: "Gated content library",
            description: "Organize videos, downloads, and resources by tier.",
          },
        ],
        trustSignal: "Active communities retain members 3x longer.",
        visualType: "dashboard",
      },
      {
        preHeadline: "Automate · Step 3",
        headline: "Drip content and nurture members",
        description:
          "Release content on a schedule and send engagement emails to keep members active.",
        bullets: [
          {
            title: "Drip content scheduling",
            description:
              "Release new content weekly to keep members coming back.",
          },
          {
            title: "Engagement automations",
            description: "Email inactive members before they churn.",
          },
          {
            title: "Failed payment recovery",
            description:
              "Automatically retry failed charges and send update links.",
          },
        ],
        trustSignal: "Automated dunning recovers 70% of failed payments.",
        visualType: "workflow",
      },
      {
        preHeadline: "Scale · Step 4",
        headline: "Track retention and churn",
        description:
          "Monitor member activity, engagement scores, and churn signals in real time.",
        bullets: [
          {
            title: "Engagement analytics",
            description:
              "See who's active, who's fading, and who's about to cancel.",
          },
          {
            title: "MRR and LTV tracking",
            description:
              "Track monthly recurring revenue and member lifetime value.",
          },
          {
            title: "Churn prediction",
            description: "Get alerts when members show disengagement signals.",
          },
        ],
        trustSignal: "Reduce churn by 45% with proactive engagement.",
        visualType: "chart",
      },
    ],
    integrations: [
      { name: "Stripe", category: "Payments" },
      { name: "Discord", category: "Community" },
      { name: "Zoom", category: "Live Events" },
      { name: "Mailchimp", category: "Email" },
    ],
    outcomes: [
      {
        value: "45%",
        label: "Lower churn",
        description:
          "Proactive engagement automations reduce membership churn by 45%.",
      },
      {
        value: "70%",
        label: "Payment recovery",
        description:
          "Automated dunning recovers 70% of failed subscription payments.",
      },
      {
        value: "3x",
        label: "Longer retention",
        description: "Active community features keep members 3x longer.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our membership churn dropped by nearly half after we started using the engagement automations. Members who used to quietly cancel now get a nudge before they leave.",
        author: "Alicia Brooks",
        role: "Community Founder",
        company: "The Creator Circle",
        metric: "45%",
        metricLabel: "Lower churn",
      },
      {
        quote:
          "The failed payment recovery alone pays for the platform. We were losing thousands in involuntary churn — now it's automatically recovered.",
        author: "Kevin Park",
        role: "Membership Director",
        company: "ProFitness Members",
        metric: "70%",
        metricLabel: "Payment recovery",
      },
      {
        quote:
          "I replaced Circle, Stripe, and ConvertKit with this one platform. My members get a better experience and I save $400/month on tool costs.",
        author: "Sofia Mendez",
        role: "Founder",
        company: "Writers' Guild Hub",
        metric: "$400",
        metricLabel: "Saved monthly",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description: "Your community is always accessible to members.",
      },
      {
        label: "SOC 2 Type II",
        description: "Audited and certified for member data security.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Subscription billing meets payment security standards.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling member data globally.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description: "Cancel anytime. Set up your membership in minutes.",
      },
      {
        title: "Create membership tiers",
        description:
          "Define your pricing, access levels, and free trial options.",
      },
      {
        title: "Build your content library",
        description: "Upload videos, downloads, and resources — gate by tier.",
      },
      {
        title: "Launch and invite members",
        description: "Share your signup page and start accepting members.",
      },
    ],
    faqs: [
      {
        question: "Can I offer different membership tiers?",
        answer:
          "Yes. You can create unlimited tiers with different pricing, content access, and perks. Members can upgrade or downgrade between tiers automatically.",
      },
      {
        question: "How does failed payment recovery work?",
        answer:
          "When a subscription payment fails, the platform automatically retries the charge after 1, 3, and 7 days. Members also receive an email with a link to update their card — recovering up to 70% of failed payments.",
      },
      {
        question: "Can I integrate with Discord or Slack?",
        answer:
          "Yes. Discord integrates natively so you can sync membership status with Discord roles. Members who cancel automatically lose access to your Discord server.",
      },
      {
        question: "Can I drip-release content?",
        answer:
          "Absolutely. You can schedule content to release on specific dates or relative to a member's join date — keeping members engaged month after month.",
      },
      {
        question: "How do I track member engagement?",
        answer:
          "The dashboard shows each member's last login, content viewed, forum posts, and engagement score. You get alerts when members show disengagement signals so you can intervene before they cancel.",
      },
    ],
    relatedProductSlugs: [
      "memberships",
      "courses",
      "loyalty-program",
      "email-marketing",
    ],
  },

  /* ================================================================ */
  /* 4. TUTORING CENTERS */
  /* ================================================================ */
  {
    slug: "tutoring-centers",
    name: "Tutoring Centers",
    tagline:
      "Schedule sessions, track progress, and bill families — all from one platform.",
    description:
      "Manage your tutoring center's scheduling, student progress, parent communication, and billing in one place.",
    longDescription:
      "Run your tutoring center efficiently with session scheduling, student progress tracking, automated parent updates, and recurring billing — all designed for multi-tutor, multi-subject operations.",
    icon: BookOpen,
    group: "Schools & Academies",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/eecc8d71-3910-403b-bb29-dae742d223b0.png",
    benefits: [
      "Schedule sessions across multiple tutors, subjects, and locations",
      "Track student progress with automated reports and milestone tracking",
      "Send automated parent updates via email and SMS",
      "Bill families with recurring invoicing and online payment collection",
      "Capture new students with lead forms and enrollment funnels",
    ],
    flowSteps: [
      {
        preHeadline: "Enroll · Step 1",
        headline: "Capture and enroll new students",
        description:
          "Build lead forms on your website that automatically create student profiles and trigger onboarding.",
        bullets: [
          {
            title: "Lead capture forms",
            description:
              "Website forms collect inquiries and create contacts automatically.",
          },
          {
            title: "Assessment scheduling",
            description: "New leads book a placement assessment online.",
          },
          {
            title: "Enrollment pipeline",
            description: "Track every lead from inquiry to enrolled student.",
          },
        ],
        trustSignal:
          "Tutoring centers see 3x more inquiries with online lead forms.",
        visualType: "form",
      },
      {
        preHeadline: "Schedule · Step 2",
        headline: "Manage sessions across tutors",
        description:
          "Schedule one-on-one and group sessions with calendar sync, conflict detection, and automated reminders.",
        bullets: [
          {
            title: "Multi-tutor calendar",
            description:
              "See all tutors' availability and assign sessions visually.",
          },
          {
            title: "Automated reminders",
            description:
              "Students and parents get SMS and email reminders automatically.",
          },
          {
            title: "Recurring session booking",
            description:
              "Set up weekly sessions that repeat without manual scheduling.",
          },
        ],
        trustSignal: "Automated reminders reduce no-shows by 35%.",
        visualType: "calendar",
      },
      {
        preHeadline: "Track · Step 3",
        headline: "Monitor student progress",
        description:
          "Log session notes, track milestones, and generate progress reports for parents automatically.",
        bullets: [
          {
            title: "Session notes",
            description:
              "Tutors log what was covered and student performance after each session.",
          },
          {
            title: "Milestone tracking",
            description:
              "Track progress toward goals and flag students who need extra support.",
          },
          {
            title: "Automated progress reports",
            description:
              "Parents receive weekly or monthly summaries automatically.",
          },
        ],
        trustSignal:
          "Parents are 3x more likely to renew with regular progress updates.",
        visualType: "dashboard",
      },
      {
        preHeadline: "Bill · Step 4",
        headline: "Collect payments from families",
        description:
          "Send invoices, process online payments, and manage package billing — all automated.",
        bullets: [
          {
            title: "Recurring invoicing",
            description:
              "Monthly tuition billed automatically with online payment.",
          },
          {
            title: "Package tracking",
            description:
              "Track session packages and alert families when credits run low.",
          },
          {
            title: "Payment reminders",
            description: "Automatic follow-ups for overdue invoices.",
          },
        ],
        trustSignal: "Online payment collection gets you paid 2x faster.",
        visualType: "payment",
      },
    ],
    integrations: [
      { name: "Google Calendar", category: "Calendar" },
      { name: "Stripe", category: "Payments" },
      { name: "Twilio", category: "SMS" },
      { name: "Zoom", category: "Online Sessions" },
    ],
    outcomes: [
      {
        value: "3x",
        label: "More inquiries",
        description:
          "Online lead forms generate 3x more student inquiries than phone-only.",
      },
      {
        value: "35%",
        label: "Fewer no-shows",
        description:
          "Automated SMS and email reminders reduce session no-shows by 35%.",
      },
      {
        value: "2x",
        label: "Faster payments",
        description:
          "Online invoicing and payment collection get you paid 2x faster.",
      },
    ],
    testimonials: [
      {
        quote:
          "We went from scheduling everything by phone to fully automated booking. Our no-show rate dropped by over a third just from the SMS reminders.",
        author: "Jennifer Hayes",
        role: "Director",
        company: "MathBoost Tutoring",
        metric: "35%",
        metricLabel: "Fewer no-shows",
      },
      {
        quote:
          "Parents love the automatic progress reports. We used to write them manually — now they go out weekly without us lifting a finger.",
        author: "Robert Singh",
        role: "Owner",
        company: "Reading Partners KC",
        metric: "3x",
        metricLabel: "More inquiries",
      },
      {
        quote:
          "Managing 12 tutors used to be chaos. Now everything is in one calendar with automated reminders and billing. We've saved 20 hours a week.",
        author: "Lisa Chang",
        role: "Operations Manager",
        company: "StudySmart Centers",
        metric: "20 hrs",
        metricLabel: "Saved weekly",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description: "Your scheduling and student data are always available.",
      },
      {
        label: "FERPA Compliant",
        description:
          "Student data handled in compliance with education privacy laws.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Family payment data secured to the highest standards.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling student and family data.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description: "Cancel anytime. Set up your tutoring center dashboard.",
      },
      {
        title: "Add your tutors and subjects",
        description:
          "Create tutor profiles, set availability, and assign subjects.",
      },
      {
        title: "Import existing students",
        description: "Migrate your current student roster and family contacts.",
      },
      {
        title: "Launch your booking page",
        description: "Share your scheduling link and start taking enrollments.",
      },
    ],
    faqs: [
      {
        question: "Can I manage multiple tutors and subjects?",
        answer:
          "Yes. You can create profiles for every tutor, set their availability by subject, and assign sessions visually. The calendar shows all tutors in one view with conflict detection.",
      },
      {
        question: "How do automated parent updates work?",
        answer:
          "After each session, tutors log notes in the platform. You can schedule automatic weekly or monthly progress reports that are emailed to parents — no manual writing required.",
      },
      {
        question: "Can I offer both in-person and online sessions?",
        answer:
          "Absolutely. The scheduling system supports both in-person and Zoom sessions. Online sessions automatically generate a meeting link that's included in the booking confirmation and reminders.",
      },
      {
        question: "How does package billing work?",
        answer:
          "You can sell session packages (e.g., 10 sessions) and the platform tracks how many have been used. Families get automatic alerts when they're running low, and you can trigger a renewal invoice automatically.",
      },
      {
        question: "Is student data secure and FERPA-compliant?",
        answer:
          "Yes. The platform is FERPA-compliant and uses enterprise-grade encryption for all student data. Access is role-based, so tutors only see the students they're assigned to.",
      },
    ],
    relatedProductSlugs: [
      "appointments-bookings",
      "forms-surveys",
      "payment-collection",
      "sms-marketing",
    ],
  },

  /* ================================================================ */
  /* 5. TRADE & VOCATIONAL */
  /* ================================================================ */
  {
    slug: "trade-vocational",
    name: "Trade & Vocational",
    tagline:
      "Manage cohorts, certifications, and enrollment funnels for your trade school.",
    description:
      "Run your trade or vocational school with cohort management, certification tracking, and enrollment funnels.",
    longDescription:
      "From managing training cohorts to tracking certifications and processing enrollment payments, run your entire trade school operation from a single platform built for hands-on education programs.",
    icon: Wrench,
    group: "Schools & Academies",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/db5e6466-37b2-4d72-b8f7-4f91ae9811f1.png",
    benefits: [
      "Manage training cohorts with start dates, rosters, and progress tracking",
      "Track certifications and compliance requirements automatically",
      "Build enrollment funnels that convert prospects into registered students",
      "Process tuition payments with flexible payment plans and financing",
      "Automate student communications from enrollment through completion",
    ],
    flowSteps: [
      {
        preHeadline: "Recruit · Step 1",
        headline: "Build your enrollment funnel",
        description:
          "Create landing pages for each program that capture leads and guide them through the enrollment process.",
        bullets: [
          {
            title: "Program landing pages",
            description:
              "Dedicated pages for each trade program with enrollment CTAs.",
          },
          {
            title: "Lead capture forms",
            description:
              "Collect prospect info and program interest automatically.",
          },
          {
            title: "Follow-up automation",
            description:
              "New leads get an instant text and email with next steps.",
          },
        ],
        trustSignal:
          "Trade schools see 3x more qualified applicants with automated follow-up.",
        visualType: "form",
      },
      {
        preHeadline: "Enroll · Step 2",
        headline: "Process enrollments and payments",
        description:
          "Collect applications, process deposits, and set up tuition payment plans — all online.",
        bullets: [
          {
            title: "Online enrollment forms",
            description:
              "Digital applications with document upload and e-signatures.",
          },
          {
            title: "Flexible payment plans",
            description:
              "Offer installments, financing, and GI Bill-compatible billing.",
          },
          {
            title: "Deposit collection",
            description:
              "Secure online deposits to hold student spots in cohorts.",
          },
        ],
        trustSignal: "Online enrollment reduces processing time by 60%.",
        visualType: "payment",
      },
      {
        preHeadline: "Train · Step 3",
        headline: "Manage cohorts and certifications",
        description:
          "Track student progress through each program module and manage certification requirements.",
        bullets: [
          {
            title: "Cohort management",
            description:
              "Organize students by cohort with start dates and module schedules.",
          },
          {
            title: "Certification tracking",
            description:
              "Track which certifications each student has completed.",
          },
          {
            title: "Attendance logging",
            description:
              "Record attendance and flag students at risk of falling behind.",
          },
        ],
        trustSignal:
          "Digital certification tracking eliminates compliance headaches.",
        visualType: "pipeline",
      },
      {
        preHeadline: "Graduate · Step 4",
        headline: "Track completion and job placement",
        description:
          "Monitor graduation rates, certification pass rates, and job placement outcomes.",
        bullets: [
          {
            title: "Completion analytics",
            description:
              "Track graduation rates and certification pass rates by program.",
          },
          {
            title: "Job placement tracking",
            description:
              "Log graduate employment outcomes for accreditation reporting.",
          },
          {
            title: "Alumni engagement",
            description:
              "Keep in touch with graduates for referrals and continuing education.",
          },
        ],
        trustSignal: "Accreditation-ready reporting with one-click exports.",
        visualType: "dashboard",
      },
    ],
    integrations: [
      { name: "Stripe", category: "Payments" },
      { name: "DocuSign", category: "E-Signature" },
      { name: "Google Sheets", category: "Reporting" },
      { name: "Twilio", category: "SMS" },
    ],
    outcomes: [
      {
        value: "3x",
        label: "More applicants",
        description:
          "Automated follow-up funnels generate 3x more qualified applicants.",
      },
      {
        value: "60%",
        label: "Faster enrollment",
        description:
          "Online forms and payment processing reduce enrollment time by 60%.",
      },
      {
        value: "100%",
        label: "Compliance tracking",
        description:
          "Automated certification tracking ensures 100% compliance readiness.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our enrollment process went from 2 weeks to 2 days. Applications, deposits, and payment plans are all online now — no more paper forms.",
        author: "Michael Brennan",
        role: "Director",
        company: "Apex Welding Academy",
        metric: "60%",
        metricLabel: "Faster enrollment",
      },
      {
        quote:
          "Certification tracking used to be a spreadsheet nightmare. Now it's automated and we're always audit-ready. Our accreditor was impressed.",
        author: "Diane Foster",
        role: "Registrar",
        company: "Northwest Electrical Training",
        metric: "100%",
        metricLabel: "Compliance tracking",
      },
      {
        quote:
          "The enrollment funnel brought in 3x more qualified applicants in our first semester. The automated text follow-ups make all the difference.",
        author: "Carlos Mendoza",
        role: "Owner",
        company: "IronForge Trades School",
        metric: "3x",
        metricLabel: "More applicants",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description:
          "Your enrollment and certification data are always available.",
      },
      {
        label: "ACCSC-Compatible",
        description:
          "Reporting formats designed for vocational school accreditation.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Tuition payment processing meets security standards.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling student records.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description: "Cancel anytime. Set up your trade school dashboard.",
      },
      {
        title: "Create your programs",
        description:
          "Define each program, cohort schedule, and certification requirements.",
      },
      {
        title: "Build enrollment funnels",
        description: "Create landing pages and forms for each program.",
      },
      {
        title: "Launch and recruit",
        description:
          "Share your enrollment links and start processing applications.",
      },
    ],
    faqs: [
      {
        question: "Can I track certifications and compliance requirements?",
        answer:
          "Yes. The platform tracks each student's certification status, expiry dates, and compliance requirements. You can generate accreditation reports with one click, showing completion rates, pass rates, and job placement outcomes.",
      },
      {
        question: "Can I offer payment plans for tuition?",
        answer:
          "Absolutely. You can set up installment plans, monthly payments, and even integrate with financing providers. Deposits and full tuition payments are processed online with automatic invoicing.",
      },
      {
        question: "How does cohort management work?",
        answer:
          "You create cohorts with start dates, module schedules, and student rosters. Each student's progress through the modules is tracked individually, and you can see at a glance who's on track and who needs support.",
      },
      {
        question: "Can I handle digital enrollment forms and e-signatures?",
        answer:
          "Yes. Enrollment applications include document upload and e-signature capabilities via DocuSign integration. Everything is stored digitally and can be exported for accreditation audits.",
      },
      {
        question: "Does this work for GI Bill and VA-funded programs?",
        answer:
          "The payment system supports custom billing arrangements including VA-funded programs. You can set up separate billing tracks for self-pay, financed, and VA-funded students.",
      },
    ],
    relatedProductSlugs: [
      "forms-surveys",
      "payment-collection",
      "pipelines-deals",
      "sms-marketing",
    ],
  },

  /* ================================================================ */
  /* 6. K-12 & PRIVATE SCHOOLS */
  /* ================================================================ */
  {
    slug: "k12-private-schools",
    name: "K-12 & Private Schools",
    tagline:
      "Admissions, parent communication, and enrollment pipelines — all in one platform.",
    description:
      "Streamline admissions, parent communication, and enrollment for your private school.",
    longDescription:
      "Manage your private school's admissions pipeline, parent communication, enrollment processes, and event registration from a single platform designed for K-12 administrators.",
    icon: School,
    group: "Schools & Academies",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/fe534e6b-2d7c-40f1-8df6-fb84221d9670.png",
    benefits: [
      "Track admissions pipelines from inquiry through enrollment",
      "Automate parent communication with email and SMS broadcasts",
      "Manage open house registrations and school event bookings",
      "Process enrollment forms and tuition payments online",
      "Maintain family records with secure, role-based access",
    ],
    flowSteps: [
      {
        preHeadline: "Attract · Step 1",
        headline: "Capture prospective families",
        description:
          "Build inquiry forms and landing pages that capture family interest and trigger automated follow-up.",
        bullets: [
          {
            title: "Inquiry forms",
            description:
              "Website forms capture family info and student interests automatically.",
          },
          {
            title: "Open house registration",
            description:
              "Families book campus tours and open house events online.",
          },
          {
            title: "Automated follow-up",
            description:
              "New inquiries get an instant email with next steps and tour options.",
          },
        ],
        trustSignal:
          "Schools see 40% more inquiry-to-tour conversions with automated follow-up.",
        visualType: "form",
      },
      {
        preHeadline: "Admit · Step 2",
        headline: "Manage the admissions pipeline",
        description:
          "Track every family from inquiry through application, assessment, and enrollment decision.",
        bullets: [
          {
            title: "Visual pipeline",
            description:
              "See every applicant's stage — inquiry, tour, application, accepted, enrolled.",
          },
          {
            title: "Document collection",
            description:
              "Families upload transcripts, immunization records, and forms online.",
          },
          {
            title: "Automated status updates",
            description:
              "Parents get notified at each stage of the admissions process.",
          },
        ],
        trustSignal: "Digital admissions reduce processing time by 50%.",
        visualType: "pipeline",
      },
      {
        preHeadline: "Communicate · Step 3",
        headline: "Engage parents automatically",
        description:
          "Send announcements, newsletters, and event invitations via email and SMS to all families.",
        bullets: [
          {
            title: "Parent broadcast system",
            description:
              "Send announcements to all parents or specific grade levels.",
          },
          {
            title: "Event invitations",
            description:
              "Automated invites for parent-teacher conferences and school events.",
          },
          {
            title: "Two-way messaging",
            description:
              "Parents can reply to messages — all in one unified inbox.",
          },
        ],
        trustSignal:
          "Schools see 90% parent engagement with SMS + email communication.",
        visualType: "inbox",
      },
      {
        preHeadline: "Enroll · Step 4",
        headline: "Process enrollment and tuition",
        description:
          "Collect enrollment agreements, process deposits, and set up tuition payment plans online.",
        bullets: [
          {
            title: "Digital enrollment forms",
            description:
              "Online enrollment with e-signatures and document upload.",
          },
          {
            title: "Tuition payment plans",
            description:
              "Flexible monthly, quarterly, or annual billing options.",
          },
          {
            title: "Automated receipts",
            description:
              "Families receive automatic payment confirmations and receipts.",
          },
        ],
        trustSignal: "Online tuition collection reduces delinquency by 40%.",
        visualType: "payment",
      },
    ],
    integrations: [
      { name: "Google Calendar", category: "Calendar" },
      { name: "Stripe", category: "Payments" },
      { name: "DocuSign", category: "E-Signature" },
      { name: "Twilio", category: "SMS" },
    ],
    outcomes: [
      {
        value: "40%",
        label: "More tours booked",
        description:
          "Automated inquiry follow-up increases campus tour bookings by 40%.",
      },
      {
        value: "50%",
        label: "Faster admissions",
        description:
          "Digital admissions processing reduces time-to-decision by 50%.",
      },
      {
        value: "90%",
        label: "Parent engagement",
        description:
          "Combined SMS and email communication achieves 90% parent reach.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our admissions process used to be a mess of spreadsheets and paper forms. Now every family is tracked in one pipeline and parents get updates automatically.",
        author: "Patricia Walsh",
        role: "Admissions Director",
        company: "Riverside Day School",
        metric: "50%",
        metricLabel: "Faster admissions",
      },
      {
        quote:
          "Parent communication has never been easier. We send one broadcast and it goes out via email and SMS simultaneously. Response rates are through the roof.",
        author: "Greg Thompson",
        role: "Head of School",
        company: "Summit Preparatory",
        metric: "90%",
        metricLabel: "Parent engagement",
      },
      {
        quote:
          "Open house registrations went from phone calls to self-serve online booking. We're booking 40% more tours without adding any admin work.",
        author: "Karen Liu",
        role: "Administrator",
        company: "Maple Grove Academy",
        metric: "40%",
        metricLabel: "More tours booked",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description: "Your admissions and family data are always accessible.",
      },
      {
        label: "FERPA Compliant",
        description:
          "Student records handled in full compliance with education privacy laws.",
      },
      {
        label: "PCI-DSS Certified",
        description:
          "Tuition payment processing meets the highest security standards.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling family and student data.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description: "Cancel anytime. Set up your school's dashboard.",
      },
      {
        title: "Create admission stages",
        description: "Define your pipeline stages from inquiry to enrolled.",
      },
      {
        title: "Build inquiry forms",
        description:
          "Create website forms that capture family interest automatically.",
      },
      {
        title: "Launch and recruit",
        description: "Share your inquiry links and start tracking applicants.",
      },
    ],
    faqs: [
      {
        question: "Is the platform FERPA-compliant?",
        answer:
          "Yes. All student and family data is handled in full compliance with FERPA. Access is role-based — admissions staff, teachers, and administrators each see only what they need to.",
      },
      {
        question: "Can parents book campus tours online?",
        answer:
          "Absolutely. You set your available tour times and parents self-serve through an online booking page. Confirmations and reminders are sent automatically via email and SMS.",
      },
      {
        question: "How does parent communication work?",
        answer:
          "You can send broadcasts to all families or filter by grade level. Messages go out via email and SMS simultaneously. Parents can reply, and all responses land in a unified inbox for your admin team.",
      },
      {
        question: "Can we handle enrollment forms and e-signatures?",
        answer:
          "Yes. Enrollment agreements can be sent digitally with e-signature capabilities via DocuSign integration. Families upload required documents (transcripts, health records) directly through the platform.",
      },
      {
        question: "Can we set up tuition payment plans?",
        answer:
          "Yes. You can configure monthly, quarterly, or annual tuition billing with automatic recurring payments. Families receive payment confirmations and the system tracks payment status for each family.",
      },
    ],
    relatedProductSlugs: [
      "forms-surveys",
      "pipelines-deals",
      "email-marketing",
      "appointments-bookings",
    ],
  },

  /* ================================================================ */
  /* 7. HIGHER EDUCATION */
  /* ================================================================ */
  {
    slug: "higher-education",
    name: "Higher Education",
    tagline:
      "Lead nurture, applicant tracking, and event registration for colleges and universities.",
    description:
      "Attract, nurture, and enroll prospective students with automated marketing and applicant tracking.",
    longDescription:
      "Power your institution's enrollment marketing with multi-channel lead nurturing, applicant tracking, event registration, and analytics — designed for colleges, universities, and continuing education programs.",
    icon: Building2,
    group: "Schools & Academies",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/9c492a37-2099-4350-b98c-bd5e121df64b.png",
    benefits: [
      "Nurture prospective students with multi-channel email and SMS campaigns",
      "Track applicants through every stage from inquiry to enrollment",
      "Manage open house and campus event registrations online",
      "Attribute enrollments to specific marketing channels and campaigns",
      "Automate communication with applicants at every stage",
    ],
    flowSteps: [
      {
        preHeadline: "Attract · Step 1",
        headline: "Generate qualified leads",
        description:
          "Run multi-channel campaigns — paid ads, SEO, social media — that feed into one unified lead pool.",
        bullets: [
          {
            title: "Multi-channel campaigns",
            description:
              "Google Ads, Facebook Ads, and organic search all tracked in one place.",
          },
          {
            title: "Program-specific landing pages",
            description:
              "Dedicated pages for each degree program with inquiry forms.",
          },
          {
            title: "Lead scoring",
            description:
              "Prioritize hot leads based on engagement signals and program interest.",
          },
        ],
        trustSignal:
          "Institutions see 3.5x more qualified leads with multi-channel attribution.",
        visualType: "dashboard",
      },
      {
        preHeadline: "Nurture · Step 2",
        headline: "Automate applicant nurturing",
        description:
          "Send personalized email and SMS sequences based on program interest and application stage.",
        bullets: [
          {
            title: "Program-specific sequences",
            description: "Each program gets its own tailored nurture campaign.",
          },
          {
            title: "Behavior-based triggers",
            description:
              "Emails fire based on page visits, form fills, and event attendance.",
          },
          {
            title: "SMS follow-up",
            description:
              "Text reminders for application deadlines and campus events.",
          },
        ],
        trustSignal:
          "Automated nurturing increases application completion by 45%.",
        visualType: "workflow",
      },
      {
        preHeadline: "Track · Step 3",
        headline: "Manage the applicant pipeline",
        description:
          "See every applicant's status from inquiry to enrolled in a visual pipeline.",
        bullets: [
          {
            title: "Applicant pipeline",
            description:
              "Track stages: inquiry, started application, submitted, accepted, enrolled.",
          },
          {
            title: "Document collection",
            description:
              "Applicants upload transcripts and materials through the portal.",
          },
          {
            title: "Status automation",
            description:
              "Applicants get notified at each stage change automatically.",
          },
        ],
        trustSignal: "Pipeline tracking increases enrollment yield by 28%.",
        visualType: "pipeline",
      },
      {
        preHeadline: "Analyze · Step 4",
        headline: "Attribute and optimize",
        description:
          "See exactly which campaigns and channels drive enrollments — not just leads.",
        bullets: [
          {
            title: "Enrollment attribution",
            description: "Track every enrollment back to its source campaign.",
          },
          {
            title: "Channel ROI analysis",
            description:
              "Compare cost-per-enrollment across all marketing channels.",
          },
          {
            title: "Cohort analytics",
            description:
              "Analyze enrollment trends by program, term, and demographic.",
          },
        ],
        trustSignal: "Attribution clarity reduces cost-per-enrollment by 40%.",
        visualType: "chart",
      },
    ],
    integrations: [
      { name: "Google Ads", category: "Advertising" },
      { name: "Facebook Ads", category: "Advertising" },
      { name: "Salesforce", category: "CRM" },
      { name: "Google Analytics", category: "Analytics" },
    ],
    outcomes: [
      {
        value: "3.5x",
        label: "More qualified leads",
        description:
          "Multi-channel campaigns with attribution drive 3.5x more qualified applicants.",
      },
      {
        value: "45%",
        label: "Higher application completion",
        description:
          "Automated nurturing sequences increase application completion rates by 45%.",
      },
      {
        value: "40%",
        label: "Lower cost per enrollment",
        description:
          "Attribution clarity lets you optimize spend and reduce cost-per-enrollment by 40%.",
      },
    ],
    testimonials: [
      {
        quote:
          "We finally have attribution. We know exactly which campaigns drive enrollments — not just clicks. Our cost per enrolled student dropped 40%.",
        author: "Dr. Amanda Lewis",
        role: "Enrollment Director",
        company: "Lakeside University",
        metric: "40%",
        metricLabel: "Lower cost per enrollment",
      },
      {
        quote:
          "The automated nurture sequences increased our application completion rate dramatically. Prospects who used to go cold now get personalized follow-up automatically.",
        author: "James Okonkwo",
        role: "Admissions Marketing Manager",
        company: "Metro State College",
        metric: "45%",
        metricLabel: "Higher completion",
      },
      {
        quote:
          "We're running ads, SEO, email, SMS, and events — all tracked in one dashboard. For the first time, we can compare channels apples to apples.",
        author: "Rebecca Stone",
        role: "VP Enrollment",
        company: "Pacific Graduate Institute",
        metric: "3.5x",
        metricLabel: "More qualified leads",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description: "Your enrollment marketing runs without interruption.",
      },
      {
        label: "FERPA Compliant",
        description:
          "Applicant data handled in compliance with education privacy regulations.",
      },
      {
        label: "SOC 2 Type II",
        description:
          "Audited and certified for data security and access controls.",
      },
      {
        label: "GDPR Compliant",
        description:
          "Full compliance for handling international applicant data.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description:
          "Cancel anytime. Set up your enrollment marketing dashboard.",
      },
      {
        title: "Create program landing pages",
        description: "Build dedicated inquiry pages for each degree program.",
      },
      {
        title: "Set up nurture sequences",
        description:
          "Design automated email and SMS campaigns for each program.",
      },
      {
        title: "Launch and track",
        description:
          "Connect your ad accounts and start attributing enrollments.",
      },
    ],
    faqs: [
      {
        question:
          "Can we track enrollments back to specific marketing campaigns?",
        answer:
          "Yes. The platform attributes every enrollment to its source — whether it's Google Ads, Facebook Ads, organic search, email, or an event. You see cost-per-enrollment by channel, not just cost-per-lead.",
      },
      {
        question: "Does this integrate with our existing CRM or SIS?",
        answer:
          "The platform integrates with Salesforce and other major CRMs via native connectors and API. If you're using a legacy SIS, we can set up custom data syncs.",
      },
      {
        question: "Can we run program-specific nurture campaigns?",
        answer:
          "Absolutely. Each program gets its own landing page, email sequence, and SMS follow-up. Prospects are automatically segmented by program interest and nurtured with relevant content.",
      },
      {
        question: "How does applicant pipeline tracking work?",
        answer:
          "Every applicant moves through a visual pipeline — inquiry, started application, submitted, accepted, enrolled. You see exactly where each applicant is and can trigger automated communications at each stage transition.",
      },
      {
        question: "Is applicant data FERPA-compliant?",
        answer:
          "Yes. All applicant data is handled in full compliance with FERPA. Access is role-based and audit-logged, so you can see exactly who viewed or modified each record.",
      },
    ],
    relatedProductSlugs: [
      "email-marketing",
      "attribution-reporting",
      "social-planner",
      "forms-surveys",
    ],
  },

  /* ================================================================ */
  /* 8. LANGUAGE SCHOOLS */
  /* ================================================================ */
  {
    slug: "language-schools",
    name: "Language Schools",
    tagline:
      "Placement tests, class scheduling, and multilingual communication for language schools.",
    description:
      "Manage placement tests, class scheduling, and multilingual communication for your language school.",
    longDescription:
      "From automated placement tests to multilingual parent communication and class scheduling, run your language school efficiently with a platform that speaks every language your students do.",
    icon: Languages,
    group: "Studios & Specialty",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/6cc58967-7588-40a0-86a7-f771dd5999d5.png",
    benefits: [
      "Automate placement tests with scored assessments and level assignment",
      "Schedule group and private classes across multiple teachers and languages",
      "Communicate with students and parents in multiple languages",
      "Track student progress through CEFR levels and curriculum milestones",
      "Process course payments and package billing with flexible options",
    ],
    flowSteps: [
      {
        preHeadline: "Assess · Step 1",
        headline: "Automate placement tests",
        description:
          "New students take an online placement test that automatically scores and assigns them to the right level.",
        bullets: [
          {
            title: "Online placement tests",
            description:
              "Automated scoring assigns students to CEFR levels instantly.",
          },
          {
            title: "Level-based routing",
            description:
              "Students are matched to the right class based on their results.",
          },
          {
            title: "Progress assessments",
            description:
              "Re-test at intervals to track advancement through levels.",
          },
        ],
        trustSignal:
          "Automated placement eliminates 5+ hours of manual assessment per week.",
        visualType: "form",
      },
      {
        preHeadline: "Schedule · Step 2",
        headline: "Manage class scheduling",
        description:
          "Schedule group and private lessons across multiple teachers, languages, and levels.",
        bullets: [
          {
            title: "Multi-teacher calendar",
            description:
              "See all teachers' availability across all languages and levels.",
          },
          {
            title: "Group and private lessons",
            description:
              "Schedule both class types with automated capacity tracking.",
          },
          {
            title: "Recurring class booking",
            description: "Set up term schedules that repeat automatically.",
          },
        ],
        trustSignal: "Automated scheduling reduces admin time by 60%.",
        visualType: "calendar",
      },
      {
        preHeadline: "Communicate · Step 3",
        headline: "Reach students in their language",
        description:
          "Send emails, SMS, and announcements in each student's preferred language automatically.",
        bullets: [
          {
            title: "Multilingual messaging",
            description:
              "Templates in multiple languages sent based on student preference.",
          },
          {
            title: "Class reminders",
            description:
              "Automated SMS and email reminders in the student's language.",
          },
          {
            title: "Progress updates",
            description:
              "Parents and students get progress reports in their native language.",
          },
        ],
        trustSignal: "Multilingual communication increases engagement by 50%.",
        visualType: "chat",
      },
      {
        preHeadline: "Track · Step 4",
        headline: "Monitor progress and bill",
        description:
          "Track student advancement through CEFR levels and process payments automatically.",
        bullets: [
          {
            title: "CEFR progress tracking",
            description: "See each student's level and advancement over time.",
          },
          {
            title: "Attendance and engagement",
            description:
              "Track class attendance and identify at-risk students.",
          },
          {
            title: "Automated billing",
            description:
              "Course packages billed with online payment and auto-renewals.",
          },
        ],
        trustSignal: "Progress tracking increases course completion by 35%.",
        visualType: "dashboard",
      },
    ],
    integrations: [
      { name: "Google Calendar", category: "Calendar" },
      { name: "Stripe", category: "Payments" },
      { name: "Twilio", category: "SMS" },
      { name: "Zoom", category: "Online Classes" },
    ],
    outcomes: [
      {
        value: "60%",
        label: "Less admin time",
        description:
          "Automated scheduling and placement reduce administrative work by 60%.",
      },
      {
        value: "50%",
        label: "Higher engagement",
        description:
          "Multilingual communication increases student and parent engagement by 50%.",
      },
      {
        value: "35%",
        label: "Higher completion",
        description:
          "Progress tracking and reminders increase course completion rates by 35%.",
      },
    ],
    testimonials: [
      {
        quote:
          "The automated placement test was a revelation. Students get their level instantly and we save hours every week. No more manual grading.",
        author: "Elena Rossi",
        role: "Academic Director",
        company: "Bologna Language Institute",
        metric: "60%",
        metricLabel: "Less admin time",
      },
      {
        quote:
          "Being able to send messages in each student's native language changed everything. Our engagement rates are way up — parents actually read our updates now.",
        author: "Hiroshi Tanaka",
        role: "Director",
        company: "Tokyo Global Language",
        metric: "50%",
        metricLabel: "Higher engagement",
      },
      {
        quote:
          "Scheduling 20 teachers across 6 languages used to be a full-time job. Now it's automated and we've never had a scheduling conflict.",
        author: "Fatima Al-Rashid",
        role: "Operations Manager",
        company: "Polyglot Academy Dubai",
        metric: "35%",
        metricLabel: "Higher completion",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description: "Your scheduling and student data are always available.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling international student data.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Course payment processing meets security standards.",
      },
      {
        label: "CEFR-Aligned",
        description:
          "Progress tracking aligned with Common European Framework standards.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description: "Cancel anytime. Set up your language school dashboard.",
      },
      {
        title: "Create placement tests",
        description:
          "Build online assessments with automatic scoring and level assignment.",
      },
      {
        title: "Set up class schedules",
        description:
          "Create teacher profiles, set availability, and build term schedules.",
      },
      {
        title: "Launch and enroll",
        description:
          "Share your placement test link and start enrolling students.",
      },
    ],
    faqs: [
      {
        question: "Can the platform handle multiple languages?",
        answer:
          "Yes. You can create communication templates in any language, and each student's preferred language is stored in their profile. Messages are automatically sent in the right language.",
      },
      {
        question: "How do automated placement tests work?",
        answer:
          "You build the test online — listening, reading, grammar, and writing sections. Students take it on your website, the platform scores it automatically, and assigns a CEFR level. You can also set custom scoring rules.",
      },
      {
        question: "Can I schedule both group and private lessons?",
        answer:
          "Absolutely. The scheduling system handles both. Group classes have capacity tracking so you never overbook, and private lessons can be booked by individual students through your online portal.",
      },
      {
        question: "Does it support online and in-person classes?",
        answer:
          "Yes. You can schedule in-person classes at specific locations and online classes via Zoom. The booking confirmation automatically includes the meeting link for online sessions.",
      },
      {
        question: "Can I track student progress through CEFR levels?",
        answer:
          "Yes. Each student's current level is tracked in their profile. You can log assessments, re-test at intervals, and generate progress reports showing advancement from A1 through C2.",
      },
    ],
    relatedProductSlugs: [
      "appointments-bookings",
      "forms-surveys",
      "payment-collection",
      "sms-marketing",
    ],
  },

  /* ================================================================ */
  /* 9. MUSIC & ARTS SCHOOLS */
  /* ================================================================ */
  {
    slug: "music-arts-schools",
    name: "Music & Arts Schools",
    tagline:
      "Lesson booking, recital sign-ups, and recurring billing for music and arts schools.",
    description:
      "Manage lesson scheduling, recital sign-ups, and recurring billing for your music or arts school.",
    longDescription:
      "From individual lesson booking to recital ticket sales and term billing, run your music or arts school with a platform designed for creative education businesses.",
    icon: Music,
    group: "Studios & Specialty",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/5a209009-d7af-4577-bde2-56e57f6bf8a9.png",
    benefits: [
      "Schedule private and group lessons across multiple instructors and instruments",
      "Sell recital and performance tickets online with automated seating",
      "Automate recurring billing for term tuition and lesson packages",
      "Send automated lesson reminders to reduce no-shows",
      "Track student progress through curriculum milestones and repertoire",
    ],
    flowSteps: [
      {
        preHeadline: "Enroll · Step 1",
        headline: "Capture and enroll new students",
        description:
          "Build inquiry forms that capture student interest and trigger automated follow-up.",
        bullets: [
          {
            title: "Instrument inquiry forms",
            description:
              "Capture which instrument and lesson type each student wants.",
          },
          {
            title: "Trial lesson booking",
            description:
              "Prospects book a trial lesson online with their preferred instructor.",
          },
          {
            title: "Automated follow-up",
            description:
              "New inquiries get instant email and SMS with next steps.",
          },
        ],
        trustSignal:
          "Schools see 3x more trial lesson bookings with online scheduling.",
        visualType: "form",
      },
      {
        preHeadline: "Schedule · Step 2",
        headline: "Manage lesson scheduling",
        description:
          "Schedule private and group lessons across instructors with automated reminders.",
        bullets: [
          {
            title: "Multi-instructor calendar",
            description:
              "See all instructors' availability and assign lessons visually.",
          },
          {
            title: "Recurring lesson booking",
            description:
              "Weekly lessons repeat automatically without re-scheduling.",
          },
          {
            title: "Automated reminders",
            description:
              "Students and parents get SMS and email reminders before each lesson.",
          },
        ],
        trustSignal: "Automated reminders reduce no-shows by 35%.",
        visualType: "calendar",
      },
      {
        preHeadline: "Perform · Step 3",
        headline: "Sell recital tickets online",
        description:
          "Create recital events, sell tickets online, and manage attendee lists automatically.",
        bullets: [
          {
            title: "Online ticket sales",
            description:
              "Sell recital and performance tickets with secure checkout.",
          },
          {
            title: "Attendee management",
            description: "Automatic guest lists and check-in for events.",
          },
          {
            title: "Recital promotion",
            description:
              "Automated email and social campaigns to fill the audience.",
          },
        ],
        trustSignal: "Online ticket sales increase recital revenue by 50%.",
        visualType: "payment",
      },
      {
        preHeadline: "Bill · Step 4",
        headline: "Automate tuition billing",
        description:
          "Process term tuition, lesson packages, and instrument rentals with recurring billing.",
        bullets: [
          {
            title: "Term billing",
            description:
              "Automatic invoicing for term tuition with online payment.",
          },
          {
            title: "Lesson package tracking",
            description:
              "Track prepaid lesson packages and alert when credits run low.",
          },
          {
            title: "Payment reminders",
            description: "Automatic follow-ups for overdue invoices.",
          },
        ],
        trustSignal: "Automated billing gets you paid 2x faster.",
        visualType: "payment",
      },
    ],
    integrations: [
      { name: "Google Calendar", category: "Calendar" },
      { name: "Stripe", category: "Payments" },
      { name: "Twilio", category: "SMS" },
      { name: "Mailchimp", category: "Email" },
    ],
    outcomes: [
      {
        value: "3x",
        label: "More trial bookings",
        description: "Online scheduling increases trial lesson bookings by 3x.",
      },
      {
        value: "35%",
        label: "Fewer no-shows",
        description:
          "Automated SMS and email reminders reduce lesson no-shows by 35%.",
      },
      {
        value: "50%",
        label: "More recital revenue",
        description:
          "Online ticket sales increase recital and event revenue by 50%.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our no-show rate for lessons dropped by a third. Parents love getting the automatic text reminders — it's one less thing for them to remember.",
        author: "Sarah Goldberg",
        role: "Director",
        company: "Harmony Music School",
        metric: "35%",
        metricLabel: "Fewer no-shows",
      },
      {
        quote:
          "Selling recital tickets online was a game-changer. We used to handle cash at the door — now it's all automated and our recital revenue is up 50%.",
        author: "David Martinez",
        role: "Owner",
        company: "Creative Arts Studio",
        metric: "50%",
        metricLabel: "More recital revenue",
      },
      {
        quote:
          "Trial lesson bookings tripled after we added online scheduling. Parents book at 10pm when it's convenient for them — not during our office hours.",
        author: "Yuki Watanabe",
        role: "Administrator",
        company: "Melody Institute",
        metric: "3x",
        metricLabel: "More trial bookings",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description:
          "Your scheduling and billing systems are always available.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Ticket and tuition payments meet security standards.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling student and family data.",
      },
      {
        label: "SOC 2 Type II",
        description: "Audited and certified for data security.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description: "Cancel anytime. Set up your music school dashboard.",
      },
      {
        title: "Add instructors and instruments",
        description:
          "Create instructor profiles, set availability, and assign instruments.",
      },
      {
        title: "Build lesson and recital pages",
        description:
          "Create booking pages for lessons and ticket pages for recitals.",
      },
      {
        title: "Launch and enroll",
        description:
          "Share your links and start taking bookings and selling tickets.",
      },
    ],
    faqs: [
      {
        question: "Can I schedule both private and group lessons?",
        answer:
          "Yes. The calendar handles both private one-on-one lessons and group classes. You can set capacity for group lessons and the system prevents overbooking automatically.",
      },
      {
        question: "How do recital ticket sales work?",
        answer:
          "You create a recital event with date, time, and venue. Tickets are sold through an online checkout with Stripe. You get an automatic attendee list and can check in guests at the door.",
      },
      {
        question: "Can I track lesson packages?",
        answer:
          "Absolutely. You can sell prepaid lesson packages (e.g., 10 lessons) and the platform tracks how many have been used. Families get automatic alerts when they're running low.",
      },
      {
        question: "How do automated reminders work?",
        answer:
          "Before each scheduled lesson, the platform sends an SMS and email reminder to the student and parent. You can customize the timing — 24 hours before, 1 hour before, or both.",
      },
      {
        question: "Can I manage multiple instructors and instruments?",
        answer:
          "Yes. Each instructor has their own profile with availability, assigned instruments, and specialty. The calendar shows all instructors in one view, and you can filter by instrument or instructor.",
      },
    ],
    relatedProductSlugs: [
      "appointments-bookings",
      "payment-collection",
      "forms-surveys",
      "sms-marketing",
    ],
  },

  /* ================================================================ */
  /* 10. FITNESS & TRAINING */
  /* ================================================================ */
  {
    slug: "fitness-training",
    name: "Fitness & Training",
    tagline:
      "Class bookings, memberships, and lead capture funnels for fitness studios.",
    description:
      "Fill your classes, manage memberships, and capture leads with funnels built for fitness studios.",
    longDescription:
      "From class booking and membership management to lead capture funnels and personal training scheduling, run your fitness or training studio with a platform designed to fill classes and keep members coming back.",
    icon: Dumbbell,
    group: "Studios & Specialty",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/2bee122a-4c9d-4f3d-9b04-bf1daaa477a6.png",
    benefits: [
      "Online class booking with capacity tracking and waitlists",
      "Manage memberships with recurring billing and automated renewals",
      "Capture new members with lead funnels and intro offer campaigns",
      "Schedule personal training sessions with individual trainers",
      "Track attendance, member engagement, and churn signals",
    ],
    flowSteps: [
      {
        preHeadline: "Capture · Step 1",
        headline: "Fill your classes with leads",
        description:
          "Build lead funnels that offer intro deals and convert prospects into members.",
        bullets: [
          {
            title: "Intro offer funnels",
            description:
              "Free trial or discounted first class with automated follow-up.",
          },
          {
            title: "Lead capture forms",
            description:
              "Website forms collect prospect info and fitness goals.",
          },
          {
            title: "Automated nurture",
            description:
              "New leads get a sequence pushing them to book their first class.",
          },
        ],
        trustSignal: "Intro offer funnels convert 40% of leads into members.",
        visualType: "form",
      },
      {
        preHeadline: "Book · Step 2",
        headline: "Manage class bookings",
        description:
          "Members book classes online with real-time capacity tracking and waitlists.",
        bullets: [
          {
            title: "Online class booking",
            description: "Members see class schedules and book in real time.",
          },
          {
            title: "Capacity and waitlist",
            description:
              "Classes fill up automatically — waitlisted members get notified.",
          },
          {
            title: "Automated reminders",
            description: "SMS reminders reduce no-shows and keep classes full.",
          },
        ],
        trustSignal: "Online booking reduces no-shows by 35%.",
        visualType: "calendar",
      },
      {
        preHeadline: "Retain · Step 3",
        headline: "Manage memberships and billing",
        description:
          "Process recurring membership payments and track engagement to prevent churn.",
        bullets: [
          {
            title: "Recurring billing",
            description:
              "Monthly memberships billed automatically with Stripe.",
          },
          {
            title: "Engagement tracking",
            description: "See who's attending regularly and who's fading.",
          },
          {
            title: "Churn prevention",
            description: "Automated win-back campaigns for inactive members.",
          },
        ],
        trustSignal: "Engagement tracking reduces membership churn by 45%.",
        visualType: "dashboard",
      },
      {
        preHeadline: "Train · Step 4",
        headline: "Schedule personal training",
        description:
          "Book one-on-one sessions with individual trainers and process session packages.",
        bullets: [
          {
            title: "PT scheduling",
            description:
              "Members book personal training sessions with their preferred trainer.",
          },
          {
            title: "Session packages",
            description: "Sell PT packages and track how many sessions remain.",
          },
          {
            title: "Trainer payouts",
            description:
              "Track trainer hours and calculate payouts automatically.",
          },
        ],
        trustSignal:
          "Personal training revenue increases 2x with online booking.",
        visualType: "calendar",
      },
    ],
    integrations: [
      { name: "Stripe", category: "Payments" },
      { name: "Google Calendar", category: "Calendar" },
      { name: "Twilio", category: "SMS" },
      { name: "Mailchimp", category: "Email" },
    ],
    outcomes: [
      {
        value: "40%",
        label: "Lead-to-member rate",
        description:
          "Intro offer funnels convert 40% of leads into paying members.",
      },
      {
        value: "35%",
        label: "Fewer no-shows",
        description: "Automated SMS reminders reduce class no-shows by 35%.",
      },
      {
        value: "45%",
        label: "Lower churn",
        description:
          "Engagement tracking and win-back automations reduce churn by 45%.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our intro offer funnel fills classes automatically. We went from chasing leads to having a waitlist — all from the automated follow-up sequence.",
        author: "Tyler Jackson",
        role: "Owner",
        company: "IronClad Fitness",
        metric: "40%",
        metricLabel: "Lead-to-member rate",
      },
      {
        quote:
          "No-shows used to kill our class utilization. The SMS reminders cut no-shows by a third and our classes are consistently full now.",
        author: "Megan Riley",
        role: "Studio Manager",
        company: "Flow Yoga Studio",
        metric: "35%",
        metricLabel: "Fewer no-shows",
      },
      {
        quote:
          "The engagement tracking is like having a crystal ball. We can see who's about to cancel and win them back before they do. Churn is down nearly half.",
        author: "Andre Williams",
        role: "Founder",
        company: "Peak Performance Training",
        metric: "45%",
        metricLabel: "Lower churn",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description: "Your booking and billing systems are always available.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Membership payment processing meets security standards.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling member data.",
      },
      {
        label: "SOC 2 Type II",
        description: "Audited and certified for data security.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description: "Cancel anytime. Set up your fitness studio dashboard.",
      },
      {
        title: "Create class schedule",
        description:
          "Set up your classes, capacities, and trainer assignments.",
      },
      {
        title: "Build membership plans",
        description:
          "Create membership tiers with recurring billing and perks.",
      },
      {
        title: "Launch your intro funnel",
        description: "Share your intro offer and start capturing leads.",
      },
    ],
    faqs: [
      {
        question: "Can members book classes online?",
        answer:
          "Yes. Members see your real-time class schedule and book instantly. Classes have capacity limits, and when full, members can join a waitlist and get notified automatically when a spot opens.",
      },
      {
        question: "How does membership billing work?",
        answer:
          "You set up membership plans (monthly, quarterly, annual) with automatic recurring billing via Stripe. Failed payments trigger automatic retry and update-link emails — recovering up to 70% of involuntary churn.",
      },
      {
        question: "Can I track which members are about to cancel?",
        answer:
          "Yes. The engagement dashboard shows each member's attendance frequency, last visit, and engagement score. You get alerts when members show disengagement signals so you can trigger win-back campaigns.",
      },
      {
        question: "Can I schedule personal training sessions?",
        answer:
          "Absolutely. Members can book one-on-one sessions with their preferred trainer through the online portal. You can sell PT packages and the platform tracks how many sessions each member has used.",
      },
      {
        question: "Does it handle class waitlists?",
        answer:
          "Yes. When a class is full, members can join the waitlist. If someone cancels, the next person on the waitlist is automatically notified and booked into the class.",
      },
    ],
    relatedProductSlugs: [
      "appointments-bookings",
      "memberships",
      "forms-surveys",
      "sms-marketing",
    ],
  },

  /* ================================================================ */
  /* 11. DANCE & PERFORMANCE */
  /* ================================================================ */
  {
    slug: "dance-performance",
    name: "Dance & Performance",
    tagline:
      "Term enrollment, performance tickets, and parent portals for dance studios.",
    description:
      "Manage term enrollment, performance ticket sales, and parent communication for your dance studio.",
    longDescription:
      "From term enrollment and recital ticket sales to parent portals and choreography scheduling, run your dance or performance studio with a platform built for the rhythm of creative education.",
    icon: Palette,
    group: "Studios & Specialty",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/a74fa784-fdf7-49ad-970d-bba8e23713de.png",
    benefits: [
      "Manage term enrollment with class rosters and level placement",
      "Sell performance and recital tickets online with seating",
      "Give parents a dedicated portal for schedules, payments, and updates",
      "Schedule rehearsals and choreography sessions across studios",
      "Process term tuition with flexible payment plans",
    ],
    flowSteps: [
      {
        preHeadline: "Enroll · Step 1",
        headline: "Manage term enrollment",
        description:
          "Open enrollment for each term, accept registrations online, and place students in the right classes.",
        bullets: [
          {
            title: "Online registration",
            description:
              "Parents register students for classes and terms online.",
          },
          {
            title: "Level placement",
            description:
              "Assign students to appropriate class levels based on age or audition.",
          },
          {
            title: "Roster management",
            description:
              "See class rosters with capacity tracking and waitlists.",
          },
        ],
        trustSignal: "Online enrollment increases registration by 50%.",
        visualType: "form",
      },
      {
        preHeadline: "Schedule · Step 2",
        headline: "Coordinate classes and rehearsals",
        description:
          "Schedule classes, rehearsals, and studio time across multiple rooms and instructors.",
        bullets: [
          {
            title: "Multi-studio calendar",
            description:
              "Book classes and rehearsals across all your studio spaces.",
          },
          {
            title: "Instructor scheduling",
            description: "Assign instructors to classes and track their hours.",
          },
          {
            title: "Rehearsal coordination",
            description:
              "Schedule rehearsal blocks with automated reminders to dancers.",
          },
        ],
        trustSignal: "Automated scheduling eliminates 100% of double-bookings.",
        visualType: "calendar",
      },
      {
        preHeadline: "Perform · Step 3",
        headline: "Sell recital tickets online",
        description:
          "Create recital events, sell tickets with seating selection, and manage attendee lists.",
        bullets: [
          {
            title: "Online ticket sales",
            description:
              "Parents and guests buy recital tickets with secure checkout.",
          },
          {
            title: "Seating management",
            description: "Assign seats or sections with capacity tracking.",
          },
          {
            title: "Attendee check-in",
            description: "Digital guest lists for smooth door entry.",
          },
        ],
        trustSignal: "Online ticket sales increase recital revenue by 50%.",
        visualType: "payment",
      },
      {
        preHeadline: "Engage · Step 4",
        headline: "Keep parents in the loop",
        description:
          "Give parents a portal for schedules, payments, and announcements — and send automated updates.",
        bullets: [
          {
            title: "Parent portal",
            description:
              "Parents see their dancer's schedule, payments, and announcements.",
          },
          {
            title: "Automated updates",
            description:
              "Schedule changes and recital info sent via email and SMS.",
          },
          {
            title: "Term billing",
            description:
              "Tuition invoiced automatically with online payment and plans.",
          },
        ],
        trustSignal:
          "Parent portals increase satisfaction and reduce billing inquiries by 60%.",
        visualType: "dashboard",
      },
    ],
    integrations: [
      { name: "Stripe", category: "Payments" },
      { name: "Google Calendar", category: "Calendar" },
      { name: "Twilio", category: "SMS" },
      { name: "Mailchimp", category: "Email" },
    ],
    outcomes: [
      {
        value: "50%",
        label: "More registrations",
        description:
          "Online enrollment increases term registration rates by 50%.",
      },
      {
        value: "50%",
        label: "More recital revenue",
        description:
          "Online ticket sales with seating increase recital revenue by 50%.",
      },
      {
        value: "60%",
        label: "Fewer billing inquiries",
        description:
          "Parent portals reduce billing and scheduling inquiries by 60%.",
      },
    ],
    testimonials: [
      {
        quote:
          "Term enrollment used to be a chaotic week of paper forms and phone calls. Now parents register online and we have rosters ready instantly.",
        author: "Vanessa Cortez",
        role: "Studio Owner",
        company: "Rhythm & Grace Dance Academy",
        metric: "50%",
        metricLabel: "More registrations",
      },
      {
        quote:
          "Recital ticket sales went from a spreadsheet nightmare to fully automated. Parents buy online, pick their seats, and we check them in at the door. Revenue is up 50%.",
        author: "Marcus Johnson",
        role: "Director",
        company: "Apex Performance Studio",
        metric: "50%",
        metricLabel: "More recital revenue",
      },
      {
        quote:
          "The parent portal cut our admin calls by more than half. Parents check schedules and pay tuition themselves — we just focus on teaching.",
        author: "Isabella Romano",
        role: "Artistic Director",
        company: "Ballet Theatre School",
        metric: "60%",
        metricLabel: "Fewer billing inquiries",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description:
          "Your enrollment and ticketing systems are always available.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Ticket and tuition payments meet security standards.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling student and family data.",
      },
      {
        label: "SOC 2 Type II",
        description: "Audited and certified for data security.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description: "Cancel anytime. Set up your dance studio dashboard.",
      },
      {
        title: "Create class levels and terms",
        description:
          "Define your class levels, term schedule, and enrollment periods.",
      },
      {
        title: "Build registration and ticket pages",
        description: "Create online enrollment forms and recital ticket pages.",
      },
      {
        title: "Launch and enroll",
        description:
          "Share your registration links and start taking enrollments.",
      },
    ],
    faqs: [
      {
        question: "Can parents register their dancers online?",
        answer:
          "Yes. Parents complete an online registration form for each term, selecting class levels and times. You review and confirm placements — or set it to auto-assign based on age or audition results.",
      },
      {
        question: "How do recital ticket sales work?",
        answer:
          "You create a recital event with date, time, and venue. You can offer general admission or assigned seating. Parents and guests buy tickets online with secure checkout, and you get a digital attendee list for door check-in.",
      },
      {
        question: "What's included in the parent portal?",
        answer:
          "Parents see their dancer's class schedule, upcoming recitals, payment status, and announcements. They can pay tuition online, buy recital tickets, and receive automated notifications about schedule changes.",
      },
      {
        question: "Can I manage multiple studio spaces?",
        answer:
          "Yes. The scheduling system supports multiple rooms or studio spaces. You can see all spaces in one calendar view and the system prevents double-bookings automatically.",
      },
      {
        question: "How does term tuition billing work?",
        answer:
          "You set up tuition for each term and parents pay online via Stripe. You can offer full-term payment or installment plans. The system tracks who's paid and sends automatic reminders for outstanding balances.",
      },
    ],
    relatedProductSlugs: [
      "appointments-bookings",
      "payment-collection",
      "forms-surveys",
      "memberships",
    ],
  },

  /* ================================================================ */
  /* 12. EARLY CHILDHOOD EDUCATION */
  /* ================================================================ */
  {
    slug: "early-childhood-education",
    name: "Early Childhood Education",
    tagline:
      "Manage enrollments, parent communication, and daily activities for your preschool or daycare.",
    description:
      "Streamline waitlists, attendance, parent updates, and billing for your early childhood education center.",
    longDescription:
      "Run your preschool, daycare, or early learning center with tools built for the unique needs of early childhood education. Manage waitlists and enrollments, track attendance and daily activities, communicate with parents in real time, and automate billing — all from one easy-to-use platform.",
    icon: Baby,
    group: "Schools & Academies",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/1a0d677e-3562-477a-81ed-d31d75170787.png",
    benefits: [
      "Manage waitlists and automate enrollment offers as spots open up",
      "Track daily attendance, nap times, meals, and activities for each child",
      "Send parents real-time updates, photos, and daily reports via app, email, or SMS",
      "Automate tuition billing with recurring payments and installment plans",
      "Maintain compliance records, immunization tracking, and staff certifications in one place",
    ],
    flowSteps: [
      {
        preHeadline: "Enroll · Step 1",
        headline: "Manage your waitlist and enrollments",
        description:
          "Capture families on a digital waitlist and automatically offer spots as they open — no more phone tag or paper lists.",
        bullets: [
          {
            title: "Digital waitlist management",
            description:
              "Families join your waitlist online with age, preferred schedule, and start date.",
          },
          {
            title: "Automated spot offers",
            description:
              "When a spot opens, the next family is automatically notified with an enrollment link.",
          },
          {
            title: "Online enrollment forms",
            description:
              "Parents complete enrollment paperwork digitally — no more paper packets.",
          },
        ],
        trustSignal:
          "Centers using automated waitlists fill openings 3x faster.",
        visualType: "dashboard",
      },
      {
        preHeadline: "Track · Step 2",
        headline: "Log attendance and daily activities",
        description:
          "Record check-in/check-out times, meals, naps, and learning activities for each child every day.",
        bullets: [
          {
            title: "Digital check-in/out",
            description:
              "Parents sign children in and out with a secure PIN or app.",
          },
          {
            title: "Daily activity logs",
            description:
              "Staff log meals, naps, learning activities, and milestones for each child.",
          },
          {
            title: "Photo sharing",
            description:
              "Share daily photos and moments with parents through the parent app.",
          },
        ],
        trustSignal: "Digital daily reports save teachers 45 minutes per day.",
        visualType: "dashboard",
      },
      {
        preHeadline: "Communicate · Step 3",
        headline: "Keep parents informed and engaged",
        description:
          "Send daily reports, announcements, and emergency notifications via email, SMS, or the parent app.",
        bullets: [
          {
            title: "Daily report sharing",
            description:
              "Parents receive a summary of their child's day — meals, naps, activities, and notes.",
          },
          {
            title: "Broadcast announcements",
            description:
              "Send center-wide or classroom-specific announcements in seconds.",
          },
          {
            title: "Two-way messaging",
            description:
              "Parents and staff message directly through the secure platform.",
          },
        ],
        trustSignal:
          "Real-time parent communication increases satisfaction scores by 40%.",
        visualType: "video",
      },
      {
        preHeadline: "Bill · Step 4",
        headline: "Automate tuition and billing",
        description:
          "Set up recurring tuition billing, accept online payments, and track outstanding balances automatically.",
        bullets: [
          {
            title: "Recurring tuition billing",
            description:
              "Tuition invoiced automatically each week or month with Stripe.",
          },
          {
            title: "Online payment & plans",
            description:
              "Parents pay online with card or ACH, with flexible installment options.",
          },
          {
            title: "Balance tracking & reminders",
            description:
              "Automatic reminders for outstanding balances — no awkward conversations.",
          },
        ],
        trustSignal: "Automated billing reduces late payments by 70%.",
        visualType: "payment",
      },
    ],
    integrations: [
      { name: "Stripe", category: "Payments" },
      { name: "Twilio", category: "SMS" },
      { name: "Mailchimp", category: "Email" },
      { name: "Google Calendar", category: "Calendar" },
      { name: "QuickBooks", category: "Accounting" },
    ],
    outcomes: [
      {
        value: "3x",
        label: "Faster enrollment",
        description:
          "Automated waitlists fill openings 3x faster than manual processes.",
      },
      {
        value: "45min",
        label: "Saved per teacher daily",
        description:
          "Digital daily reports save teachers 45 minutes every day.",
      },
      {
        value: "70%",
        label: "Fewer late payments",
        description: "Automated billing reminders reduce late payments by 70%.",
      },
      {
        value: "40%",
        label: "Higher parent satisfaction",
        description:
          "Real-time communication increases parent satisfaction scores by 40%.",
      },
    ],
    testimonials: [
      {
        quote:
          "Our waitlist used to be a clipboard and a spreadsheet. Now families enroll online, and when a spot opens, the next family gets an automatic offer. We fill openings in days, not weeks.",
        author: "Jennifer Park",
        role: "Director",
        company: "Little Sprouts Learning Center",
        metric: "3x",
        metricLabel: "Faster enrollment",
      },
      {
        quote:
          "The daily report feature changed everything. Parents get a summary of their child's day — meals, naps, activities — right on their phone. Our teachers save 45 minutes a day and parents love it.",
        author: "Rachel Okonkwo",
        role: "Owner",
        company: "Bright Beginnings Daycare",
        metric: "45min",
        metricLabel: "Saved per teacher daily",
      },
      {
        quote:
          "Tuition billing went from chasing checks to fully automated. Parents pay online, reminders go out automatically, and our late payment rate dropped by 70%.",
        author: "David Kim",
        role: "Executive Director",
        company: "Sunshine Early Learning Academy",
        metric: "70%",
        metricLabel: "Fewer late payments",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description:
          "Your enrollment and communication systems are always available.",
      },
      {
        label: "FERPA Compliant",
        description: "Student records managed with full FERPA compliance.",
      },
      {
        label: "PCI-DSS Certified",
        description:
          "Tuition payments processed to the highest security standards.",
      },
      {
        label: "SOC 2 Type II",
        description: "Audited and certified for data security and privacy.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description:
          "Cancel anytime. Set up your early childhood center dashboard.",
      },
      {
        title: "Create your waitlist and classrooms",
        description: "Define age groups, classrooms, schedules, and capacity.",
      },
      {
        title: "Set up enrollment and billing",
        description:
          "Create online enrollment forms and recurring tuition plans.",
      },
      {
        title: "Launch and start enrolling",
        description: "Share your waitlist link and start enrolling families.",
      },
    ],
    faqs: [
      {
        question: "Can families join the waitlist online?",
        answer:
          "Yes. Families complete a digital waitlist form with their child's age, preferred schedule, and desired start date. When a spot opens, the system automatically notifies the next eligible family with an enrollment link.",
      },
      {
        question: "How do daily reports work?",
        answer:
          "Staff log each child's meals, naps, activities, and notes throughout the day. At pick-up time, parents receive a complete daily report via the parent app or email. You can also share photos of activities and milestones.",
      },
      {
        question: "Can parents pay tuition online?",
        answer:
          "Yes. You set up recurring tuition billing — weekly or monthly — and parents pay online via card or ACH through Stripe. You can offer full-term payment or installment plans, and the system tracks balances and sends automatic reminders.",
      },
      {
        question: "Does the system support multiple classrooms?",
        answer:
          "Absolutely. You can define multiple classrooms with age groups, capacity limits, and staff assignments. The system prevents over-enrollment and lets you manage each classroom's schedule and activities independently.",
      },
      {
        question: "Is the platform compliant with childcare regulations?",
        answer:
          "The platform supports compliance tracking for immunization records, staff certifications, and licensing requirements. All data is stored securely with FERPA compliance and SOC 2 Type II certification.",
      },
    ],
    relatedProductSlugs: [
      "forms-surveys",
      "email-marketing",
      "sms-marketing",
      "payment-collection",
    ],
  },

  /* ================================================================ */
  /* 13. SPORTS ACADEMIES */
  /* ================================================================ */
  {
    slug: "sports-academies",
    name: "Sports Academies",
    tagline:
      "Run tryouts, team registrations, training schedules, and tournaments — all in one platform.",
    description:
      "Manage your sports academy or training facility with tools for tryouts, team management, and athlete development.",
    longDescription:
      "Whether you run a soccer academy, basketball training facility, gymnastics center, or multi-sport complex, Waitlist Lab gives you everything you need to manage tryouts, team registrations, training schedules, tournaments, and parent communication — all from one powerful platform.",
    icon: Trophy,
    group: "Studios & Specialty",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/4cf95b6f-8ce3-4961-99b3-0edccfcc99ef.png",
    benefits: [
      "Run digital tryouts with online registration, evaluation forms, and automated team placement",
      "Manage team registrations, rosters, and uniform orders in one place",
      "Schedule training sessions, practices, and facility bookings with conflict detection",
      "Register teams for tournaments and collect entry fees online",
      "Keep parents informed with automated schedules, updates, and announcements",
    ],
    flowSteps: [
      {
        preHeadline: "Recruit · Step 1",
        headline: "Run tryouts and evaluations",
        description:
          "Open online tryout registration, collect athlete info, and run digital evaluation forms for coaches.",
        bullets: [
          {
            title: "Online tryout registration",
            description:
              "Athletes register for tryouts online with age, position, and experience info.",
          },
          {
            title: "Digital evaluation forms",
            description:
              "Coaches score athletes on skills and attributes using custom evaluation forms.",
          },
          {
            title: "Automated team placement",
            description:
              "Sort athletes by score and auto-assign to teams based on your criteria.",
          },
        ],
        trustSignal: "Digital tryouts reduce registration admin by 80%.",
        visualType: "dashboard",
      },
      {
        preHeadline: "Register · Step 2",
        headline: "Manage team registrations and rosters",
        description:
          "Collect registration fees, waivers, and uniform orders — and build team rosters automatically.",
        bullets: [
          {
            title: "Online registration & waivers",
            description:
              "Parents complete registration forms and sign digital waivers online.",
          },
          {
            title: "Uniform and gear orders",
            description:
              "Collect uniform sizes and gear orders during registration.",
          },
          {
            title: "Roster management",
            description:
              "Team rosters built automatically from registration data — export anytime.",
          },
        ],
        trustSignal: "Online registration increases sign-ups by 35%.",
        visualType: "dashboard",
      },
      {
        preHeadline: "Schedule · Step 3",
        headline: "Coordinate training and facility bookings",
        description:
          "Schedule practices, training sessions, and facility rentals with automatic conflict detection.",
        bullets: [
          {
            title: "Practice scheduling",
            description:
              "Schedule team practices, training sessions, and private lessons in one calendar.",
          },
          {
            title: "Facility booking",
            description:
              "Book fields, courts, or gym spaces with conflict detection and capacity tracking.",
          },
          {
            title: "Automated reminders",
            description:
              "Athletes and parents get automatic reminders for upcoming sessions.",
          },
        ],
        trustSignal: "Automated scheduling reduces no-shows by 50%.",
        visualType: "calendar",
      },
      {
        preHeadline: "Compete · Step 4",
        headline: "Run tournaments and collect fees",
        description:
          "Register teams for tournaments, collect entry fees, and manage brackets and schedules.",
        bullets: [
          {
            title: "Tournament registration",
            description:
              "Teams register and pay entry fees online with secure checkout.",
          },
          {
            title: "Bracket and schedule management",
            description:
              "Create tournament brackets and publish game schedules for teams and parents.",
          },
          {
            title: "Results and standings",
            description:
              "Track scores, update standings, and share results with participants.",
          },
        ],
        trustSignal:
          "Online tournament registration increases participation by 40%.",
        visualType: "payment",
      },
    ],
    integrations: [
      { name: "Stripe", category: "Payments" },
      { name: "Google Calendar", category: "Calendar" },
      { name: "Twilio", category: "SMS" },
      { name: "Mailchimp", category: "Email" },
      { name: "Zoom", category: "Video" },
    ],
    outcomes: [
      {
        value: "80%",
        label: "Less tryout admin",
        description:
          "Digital tryout registration reduces administrative work by 80%.",
      },
      {
        value: "35%",
        label: "More registrations",
        description:
          "Online registration with instant payment increases sign-ups by 35%.",
      },
      {
        value: "50%",
        label: "Fewer no-shows",
        description:
          "Automated practice and training reminders reduce no-shows by 50%.",
      },
      {
        value: "40%",
        label: "More tournament entries",
        description:
          "Online tournament registration increases team participation by 40%.",
      },
    ],
    testimonials: [
      {
        quote:
          "Tryouts used to be three days of chaos — paper forms, manual evaluations, and spreadsheets. Now athletes register online, coaches score on tablets, and teams are built automatically. We saved 80% of the admin work.",
        author: "Coach Michael Stevens",
        role: "Academy Director",
        company: "Elite Soccer Academy",
        metric: "80%",
        metricLabel: "Less tryout admin",
      },
      {
        quote:
          "Team registration went from collecting checks and paper waivers to fully online. Parents sign up, pay, and sign waivers digitally. Our registration numbers jumped 35% the first season.",
        author: "Lisa Tran",
        role: "Operations Manager",
        company: "Hoops Basketball Training",
        metric: "35%",
        metricLabel: "More registrations",
      },
      {
        quote:
          "Scheduling practices across four courts used to be a nightmare. Now the system detects conflicts automatically and sends parents reminders. No-shows dropped by half and parents always know where to be.",
        author: "Robert Martinez",
        role: "Head Coach",
        company: "Apex Volleyball Academy",
        metric: "50%",
        metricLabel: "Fewer no-shows",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description:
          "Your registration and scheduling systems are always available.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Registration and tournament fees processed securely.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance for handling athlete and family data.",
      },
      {
        label: "SOC 2 Type II",
        description: "Audited and certified for data security.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description: "Cancel anytime. Set up your sports academy dashboard.",
      },
      {
        title: "Create your teams and programs",
        description:
          "Define your sports programs, age divisions, teams, and coaching staff.",
      },
      {
        title: "Build tryout and registration forms",
        description:
          "Create online tryout registration and team enrollment forms.",
      },
      {
        title: "Launch and start recruiting",
        description: "Share your tryout links and start building your rosters.",
      },
    ],
    faqs: [
      {
        question: "Can athletes register for tryouts online?",
        answer:
          "Yes. Athletes (or their parents) complete an online tryout registration form with their age, position, experience level, and contact info. You can set capacity limits and automatically generate a check-in list for tryout day.",
      },
      {
        question: "How do team registrations work?",
        answer:
          "After tryouts and team placement, parents complete an online registration form that includes registration fee payment, digital waiver signing, and uniform size selection. Team rosters are built automatically from the registration data.",
      },
      {
        question: "Can I schedule practices and facility bookings?",
        answer:
          "Yes. The scheduling system supports practices, training sessions, private lessons, and facility rentals. You can manage multiple fields, courts, or gym spaces with automatic conflict detection to prevent double-bookings.",
      },
      {
        question: "How do tournaments work?",
        answer:
          "You create a tournament event with registration details and entry fees. Teams register and pay online. You can build brackets, publish game schedules, track scores, and update standings — all visible to teams and parents through the platform.",
      },
      {
        question: "Can parents receive schedule updates?",
        answer:
          "Absolutely. Parents receive automatic reminders for upcoming practices, games, and tournaments via email and SMS. You can also send broadcast announcements for schedule changes, weather cancellations, or important updates.",
      },
    ],
    relatedProductSlugs: [
      "appointments-bookings",
      "forms-surveys",
      "payment-collection",
      "sms-marketing",
    ],
  },

  /* ================================================================ */
  /* 14. CONSULTING */
  /* ================================================================ */
  {
    slug: "consulting",
    name: "Consulting",
    tagline:
      "Book clients, manage engagements, and automate follow-ups — all from one platform.",
    description:
      "Run your consulting practice with scheduling, client pipelines, proposals, and automated billing.",
    longDescription:
      "Whether you're a solo consultant or running a multi-partner firm, Waitlist Lab gives you everything you need to capture leads, book discovery calls, send proposals, track client engagements, and automate billing — all from one platform built for professional services.",
    icon: Briefcase,
    group: "Creators & Coaches",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/c944a514-a982-4ba0-9cfc-363fdb549e99.png",
    benefits: [
      "Turn website visitors into booked discovery calls with embedded scheduling",
      "Track every client engagement from lead to signed contract to delivery",
      "Send professional proposals and collect e-signatures online",
      "Automate invoicing, recurring retainers, and payment reminders",
      "Keep all client communication, notes, and documents in one unified inbox",
    ],
    flowSteps: [
      {
        preHeadline: "Capture · Step 1",
        headline: "Turn leads into booked calls",
        description:
          "Build landing pages with embedded scheduling so prospects book discovery calls directly — no back-and-forth emails.",
        bullets: [
          {
            title: "Smart booking calendar",
            description:
              "Prospects see your real-time availability and book instantly.",
          },
          {
            title: "Automated intake forms",
            description:
              "Collect pre-call questionnaires and project details when they book.",
          },
          {
            title: "Lead capture funnels",
            description:
              "Turn cold traffic into consultation calls with proven funnel templates.",
          },
        ],
        trustSignal:
          "Consultants see 40% more booked calls with embedded scheduling.",
        visualType: "calendar",
      },
      {
        preHeadline: "Manage · Step 2",
        headline: "Track every client engagement",
        description:
          "See every client's history, contract status, deliverables, and payment history in a single CRM pipeline.",
        bullets: [
          {
            title: "Client pipeline",
            description:
              "Move clients from prospect → engaged → delivered → retained with visual stages.",
          },
          {
            title: "Engagement tracking",
            description:
              "Track scope, milestones, deliverables, and time for each project.",
          },
          {
            title: "Document storage",
            description:
              "Keep contracts, proposals, and client files organized per engagement.",
          },
        ],
        trustSignal: "Never lose track of a client engagement again.",
        visualType: "pipeline",
      },
      {
        preHeadline: "Bill · Step 3",
        headline: "Get paid automatically",
        description:
          "Send proposals, process payments, and set up recurring retainers — all automated.",
        bullets: [
          {
            title: "Professional proposals",
            description:
              "Send branded proposals with e-signature and online payment.",
          },
          {
            title: "Recurring retainers",
            description:
              "Set up monthly retainers with automatic billing via Stripe.",
          },
          {
            title: "Payment reminders",
            description:
              "Automatic follow-ups for overdue invoices — no awkward emails.",
          },
        ],
        trustSignal: "Automated billing gets you paid 2x faster.",
        visualType: "payment",
      },
      {
        preHeadline: "Scale · Step 4",
        headline: "Automate follow-ups and nurture",
        description:
          "Send post-meeting summaries, check-in emails, and nurture campaigns to keep clients engaged between engagements.",
        bullets: [
          {
            title: "Post-meeting automation",
            description:
              "Automatically send a summary and action items after each call.",
          },
          {
            title: "Client nurture sequences",
            description:
              "Stay top-of-mind with periodic value emails and check-ins.",
          },
          {
            title: "Re-engagement campaigns",
            description:
              "Win back past clients with automated outreach when contracts end.",
          },
        ],
        trustSignal: "Automated follow-ups increase client retention by 35%.",
        visualType: "workflow",
      },
    ],
    integrations: [
      { name: "Google Calendar", category: "Calendar" },
      { name: "Zoom", category: "Video Calls" },
      { name: "Stripe", category: "Payments" },
      { name: "DocuSign", category: "E-Signature" },
      { name: "Slack", category: "Communication" },
    ],
    outcomes: [
      {
        value: "40%",
        label: "More booked calls",
        description:
          "Embedded scheduling increases discovery call bookings by 40%.",
      },
      {
        value: "2x",
        label: "Faster payments",
        description:
          "Automated invoicing gets you paid 2x faster than manual billing.",
      },
      {
        value: "35%",
        label: "Higher retention",
        description:
          "Automated follow-ups keep clients engaged between engagements.",
      },
    ],
    testimonials: [
      {
        quote:
          "I was juggling Calendly, Stripe, Google Docs, and my inbox. Now everything is in one place — booking, proposals, billing, and client notes. I've cut 15 hours of admin per week.",
        author: "Sarah Mitchell",
        role: "Strategy Consultant",
        company: "GrowthEdge Consulting",
        metric: "15 hrs",
        metricLabel: "Saved weekly",
      },
      {
        quote:
          "The proposal-to-payment flow is seamless. Clients sign online, pay their deposit, and the project kicks off automatically. My cash flow has never been this predictable.",
        author: "James Carter",
        role: "Management Consultant",
        company: "Carter Advisory Group",
        metric: "2x",
        metricLabel: "Faster payments",
      },
      {
        quote:
          "The re-engagement campaigns brought back three former clients in the first month. The system automatically reaches out when a contract ends — I don't have to remember to follow up.",
        author: "Lisa Chen",
        role: "Operations Consultant",
        company: "Streamline Partners",
        metric: "35%",
        metricLabel: "Higher retention",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description: "Your booking and client data are always available.",
      },
      {
        label: "HIPAA-Ready",
        description: "Secure handling of sensitive client information.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Payment processing meets the highest security standards.",
      },
      {
        label: "SOC 2 Type II",
        description:
          "Audited and certified for data security and access controls.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description:
          "Cancel anytime. Set up your consulting dashboard in minutes.",
      },
      {
        title: "Connect your calendar",
        description: "Sync Google or Outlook so prospects can book instantly.",
      },
      {
        title: "Create service packages",
        description:
          "Set up hourly, project-based, and retainer pricing options.",
      },
      {
        title: "Launch your booking funnel",
        description:
          "Share your scheduling link and start taking consultations.",
      },
    ],
    faqs: [
      {
        question: "Can I sell different types of consulting engagements?",
        answer:
          "Yes. You can create hourly consulting, fixed-scope projects, and monthly retainers — each with its own pricing, proposal template, and billing schedule.",
      },
      {
        question: "How do proposals and e-signatures work?",
        answer:
          "You build a branded proposal in the platform, send it to the client, and they sign electronically via DocuSign integration. The signed contract is stored automatically in the client's profile.",
      },
      {
        question: "Can I track time and bill hourly?",
        answer:
          "Absolutely. You can log time against each engagement, generate invoices based on billable hours, and process payments online — all from the same dashboard.",
      },
      {
        question: "Does it support multi-partner firms?",
        answer:
          "Yes. You can create profiles for each consultant, assign clients and engagements to specific partners, and track revenue per consultant — all with role-based access control.",
      },
      {
        question: "Can I automate client communication?",
        answer:
          "Yes. After each meeting, the platform can automatically send a summary email with action items. You can also set up nurture sequences to stay top-of-mind and re-engagement campaigns for past clients.",
      },
    ],
    relatedProductSlugs: [
      "appointments-bookings",
      "pipelines-deals",
      "payment-collection",
      "email-marketing",
    ],
  },
  /* ================================================================ */
  /* 15. EDTECH */
  /* ================================================================ */
  {
    slug: "edtech",
    name: "EdTech",
    tagline:
      "Launch, market, and scale your education technology platform — from lead capture to onboarding.",
    description:
      "The all-in-one growth and operations platform for EdTech companies building learning apps, platforms, and SaaS for education.",
    longDescription:
      "Whether you're building a learning app, an education SaaS, or a digital learning platform, Waitlist Lab gives EdTech companies the marketing, enrollment, and student-engagement infrastructure to grow fast. Capture and qualify users, automate onboarding sequences, manage subscriptions and billing, deliver content, and track activation and retention — all without stitching together a dozen disconnected tools.",
    icon: Cpu,
    group: "Consulting & Professional Services",
    heroImage:
      "https://vibe.filesafe.space/1786142210769333297/assets/c944a514-a982-4ba0-9cfc-363fdb549e99.png",
    benefits: [
      "Capture and qualify users with landing pages, forms, and chat widgets",
      "Automate user onboarding with email, SMS, and workflow sequences",
      "Manage subscriptions, trials, and recurring billing with built-in Stripe",
      "Deliver courses, content, and gated resources without a separate LMS",
      "Track activation, retention, and revenue with real-time dashboards",
    ],
    flowSteps: [
      {
        preHeadline: "Capture · Step 1",
        headline: "Acquire and qualify users",
        description:
          "Build high-converting landing pages and signup funnels that capture leads and route qualified users into your onboarding flow automatically.",
        bullets: [
          {
            title: "Signup funnels",
            description:
              "Lead capture pages, free-trial signups, and demo requests in one flow.",
          },
          {
            title: "Smart qualification forms",
            description:
              "Score and segment users by role, company size, or use case.",
          },
          {
            title: "AI chatbots",
            description:
              "Answer product questions and book demos 24/7 without a rep.",
          },
        ],
        trustSignal: "EdTech teams see 3x more qualified signups with funnels.",
        visualType: "form",
      },
      {
        preHeadline: "Onboard · Step 2",
        headline: "Automate user onboarding",
        description:
          "Trigger personalized email, SMS, and in-app message sequences the moment a user signs up — so activation happens on autopilot.",
        bullets: [
          {
            title: "Welcome sequences",
            description:
              "Automated multi-step onboarding emails and SMS based on user role.",
          },
          {
            title: "Behavior triggers",
            description:
              "Fire messages on signup, feature use, or inactivity to drive activation.",
          },
          {
            title: "Workflow automation",
            description:
              "Drag-and-drop sequences that combine email, SMS, tasks, and delays.",
          },
        ],
        trustSignal: "Automated onboarding lifts activation rates by 45%.",
        visualType: "workflow",
      },
      {
        preHeadline: "Monetize · Step 3",
        headline: "Manage subscriptions and billing",
        description:
          "Process payments, run free trials, and automate recurring billing — all with built-in Stripe and subscription management.",
        bullets: [
          {
            title: "Subscription billing",
            description:
              "Monthly and annual plans, trials, upgrades, and proration handled automatically.",
          },
          {
            title: "Self-serve checkout",
            description:
              "Users pick a plan, enter payment, and get instant access.",
          },
          {
            title: "Dunning & retries",
            description:
              "Automatic failed-payment recovery to protect recurring revenue.",
          },
        ],
        trustSignal: "Built-in billing gets you paid 2x faster.",
        visualType: "payment",
      },
      {
        preHeadline: "Retain · Step 4",
        headline: "Track activation and retention",
        description:
          "See real-time dashboards on signups, activation, churn, and revenue so you can double down on what works.",
        bullets: [
          {
            title: "Activation dashboards",
            description:
              "Track signups, activated users, and time-to-activation in real time.",
          },
          {
            title: "Churn & retention",
            description:
              "Spot at-risk accounts and trigger re-engagement campaigns automatically.",
          },
          {
            title: "Revenue analytics",
            description:
              "MRR, LTV, and cohort analysis to prove growth to stakeholders.",
          },
        ],
        trustSignal: "Real-time data drives 2x faster decisions.",
        visualType: "dashboard",
      },
    ],
    integrations: [
      { name: "Stripe", category: "Payments" },
      { name: "Google Analytics", category: "Analytics" },
      { name: "Slack", category: "Communication" },
      { name: "Zapier", category: "Automation" },
      { name: "Segment", category: "Analytics" },
    ],
    outcomes: [
      {
        value: "3x",
        label: "More qualified signups",
        description:
          "Funnels and smart forms drive 3x more qualified user signups.",
      },
      {
        value: "45%",
        label: "Higher activation",
        description:
          "Automated onboarding sequences lift user activation by 45%.",
      },
      {
        value: "2x",
        label: "Faster decisions",
        description:
          "Real-time dashboards enable 2x faster product and growth decisions.",
      },
    ],
    testimonials: [
      {
        quote:
          "We replaced our signup form tool, email platform, and billing stack with one dashboard. Onboarding is fully automated and our activation rate jumped in the first month.",
        author: "David Okafor",
        role: "Founder & CEO",
        company: "LearnLoop Labs",
        metric: "45%",
        metricLabel: "Higher activation",
      },
      {
        quote:
          "The subscription billing and dunning automation alone saved us a full-time hire. Failed payments recover themselves now.",
        author: "Priya Nair",
        role: "Head of Growth",
        company: "SkillStream",
        metric: "2x",
        metricLabel: "Faster payments",
      },
      {
        quote:
          "Real-time dashboards on signups, activation, and churn finally gave our team one source of truth. We stopped arguing about spreadsheets and started shipping.",
        author: "Marcus Webb",
        role: "Product Lead",
        company: "TutorTech",
        metric: "3x",
        metricLabel: "More signups",
      },
    ],
    authority: [
      {
        label: "99.9% Uptime",
        description: "Enterprise-grade infrastructure for always-on platforms.",
      },
      {
        label: "SOC 2 Type II",
        description:
          "Audited and certified for data security and access controls.",
      },
      {
        label: "GDPR Compliant",
        description: "Full compliance with EU data protection regulations.",
      },
      {
        label: "PCI-DSS Certified",
        description: "Payment processing meets the highest security standards.",
      },
    ],
    gettingStarted: [
      {
        title: "Start your 14-day trial",
        description:
          "Cancel anytime. Set up your EdTech growth dashboard in minutes.",
      },
      {
        title: "Build your signup funnel",
        description:
          "Create a high-converting landing page and qualification form.",
      },
      {
        title: "Connect billing",
        description:
          "Link Stripe and set up your subscription plans and free trial.",
      },
      {
        title: "Launch onboarding",
        description:
          "Automate welcome sequences and behavior-triggered messages.",
      },
    ],
    faqs: [
      {
        question: "Can I run free trials and subscription billing?",
        answer:
          "Yes. You can offer free trials, monthly and annual plans, and seat-based pricing — all with built-in Stripe. Trials convert automatically, upgrades and downgrades are prorated, and failed payments recover through automated dunning.",
      },
      {
        question: "Does it replace our email and onboarding tools?",
        answer:
          "For most EdTech teams, yes. You get email marketing, SMS, workflow automation, and behavior-triggered onboarding sequences in one platform — so you can drop standalone tools like Mailchimp or Customer.io.",
      },
      {
        question: "Can I track activation and churn?",
        answer:
          "Absolutely. Real-time dashboards show signups, activated users, time-to-activation, MRR, LTV, and churn by cohort. You can also trigger automatic re-engagement campaigns when users go inactive.",
      },
      {
        question: "Can I deliver courses or gated content?",
        answer:
          "Yes. The platform includes course hosting, drip scheduling, and gated member areas — so you can deliver onboarding content, certifications, or product education without a separate LMS.",
      },
      {
        question: "Is it secure enough for education data?",
        answer:
          "Yes. We're SOC 2 Type II certified, GDPR compliant, and PCI-DSS certified for payments, with role-based access control for your team.",
      },
    ],
    relatedProductSlugs: [
      "websites-funnels",
      "workflow-builder",
      "payment-collection",
      "dashboards",
    ],
  },
];

/* Helper functions */
export const getSolutionBySlug = (slug: string) =>
  solutions.find((s) => s.slug === slug);

export const getAllSolutions = () => solutions;
