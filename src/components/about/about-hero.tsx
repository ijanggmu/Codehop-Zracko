import Image from "next/image";

import { SectionHeader } from "@/components/common/section-header";

const galleryCards = [
  { src: "/about/about-5.jpg", height: 400, alt: "Team member at work" },
  { src: "/about/about-4.jpg", height: 500, alt: "Professional presenting data" },
  { src: "/about/about-1.jpg", height: 600, alt: "Colleagues collaborating" },
  { src: "/about/about-2.jpg", height: 500, alt: "Business team meeting" },
  { src: "/about/about-3.jpg", height: 400, alt: "Team celebrating outdoors" },
] as const;

export function AboutHero() {
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

      <div className="mx-auto mt-12 flex h-[600px] w-full max-w-[1440px] items-end justify-center gap-4 overflow-hidden">
        {galleryCards.map((card) => (
          <div
            key={card.src}
            className="relative shrink-0 overflow-hidden rounded-[24px]"
            style={{ width: 384, height: card.height }}
          >
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover object-center"
              sizes="384px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
