"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  CalendarDays,
  Check,
  FileText,
  Gift,
  Globe,
  Headphones,
  Heart,
  Mail,
  MessageSquare,
  Package,
  Phone,
  Smartphone,
  TrendingDown,
  Users,
  type LucideIcon,
} from "lucide-react";

import { GradientButton } from "@/components/common/gradient-button";
import { SectionHeader } from "@/components/common/section-header";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "annual";

type Plan = {
  name: string;
  description: string;
  monthlyPrice: number;
  badge?: string;
  features: { label: string; icon: LucideIcon }[];
};

const plans: Plan[] = [
  {
    name: "Zracko Starter",
    description: "For single-location businesses getting started.",
    monthlyPrice: 29,
    features: [
      { label: "POS app for any payment", icon: Smartphone },
      { label: "Online site", icon: Globe },
      { label: "Item library", icon: Package },
      { label: "Invoicing", icon: FileText },
      { label: "Booking", icon: CalendarDays },
      { label: "Checking and savings accounts", icon: Building2 },
    ],
  },
  {
    name: "Zracko Pro+",
    description: "For growing businesses that need the full system.",
    monthlyPrice: 79,
    badge: "Most Popular",
    features: [
      { label: "Everything in Zracko Starter", icon: Check },
      { label: "POS features for every industry", icon: Smartphone },
      { label: "Lower processing fees", icon: TrendingDown },
      { label: "Loyalty rewards program", icon: Heart },
      { label: "Email and text message marketing", icon: Mail },
      { label: "Staff management", icon: Users },
    ],
  },
  {
    name: "Zracko Premium",
    description: "For multi-branch operations at scale.",
    monthlyPrice: 149,
    features: [
      { label: "Everything in Zracko Pro+", icon: Check },
      { label: "24/7 priority support", icon: Headphones },
      { label: "Advanced reporting", icon: BarChart3 },
      { label: "Lowest processing fees", icon: TrendingDown },
      { label: "More text message marketing", icon: MessageSquare },
      { label: "No gift card load fees", icon: Gift },
    ],
  },
];

function displayPrice(monthlyPrice: number, billing: Billing) {
  if (billing === "annual") return Math.round(monthlyPrice * 0.8);
  return monthlyPrice;
}

export function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="pricing-bg min-h-screen pb-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 pt-10 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title={
            <>
              Simple Pricing.{" "}
              <span className="bg-gradient-to-r from-primary to-[#1084FE] bg-clip-text text-transparent">
                No Surprises.
              </span>
            </>
          }
          subtitle="Start free. Upgrade when you're ready to grow."
        />

        <div className="mt-8 inline-flex items-center rounded-full bg-white p-1 shadow-[0_2px_10px_rgb(17_17_17/0.06)]">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              billing === "monthly"
                ? "bg-[#F3F6F6] text-foreground"
                : "text-muted-foreground"
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling("annual")}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors",
              billing === "annual"
                ? "bg-[#F3F6F6] text-foreground"
                : "text-muted-foreground"
            )}
          >
            Annual
            <span className="rounded-full bg-[#E7F7F6] px-2 py-0.5 text-xs font-medium text-primary">
              -20%
            </span>
          </button>
        </div>

        <div className="mt-12 flex w-full flex-wrap items-start justify-center gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="group relative flex h-[652px] w-[384px] flex-col rounded-[24px] border-2 border-transparent bg-[#FFFFFF] px-6 pt-8 pb-8 shadow-[5px_5px_50px_0px_#0000001A] transition-colors hover:border-primary"
            >
              {plan.badge ? (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                  {plan.badge}
                </span>
              ) : null}

              <div>
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <p className="mt-8 text-[40px] font-semibold leading-none tracking-tight text-foreground">
                ${displayPrice(plan.monthlyPrice, billing)}
                <span className="text-[22px] font-semibold">/mo</span>
              </p>

              <div className="mt-8 flex min-h-0 flex-1 flex-col">
                <p className="text-sm font-medium text-foreground">What you get</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {plan.features.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 rounded-full bg-[#F7FAFF] px-3 py-2 text-sm text-[#000000]"
                    >
                      <Icon className="size-4 shrink-0 text-primary" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/#download"
                className={cn(
                  "mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-[#E0E0E0] bg-white text-sm font-medium text-foreground transition-all",
                  "group-hover:border-transparent group-hover:bg-[linear-gradient(90deg,#0FAFA4_0%,#0B806E_100%)] group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(11,128,110,0.22)]"
                )}
              >
                Start Free Trial
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-6 flex h-[248px] w-full max-w-[1200px] flex-col items-center justify-center gap-6 rounded-[24px] bg-[#FFFFFF] p-8 text-center shadow-[5px_5px_50px_0px_#0000001A]">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Zracko Pro</p>
            <h3 className="mt-2 text-3xl font-medium text-foreground md:text-4xl">
              Get custom pricing
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base font-light text-muted-foreground">
              If you process over $250,000 per year, talk to our team to see if
              you&apos;re eligible for custom pricing.
            </p>
          </div>
          <GradientButton asChild className="h-11 w-auto rounded-full px-6">
            <Link href="/#about">
              <Phone className="size-4" />
              Talk to Our Team
            </Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
