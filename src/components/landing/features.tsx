"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";

const CARD_WIDTH = 351;
const CARD_GAP = 24;
const SLIDE_BY = CARD_WIDTH + CARD_GAP;

const features = [
  {
    icon: LayoutGrid,
    title: "One Login, Every Tool",
    description:
      "POS, CRM, staff, inventory and reports live in a single account — no exports, no syncing, no duct tape.",
  },
  {
    icon: Zap,
    title: "Built for Speed",
    description:
      "Ring up a sale, book an appointment, or check today's revenue in seconds, not minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Data You Can Trust",
    description:
      "Every number on your dashboard reflects what actually happened on the floor — in real time.",
  },
  {
    icon: TrendingUp,
    title: "Built to Grow Seamlessly",
    description:
      "Add a second branch or a fiftieth without switching systems.",
  },
];

export function Features() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateArrows]);

  function scroll(direction: -1 | 1) {
    scrollerRef.current?.scrollBy({
      left: direction * SLIDE_BY,
      behavior: "smooth",
    });
  }

  return (
    <section id="solutions" className="mt-30 overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="Everything Connected"
          subtitle="One platform for the tools you already run separately — designed to work as a single system."
        />
        <div className="mt-10 flex justify-end gap-2">
          <button
            type="button"
            aria-label="Previous features"
            disabled={!canPrev}
            onClick={() => scroll(-1)}
            className="flex size-10 items-center justify-center rounded-[10px] border border-[#E0E0E0] bg-white text-foreground disabled:text-[#C4C4C4]"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next features"
            disabled={!canNext}
            onClick={() => scroll(1)}
            className="flex size-10 items-center justify-center rounded-[10px] border border-[#E0E0E0] bg-white text-foreground disabled:text-[#C4C4C4]"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-6 w-full max-w-[1440px] pl-5 sm:pl-12 xl:pl-[120px]">
        <div
          ref={scrollerRef}
          onScroll={updateArrows}
          className="flex gap-6 overflow-x-auto scroll-smooth pr-5 pb-2 sm:pr-12 xl:pr-[120px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex h-auto min-h-[280px] w-[min(85vw,351px)] shrink-0 flex-col gap-6 rounded-[24px] border border-[#E0E0E0] bg-white p-6 sm:h-[303px] sm:w-[351px] sm:p-8"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="text-[24px] font-semibold text-[#141414]">{title}</h3>
              <p className=" text-base font-light line-height-[140%] text-foreground">
                {description}
              </p>
              <Link
                href="#faq"
                className="text-base font-semibold text-primary hover:underline"
              >
                Know more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
