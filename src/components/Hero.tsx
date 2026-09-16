import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Star, Headphones } from "lucide-react";
import { VideoModal } from "@/components/VideoModal";

const DEMO_VIDEO_URL =
  "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";

/* Staggered entrance config */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.03 },
  },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* Floating stat badges around the dashboard */
const FLOATING_BADGES = [
  {
    label: "Enrollment",
    value: "+47%",
    sub: "avg. lift",
    pos: "top-6 -left-4 sm:-left-8",
    delay: 0.6,
  },
  {
    label: "Tools replaced",
    value: "14 → 1",
    sub: "unified stack",
    pos: "top-1/3 -right-3 sm:-right-10",
    delay: 0.8,
  },
  {
    label: "Monthly savings",
    value: "$1,900",
    sub: "vs. disconnected tools",
    pos: "bottom-8 -left-3 sm:-left-12",
    delay: 1.0,
  },
];

/* Native integrations — platforms you already use, connected out of the box */
const INTEGRATIONS = [
  "Stripe",
  "PayPal",
  "WhatsApp",
  "Instagram",
  "Facebook",
  "Google Analytics",
  "Google Classroom",
  "Canvas",
  "Moodle",
  "Blackboard",
  "Google Calendar",
  "Outlook",
  "Zapier",
  "Make",
];

const IntegrationsMarquee = () => (
  <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden sm:mt-16">
    <p className="mb-3 text-center text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground sm:mb-4 sm:text-xs">
      Connects with the tools you already use
    </p>
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex shrink-0 items-center gap-3 pr-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...INTEGRATIONS, ...INTEGRATIONS].map((tool, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border-subtle bg-surface-2/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground sm:px-4 sm:py-2 sm:text-sm"
          >
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  </div>
);

export const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden px-4 pt-20 pb-12 md:pt-44 md:pb-28">
        {/* Localized aurora glow behind headline */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[min(900px,90vw)] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 30%, hsl(var(--primary) / 0.14), transparent 70%)",
          }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="container relative z-10 mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 sm:px-4 sm:py-2">
              <div className="hidden -space-x-2 sm:flex">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-primary/30"
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                All-in-one platform for education & training
              </span>
              <div className="hidden items-center gap-0.5 sm:flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-primary text-primary"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Headline — benefit-driven, key phrase in gradient */}
          <motion.h1
            variants={item}
            className="mx-auto mt-5 max-w-3xl text-balance text-[1.85rem] font-bold leading-[1.1] tracking-tight sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Replace 14+ tools with{" "}
            <span className="text-gradient-primary">one platform</span> built
            for education & training.
          </motion.h1>

          {/* Subhead — clear value prop + price anchor */}
          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-2xl text-balance text-base text-muted-foreground sm:mt-6 sm:text-xl"
          >
            <span className="sm:hidden">
              CRM, funnels, email, SMS, bookings, courses & more — all{" "}
              <span className="font-semibold text-foreground">from $97/mo</span>
              .
            </span>
            <span className="hidden sm:block">
              Waitlist Lab unifies your CRM, funnels, email, SMS, bookings,
              courses, and reputation management — from first lead to enrolled
              student. All{" "}
              <span className="font-semibold text-foreground">from $97/mo</span>{" "}
              instead of $2,000+ in disconnected subscriptions.
            </span>
          </motion.p>

          {/* CTAs — primary first, stronger hierarchy */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4"
          >
            <Button
              asChild
              className="group w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)] sm:w-auto sm:px-8 sm:py-6 sm:text-base"
            >
              <Link to="/pricing">
                Start your 14-day free trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => setVideoOpen(true)}
              className="group w-full rounded-lg border-border-strong bg-surface-2/60 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:text-primary sm:w-auto sm:px-8 sm:py-6 sm:text-base"
            >
              <Play className="mr-2 h-4 w-4 fill-current sm:h-5 sm:w-5" />
              Watch 2-min demo
            </Button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground sm:mt-7 sm:gap-x-6 sm:gap-y-3 sm:text-sm"
          >
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              Cancel anytime
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              14-day free trial
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Headphones className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
              24/7 customer support
            </span>
          </motion.div>
        </motion.div>

        {/* Dashboard mockup with floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-10 w-full max-w-[340px] sm:mt-16 sm:max-w-[560px] md:max-w-[760px] lg:max-w-5xl xl:max-w-6xl"
        >
          {/* Floating stat badges — hidden on mobile to avoid overlap */}
          {FLOATING_BADGES.map((badge) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: badge.delay }}
              className={`absolute z-30 hidden md:block ${badge.pos}`}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay,
                }}
                className="rounded-2xl border border-border-subtle bg-surface-2/80 px-4 py-3 shadow-[var(--shadow-elevated)] backdrop-blur-xl"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {badge.label}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {badge.value}
                </p>
                <p className="text-xs text-muted-foreground">{badge.sub}</p>
              </motion.div>
            </motion.div>
          ))}

          {/* Image + play overlay */}
          <div
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border-subtle bg-card/50 shadow-[var(--shadow-elevated)] shadow-primary/10 ring-1 ring-border backdrop-blur-xl"
            onClick={() => setVideoOpen(true)}
          >
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
            <img
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/8c85a3e6-0028-408a-a5df-79d6f6fafcb2.png"
              alt="Waitlist Lab all-in-one marketing dashboard showing CRM pipeline, funnels, and analytics"
              className="relative z-0 w-full rounded-2xl object-contain"
              loading="eager"
              width="1200"
              height="675"
            />
            {/* Play button */}
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 animate-ping rounded-full bg-primary/20"
                  style={{ animationDuration: "2s" }}
                />
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)] sm:h-20 sm:w-20 md:h-24 md:w-24">
                  <Play className="ml-1 h-6 w-6 fill-current sm:h-8 sm:w-8 md:h-10 md:w-10" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integrations marquee */}
        <IntegrationsMarquee />
      </section>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl={DEMO_VIDEO_URL}
      />
    </>
  );
};
