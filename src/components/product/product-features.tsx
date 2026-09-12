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

function ColumnTitle({ title }: { title: string }) {
  return (
    <h3 className="flex h-auto min-h-10 w-full items-center gap-3 rounded-[12px] bg-[#F2FBFB] px-4 py-2 text-sm font-medium tracking-wide text-[#555555] uppercase sm:h-10 sm:py-0 sm:text-base">
      {title}
    </h3>
  );
}

function ColumnList({ features }: { features: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex h-12 w-full items-center gap-3 rounded-[12px] border border-[#E0E0E0] bg-white px-4 py-2"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <LayoutGrid className="size-4" />
          </span>
          <span className="text-sm font-regular text-[#141414]">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductFeatures({
  title = "More Features",
}: {
  title?: string;
}) {
  return (
    <section className="mt-15 bg-[linear-gradient(180deg,rgba(15,175,164,0)_0%,rgba(15,175,164,0.05)_50%,rgba(16,133,252,0.05)_75%,rgba(16,133,252,0)_100%)] lg:mt-30">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title={title}
          subtitle="Most businesses run five different tools that don't talk to each other."
        />

        <div className="-mx-5 flex w-[calc(100%+2.5rem)] snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden sm:-mx-12 sm:w-[calc(100%+6rem)] sm:px-12 xl:hidden">
          {columns.map((column) => (
            <div
              key={column.title}
              className="flex w-[min(80vw,280px)] shrink-0 snap-start flex-col gap-4"
            >
              <ColumnTitle title={column.title} />
              <ColumnList features={column.features} />
            </div>
          ))}
        </div>

        <div className="hidden w-full max-w-[1200px] flex-col gap-4 xl:flex">
          <div className="grid w-full grid-cols-4 gap-4 rounded-[16px] bg-white px-4 py-3">
            {columns.map((column) => (
              <ColumnTitle key={column.title} title={column.title} />
            ))}
          </div>

          <div className="grid h-[400px] w-full grid-cols-4 gap-4">
            {columns.map((column) => (
              <ColumnList key={column.title} features={column.features} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
