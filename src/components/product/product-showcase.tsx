"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { BusinessClients } from "../business/business-clients";

const featureCards = [
  {
    number: "01",
    image: "/products/products-3.jpeg",
    alt: "Team chat for scheduling a meeting",
  },
  {
    number: "02",
    image: "/products/products-4.jpeg",
    alt: "App integrations around a central hub",
  },
  {
    number: "03",
    image: "/products/products-5.jpeg",
    alt: "Revenue chart trending upward",
  },
  {
    number: "04",
    image: "/products/products-1.jpeg",
    alt: "Weekly schedule with team events",
  },
] as const;

const testimonials = [
  {
    quote:
      "Zracko Journey Experts completely transformed our site with such skill, it feels like a breath of fresh air for our clients!",
    name: "Fara Riaz",
    role: "CEO, Native Love",
    initials: "FR",
  },
  {
    quote:
      "Bookings, payments, and loyalty finally talk to each other. Our teams actually work from one source of truth.",
    name: "Priya Nair",
    role: "Head of People, Lattice",
    initials: "PN",
  },
  {
    quote:
      "From the shop floor to the back office, every sale updates inventory and CRM instantly.",
    name: "Elena Brooks",
    role: "Owner, Squash Blossom",
    initials: "EB",
  },
  {
    quote:
      "We added a second location without changing tools. Scheduling, POS, and reports just scaled with us.",
    name: "Maya Chen",
    role: "CEO, Chime",
    initials: "MC",
  },
] as const;

const highlights = [
  {
    image: "/products/products-2.jpeg",
    alt: "Support specialist with the Zracko help widget",
    badge: "24/7 SUPPORT",
    title: "Your partner in success.",
    description:
      "Most businesses run five different tools that don't talk to each other. Our team is here around the clock so yours never has to.",
    href: "#",
    cta: "Meet our expert support team",
  },
  {
    image: "/products/products-6.jpeg",
    alt: "Retail owner with Zracko POS terminals",
    badge: "GROW WITH ZRACKO",
    title: "Solutions that scale with you.",
    description:
      "Most businesses run five different tools that don't talk to each other. Add a chair, a room, or a location without switching systems.",
    href: "/business",
    cta: "See how Zracko grows with you",
  },
] as const;

function FeatureCard({
  number,
  image,
  alt,
}: (typeof featureCards)[number]) {
  return (
    <article className="mx-auto flex h-auto w-full max-w-[580px] flex-col gap-6 rounded-[24px] border border-[#E0E0E0] bg-white p-6 sm:p-10 lg:mx-0 lg:h-[480px]">
      <p className="text-lg font-medium text-primary">{number}</p>
      <div className="relative mx-auto h-[180px] w-full max-w-[484px] sm:h-[260px]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain"
          sizes="484px"
        />
      </div>
      <div>
        <h3 className="text-[24px] font-semibold text-[#141414]">
          Build for any business model.
        </h3>
        <p className="mt-2 text-base font-light leading-[140%] text-foreground">
          Track investors, partners, products, or anything else unique to how you
          operate.
        </p>
      </div>
    </article>
  );
}

function ProductTestimonial() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <article className="relative flex min-h-[272px] w-full flex-col items-center justify-center gap-6 rounded-[24px] bg-white p-8 shadow-[5px_5px_50px_0px_#0000001A]">
      <p className="max-w-[820px] text-center text-lg font-semibold leading-snug text-[#141414] sm:text-[24px]">
        “{testimonial.quote}”
      </p>
      <div className="flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-primary">
          {testimonial.initials}
        </span>
        <div className="text-left">
          <p className="text-base font-semibold text-[#141414]">{testimonial.name}</p>
          <p className="text-sm font-light text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show testimonial from ${item.name}`}
            onClick={() => setActive(index)}
            className={
              index === active
                ? "h-1.5 w-6 rounded-full bg-primary"
                : "size-1.5 rounded-full bg-[#D9D9D9]"
            }
          />
        ))}
      </div>
    </article>
  );
}

export function ProductShowcase() {
  const [first, second, third, fourth] = featureCards;

  return (
    <section className="mt-30 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="Blazingly fast, amazingly flexible"
          subtitle="Most businesses run five different tools that don't talk to each other."
        />

        <div className="flex w-full max-w-[1200px] flex-col gap-5">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FeatureCard {...first} />
            <FeatureCard {...second} />
          </div>
          <BusinessClients/>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
            <FeatureCard {...third} />
            <FeatureCard {...fourth} />
          </div>
        </div>

        <div className="flex w-full max-w-[1200px] flex-col">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="flex h-auto w-full max-w-[1200px] flex-col items-center gap-8 pt-16 lg:h-[544px] lg:flex-row lg:items-center lg:gap-[103px]"
            >
              <div className="w-full max-w-[555px] shrink-0 overflow-hidden rounded-[24px] lg:w-[555px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={555}
                  height={480}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 555px"
                />
              </div>
              <div className="flex w-full max-w-[542px] flex-col items-start lg:flex-1">
                <span className="inline-flex h-7 items-center rounded-full bg-secondary px-3 text-xs font-medium tracking-[0.08em] text-primary uppercase">
                  {item.badge}
                </span>
                <h3 className="mt-4 text-2xl font-medium text-[#141414] sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base font-light leading-[140%] text-muted-foreground">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-1 text-base font-medium text-primary hover:underline"
                >
                  {item.cta}
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
