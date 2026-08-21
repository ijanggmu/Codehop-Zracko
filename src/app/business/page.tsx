import type { Metadata } from "next";

import { BusinessClients } from "@/components/business/business-clients";
import { BusinessFlexible } from "@/components/business/business-flexible";
import { BusinessHero } from "@/components/business/business-hero";
import { ProductFeatures } from "@/components/product/product-features";
import { InYourPocket } from "@/components/landing/in-your-pocket";
import { Stats } from "@/components/landing/stats";

export const metadata: Metadata = {
  title: "Business — Zracko",
  description:
    "Tech that supports your staff. Zracko unifies POS, CRM, inventory, staff, and analytics for service-based businesses.",
};

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <Stats/>
      <BusinessFlexible />
      <BusinessClients />
      <ProductFeatures title="More Business" />
      <InYourPocket />
    </>
  );
}
