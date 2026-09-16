import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Brain,
  BookOpen,
  Wrench,
  Languages,
  Music,
  Dumbbell,
  School,
  Building2,
  Users,
  Palette,
  Baby,
  Trophy,
  Briefcase,
  Cpu,
  type LucideIcon,
} from "lucide-react";

type Solution = {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  featured?: boolean;
};

type SolutionGroup = {
  title: string;
  items: Solution[];
};

const solutionGroups: SolutionGroup[] = [
  {
    title: "Creators & Coaches",
    items: [
      {
        name: "Online Course Creators",
        description:
          "Sell courses, host lessons, and automate student onboarding.",
        icon: GraduationCap,
        href: "/solutions/online-course-creators",
        featured: true,
      },
      {
        name: "Coaching & Consulting",
        description: "Book sessions, manage clients, and scale your practice.",
        icon: Brain,
        href: "/solutions/coaching-consulting",
      },
      {
        name: "Membership Communities",
        description: "Run paid memberships with gated content and forums.",
        icon: Users,
        href: "/solutions/membership-communities",
      },
    ],
  },
  {
    title: "Schools & Academies",
    items: [
      {
        name: "Tutoring Centers",
        description: "Schedule sessions, track progress, and bill families.",
        icon: BookOpen,
        href: "/solutions/tutoring-centers",
      },
      {
        name: "Trade & Vocational",
        description: "Manage cohorts, certifications, and enrollment funnels.",
        icon: Wrench,
        href: "/solutions/trade-vocational",
      },
      {
        name: "K-12 & Private Schools",
        description: "Admissions, parent comms, and enrollment pipelines.",
        icon: School,
        href: "/solutions/k12-private-schools",
      },
      {
        name: "Early Childhood Education",
        description:
          "Waitlists, daily reports, parent comms, and tuition billing.",
        icon: Baby,
        href: "/solutions/early-childhood-education",
      },
      {
        name: "Higher Education",
        description:
          "Lead nurture, applicant tracking, and event registration.",
        icon: Building2,
        href: "/solutions/higher-education",
      },
    ],
  },
  {
    title: "Studios & Specialty",
    items: [
      {
        name: "Language Schools",
        description:
          "Placement tests, class scheduling, and multilingual comms.",
        icon: Languages,
        href: "/solutions/language-schools",
      },
      {
        name: "Music & Arts Schools",
        description: "Lesson booking, recital sign-ups, and recurring billing.",
        icon: Music,
        href: "/solutions/music-arts-schools",
      },
      {
        name: "Fitness & Training",
        description: "Class bookings, memberships, and lead capture funnels.",
        icon: Dumbbell,
        href: "/solutions/fitness-training",
      },
      {
        name: "Dance & Performance",
        description:
          "Term enrollment, performance tickets, and parent portals.",
        icon: Palette,
        href: "/solutions/dance-performance",
      },
      {
        name: "Sports Academies",
        description: "Tryouts, team registration, scheduling, and tournaments.",
        icon: Trophy,
        href: "/solutions/sports-academies",
      },
    ],
  },
  {
    title: "Consulting & Professional Services",
    items: [
      {
        name: "Consulting",
        description: "Book clients, manage engagements, and automate billing.",
        icon: Briefcase,
        href: "/solutions/consulting",
      },
      {
        name: "EdTech",
        description:
          "Acquire, onboard, and retain users for learning apps and platforms.",
        icon: Cpu,
        href: "/solutions/edtech",
      },
    ],
  },
];

export const SolutionsMegaMenu = () => {
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
      if (open && !target.closest(".solutions-menu-container")) {
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
      className="relative solutions-menu-container"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
        aria-expanded={open}
        onClick={handleClick}
      >
        Solutions
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mega menu panel */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-20 w-[min(1080px,calc(100vw-2rem))] origin-top transition-all duration-300 z-50 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mx-auto rounded-2xl border border-border-default bg-card shadow-[var(--shadow-elevated)] overflow-hidden ring-1 ring-border/50">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border-default bg-surface-1">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <GraduationCap className="w-4 h-4 text-primary/70" />
              <span>Solutions for every type of education business</span>
            </div>
            <span className="text-xs font-medium text-primary/80 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 whitespace-nowrap ml-2">
              15 industries
            </span>
          </div>

          {/* Three-column grouped layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {solutionGroups.map((group, gi) => (
              <div
                key={group.title}
                className={`p-4 ${
                  gi < solutionGroups.length - 1
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
                            {item.featured && (
                              <span className="text-[10px] font-semibold uppercase tracking-wide text-primary bg-primary/15 border border-primary/20 px-1.5 py-0.5 rounded">
                                Popular
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
              <span>
                Not sure which solution fits? We'll help you find the right one.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/solutions"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                View all solutions
              </Link>
              <Link
                to="/contact-sales"
                className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                Talk to us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
