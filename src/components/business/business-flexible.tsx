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
    <section className="mt-30 bg-white">
      <div className="mx-auto flex min-h-[1223px] w-full max-w-[1440px] flex-col items-center gap-10 px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="Blazingly fast, amazingly flexible"
          subtitle="Most businesses run five different tools that don't talk to each other."
        />

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.number}
              className="flex h-[480px] w-full max-w-[580px] flex-col gap-6 rounded-[24px] border border-[#E0E0E0] bg-white p-10 mx-auto lg:mx-0"
            >
              <p className="text-lg font-medium text-primary">{card.number}</p>
              <div className="relative mx-auto h-[260px] w-full max-w-[484px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-contain"
                  sizes="484px"
                />
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-[#141414]">
                  Build for any business model.
                </h3>
                <p className="mt-2 text-base font-light leading-[140%] text-foreground">
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
