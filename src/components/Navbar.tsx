import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ProductsMegaMenu } from "./ProductsMegaMenu";
import { ResourcesMegaMenu } from "./ResourcesMegaMenu";
import { SolutionsMegaMenu } from "./SolutionsMegaMenu";
import { categories } from "@/data/products";

const navLinks = [{ label: "Pricing", href: "/pricing" }];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setExpandedCategory(0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleCategory = (i: number) => {
    setExpandedCategory(expandedCategory === i ? null : i);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border-default"
          : "bg-background/40 backdrop-blur-md border-b border-border-subtle"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/197d2227-4acc-43f1-895b-54087ee948fe.svg+xml"
            alt="Waitlist Lab Logo"
            className="h-8"
          />
        </Link>

        {/* Desktop + tablet nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          <ProductsMegaMenu />
          <SolutionsMegaMenu />
          <ResourcesMegaMenu />
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="hidden lg:block text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hidden lg:block text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://app.waitlistlab.com"
            className="hidden md:block text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            Sign in
          </a>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg px-4 sm:px-6 text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Link to="/pricing">
              <span className="hidden sm:inline">GET STARTED TODAY</span>
              <span className="sm:hidden">START</span>
            </Link>
          </Button>
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border-default bg-background/95 backdrop-blur-xl max-h-[85vh] overflow-y-auto custom-scrollbar">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {/* Products accordion */}
            <div className="border-b border-border-subtle">
              <div className="flex items-center justify-between">
                <Link
                  to="/products"
                  className="flex-1 text-sm font-semibold text-foreground hover:text-primary transition-colors py-3"
                >
                  Products
                </Link>
                <button
                  className="p-3 -mr-2"
                  onClick={() => toggleCategory(-1)}
                  aria-label="Toggle products overview"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${expandedCategory === -1 ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {expandedCategory === -1 && (
                <p className="text-xs text-muted-foreground pb-3">
                  Explore all 9 categories and 39+ tools in the platform.
                </p>
              )}
            </div>

            {/* Product categories with expandable items */}
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const isExpanded = expandedCategory === i;
              return (
                <div key={cat.title} className="border-b border-border-subtle">
                  <div className="flex items-center">
                    <Link
                      to={`/products/${cat.slug}`}
                      className="flex-1 flex items-center gap-3 text-left py-3"
                    >
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                          {cat.title}
                        </p>
                        <p className="text-[11px] text-muted-foreground truncate">
                          {cat.tagline}
                        </p>
                      </div>
                    </Link>
                    <button
                      className="p-3 -mr-2"
                      onClick={() => toggleCategory(i)}
                      aria-label={`Expand ${cat.title}`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="pl-7 pb-3">
                      {(() => {
                        const hasGroups = cat.items.some((it) => it.group);
                        if (!hasGroups) {
                          return (
                            <div className="grid grid-cols-1 gap-1.5">
                              {cat.items.map((item) => {
                                const ItemIcon = item.icon;
                                return (
                                  <Link
                                    key={item.name}
                                    to={`/products/${cat.slug}/${item.slug}`}
                                    className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border-subtle bg-surface-2/40 hover:bg-primary/10 hover:border-primary/20 transition-all duration-200"
                                  >
                                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-surface-hover border border-border-default flex items-center justify-center">
                                      <ItemIcon className="w-3.5 h-3.5 text-foreground/70" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-sm font-medium text-foreground/90">
                                        {item.name}
                                      </p>
                                      <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          );
                        }

                        const groupOrder: string[] = [];
                        cat.items.forEach((it) => {
                          const g = it.group || "Other";
                          if (!groupOrder.includes(g)) groupOrder.push(g);
                        });

                        return (
                          <div className="space-y-3">
                            {groupOrder.map((g) => (
                              <div key={g}>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-primary/70 mb-1.5">
                                  {g}
                                </p>
                                <div className="grid grid-cols-1 gap-1.5">
                                  {cat.items
                                    .filter((it) => (it.group || "Other") === g)
                                    .map((item) => {
                                      const ItemIcon = item.icon;
                                      return (
                                        <Link
                                          key={item.name}
                                          to={`/products/${cat.slug}/${item.slug}`}
                                          className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border-subtle bg-surface-2/40 hover:bg-primary/10 hover:border-primary/20 transition-all duration-200"
                                        >
                                          <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-surface-hover border border-border-default flex items-center justify-center">
                                            <ItemIcon className="w-3.5 h-3.5 text-foreground/70" />
                                          </div>
                                          <div className="min-w-0">
                                            <p className="text-sm font-medium text-foreground/90">
                                              {item.name}
                                            </p>
                                            <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                                              {item.description}
                                            </p>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Solutions accordion */}
            <div className="border-b border-border-subtle">
              <div className="flex items-center justify-between">
                <span className="flex-1 text-sm font-semibold text-foreground py-3">
                  Solutions
                </span>
                <button
                  className="p-3 -mr-2"
                  onClick={() => toggleCategory(-3)}
                  aria-label="Toggle solutions"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${expandedCategory === -3 ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {expandedCategory === -3 && (
                <div className="pb-3 space-y-3">
                  {[
                    {
                      group: "Creators & Coaches",
                      items: [
                        {
                          name: "Online Course Creators",
                          href: "/solutions/online-course-creators",
                        },
                        {
                          name: "Coaching & Consulting",
                          href: "/solutions/coaching-consulting",
                        },
                        {
                          name: "Membership Communities",
                          href: "/solutions/membership-communities",
                        },
                      ],
                    },
                    {
                      group: "Schools & Academies",
                      items: [
                        {
                          name: "Tutoring Centers",
                          href: "/solutions/tutoring-centers",
                        },
                        {
                          name: "Trade & Vocational",
                          href: "/solutions/trade-vocational",
                        },
                        {
                          name: "K-12 & Private Schools",
                          href: "/solutions/k12-private-schools",
                        },
                        {
                          name: "Higher Education",
                          href: "/solutions/higher-education",
                        },
                      ],
                    },
                    {
                      group: "Studios & Specialty",
                      items: [
                        {
                          name: "Language Schools",
                          href: "/solutions/language-schools",
                        },
                        {
                          name: "Music & Arts Schools",
                          href: "/solutions/music-arts-schools",
                        },
                        {
                          name: "Fitness & Training",
                          href: "/solutions/fitness-training",
                        },
                        {
                          name: "Dance & Performance",
                          href: "/solutions/dance-performance",
                        },
                      ],
                    },
                  ].map((section) => (
                    <div key={section.group}>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary/70 mb-1.5">
                        {section.group}
                      </p>
                      <div className="grid grid-cols-1 gap-1.5">
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="text-xs text-foreground/70 hover:text-primary transition-colors py-1.5 px-2 rounded-lg hover:bg-primary/5"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    to="/solutions"
                    className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors py-1.5 px-2"
                  >
                    View all solutions →
                  </Link>
                </div>
              )}
            </div>

            {/* Resources accordion */}
            <div className="border-b border-border-subtle">
              <div className="flex items-center justify-between">
                <span className="flex-1 text-sm font-semibold text-foreground py-3">
                  Resources
                </span>
                <button
                  className="p-3 -mr-2"
                  onClick={() => toggleCategory(-2)}
                  aria-label="Toggle resources"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${expandedCategory === -2 ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {expandedCategory === -2 && (
                <div className="pb-3 space-y-3">
                  {[
                    {
                      group: "Learn",
                      items: [
                        { name: "Blog", href: "/blog" },
                        { name: "Academy", href: "/academy" },
                        { name: "Webinars", href: "/webinars" },
                        { name: "Case Studies", href: "/case-studies" },
                      ],
                    },
                    {
                      group: "Support",
                      items: [
                        { name: "Help Center", href: "/help" },
                        { name: "API Docs", href: "/docs/api" },
                        { name: "Community", href: "/community" },
                        { name: "Contact Support", href: "/contact-sales" },
                      ],
                    },
                    {
                      group: "Tools",
                      items: [
                        { name: "ROI Calculator", href: "/roi-calculator" },
                        { name: "Templates", href: "/templates" },
                        { name: "System Status", href: "/status" },
                        { name: "Changelog", href: "/changelog" },
                      ],
                    },
                  ].map((section) => (
                    <div key={section.group}>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary/70 mb-1.5">
                        {section.group}
                      </p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="text-xs text-foreground/70 hover:text-primary transition-colors py-1.5 px-2 rounded-lg hover:bg-primary/5"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Standard nav links */}
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b border-border-subtle"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b border-border-subtle"
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href="https://app.waitlistlab.com"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b border-border-subtle"
            >
              Sign in
            </a>
            <Button
              asChild
              className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg w-full"
            >
              <Link to="/pricing">GET STARTED TODAY</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
