import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search, Globe, ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

export { categories };

export const ProductsMegaMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Close the mega menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (open && !target.closest(".mega-menu-container")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const activeCategory = categories[activeIndex];

  return (
    <div
      className="relative mega-menu-container"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
        aria-expanded={open}
        onClick={handleClick}
      >
        Products
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mega menu panel */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-20 w-[min(960px,calc(100vw-2rem))] origin-top transition-all duration-300 z-50 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mx-auto rounded-2xl border border-border-default bg-card shadow-[var(--shadow-elevated)] overflow-hidden ring-1 ring-border/50">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border-default bg-surface-1">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Search className="w-4 h-4 text-primary/70" />
              <span>Explore every tool in the platform</span>
            </div>
            <span className="text-xs font-medium text-primary/80 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 whitespace-nowrap ml-2">
              9 categories · 39+ tools
            </span>
          </div>

          {/* Two-panel layout: category sidebar + item content */}
          <div
            className="flex flex-col md:flex-row"
            style={{ maxHeight: "min(70vh, 560px)" }}
          >
            {/* Category sidebar */}
            <div className="md:w-56 flex-shrink-0 md:border-r md:border-b-0 border-b border-border-default bg-surface-1 overflow-y-auto custom-scrollbar md:overflow-y-auto">
              {categories.map((cat, i) => {
                const Icon = cat.icon;
                const isActive = activeIndex === i;
                return (
                  <Link
                    to={`/products/${cat.slug}`}
                    key={cat.title}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 border-l-2 ${
                      isActive
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground/80 hover:bg-surface-hover"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-primary" : ""}`}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight">
                        {cat.title}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-tight mt-0.5 truncate">
                        {cat.tagline}
                      </p>
                    </div>
                    {isActive && (
                      <ArrowRight className="w-3.5 h-3.5 text-primary ml-auto flex-shrink-0" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Item content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 bg-card">
              {/* Category header */}
              <div className="mb-4 pb-3 border-b border-border-subtle">
                <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <activeCategory.icon className="w-5 h-5 text-primary" />
                  {activeCategory.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {activeCategory.tagline}
                </p>
              </div>

              {/* Items grid — grouped when products define a `group` */}
              {(() => {
                const hasGroups = activeCategory.items.some((it) => it.group);
                if (!hasGroups) {
                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeCategory.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            to={`/products/${activeCategory.slug}/${item.slug}`}
                            className="group flex items-start gap-3 p-3 rounded-xl border border-border-subtle bg-surface-2/40 hover:bg-primary/10 hover:border-primary/20 transition-all duration-200"
                          >
                            <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-surface-hover border border-border-default flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-colors duration-200">
                              <Icon className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors duration-200" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors duration-200">
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

                // Grouped layout (e.g. Delivery: Fulfillment, Tracking, Learning, Projects)
                const groupOrder: string[] = [];
                activeCategory.items.forEach((it) => {
                  const g = it.group || "Other";
                  if (!groupOrder.includes(g)) groupOrder.push(g);
                });

                return (
                  <div className="space-y-4">
                    {groupOrder.map((g) => (
                      <div key={g}>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-primary/70 mb-2">
                          {g}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {activeCategory.items
                            .filter((it) => (it.group || "Other") === g)
                            .map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.name}
                                  to={`/products/${activeCategory.slug}/${item.slug}`}
                                  className="group flex items-start gap-3 p-3 rounded-xl border border-border-subtle bg-surface-2/40 hover:bg-primary/10 hover:border-primary/20 transition-all duration-200"
                                >
                                  <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-surface-hover border border-border-default flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-colors duration-200">
                                    <Icon className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors duration-200" />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors duration-200">
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

              {/* Explore all link */}
              <Link
                to={`/products/${activeCategory.slug}`}
                className="mt-4 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-primary/20 bg-primary/5 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors duration-200"
              >
                Explore all {activeCategory.title.toLowerCase()} tools
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Footer CTA bar */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-border-default bg-surface-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 text-primary" />
              <span>One platform. Every tool. No integrations needed.</span>
            </div>
            <Link
              to="/products"
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              See all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
