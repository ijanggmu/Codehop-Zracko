import { LayoutGrid } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";

const columns = [
  {
    title: "Scheduling & Payments",
    features: [
      "Calendar & Scheduling",
      "Point-of-Sale",
      "Online Booking",
      "Express Booking™",
      "Mobile Apps",
    ],
  },
  {
    title: "Client Relationships",
    features: [
      "Client Management",
      "Phone",
      "Memberships",
      "Forms & Charting",
      "Gift Cards",
    ],
  },
  {
    title: "Marketing & Automation",
    features: [
      "Automated Flows",
      "Campaigns",
      "Offers & Discounts",
      "Virtual Waiting Room",
      "Calendar & Scheduling",
    ],
  },
  {
    title: "Management",
    features: [
      "Retail & Inventory",
      "Staff Management",
      "Reporting",
      "Multi-Location",
      "Payroll Processing",
      "Integrations",
    ],
  },
] as const;

export function ProductFeatures({
  title = "More Features",
}: {
  title?: string;
}) {
  return (
    <section className="mt-30 bg-[linear-gradient(180deg,rgba(15,175,164,0)_0%,rgba(15,175,164,0.05)_50%,rgba(16,133,252,0.05)_75%,rgba(16,133,252,0)_100%)]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title={title}
          subtitle="Most businesses run five different tools that don't talk to each other."
        />

        <div className="flex w-full max-w-[1200px] flex-col gap-4">
          <div className="grid w-full grid-cols-1 gap-4 rounded-[16px] bg-white px-4 py-3 sm:grid-cols-2 xl:grid-cols-4">
            {columns.map((column) => (
              <h3
                key={column.title}
                className="flex h-10 w-full  items-center gap-3 rounded-[12px] bg-[#F2FBFB] px-4 text-base font-medium tracking-wide text-[#555555] uppercase"
              >
                {column.title}
              </h3>
            ))}
          </div>

          <div className="grid h-auto w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:h-[400px] xl:grid-cols-4">
            {columns.map((column) => (
              <ul key={column.title} className="flex flex-col gap-4">
                {column.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex h-12 w-full  items-center gap-3 rounded-[12px] border border-[#E0E0E0] bg-white px-4 py-2"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <LayoutGrid className="size-4" />
                    </span>
                    <span className="text-sm font-regular text-[#141414]">{feature}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
