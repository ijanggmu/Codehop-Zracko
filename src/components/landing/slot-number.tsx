"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const BASE_SPINS = 5;

const valueClassName =
  "bg-[linear-gradient(180deg,#01B5B1_37.98%,#1085FC_100%)] bg-clip-text text-transparent";

type SlotNumberProps = {
  value: string;
  className?: string;
};

export function SlotNumber({ value, className }: SlotNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [digitHeight, setDigitHeight] = useState(70);
  let digitOrder = 0;

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const sync = () => {
      const next = node.clientHeight;
      if (next > 0) setDigitHeight(next);
    };

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: [0.4, 0.6, 1] }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "flex h-[1.23em] items-center justify-center overflow-hidden text-[clamp(16px,4.6vw,57px)] font-normal leading-[1.23] tabular-nums",
        className
      )}
      role="img"
      aria-label={value}
    >
      {[...value].map((char, index) => {
        if (char >= "0" && char <= "9") {
          const order = digitOrder++;
          return (
            <SlotDigit
              key={`${char}-${index}`}
              digit={Number(char)}
              order={order}
              active={active}
              digitHeight={digitHeight}
            />
          );
        }

        return (
          <span
            key={`${char}-${index}`}
            className={valueClassName}
            aria-hidden="true"
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

function SlotDigit({
  digit,
  order,
  active,
  digitHeight,
}: {
  digit: number;
  order: number;
  active: boolean;
  digitHeight: number;
}) {
  const reelRef = useRef<HTMLSpanElement>(null);
  const spins = BASE_SPINS + order * 2;
  const reel = Array.from({ length: spins * 10 + 10 }, (_, i) => i % 10);
  const from = -spins * 10 * digitHeight;
  const to = -digit * digitHeight;
  const duration = 1800 + order * 320;
  const delay = order * 90;

  useLayoutEffect(() => {
    const node = reelRef.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.style.transition = "none";
      node.style.transform = `translate3d(0, ${to}px, 0)`;
      return;
    }

    if (!active) {
      node.style.transition = "none";
      node.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    node.style.transition = "none";
    node.style.transform = `translate3d(0, ${from}px, 0)`;
    node.getBoundingClientRect();
    node.style.transition = `transform ${duration}ms cubic-bezier(0.22, 0.18, 0.08, 1) ${delay}ms`;
    node.style.transform = `translate3d(0, ${to}px, 0)`;
  }, [active, delay, duration, from, to]);

  return (
    <span
      className="relative inline-flex w-[1ch] shrink-0 overflow-hidden"
      style={{ height: digitHeight }}
      aria-hidden="true"
    >
      <span ref={reelRef} className="flex flex-col items-center will-change-transform">
        {reel.map((n, i) => (
          <span
            key={i}
            className={cn(
              valueClassName,
              "flex w-[1ch] items-center justify-center"
            )}
            style={{ height: digitHeight }}
          >
            {n}
          </span>
        ))}
      </span>
    </span>
  );
}
