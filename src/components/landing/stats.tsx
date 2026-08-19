import Image from "next/image";

import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/utils";

const clients = [
  { src: "/home/client-1.png", alt: "Cursor", width: 93, height: 20 },
  { src: "/home/client-2.png", alt: "Databricks", width: 114, height: 19 },
  { src: "/home/client-3.png", alt: "Chime", width: 77, height: 20 },
  { src: "/home/client-4.png", alt: "Synthesia", width: 124, height: 20 },
  { src: "/home/client-5.png", alt: "Lattice", width: 93, height: 15 },
  { src: "/home/client-6.png", alt: "Drata", width: 92, height: 20 },
  { src: "/home/client-7.png", alt: "Cedar", width: 70, height: 20 },
  { src: "/home/client-8.png", alt: "Client logo", width: 66, height: 20 },
  { src: "/home/client-9.png", alt: "Client logo", width: 58, height: 20 },
];

const stats = [
  { value: "980K+", label: "Businesses" },
  { value: "900K+", label: "Appointments Booked" },
  { value: "90%", label: "Uptime" },
  { value: "$100M+", label: "Transactions Processed" },
];

export function Stats() {
  return (
    <section className="mt-30">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="Our Valuable Clients"
          subtitle="Trusted by service businesses that run their operations on Zracko."
        />
        <div className="w-full min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="clients-marquee flex w-max">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-center gap-3 pr-3"
                aria-hidden={copy === 1}
              >
                {clients.map((client) => (
                  <div
                    key={`${copy}-${client.src}`}
                    className="flex h-[44px] w-fit shrink-0 items-center justify-center rounded-[10px] border border-[#E2E8F0] bg-white px-4 opacity-75"
                  >
                    <Image
                      src={client.src}
                      alt={copy === 0 ? client.alt : ""}
                      width={client.width}
                      height={client.height}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[10px] border border-[#E0E0E0] bg-white">
          <div className="flex flex-col xl:flex-row">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "relative flex h-[164.64px] w-full flex-col items-center justify-center gap-2.5 py-10 xl:w-[300px]",
                  index < stats.length - 1 &&
                    "after:absolute max-xl:after:inset-x-0 max-xl:after:bottom-0 max-xl:after:h-px max-xl:after:bg-[repeating-linear-gradient(to_right,#E0E0E0_0_2px,transparent_2px_3px)] xl:after:inset-y-0 xl:after:right-0 xl:after:w-px xl:after:bg-[repeating-linear-gradient(to_bottom,#E0E0E0_0_2px,transparent_2px_3px)]"
                )}
              >
                <p className="bg-[linear-gradient(180deg,#01B5B1_37.98%,#1085FC_100%)] bg-clip-text text-[57px] font-normal leading-[70px] text-transparent">
                  {stat.value}
                </p>
                <p className="text-center text-base font-regular line-height-[21px] text-sidebar-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
