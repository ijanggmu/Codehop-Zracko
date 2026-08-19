import Link from "next/link";
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
  { label: "Hair Saloon", icon: HairIcon },
  { label: "Beauty Saloon", icon: BeautyIcon },
  { label: "Spa", icon: SpaIcon },
  { label: "Threading", icon: ThreadingIcon },
  { label: "Massage Studio", icon: MassageIcon },
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
          {services.map(({ icon: Icon, label }) => (
            <li key={label} className="flex w-[92px] flex-col items-center gap-2.5">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                <Icon />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
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

function HairIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-8 text-primary" fill="none" aria-hidden="true">
      <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 26c1.2-4.2 4.3-6.5 8-6.5s6.8 2.3 8 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 8.5c.4-2 1.6-3.5 4-3.5s3.6 1.5 4 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BeautyIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-8 text-primary" fill="none" aria-hidden="true">
      <circle cx="14" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M7.5 26c1-4.4 3.8-6.5 6.5-6.5 2.2 0 4.2 1.1 5.5 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M22 8.5 23.2 11l2.6.3-2 1.9.5 2.6L22 14.5l-2.3 1.3.5-2.6-2-1.9 2.6-.3L22 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SpaIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-8 text-primary" fill="none" aria-hidden="true">
      <path
        d="M16 26c0-5 4.2-8.5 8.5-8.5-1.2 5.2-4.6 8.5-8.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 26c0-5-4.2-8.5-8.5-8.5 1.2 5.2 4.6 8.5 8.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 26c3.2-4 3.2-9.2 0-14.5C12.8 16.8 12.8 22 16 26Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M16 26V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ThreadingIcon() {
  return (
      <svg viewBox="0 0 32 32" className="size-8 text-primary" fill="none" aria-hidden="true">
      <path
        d="M7 16c2.8-4.2 6.2-6.2 9-6.2S22.2 11.8 25 16c-2.8 4.2-6.2 6.2-9 6.2S9.8 20.2 7 16Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="16" cy="16" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9 10.5c2.4-1.8 5.2-2.6 7.5-2.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MassageIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-8 text-primary" fill="none" aria-hidden="true">
      <circle cx="10" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6 22.5c.6-4 2.8-6.2 5.4-6.2 1.8 0 3.1.9 4.2 2.4L22 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 25.5h18.5M8.5 25.5v-2.2M21 25.5v-2.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
