import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { GradientButton } from "@/components/common/gradient-button";
import { Container } from "@/components/landing/container";

const services = [
  { label: "Hair Saloon", src: "/home/job-1.jpeg" },
  { label: "Beauty Saloon", src: "/home/job-2.jpeg" },
  { label: "Spa", src: "/home/job-3.jpeg" },
  { label: "Threading", src: "/home/job-5.jpeg" },
  { label: "Massage Studio", src: "/home/job-6.jpeg" },
];

const avatars = [
  {
    src: "/home/hero-1.png",
    alt: "Customer portrait",
    fallback: "AM",
  },
  {
    src: "/home/hero-2.png",
    alt: "Customer portrait",
    fallback: "JL",
  },
  {
    src: "/home/hero-3.png",
    alt: "Customer portrait",
    fallback: "SK",
  },
  {
    src: "/home/hero-4.png",
    alt: "Customer portrait",
    fallback: "DR",
  },
];

export function Hero() {
  return (
    <section className="relative -mt-24 overflow-hidden bg-primary-foreground bg-[url('/home/hero-bg.png')] bg-cover bg-center bg-no-repeat pt-27 pb-15 md:pt-35 md:pb-20">
      <Container className="relative flex flex-col items-center text-center">
        <h1 className=" text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl">
          Every Business from{" "}
          <span className="bg-gradient-to-r from-primary to-[#1084FE] bg-clip-text text-transparent">
            One Platform
          </span>
        </h1>
        <p className="mt-2 max-w-[700px] text-base leading-relaxed font-regular text-muted-foreground text-secondary-foreground sm:text-base">
          Zracko unifies your POS, CRM, inventory, staff, and analytics —
          purpose-built for service-based businesses that demand more.
        </p>
        <GradientButton
          asChild
          className="mt-4 h-12 w-auto px-6 text-base font-medium"
        >
          <Link href="#download">
            Download App Now
            <span className="flex size-6 items-center justify-center rounded-full ">
              <ArrowDown className="size-3.5" />
            </span>
          </Link>
        </GradientButton>

        <ul className="mt-16 flex flex-wrap items-start justify-center gap-x-10 gap-y-8 sm:gap-x-12">
          {services.map(({ src, label }) => (
            <li key={label} className="relative flex flex-col items-center gap-2.5">
              <span className="relative flex size-14 items-center justify-center rounded-full bg-[#0FAFA41A]">
                <Image
                  src={src}
                  alt={label}
                  width={28}
                  height={30}
                  className="h-[29.64px] w-[28px] object-contain opacity-100"
                />
              </span>
              <span className="text-sm font-medium line-height-[21px] text-[#141414]">{label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 inline-flex h-14 w-full max-w-[550px] items-center gap-3 rounded-[24px] bg-white px-4 py-1 opacity-100 shadow-[0px_2px_10px_0px_#0000001A] mx-auto">
          <AvatarGroup className="*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-white">
            {avatars.map((avatar) => (
              <Avatar
                key={avatar.fallback}
                className="size-12 rounded-[24px] border-2 border-white after:hidden"
              >
                <AvatarImage src={avatar.src} alt={avatar.alt} />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <p className="text-left text-sm font-regular line-height-[21px] text-muted-foreground">
            10,000+ users booking services through Zracko
          </p>
        </div>
      </Container>
    </section>
  );
}
