"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Zracko Journey Experts completely transformed our site with such skill, it feels like a breath of fresh air for our clients!",
    logo: "/home/apricot.png",
    logoAlt: "Apricot Lane",
    name: "Fesz Riaz",
    role: "CEO, Apricot Lane",
  },
  {
    quote:
      "Bookings, payments, and loyalty finally talk to each other. Our teams actually work from one source of truth.",
    logo: "/home/lattice.png",
    logoAlt: "Lattice",
    name: "Priya Nair",
    role: "Head of People, Lattice",
  },
  {
    quote:
      "From the shop floor to the back office, every sale updates inventory and CRM instantly.",
    logo: "/home/squash.png",
    logoAlt: "Squash Blossom Boutique",
    name: "Elena Brooks",
    role: "Owner, Squash Blossom",
  },
  {
    quote:
      "Zracko Journey Experts completely transformed our site with such skill, it feels like a breath of fresh air for our clients!",
    logo: "/home/chime.png",
    logoAlt: "Chime",
    name: "Maya Chen",
    role: "CEO, Chime",
  },
] as const;

export function BusinessClients() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section className="bg-white pb-[102px]">
      <div className="mx-auto flex w-full max-w-[1440px] justify-center px-5 sm:px-12 xl:px-[120px]">
        <article className="relative flex h-auto min-h-[272px] w-full max-w-[1200px] flex-col items-center justify-center gap-6 rounded-[24px] bg-white p-8 shadow-[5px_5px_50px_0px_#0000001A] xl:h-[272px]">
          <Quote className="absolute top-8 right-8 size-12 text-primary/40" strokeWidth={1.5} />
          <p className="text-sm font-light text-muted-foreground">Our Clients</p>
          <p className="max-w-[820px] text-center text-[24px] font-semibold leading-snug text-[#141414]">
            “{testimonial.quote}”
          </p>
          <div className="flex items-center gap-3">
            <Image
              src={testimonial.logo}
              alt={testimonial.logoAlt}
              width={48}
              height={48}
              className="size-12 rounded-lg bg-[#F3F6F6] object-contain p-1"
            />
            <div className="text-left">
              <p className="text-base font-semibold text-[#141414]">{testimonial.name}</p>
              <p className="text-sm font-light text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.logoAlt}
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
      </div>
    </section>
  );
}
