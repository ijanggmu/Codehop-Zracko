import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

import {
  Avatar,
  AvatarGroup,
} from "@/components/ui/avatar";
import { GradientButton } from "@/components/common/gradient-button";
import { HeroServices } from "@/components/common/hero-services";
import { Container } from "@/components/landing/container";

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
    <section className="relative -mt-24 overflow-hidden bg-primary-foreground bg-[url('/home/hero-bg.png')] bg-cover bg-center bg-no-repeat pt-27 md:pt-35 pb-10">
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

        <HeroServices className="mt-16" />

        <div className="mt-8 mx-auto inline-flex h-14 w-full max-w-[550px] items-center gap-3 rounded-[24px] bg-white px-4 py-1 shadow-[0px_2px_10px_0px_#0000001A]">
          <AvatarGroup className="*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-white">
            {avatars.map((avatar) => (
              <Avatar
                key={avatar.fallback}
                className="relative size-12 overflow-hidden rounded-full border-2 border-white after:hidden"
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
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
