import type { Metadata } from "next";

import { Faq } from "@/components/landing/faq";
import { ProductFeatures } from "@/components/product/product-features";
import { ProductHero } from "@/components/product/product-hero";
import { ProductShowcase } from "@/components/product/product-showcase";

export const metadata: Metadata = {
  title: "Products — Zracko",
  description:
    "Zracko unifies your POS, CRM, inventory, staff, and analytics — purpose-built for service-based businesses.",
};

const productFaqs = [
  {
    question: "What is Zracko?",
    answer:
      "Power to founders with exceptional entrepreneursand the world’s leading companies founders with exceptional entrepreneursand the world's leading companies",
  },
  {
    question: "Is this a free available?",
    answer:
      "Yes. You can create an account and explore the core modules at no cost. Upgrade when you need advanced reporting, extra locations, or team seats.",
  },
  {
    question: "Can I upgrade or downgrade my subscription later?",
    answer:
      "Yes. You can change plans at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle.",
  },
  {
    question: "How secure is my data on your platform?",
    answer:
      "Your data is encrypted in transit and at rest. Access is role-based, and every location stays on one secure source of truth.",
  },
  {
    question: "Do you offer customer support or training?",
    answer:
      "Yes. You get onboarding, in-app guidance, and a support team that can train your staff as you grow.",
  },
  {
    question: "Do you offer customer support or training?",
    answer:
      "Yes. You get onboarding, in-app guidance, and a support team that can train your staff as you grow.",
  },
  {
    question: "Do you offer customer support or training?",
    answer:
      "Yes. You get onboarding, in-app guidance, and a support team that can train your staff as you grow.",
  },
];

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductShowcase />
      <ProductFeatures />
      <Faq
        items={productFaqs}
        subtitle="Most businesses run five different tools that don't talk to each other."
      />
    </>
  );
}
