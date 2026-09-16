import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ArrowRight,
  BookOpen,
  GraduationCap,
  LifeBuoy,
  Newspaper,
  Video,
  Calculator,
  Wrench,
  Users,
  Code2,
  Megaphone,
  Heart,
  type LucideIcon,
} from "lucide-react";

type ResourceItem = {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
};

type ResourceGroup = {
  title: string;
  items: ResourceItem[];
};

const resourceGroups: ResourceGroup[] = [
  {
    title: "Learn",
    items: [
      {
        name: "Blog",
        description: "Marketing strategies, growth tips, and platform updates.",
        icon: Newspaper,
        href: "/blog",
      },
      {
        name: "Waitlist Lab Academy",
        description: "Free courses on lead gen, nurture, and conversion.",
        icon: GraduationCap,
        href: "/academy",
        badge: "Free",
      },
      {
        name: "Webinars",
        description: "Live and on-demand sessions with industry experts.",
        icon: Video,
        href: "/webinars",
      },
      {
        name: "Case Studies",
        description: "Real results from education and training businesses.",
        icon: BookOpen,
        href: "/case-studies",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        name: "Help Center",
        description: "Step-by-step guides and answers to common questions.",
        icon: LifeBuoy,
        href: "/help",
      },
      {
        name: "API Documentation",
        description: "Build custom integrations with our REST API.",
        icon: Code2,
        href: "/docs/api",
      },
      {
        name: "Community",
        description: "Connect with 5,000+ education business owners.",
        icon: Users,
        href: "/community",
      },
      {
        name: "Contact Support",
        description: "Reach our team via chat, email, or phone.",
        icon: Megaphone,
        href: "/contact-sales",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "ROI Calculator",
        description: "See how much you save by consolidating your stack.",
        icon: Calculator,
        href: "/roi-calculator",
      },
      {
        name: "Template Library",
        description: "Pre-built funnels, emails, and websites ready to use.",
        icon: Wrench,
        href: "/templates",
      },
      {
        name: "System Status",
        description: "Real-time platform uptime and incident history.",
        icon: Heart,
        href: "/status",
      },
      {
        name: "Changelog",
        description: "What's new — every product update as it ships.",
        icon: ArrowRight,
        href: "/changelog",
      },
    ],
  },
];

export const ResourcesMegaMenu = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (open && !target.closest(".resources-menu-container")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      className="relative resources-menu-container"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
        aria-expanded={open}
        onClick={handleClick}
      >
        Resources
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mega menu panel */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-20 w-[min(860px,calc(100vw-2rem))] origin-top transition-all duration-300 z-50 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mx-auto rounded-2xl border border-border-default bg-card shadow-[var(--shadow-elevated)] overflow-hidden ring-1 ring-border/50">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border-default bg-surface-1">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <BookOpen className="w-4 h-4 text-primary/70" />
              <span>Guides, tools, and support to help you grow</span>
            </div>
            <span className="text-xs font-medium text-primary/80 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 whitespace-nowrap ml-2">
              12 resources
            </span>
          </div>

          {/* Three-column grouped layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {resourceGroups.map((group, gi) => (
              <div
                key={group.title}
                className={`p-4 ${
                  gi < resourceGroups.length - 1
                    ? "sm:border-r border-border-default"
                    : ""
                } ${gi > 0 ? "sm:border-t-0 border-t border-border-default" : ""}`}
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-primary/80 mb-3 px-1">
                  {group.title}
                </p>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="group flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:bg-primary/10 hover:border-primary/20 transition-all duration-200"
                      >
                        <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-surface-hover border border-border-default flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-colors duration-200">
                          <Icon className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors duration-200" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors duration-200">
                              {item.name}
                            </p>
                            {item.badge && (
                              <span className="text-[10px] font-semibold uppercase tracking-wide text-primary bg-primary/15 border border-primary/20 px-1.5 py-0.5 rounded">
                                {item.badge}
                              </span>
                            )}
                          </div>
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

          {/* Footer CTA bar */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-border-default bg-surface-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span>Join 5,000+ education businesses in our community.</span>
            </div>
            <Link
              to="/community"
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              Join now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
