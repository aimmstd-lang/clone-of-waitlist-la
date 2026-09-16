import { CheckCircle2, XCircle } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    {
      title: "Juggling Too Many Tools",
      description:
        "Managing marketing, communication, and scheduling across multiple platforms wasting time as important tasks are slipping through the cracks.",
    },
    {
      title: "Inconsistent Communication",
      description:
        "Disjointed messaging across channels leading to missed or delayed responses, costing you enrollments.",
    },
    {
      title: "Missed Enrollment Opportunities",
      description:
        "Without a streamlined system, prospective students are easily getting lost, impacting your institution's growth.",
    },
    {
      title: "Headaches from trying to Manually Schedule Events",
      description:
        "Manual scheduling of tours and open houses is consuming your time and you are prone to errors like double bookings.",
    },
    {
      title: "Scattered Data, Unclear Insights",
      description:
        "Disconnected data across systems makes it difficult to see what's working, leading to uncertain decisions and missed opportunities.",
    },
  ];

  return (
    <section
      className="py-24 bg-card relative"
      aria-label="Common marketing problems and the Waitlist Lab solution"
      id="problems"
    >
      <div className="container mx-auto px-4 max-w-4xl animate-fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Having these Problems?
          </h2>
        </div>

        <div className="space-y-6 mb-16">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border-subtle hover:bg-background transition-all duration-300 hover:shadow-lg"
            >
              <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mb-32 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-2xl font-semibold mb-2">
            Don't worry, we can help!
          </p>
        </div>

        <div
          className="text-center mb-16 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-primary font-semibold uppercase tracking-wider mb-4 text-sm">
            THE BEST SOLUTION THAT EXISTS
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            BRINGING ALL YOUR MARKETING TOOLS IN ONE PLACE
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Never Juggle A Thousand Different Tools Ever Again
          </p>
        </div>

        <div className="group relative max-w-3xl mx-auto flex justify-center">
          {/* Lime green pulse glow on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-primary/0 blur-[60px] transition-all duration-700 group-hover:bg-primary/25 group-hover:scale-110" />
          <img
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iKGaBN9fChaW3fDp2tt1/media/76c6f237-1891-4387-8583-0b39e3085b01.svg+xml"
            alt="Diagram of all marketing tools unified in the Waitlist Lab platform"
            className="relative w-full h-auto max-w-lg transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
