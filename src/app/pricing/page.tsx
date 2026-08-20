import { PricingCompare } from "@/components/pricing/pricing-compare";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { InYourPocket } from "@/components/landing/in-your-pocket";
import { Faq } from "@/components/landing/faq";

export default function Pricing() {
  return (
    <>
      <PricingPlans />
      <PricingCompare />
      <Faq />
      <InYourPocket />
    </>
  );
}
