import type { Integration } from "@/data/products";

interface TrustBarProps {
  integrations?: Integration[];
  label?: string;
}

const defaultIntegrations = [
  "Google",
  "Facebook",
  "Instagram",
  "Stripe",
  "Zoom",
  "Slack",
  "Salesforce",
  "Mailchimp",
];

export const TrustBar = ({ integrations, label }: TrustBarProps) => {
  const names =
    integrations && integrations.length > 0
      ? integrations.map((i) => i.name)
      : defaultIntegrations;

  const heading =
    label ||
    (integrations && integrations.length > 0
      ? "Integrates with the tools you already use"
      : "Integrates with the tools you already use");

  return (
    <section className="border-y border-border-subtle bg-surface-2 py-8">
      <div className="ds-container">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {heading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {names.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-muted-foreground/50 transition-colors hover:text-muted-foreground sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
