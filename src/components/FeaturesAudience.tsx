import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  LayoutDashboard,
  Megaphone,
  Users,
  Calendar,
  BarChart3,
} from "lucide-react";

export const FeaturesAudience = () => {
  const features = [
    {
      title: "One Unified Platform",
      description: "Streamline your marketing with one platform.",
      icon: LayoutDashboard,
    },
    {
      title: "Consistent Outreach",
      description: "Reach prospects consistently across channels.",
      icon: Megaphone,
    },
    {
      title: "Better Lead Management",
      description: "Reduce missed opportunities effortlessly.",
      icon: Users,
    },
    {
      title: "Effortless Event Scheduling",
      description: "Simplify tour, open house and event scheduling.",
      icon: Calendar,
    },
    {
      title: "Centralized Analytics",
      description:
        "Get all of your data in one dashboard for better decisions.",
      icon: BarChart3,
    },
  ];

  const audiences = [
    "TRAINING CENTRES",
    "SUMMER CAMPS",
    "CONTENT CREATORS",
    "SUPPLEMENTARY EDUCATION",
    "COACHES",
    "CONSULTANTS",
    "TUTORING CENTRES",
    "PERFORMING ARTS ACADEMIES",
    "INDOOR AND OUTDOOR SPORTS ACADEMIES",
    "EARLY CHILDHOOD EDUCATION",
    "K-12",
    "HIGHER EDUCATION",
  ];

  return (
    <section
      className="py-24 bg-background"
      aria-label="Platform features and target audiences"
      id="features"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            The Stress Free & Focused Way
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-32">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 text-center border border-border-subtle rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            This is Perfect For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
            {audiences.map((audience, idx) => (
              <div
                key={idx}
                className="p-4 border border-border-subtle rounded-xl bg-card/30 backdrop-blur-sm font-medium text-sm md:text-base hover:bg-card/80 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
                {audience}
              </div>
            ))}
          </div>

          <Button
            asChild
            className="text-lg px-8 py-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold group transition-all duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:-translate-y-1"
          >
            <Link to="/pricing">
              GET STARTED TODAY
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
