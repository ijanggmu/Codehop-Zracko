import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { GradientButton } from "@/components/common/gradient-button";
import { HeroServices } from "@/components/common/hero-services";
import { SectionHeader } from "@/components/common/section-header";

export function ProductHero() {
  return (
    <section className="pricing-bg relative -mt-24 overflow-hidden pt-27 md:pt-35">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title={
            <>
              Every Business from{" "}
              <span className="bg-gradient-to-r from-primary to-[#1084FE] bg-clip-text text-transparent">
                One Platform
              </span>
            </>
          }
          subtitle="Zracko unifies your POS, CRM, inventory, staff, and analytics — purpose-built for service-based businesses that demand more."
          className="max-w-[700px]"
        />

        <HeroServices className="mt-16" />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GradientButton asChild>
            <Link href="/pricing">
              Request a Demo
              <ArrowUpRight className="size-4" />
            </Link>
          </GradientButton>
          <Link
            href="#"
            className="group inline-flex h-10 w-[180px] items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#85C2B9_0%,#0C8574_100%)] p-[2px]"
          >
            <span className="inline-flex h-full w-full items-center justify-center rounded-[16px] bg-white px-6 text-sm font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              Have a Tour
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
