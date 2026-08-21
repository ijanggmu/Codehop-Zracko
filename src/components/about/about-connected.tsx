import Link from "next/link";
import { ArrowUpRight, LayoutGrid, ShieldCheck, Zap } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";

const cards = [
  {
    icon: LayoutGrid,
    title: "Work with us",
    description:
      "POS, CRM, staff, inventory and reports live in a single account — no exports, no syncing, no duct tape.",
    href: "#",
    cta: "Start Career",
  },
  {
    icon: Zap,
    title: "Read Our Blog",
    description:
      "Ring up a sale, book an appointment, or check today's revenue in seconds, not minutes.",
    href: "#",
    cta: "Read Blogs",
  },
  {
    icon: ShieldCheck,
    title: "Get in Touch",
    description:
      "Every number on your dashboard reflects what actually happened on the floor — in real time.",
    href: "#about",
    cta: "Contact Us",
  },
] as const;

export function AboutConnected() {
  return (
    <section className="bg-white pb-[102px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="Everything Connected"
          subtitle="Most businesses run five different tools that don't talk to each other."
        />

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ icon: Icon, title, description, href, cta }) => (
            <article
              key={title}
              className="flex h-[319px] flex-col gap-6 rounded-[24px] border border-[#E0E0E0] bg-white p-8"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="text-[24px] font-semibold text-[#141414]">{title}</h3>
              <p className="text-base font-light leading-[140%] text-[#111111]">
                {description}
              </p>
              <Link
                href={href}
                className="group mt-auto inline-flex h-10 w-[180px] items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#85C2B9_0%,#0C8574_100%)] p-[2px]"
              >
                <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-[16px] bg-white px-6 text-xs font-semibold tracking-[0.08em] text-primary uppercase transition-colors group-hover:bg-primary group-hover:text-white">
                  {cta}
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
