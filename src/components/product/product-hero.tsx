import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { GradientButton } from "@/components/common/gradient-button";
import { SectionHeader } from "@/components/common/section-header";

const services = [
  { label: "Hair Saloon", src: "/home/job-1.jpeg" },
  { label: "Beauty Saloon", src: "/home/job-2.jpeg" },
  { label: "Spa", src: "/home/job-3.jpeg" },
  { label: "Threading", src: "/home/job-5.jpeg" },
  { label: "Massage Studio", src: "/home/job-6.jpeg" },
];

export function ProductHero() {
  return (
    <section className="pricing-bg overflow-hidden pb-20 pt-10">
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

        <ul className="mt-16 flex flex-wrap items-start justify-center gap-x-10 gap-y-8 sm:gap-x-12">
          {services.map(({ src, label }) => (
            <li key={label} className="relative flex flex-col items-center gap-2.5">
              <span className="relative flex size-14 items-center justify-center overflow-hidden rounded-full bg-[#0FAFA41A]">
                <Image
                  src={src}
                  alt={label}
                  width={28}
                  height={30}
                  className="h-[29.64px] w-[28px] object-contain mix-blend-multiply"
                />
              </span>
              <span className="text-sm font-medium leading-[21px] text-[#141414]">
                {label}
              </span>
            </li>
          ))}
        </ul>

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
