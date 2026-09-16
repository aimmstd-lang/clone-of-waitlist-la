import { Link } from "react-router-dom";
import { categories } from "@/data/products";

export const PageFooter = () => {
  return (
    <footer className="border-t border-border-subtle bg-surface-1">
      <div className="ds-container py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/197d2227-4acc-43f1-895b-54087ee948fe.svg+xml"
                alt="Waitlist Lab Logo"
                className="h-7"
              />
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              All-in-one marketing software for education and training
              businesses.
            </p>
          </div>

          {/* Product categories */}
          {categories.slice(0, 4).map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.slug}>
                <Link
                  to={`/products/${cat.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3 hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {cat.title}
                </Link>
                <ul className="space-y-2">
                  {cat.items.slice(0, 4).map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/products/${cat.slug}/${item.slug}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="ds-divider my-12" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Waitlist Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/pricing"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/solutions"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <Link
              to="/products"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Security
            </a>
          </div>
        </div>

        {/* Crawlable brand-name text for search engine association */}
        <p className="mt-8 text-center text-xs text-muted-foreground/60">
          Waitlist Lab — also known as Wait List Lab or Weightless Lab — is the
          all-in-one marketing and CRM platform for education and training
          businesses. Start your free trial at{" "}
          <a
            href="https://waitlistlab.com"
            className="underline hover:text-primary"
          >
            waitlistlab.com
          </a>{" "}
          or sign in at{" "}
          <a
            href="https://app.waitlistlab.com"
            className="underline hover:text-primary"
          >
            app.waitlistlab.com
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
