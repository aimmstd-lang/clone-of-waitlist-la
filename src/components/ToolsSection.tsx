import { Plug } from "lucide-react";
import type { Integration } from "@/data/products";

interface ToolsSectionProps {
  integrations: Integration[];
  title?: string;
  subtitle?: string;
}

export const ToolsSection = ({
  integrations,
  title = "Integrates with your favorite tools",
  subtitle = "Connect the systems you already use. Everything syncs automatically — no manual data entry.",
}: ToolsSectionProps) => {
  return (
    <section id="integrations" className="ds-section">
      <div className="ds-container">
        <div className="mb-12 max-w-2xl">
          <span className="ds-eyebrow mb-4">Integrations</span>
          <h2 className="ds-h2 mb-4 text-balance">{title}</h2>
          <p className="ds-body">{subtitle}</p>
        </div>

        <div className="ds-grid-4">
          {integrations.map((integration, i) => (
            <div key={i} className="ds-card-feature flex items-center gap-4">
              <div className="ds-icon-box">
                <Plug className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {integration.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {integration.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Plus 500+ more integrations available via our native connector
          library.
        </p>
      </div>
    </section>
  );
};
