import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PhoneMockup({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[240px] rounded-[2.2rem] border-[8px] border-foreground bg-foreground p-1 shadow-2xl",
        className
      )}
    >
      <div className="absolute top-2 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-foreground" />
      <div className="overflow-hidden rounded-[1.7rem] bg-background">
        {children ?? <PhoneDashboard />}
      </div>
    </div>
  );
}

function PhoneDashboard() {
  return (
    <div className="flex aspect-[9/19] flex-col bg-gradient-to-b from-primary/20 via-background to-muted p-4 pt-8">
      <p className="text-[10px] font-medium text-muted-foreground">Today</p>
      <p className="text-lg font-semibold">$12,480</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {["POS", "Stock", "CRM", "Pay"].map((item) => (
          <div
            key={item}
            className="rounded-xl bg-card p-2.5 shadow-sm ring-1 ring-border"
          >
            <div className="mb-2 h-1.5 w-8 rounded-full bg-primary" />
            <p className="text-[10px] font-medium">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex-1 rounded-xl bg-card p-3 shadow-sm ring-1 ring-border">
        <p className="text-[10px] font-medium">Live sales</p>
        <div className="mt-3 flex h-24 items-end gap-1">
          {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t bg-primary/80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
