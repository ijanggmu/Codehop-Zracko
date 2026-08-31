import Image from "next/image";
import Link from "next/link";
import { Check, CircleHelp } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";

const columns = [
  { id: "free", name: "Free" },
  { id: "starter", name: "Starter", highlighted: true },
  { id: "pro", name: "Pro+" },
  { id: "premium", name: "Premium" },
  { id: "enterprise", name: "Enterprise" },
] as const;

type Cell = boolean | string;

type CompareRow = {
  label: string;
  hint?: string;
  values: [Cell, Cell, Cell, Cell, Cell];
};

const rows: CompareRow[] = [
  {
    label: "Core features, including POS, inventory, checkout, receipts, and window management",
    values: [true, true, true, true, true],
  },
  {
    label: "Thousands of integrations",
    values: [true, true, true, true, true],
  },
  {
    label: "Custom extensions",
    values: [true, true, true, true, true],
  },
  {
    label: "Team onboarding",
    values: [true, true, true, true, true],
  },
  {
    label: "Dashboard history size",
    hint: "How long sales and activity stay in the live dashboard.",
    values: ["3 months", "Unlimited", "3 months", "Unlimited", "Unlimited"],
  },
  {
    label: "Request AI",
    hint: "AI assists with reports, replies, and catalog copy.",
    values: ["50 messages", true, "50 messages", true, true],
  },
  {
    label: "Advanced AI add-on",
    hint: "Higher limits and custom models for busy locations.",
    values: [false, "+ $8 / month", false, "+ $8 / user / month", "Custom"],
  },
  {
    label: "Cloud sync",
    hint: "Keep every location on the same live catalog and CRM.",
    values: [false, true, false, true, true],
  },
  {
    label: "Custom themes",
    values: [false, true, false, true, true],
  },
  {
    label: "Translator",
    values: [false, true, false, true, true],
  },
  {
    label: "Pinned notes",
    hint: "Sticky notes on tickets, customers, and shifts.",
    values: ["5 notes", "Unlimited", "5 notes", "Unlimited", "Unlimited"],
  },
  {
    label: "Custom window management commands",
    values: [false, true, false, true, true],
  },
  {
    label: "Team members",
    values: [false, true, "Unlimited", "Unlimited", "Unlimited"],
  },
  {
    label: "Shared commands",
    values: [false, true, "Up to 5", "Unlimited", "Unlimited"],
  },
  {
    label: "Shared calendars",
    values: [false, true, "Up to 30", "Unlimited", "Unlimited"],
  },
  {
    label: "Shared snippets",
    values: [false, true, "Up to 30", "Unlimited", "Unlimited"],
  },
  {
    label: "All control center, including organization-wide targets, billing, and role-based access",
    values: [false, false, true, true, true],
  },
  {
    label: "Organization-level controls, including seats, SSO, SAML, SCIM, and IP allow-list",
    values: [false, false, false, false, true],
  },
  {
    label: "Monthly subscription",
    values: ["Free, forever", "$29 / month", "$79 / month", "$149 / month", false],
  },
  {
    label: "Annual subscription  -20%",
    values: ["Free, forever", "$23 / month", "$63 / month", "$119 / month", "Custom"],
  },
];

const actions = [
  { label: "Download", href: "/#download", icon: "/pricing/iphone.png" },
  { label: "Select Plan", href: "/#download", icon: "/pricing/plan.png" },
  { label: "Create Organization", href: "/#download", icon: "/pricing/Icon.png" },
  { label: "Select Plan", href: "/#download", icon: "/pricing/Icon.png" },
  { label: "Select Plan", href: "/#about", icon: "/pricing/Icon.png" },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) {
    return <Check className="mx-auto size-4 text-primary" strokeWidth={2.5} />;
  }

  if (value === false) {
    return <span className="text-muted-foreground/70">-</span>;
  }

  return <span className="text-sm text-foreground">{value}</span>;
}

export function PricingCompare() {
  return (
    <section className="mx-auto mt-30 flex w-full max-w-[1440px] flex-col gap-10 px-5 pb-10 sm:px-12 xl:px-[120px]">
      <SectionHeader
        title="Every Module Talks to Every Other Module."
        subtitle="Most businesses run five different tools that don't talk to each other."
      />

      <div className="w-full overflow-x-auto">
        <div className="min-w-[960px]">
          <div className="grid grid-cols-[minmax(240px,1.6fr)_repeat(5,minmax(110px,1fr))] items-end pb-6">
            <div />
            {columns.map((column) => (
              <div key={column.id} className="flex items-center justify-center gap-1.5 pb-2">
                {"highlighted" in column && column.highlighted ? (
                  <Check className="size-3.5 text-primary" strokeWidth={2.5} />
                ) : null}
                <p className="text-sm font-medium text-foreground">{column.name}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[minmax(240px,1.6fr)_repeat(5,minmax(110px,1fr))] items-center border-t border-[#EEF1F4] py-4"
              >
                <div className="flex items-start gap-1.5 pr-4">
                  <p className="text-sm leading-5 text-muted-foreground">{row.label}</p>
                  {row.hint ? (
                    <span className="mt-0.5 shrink-0 text-muted-foreground/70" title={row.hint}>
                      <CircleHelp className="size-3.5" />
                    </span>
                  ) : null}
                </div>
                {row.values.map((value, index) => (
                  <div
                    key={`${row.label}-${columns[index].id}`}
                    className="px-2 text-center"
                  >
                    <CellValue value={value} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center pt-8">
            <div className=" min-w-[200px]" />
            {actions.map((action, index) => (
              <div
                key={`${action.label}-${index}`}
                className="flex min-w-[110px] flex-1 justify-center px-1"
              >
                <Link
                  href={action.href}
                  className="inline-flex h-9 min-h-9 items-center justify-center gap-2 rounded-[8px] bg-[#F7FAFF] px-3 py-2 text-sm font-medium text-foreground shadow-[0px_2px_0.4px_0px_#00000033]"
                >
                  <Image
                    src={action.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 shrink-0 object-contain"
                    aria-hidden
                  />
                  {action.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
