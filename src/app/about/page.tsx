import type { Metadata } from "next";

import { AboutConnected } from "@/components/about/about-connected";
import { AboutHero } from "@/components/about/about-hero";
import { AboutLeadership } from "@/components/about/about-leadership";
import { Stats } from "@/components/landing/stats";
import { InYourPocket } from "@/components/landing/in-your-pocket";

export const metadata: Metadata = {
  title: "About — Zracko",
  description:
    "Founded in 2017, Zracko builds intuitive software for service-based businesses.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Stats />
      <AboutLeadership />
      <AboutConnected />
      <InYourPocket />
    </>
  );
}
