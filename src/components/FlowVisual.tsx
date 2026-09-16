import React from "react";
import { Zap, Mail, MessageSquare, Check } from "lucide-react";

interface FlowVisualProps {
  type: string;
}

const WindowChrome = () => (
  <div className="ds-window-chrome">
    <div className="ds-window-dot" />
    <div className="ds-window-dot" />
    <div className="ds-window-dot" />
  </div>
);

const DashboardVisual = () => (
  <div className="space-y-3">
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-lg border border-border-subtle bg-surface-2 p-2.5"
        >
          <div className="mb-2 h-1.5 w-8 rounded bg-muted-foreground/20" />
          <div className="h-3.5 w-12 rounded bg-primary/40" />
        </div>
      ))}
    </div>
    <div className="rounded-lg border border-border-subtle bg-surface-2 p-3">
      <div className="mb-2 h-2 w-16 rounded bg-muted-foreground/20" />
      <div className="flex h-28 items-end justify-between gap-1.5">
        {[40, 65, 50, 80, 60, 90, 70, 85, 55, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-primary/25"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  </div>
);

const ChartVisual = () => (
  <div className="rounded-lg border border-border-subtle bg-surface-2 p-3">
    <div className="mb-3 flex items-center justify-between">
      <div className="h-2.5 w-20 rounded bg-muted-foreground/20" />
      <div className="h-2.5 w-10 rounded bg-primary/30" />
    </div>
    <div className="relative h-36">
      {[0, 25, 50, 75, 100].map((p) => (
        <div
          key={p}
          className="absolute w-full border-t border-border-subtle"
          style={{ top: `${p}%` }}
        />
      ))}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 300 150"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,120 50,90 100,100 150,60 200,70 250,40 300,30 300,150 0,150"
          fill="hsl(86 100% 50% / 0.1)"
        />
        <polyline
          points="0,120 50,90 100,100 150,60 200,70 250,40 300,30"
          fill="none"
          stroke="hsl(86 100% 50%)"
          strokeWidth="2"
        />
        {[
          [0, 120],
          [50, 90],
          [100, 100],
          [150, 60],
          [200, 70],
          [250, 40],
          [300, 30],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="hsl(86 100% 50%)" />
        ))}
      </svg>
    </div>
  </div>
);

const EditorVisual = () => (
  <div className="overflow-hidden rounded-lg border border-border-subtle bg-surface-2">
    <div className="flex items-center gap-2 border-b border-border-subtle px-3 py-2">
      <div className="h-5 w-5 rounded bg-primary/20" />
      <div className="h-5 w-5 rounded bg-muted-foreground/10" />
      <div className="h-5 w-5 rounded bg-muted-foreground/10" />
      <div className="ml-auto h-5 w-14 rounded bg-primary/20" />
    </div>
    <div className="space-y-2.5 p-4">
      <div className="h-4 w-3/4 rounded bg-foreground/40" />
      <div className="h-2 w-full rounded bg-muted-foreground/20" />
      <div className="h-2 w-5/6 rounded bg-muted-foreground/20" />
      <div className="h-2 w-full rounded bg-muted-foreground/20" />
      <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
      <div className="my-3 h-16 rounded-lg bg-surface-3" />
      <div className="h-2 w-full rounded bg-muted-foreground/20" />
      <div className="h-2 w-4/5 rounded bg-muted-foreground/20" />
    </div>
  </div>
);

const ChatVisual = () => (
  <div className="space-y-3">
    <div className="flex gap-2">
      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-primary/20" />
      <div className="max-w-[70%] rounded-2xl rounded-tl-sm bg-surface-2 px-4 py-2.5">
        <div className="mb-1.5 h-2 w-28 rounded bg-muted-foreground/30" />
        <div className="h-2 w-20 rounded bg-muted-foreground/20" />
      </div>
    </div>
    <div className="flex justify-end gap-2">
      <div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-primary/15 px-4 py-2.5">
        <div className="mb-1.5 h-2 w-24 rounded bg-primary/40" />
        <div className="h-2 w-16 rounded bg-primary/30" />
      </div>
    </div>
    <div className="flex gap-2">
      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-primary/20" />
      <div className="max-w-[60%] rounded-2xl rounded-tl-sm bg-surface-2 px-4 py-2.5">
        <div className="h-2 w-20 rounded bg-muted-foreground/30" />
      </div>
    </div>
    <div className="flex items-center gap-2 rounded-full border border-border-subtle bg-surface-2 px-4 py-2.5">
      <div className="h-2 w-28 rounded bg-muted-foreground/20" />
      <div className="ml-auto h-6 w-6 rounded-full bg-primary" />
    </div>
  </div>
);

const InboxVisual = () => (
  <div className="space-y-2">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="flex items-center gap-3 rounded-lg border border-border-subtle bg-surface-2 p-3"
      >
        <div className="h-9 w-9 flex-shrink-0 rounded-full bg-primary/20" />
        <div className="flex-1 space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-20 rounded bg-foreground/40" />
            <div className="h-2 w-8 rounded bg-muted-foreground/20" />
          </div>
          <div className="h-2 w-full rounded bg-muted-foreground/20" />
        </div>
        {i === 1 && (
          <div className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
        )}
      </div>
    ))}
  </div>
);

const WorkflowVisual = () => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="w-3/4 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-primary" />
        <div className="h-2 w-20 rounded bg-primary/40" />
      </div>
    </div>
    <div className="h-5 w-px bg-border-strong" />
    <div className="w-3/4 rounded-lg border border-border-subtle bg-surface-2 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-muted-foreground" />
        <div className="h-2 w-24 rounded bg-muted-foreground/30" />
      </div>
    </div>
    <div className="h-5 w-px bg-border-strong" />
    <div className="w-3/4 rounded-lg border border-border-subtle bg-surface-2 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-full border-2 border-primary" />
        <div className="h-2 w-28 rounded bg-muted-foreground/30" />
      </div>
    </div>
    <div className="h-5 w-px bg-border-strong" />
    <div className="w-3/4 rounded-lg border border-border-subtle bg-surface-2 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-4 w-4 text-muted-foreground" />
        <div className="h-2 w-20 rounded bg-muted-foreground/30" />
      </div>
    </div>
  </div>
);

const CalendarVisual = () => (
  <div className="overflow-hidden rounded-lg border border-border-subtle bg-surface-2">
    <div className="flex items-center justify-between border-b border-border-subtle px-4 py-2.5">
      <div className="h-3 w-20 rounded bg-foreground/40" />
      <div className="flex gap-1">
        <div className="h-5 w-5 rounded bg-muted-foreground/10" />
        <div className="h-5 w-5 rounded bg-muted-foreground/10" />
      </div>
    </div>
    <div className="grid grid-cols-7 gap-px bg-border-subtle">
      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
        <div
          key={i}
          className="bg-surface-2 py-1.5 text-center text-xs text-muted-foreground/50"
        >
          {d}
        </div>
      ))}
    </div>
    <div className="grid grid-cols-7 gap-px bg-border-subtle">
      {Array.from({ length: 28 }).map((_, i) => (
        <div key={i} className="min-h-[36px] bg-surface-1 p-1">
          <span className="text-xs text-muted-foreground/40">{i + 1}</span>
          {[3, 10, 17, 22].includes(i) && (
            <div className="mt-1 rounded bg-primary/20 px-1 py-0.5">
              <div className="h-1.5 w-full rounded bg-primary/40" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const PipelineVisual = () => (
  <div className="grid grid-cols-3 gap-2">
    {[
      { label: "New", color: "bg-primary", cards: 2 },
      { label: "Active", color: "bg-yellow-500/50", cards: 2 },
      { label: "Won", color: "bg-green-500/50", cards: 1 },
    ].map((col) => (
      <div key={col.label} className="space-y-2">
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${col.color}`} />
          <div className="h-2.5 w-14 rounded bg-muted-foreground/30" />
        </div>
        {Array.from({ length: col.cards }).map((_, j) => (
          <div
            key={j}
            className="space-y-1.5 rounded-lg border border-border-subtle bg-surface-2 p-2.5"
          >
            <div className="h-2 w-full rounded bg-foreground/30" />
            <div className="h-1.5 w-2/3 rounded bg-muted-foreground/20" />
            <div className="flex items-center justify-between pt-1">
              <div className="h-4 w-10 rounded bg-primary/15" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const FormVisual = () => (
  <div className="space-y-4 rounded-lg border border-border-subtle bg-surface-2 p-4">
    {[1, 2].map((i) => (
      <div key={i} className="space-y-1.5">
        <div className="h-2 w-12 rounded bg-muted-foreground/40" />
        <div className="flex h-9 items-center rounded-lg border border-border-subtle bg-surface-1 px-3">
          <div className="h-2 w-28 rounded bg-muted-foreground/20" />
        </div>
      </div>
    ))}
    <div className="space-y-1.5">
      <div className="h-2 w-16 rounded bg-muted-foreground/40" />
      <div className="h-16 rounded-lg border border-border-subtle bg-surface-1" />
    </div>
    <div className="flex h-9 items-center justify-center rounded-full bg-primary">
      <div className="h-2.5 w-16 rounded bg-primary-foreground/60" />
    </div>
  </div>
);

const PaymentVisual = () => (
  <div className="space-y-4">
    <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-surface-2 to-surface-3 p-4">
      <div className="mb-6 flex items-center justify-between">
        <div className="h-4 w-10 rounded bg-primary/40" />
        <div className="h-3 w-8 rounded bg-muted-foreground/30" />
      </div>
      <div className="mb-4 h-3 w-32 rounded bg-foreground/40" />
      <div className="flex items-center justify-between">
        <div className="h-2 w-20 rounded bg-muted-foreground/30" />
        <div className="h-2 w-8 rounded bg-muted-foreground/20" />
      </div>
    </div>
    <div className="flex items-center justify-between rounded-lg border border-border-subtle bg-surface-2 p-3">
      <div className="h-3 w-16 rounded bg-muted-foreground/30" />
      <div className="h-3 w-20 rounded bg-primary/40" />
    </div>
    <div className="flex h-10 items-center justify-center rounded-full bg-primary">
      <div className="h-2.5 w-20 rounded bg-primary-foreground/60" />
    </div>
  </div>
);

const SocialVisual = () => (
  <div className="grid grid-cols-2 gap-3">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="space-y-2 rounded-lg border border-border-subtle bg-surface-2 p-3"
      >
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-primary/20" />
          <div className="h-2 w-12 rounded bg-muted-foreground/30" />
        </div>
        <div className="h-14 rounded-lg bg-surface-3" />
        <div className="h-1.5 w-full rounded bg-muted-foreground/20" />
        <div className="h-1.5 w-2/3 rounded bg-muted-foreground/20" />
      </div>
    ))}
  </div>
);

const VideoVisual = () => (
  <div className="grid grid-cols-3 gap-3">
    <div className="col-span-2 overflow-hidden rounded-lg border border-border-subtle bg-surface-2">
      <div className="relative flex h-28 items-center justify-center bg-surface-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/80">
          <div className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-primary-foreground" />
        </div>
      </div>
      <div className="space-y-1.5 p-3">
        <div className="h-2.5 w-3/4 rounded bg-foreground/40" />
        <div className="h-1.5 w-full rounded bg-muted-foreground/20" />
      </div>
    </div>
    <div className="space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`flex items-center gap-2 rounded-lg p-2 ${
            i === 1
              ? "border border-primary/20 bg-primary/10"
              : "border border-border-subtle bg-surface-2"
          }`}
        >
          <div
            className={`flex h-5 w-5 items-center justify-center rounded ${
              i === 1 ? "bg-primary" : "bg-muted-foreground/20"
            }`}
          >
            {i < 2 && <Check className="h-3 w-3 text-primary-foreground" />}
          </div>
          <div className="h-1.5 flex-1 rounded bg-muted-foreground/30" />
        </div>
      ))}
    </div>
  </div>
);

const variants: Record<string, () => React.ReactElement> = {
  dashboard: DashboardVisual,
  chart: ChartVisual,
  editor: EditorVisual,
  chat: ChatVisual,
  inbox: InboxVisual,
  workflow: WorkflowVisual,
  calendar: CalendarVisual,
  pipeline: PipelineVisual,
  form: FormVisual,
  payment: PaymentVisual,
  social: SocialVisual,
  video: VideoVisual,
};

export const FlowVisual = ({ type }: FlowVisualProps) => {
  const Variant = variants[type] || DashboardVisual;
  return (
    <div className="ds-window">
      <WindowChrome />
      <div className="ds-window-content">
        <Variant />
      </div>
    </div>
  );
};
