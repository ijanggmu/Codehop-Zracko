import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { GradientButton } from "@/components/common/gradient-button";
import { HeroServices } from "@/components/common/hero-services";
import { SectionHeader } from "@/components/common/section-header";

export function BusinessHero() {
  return (
    <section className="pricing-bg relative -mt-24 overflow-hidden pt-27 md:pt-35">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title={
            <>
              Tech that supports{" "}
              <span className="bg-gradient-to-r from-primary to-[#1084FE] bg-clip-text text-transparent">
                your staff
              </span>
            </>
          }
          subtitle="Zracko unifies your POS, CRM, inventory, staff, and analytics — purpose-built for service-based businesses that demand more."
          className="max-w-[700px]"
        />

        <HeroServices className="mt-16" />

        <div className="mt-10 mb-16 flex flex-wrap items-center justify-center gap-4">
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

      <div className="relative mx-auto h-[220px] w-full max-w-[1440px] sm:h-[320px] lg:h-[400px]">
        <Image
          src="/business/business-hero.png"
          alt="Staff using Zracko in a restaurant"
          fill
          className="object-cover object-center"
          sizes="1440px"
          priority
        />
      </div>
    </section>
  );
}
