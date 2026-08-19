import Image from "next/image";

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";

const modules = [
  {
    image: "/home/module-1.jpg",
    alt: "Chime customer portrait",
    quote:
      "Zracko Journey Experts completely transformed our site with such skill, it feels like a breath of fresh air for our clients!",
    logo: "/home/chime.png",
    logoAlt: "Chime",
    name: "Maya Chen",
    role: "CEO, Chime",
  },
  {
    image: "/home/module-2.jpg",
    alt: "Lattice customer portrait",
    quote:
      "Bookings, payments, and loyalty finally talk to each other. Our teams actually work from one source of truth.",
    logo: "/home/lattice.png",
    logoAlt: "Lattice",
    name: "Priya Nair",
    role: "Head of People, Lattice",
  },
  {
    image: "/home/module-3.jpg",
    alt: "Squash Blossom customer portrait",
    quote:
      "From the shop floor to the back office, every sale updates inventory and CRM instantly.",
    logo: "/home/squash.png",
    logoAlt: "Squash Blossom Boutique",
    name: "Elena Brooks",
    role: "Owner, Squash Blossom",
  },
  {
    image: "/home/module-2.jpg",
    alt: "Apricot Lane customer portrait",
    quote:
      "Zracko Journey Experts completely transformed our site with such skill, it feels like a breath of fresh air for our clients!",
    logo: "/home/apricot.png",
    logoAlt: "Apricot Lane",
    name: "Fesz Riaz",
    role: "CEO, Apricot Lane",
  },
];

export function Modules() {
  return (
    <section
      id="product"
      className="modules-bg w-full min-h-[732px] pt-[102px] opacity-100"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="Every Module Talks to Every Other Module."
          subtitle="Most businesses run five different tools that don't talk to each other."
        />
        <div className="flex flex-wrap justify-center gap-2">
          {modules.map((module) => (
            <Card
              key={module.logoAlt}
              className="relative h-[509.25px] w-[291px] shrink-0 gap-0 overflow-hidden rounded-[16px] border border-[#FFFFFF1A] bg-[#FFFFFF01] p-0 ring-0 shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]"
            >
              <Image
                src={module.image}
                alt={module.alt}
                fill
                className="object-cover object-top"
                sizes="291px"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-4 p-5">
                <p className="text-base font-regular line-height-[28px] text-popover">
                  “{module.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={module.logo}
                    alt={module.logoAlt}
                    width={80}
                    height={60}
                    className="h-[45px] w-[60px] shrink-0 rounded-lg bg-white object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-lg font-medium line-height-[28px] text-[#F0F0F0]">
                      {module.name}
                    </p>
                    <p className="text-xs font-regular line-height-[16px] text-popover/60">
                      {module.role}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
