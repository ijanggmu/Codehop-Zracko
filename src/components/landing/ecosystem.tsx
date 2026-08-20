"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Infinity, RefreshCw, Shield, ShieldCheck, Tag } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/utils";

const cards = [
  {
    label: "Satisfaction",
    kicker: "GUARANTEE",
    description:
      "We only deliver when you are truly satisfied with the result. This way you take no risk.",
    icon: ShieldCheck,
    color: "#7C3AED",
    glow: "bg-violet-400",
    angle: 0,
  },
  {
    label: "Built for Speed",
    kicker: "PERFORMANCE",
    description:
      "Bookings, checkout, and reports stay fast so your team never waits on the system.",
    icon: Infinity,
    color: "#14B8A6",
    glow: "bg-teal-400",
    angle: 72,
  },
  {
    label: "CRM",
    kicker: "CUSTOMERS",
    description:
      "Every sale, visit, and message lives on one customer profile across the whole business.",
    icon: Shield,
    color: "#2563EB",
    glow: "bg-blue-400",
    angle: 144,
  },
  {
    label: "Unlimited",
    kicker: "SCALE",
    description:
      "Add locations, staff, and modules as you grow — without switching tools or losing data.",
    icon: RefreshCw,
    color: "#22C55E",
    glow: "bg-green-400",
    angle: 216,
  },
  {
    label: "Built to Grow Solutions",
    kicker: "GROWTH",
    description:
      "The platform scales with you from one chair to a full multi-location operation.",
    icon: Tag,
    color: "#F97316",
    glow: "bg-orange-400",
    angle: 288,
  },
];

const DETAIL_WIDTH = 190;
const DETAIL_HEIGHT = 118;
const DETAIL_GAP = 14;

function cardChrome(color: string) {
  return {
    border: `1px solid ${color}55`,
    boxShadow: `0px 0px 28px -9px ${color}1A inset, 0px 22px 48px -18px ${color}14, 0px 0px 0px 1px ${color}14`,
  };
}

export function Ecosystem() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<(typeof cards)[number] | null>(null);
  const [detailPos, setDetailPos] = useState({ top: 0, left: 0 });
  const paused = Boolean(hovered);

  function showDetail(card: (typeof cards)[number], cardEl: HTMLElement) {
    const orbit = orbitRef.current;
    if (!orbit) return;

    const orbitRect = orbit.getBoundingClientRect();
    const cardRect = cardEl.getBoundingClientRect();
    const centerX = orbitRect.left + orbitRect.width / 2;
    const centerY = orbitRect.top + orbitRect.height / 2;
    const cardX = cardRect.left + cardRect.width / 2;
    const cardY = cardRect.top + cardRect.height / 2;
    const dx = cardX - centerX;
    const dy = cardY - centerY;

    let top: number;
    let left: number;

    if (Math.abs(dx) >= Math.abs(dy)) {
      top = cardRect.top - orbitRect.top + cardRect.height / 2 - DETAIL_HEIGHT / 2;
      left =
        dx >= 0
          ? cardRect.right - orbitRect.left + DETAIL_GAP
          : cardRect.left - orbitRect.left - DETAIL_GAP - DETAIL_WIDTH;
    } else {
      left = cardRect.left - orbitRect.left + cardRect.width / 2 - DETAIL_WIDTH / 2;
      top =
        dy >= 0
          ? cardRect.bottom - orbitRect.top + DETAIL_GAP
          : cardRect.top - orbitRect.top - DETAIL_GAP - DETAIL_HEIGHT;
    }

    setDetailPos({ top, left });
    setHovered(card);
  }

  return (
    <section className="ecosystem-bg mt-30 min-h-[500px] overflow-visible lg:min-h-[625px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col gap-8 px-5 pt-12 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="A Complete Business Ecosystem"
          subtitle="POS, payments, staff, inventory, and customers all connect through one Zracko account."
        />

        <div
          ref={orbitRef}
          className="relative mx-auto aspect-square w-full max-w-[560px]"
          onMouseLeave={() => setHovered(null)}
        >
          <div className="pointer-events-none absolute inset-[12%] rounded-full border border-dashed border-[#0FAFA466]" />

          {cards.map((card) => {
            const { label, icon: Icon, color, glow, angle } = card;

            return (
              <div
                key={label}
                className={cn(
                  "orbit-spin pointer-events-none absolute inset-[12%]",
                  paused && "orbit-paused"
                )}
                style={{ "--orbit-start": `${angle}deg` } as React.CSSProperties}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <article
                    className={cn(
                      "orbit-item pointer-events-auto z-10 flex w-[110px] cursor-pointer flex-col items-center gap-2 rounded-[20px] bg-white px-3 py-3.5",
                      paused && "orbit-paused",
                      hovered?.label === label && "z-30"
                    )}
                    style={cardChrome(color)}
                    onMouseEnter={(event) => showDetail(card, event.currentTarget)}
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
                </div>
              </div>
            );
          })}

          {hovered ? (
            <div
              className="absolute z-40 w-[190px] rounded-2xl p-4"
              style={{
                top: detailPos.top,
                left: detailPos.left,
                backgroundImage: `linear-gradient(to bottom right, ${hovered.color}26, white 45%, white)`,
                ...cardChrome(hovered.color),
              }}
            >
              <p
                className="text-xs font-semibold tracking-[0.16em]"
                style={{ color: hovered.color }}
              >
                {hovered.kicker}
              </p>
              <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                {hovered.description}
              </p>
            </div>
          ) : null}

          <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 h-[68.95px] w-[69px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[12px]">
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
