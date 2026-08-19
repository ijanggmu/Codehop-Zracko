import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function AppAnywhere() {
  return (
    <section className="mx-auto mt-30 flex w-full bg-[#002A27] px-50 py-20">
      <div className=" flex justify-between items-center gap-30">
        <div className="flex max-w-md flex-col lg:max-w-[350px] lg:shrink-0 ">
          <h2 className="text-[24px] font-semibold text-[#F0F0F0]">
            Accept payments anywhere.
          </h2>
          <p className="mt-4 text-base font-light leading-[140%] tracking-normal text-[#F0F0F0]">
            Countertop, tableside, or curbside — take any payment method from a
            phone, tablet, or terminal.
          </p>
          <p className="mt-4 text-base font-light leading-[140%] tracking-normal text-[#F0F0F0]">
            Cards, tap-to-pay, and cash in one flow
            <br />
            Instant digital receipts
          </p>
          <Link
            href="#faq"
            className="mt-8 inline-flex items-center gap-1 text-base font-medium text-[#00FFE2] hover:underline"
          >
            Know more
            <ChevronRight className="size-4" />
          </Link>
        </div>

        <div className="relative h-[240px] w-full min-w-0 overflow-hidden rounded-[24px] sm:h-[320px] lg:h-[480px] lg:max-w-[640px] lg:flex-1">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Zracko payments on a phone"
          >
            <source src="/home/appAnywhere.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
