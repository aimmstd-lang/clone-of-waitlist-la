import { ShieldCheck, Server, Lock, Users } from "lucide-react";
import type { AuthorityBadge } from "@/data/products";

interface AuthoritySectionProps {
  badges: AuthorityBadge[];
  title?: string;
  subtitle?: string;
}

const iconMap: Record<number, typeof ShieldCheck> = {
  0: ShieldCheck,
  1: Server,
  2: Lock,
  3: Users,
};

export const AuthoritySection = ({
  badges,
  title = "Built on a foundation you can trust",
  subtitle = "Enterprise-grade infrastructure, security, and compliance — included with every plan.",
}: AuthoritySectionProps) => {
  return (
    <section id="authority" className="ds-section">
      <div className="ds-container">
        <div className="mb-12 max-w-2xl">
          <span className="ds-eyebrow mb-4">Trust & Security</span>
          <h2 className="ds-h2 mb-4 text-balance">{title}</h2>
          <p className="ds-body">{subtitle}</p>
        </div>

        <div className="ds-grid-4">
          {badges.map((badge, i) => {
            const Icon = iconMap[i % 4] || ShieldCheck;
            return (
              <div key={i} className="ds-card-feature">
                <div className="ds-icon-box mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {badge.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
