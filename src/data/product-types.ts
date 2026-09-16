import { type LucideIcon } from "lucide-react";

export interface ProductFeature {
  title: string;
  description: string;
}

export interface FlowBullet {
  title: string;
  description: string;
}

export interface FlowStep {
  preHeadline: string;
  headline: string;
  description: string;
  bullets: FlowBullet[];
  trustSignal: string;
  visualType: string;
}

export interface Integration {
  name: string;
  category: string;
}

export interface OutcomeStat {
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
}

export interface AuthorityBadge {
  label: string;
  description: string;
}

export interface GettingStartedStep {
  title: string;
  description: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  longDescription: string;
  features: ProductFeature[];
  benefits: string[];
  group?: string;
  flowSteps?: FlowStep[];
  integrations?: Integration[];
  outcomes?: OutcomeStat[];
  testimonials?: Testimonial[];
  authority?: AuthorityBadge[];
  gettingStarted?: GettingStartedStep[];
  faqs?: ProductFAQ[];
}

export interface ProductCategory {
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  features: ProductFeature[];
  items: Product[];
}
