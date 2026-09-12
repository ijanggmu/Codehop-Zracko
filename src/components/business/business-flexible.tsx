import Image from "next/image";

import { SectionHeader } from "@/components/common/section-header";

const cards = [
  { number: "01", image: "/business/business-1.png", alt: "Business integrations" },
  { number: "02", image: "/business/business-2.png", alt: "Customer notification on mobile" },
  { number: "03", image: "/business/business-3.png", alt: "Staff schedule" },
  { number: "04", image: "/business/business-4.png", alt: "Checking and loan balances" },
] as const;

export function BusinessFlexible() {
  return (
    <section className="mt-15 bg-white lg:mt-30">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="Blazingly fast, amazingly flexible"
          subtitle="Most businesses run five different tools that don't talk to each other."
        />

        <div className="flex w-full max-w-[1200px] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-lg:-mx-5 max-lg:px-5 max-lg:pb-2 lg:grid lg:grid-cols-2 lg:gap-10 lg:overflow-visible lg:px-0 lg:pb-0 lg:snap-none">
          {cards.map((card) => (
            <article
              key={card.number}
              className="mx-auto flex h-auto w-full max-w-[580px] flex-col gap-6 rounded-[24px] border border-[#E0E0E0] bg-white p-6 sm:p-10 lg:mx-0 lg:h-[480px] max-lg:w-[min(85vw,360px)] max-lg:shrink-0 max-lg:snap-start max-lg:p-5"
            >
              <p className="text-lg font-medium text-primary">{card.number}</p>
              <div className="relative mx-auto h-[180px] w-full max-w-[484px] sm:h-[260px] max-lg:h-[160px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 85vw, 484px"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#141414] sm:text-[24px]">
                  Build for any business model.
                </h3>
                <p className="mt-2 text-sm font-light leading-[140%] text-foreground sm:text-base">
                  Track investors, partners, products, or anything else unique to how you
                  operate.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
