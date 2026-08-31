"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const PARTS = [
  {
    title: "Accept payments anywhere.",
    paragraphs: [
      "Countertop, tableside, or curbside — take any payment method from a phone, tablet, or terminal.",
    ],
    lines: ["Cards, tap-to-pay, and cash in one flow", "Instant digital receipts"],
    video: "/home/appAnywhere-1.mp4",
    label: "Zracko payments on a phone",
  },
  {
    title: "A calendar that knows your customers.",
    paragraphs: [
      "From beauty, healthcare, and professional services — zracko helps you stay on top of your customer bookings and history. An all-in-one view to manage your staff and presence for you.",
    ],
    lines: [],
    video: "/home/appAnywhere-2.mp4",
    label: "Zracko calendar and customer bookings",
  },
  {
    title: "Shifts and stock, always accurate.",
    paragraphs: [
      "Manage your inventory across multiple locations and track every item from the moment it leaves the warehouse. Quick setup for your business, and easy to use for your team and customers.",
    ],
    lines: [],
    video: "/home/appAnywhere-3.mp4",
    label: "Zracko shifts and stock tracking",
  },
  {
    title: "Real profit, not just transaction.",
    paragraphs: [
      "Know your real margins with fees, discount, refunds, and actual cash flows — we handle the complexity. Every part of your business, from your stock to performance to your team.",
    ],
    lines: [],
    video: "/home/appAnywhere-4.mp4",
    label: "Zracko profit and POS analytics",
  },
] as const;

function PartCopy({
  part,
}: {
  part: (typeof PARTS)[number];
}) {
  return (
    <div className="flex max-w-md flex-col lg:max-w-[350px] lg:shrink-0">
      <h2 className="text-[24px] font-semibold text-[#F0F0F0]">{part.title}</h2>
      {part.paragraphs.map((text) => (
        <p
          key={text}
          className="mt-4 text-base font-light leading-[140%] tracking-normal text-[#F0F0F0]"
        >
          {text}
        </p>
      ))}
      {part.lines.length > 0 ? (
        <p className="mt-4 text-base font-light leading-[140%] tracking-normal text-[#F0F0F0]">
          {part.lines.map((line, i) => (
            <span key={line}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </p>
      ) : null}
      <Link
        href="#faq"
        className="mt-8 inline-flex items-center gap-1 text-base font-medium text-[#00FFE2] hover:underline"
      >
        Know more
        <ChevronRight className="size-4" />
      </Link>
    </div>
  );
}

function PartVideo({
  src,
  label,
  play,
  className,
}: {
  src: string;
  label: string;
  play: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ratio = 0;
    const sync = () => {
      const shown = el.offsetParent !== null;
      if (shown && play && ratio > 0.35) {
        const start = el.play();
        if (start) start.catch(() => {});
      } else {
        el.pause();
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        ratio = entry.intersectionRatio;
        sync();
      },
      { threshold: [0, 0.35, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [play]);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

const HEADER_OFFSET_PX = 78;

export function AppAnywhere() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      if (!desktop) return;

      const rect = section.getBoundingClientRect();
      const stickyHeight = window.innerHeight - HEADER_OFFSET_PX;
      const total = section.offsetHeight - stickyHeight;
      if (total <= 0) return;

      const scrolled = Math.min(
        Math.max(HEADER_OFFSET_PX - rect.top, 0),
        total,
      );
      const next = Math.min(
        PARTS.length - 1,
        Math.floor((scrolled / total) * PARTS.length),
      );
      setActive((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-30 w-full bg-[#002A27] lg:bg-transparent"
    >
      <div className="hidden lg:block">
        <div
          aria-hidden
          className="sticky top-[78px] z-0 h-[calc(100vh-78px)] bg-[#002A27]"
        />
        <div className="relative z-10 -mt-[calc(100vh-78px)]">
          <div className="mx-auto flex w-full max-w-[1440px] justify-between gap-30 px-12 xl:px-[120px]">
            <div className="w-[350px] shrink-0">
              {PARTS.map((part) => (
                <article
                  key={part.title}
                  className="flex h-[calc(100vh-78px)] items-center"
                >
                  <PartCopy part={part} />
                </article>
              ))}
            </div>

            <div className="min-w-0 flex-1">
              <div className="sticky top-[78px] flex h-[calc(100vh-78px)] items-center py-20">
                <div className="relative ml-auto h-[480px] w-full max-w-[640px] overflow-hidden rounded-[24px] bg-black/30">
                  {PARTS.map((part, index) => (
                    <PartVideo
                      key={part.video}
                      src={part.video}
                      label={part.label}
                      play={active === index}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
                        active === index ? "opacity-100" : "opacity-0",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-12 lg:hidden">
        {PARTS.map((part) => (
          <article key={part.title} className="flex flex-col py-8">
            <PartCopy part={part} />
            <div className="relative mt-8 h-[240px] w-full overflow-hidden rounded-[24px] bg-black/30 sm:h-[320px]">
              <PartVideo
                src={part.video}
                label={part.label}
                play
                className="h-full w-full object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
