import { AppAnywhere } from "@/components/landing/app-anywhere";
import { DownloadCta } from "@/components/landing/download-cta";
import { Ecosystem } from "@/components/landing/ecosystem";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { InYourPocket } from "@/components/landing/in-your-pocket";
import { Modules } from "@/components/landing/modules";
import { Stats } from "@/components/landing/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Modules />
      <Stats />
      <Features />
      <AppAnywhere />
      <InYourPocket />
      <Ecosystem />
      <Faq />
      <DownloadCta />
    </>
  );
}
