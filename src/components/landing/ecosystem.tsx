import Image from "next/image";
import { Infinity, RefreshCw, Shield, ShieldCheck, Tag } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/utils";

const cards = [
  {
    label: "Satisfaction",
    icon: ShieldCheck,
    color: "#7C3AED",
    glow: "bg-violet-400",
    angle: 0,
  },
  {
    label: "Built for Speed",
    icon: Infinity,
    color: "#14B8A6",
    glow: "bg-teal-400",
    angle: 72,
  },
  {
    label: "CRM",
    icon: Shield,
    color: "#2563EB",
    glow: "bg-blue-400",
    angle: 144,
  },
  {
    label: "Unlimited",
    icon: RefreshCw,
    color: "#22C55E",
    glow: "bg-green-400",
    angle: 180,
  },
  {
    label: "Built to Grow Solutions",
    icon: Tag,
    color: "#F97316",
    glow: "bg-orange-400",
    angle: 270,
  },
];

function polar(angleDeg: number, radius = 38) {
  const theta = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + radius * Math.sin(theta)}%`,
    top: `${50 - radius * Math.cos(theta)}%`,
  };
}

function cardChrome(color: string) {
  return {
    border: `1px solid ${color}55`,
    boxShadow: `0px 0px 28px -9px ${color}1A inset, 0px 22px 48px -18px ${color}14, 0px 0px 0px 1px ${color}14`,
  };
}

export function Ecosystem() {
  return (
    <section className="ecosystem-bg mt-30 min-h-[500px] overflow-hidden lg:min-h-[625px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col gap-8 px-5 pt-12 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="A Complete Business Ecosystem"
          subtitle="POS, payments, staff, inventory, and customers all connect through one Zracko account."
        />

        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div className="absolute inset-[12%] rounded-full border border-dashed border-[#0FAFA466]" />

          <div
            className="absolute z-20 w-[190px] rounded-2xl bg-gradient-to-br from-[#0FAFA4]/15 from-0% via-white via-45% to-white p-4"
            style={{
              top: 0,
              left: "-12px",
              ...cardChrome("#0FAFA4"),
            }}
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-primary">
              GUARANTEE
            </p>
            <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
              We only deliver when you are truly satisfied with the result. This
              way you take no risk.
            </p>
          </div>

          {cards.map(({ label, icon: Icon, color, glow, angle }) => {
            const { left, top } = polar(angle);
            return (
              <article
                key={label}
                className="absolute z-10 flex w-[110px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-[20px] bg-white px-3 py-3.5"
                style={{ left, top, ...cardChrome(color) }}
              >
                <span className="relative flex size-10 items-center justify-center">
                  <span
                    className={cn(
                      "absolute size-12 rounded-full opacity-70 blur-xl",
                      glow
                    )}
                  />
                  <span
                    className="relative flex size-9 items-center justify-center rounded-lg bg-white"
                    style={{
                      border: `1px solid ${color}55`,
                      boxShadow: `0px 0px 0px 1px ${color}14`,
                    }}
                  >
                    <Icon className="size-5" style={{ color }} />
                  </span>
                </span>
                <p
                  className="text-center text-xs font-medium leading-tight"
                  style={{ color }}
                >
                  {label}
                </p>
              </article>
            );
          })}

          <div className="absolute top-1/2 left-1/2 z-10 h-[68.95px] w-[69px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[12px]">
            <Image
              src="/icons/zracko-logo.png"
              alt="Zracko"
              width={69}
              height={69}
              className="h-[68.95px] w-[69px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
