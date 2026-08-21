"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/utils";

const galleryCards = [
  { src: "/about/about-5.jpg", height: 400, alt: "Team member at work" },
  { src: "/about/about-4.jpg", height: 500, alt: "Professional presenting data" },
  { src: "/about/about-1.jpg", height: 600, alt: "Colleagues collaborating" },
  { src: "/about/about-2.jpg", height: 500, alt: "Business team meeting" },
  { src: "/about/about-3.jpg", height: 400, alt: "Team celebrating outdoors" },
] as const;

const CENTER_INDEX = 2;
const EXPAND_MS = 1800;

export function AboutHero() {
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setFeatured(true);
      return;
    }

    const expand = window.setTimeout(() => setFeatured(true), 900);
    return () => window.clearTimeout(expand);
  }, []);

  return (
    <section className="pricing-bg overflow-hidden pb-20 pt-10">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title={
            <>
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-[#1084FE] bg-clip-text text-transparent">
                Zracko.
              </span>
            </>
          }
          subtitle="Founded in 2017, Zracko started with the belief that great software should be so intuitive and easy to use that it effectively disappears."
          className="max-w-3xl"
        />
      </div>

      <div
        className={cn(
          "mx-auto mt-12 flex h-[600px] w-full max-w-[1440px] items-end justify-center overflow-hidden",
          featured ? "" : "gap-4"
        )}
      >
        {galleryCards.map((card, index) => {
          const isCenter = index === CENTER_INDEX;
          const isAdjacent = index === CENTER_INDEX - 1 || index === CENTER_INDEX + 1;
          const visible = !featured || isCenter || isAdjacent;

          const width = featured
            ? isCenter
              ? "min(900px, 64%)"
              : isAdjacent
                ? 140
                : 0
            : 384;

          return (
            <div
              key={card.src}
              className="relative shrink-0 overflow-hidden rounded-[24px] transition-all ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width,
                height: card.height,
                opacity: visible ? 1 : 0,
                marginLeft: featured && visible ? 8 : 0,
                marginRight: featured && visible ? 8 : 0,
                transitionDuration: `${EXPAND_MS}ms`,
              }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover object-center"
                sizes="900px"
                quality={90}
                priority
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
