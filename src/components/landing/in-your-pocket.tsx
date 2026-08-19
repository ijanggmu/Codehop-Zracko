import Image from "next/image";
import { Download, Star, Trophy } from "lucide-react";

import { QrCode } from "@/components/landing/qr-code";
import { StoreBadges } from "@/components/landing/store-badges";
import { cn } from "@/lib/utils";

const highlights = [
  {
    value: "4.8",
    label: "Average Star Rating",
    kind: "rating" as const,
  },
  {
    value: "120K",
    label: "5-Star Ratings",
    kind: "trophy" as const,
    icon: Trophy,
  },
  {
    value: "5M",
    label: "Total Downloads",
    kind: "downloads" as const,
    icon: Download,
  },
];

export function InYourPocket() {
  return (
    <section className="pocket-bg relative mt-30 overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 sm:px-12 lg:flex-row lg:justify-between xl:px-[135px]">
        <div className="w-full max-w-[550px] shrink-0 ">
          <h2 className="text-4xl font-medium text-foreground  max-w-[400px]">
            Your Whole Business. In{" "}
            <span className="bg-[linear-gradient(90deg,#01B5B1_0%,#1085FC_100%)] bg-clip-text text-transparent">
              Your Pocket.
            </span>
          </h2>
          <div className="mt-6">
            <StoreBadges />
          </div>
          <div className="mt-8 grid grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "relative flex flex-col items-center px-2 text-center",
                  index < highlights.length - 1 &&
                    "after:absolute after:inset-y-1 after:right-0 after:w-px after:bg-[linear-gradient(180deg,#01B5B1_37.98%,#1085FC_100%)]"
                )}
              >
                {item.kind === "rating" ? (
                  <span className="flex h-6 items-center gap-1">
                    <Image
                      src="/home/app.png"
                      alt="App Store"
                      width={146}
                      height={43}
                      className="h-5 w-auto object-contain"
                    />
                    <Image
                      src="/home/google.png"
                      alt="Google Play"
                      width={150}
                      height={50}
                      className="h-8 w-auto object-contain"
                    />
                  </span>
                ) : (
                  <item.icon className="size-5 text-primary" />
                )}
                <p className="mt-2 flex items-center gap-1 text-[28px] font-semibold leading-none">
                  <span className="bg-[linear-gradient(180deg,#01B5B1_37.98%,#1085FC_100%)] bg-clip-text text-transparent">
                    {item.value}
                  </span>
                  {item.kind === "rating" ? (
                    <Star className="size-5 fill-[#1084FE] text-[#1084FE]" />
                  ) : null}
                </p>
                <p className="mt-2 text-base font-medium text-[#00A599]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[619px] w-[580px] max-w-full shrink-0 [mask-image:linear-gradient(to_bottom,black_58%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_58%,transparent_96%)]">
          <div className="absolute top-[95px] left-0 h-[402px] w-full rounded-[15.3px] bg-[#B2E6DE]" />
          <Image
            src="/home/phone-banner.png"
            alt="Zracko app on a phone"
            width={508}
            height={619}
            className="absolute top-[29px] left-[36px] z-10 h-[619px] w-[508px] max-w-none object-contain object-top"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#FEFFFF] from-15% to-transparent"
      />
    </section>
  );
}
