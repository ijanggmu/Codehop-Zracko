"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight, CircleHelp, PenLine, Pipette, type LucideIcon } from "lucide-react";

import { GradientButton } from "@/components/common/gradient-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const businessTypes: {
  label: string;
  src?: string;
  icon?: LucideIcon;
}[] = [
  { label: "Hair Saloon", src: "/home/job-1.png" },
  { label: "Beauty Saloon", src: "/home/job-2.png" },
  { label: "Spa", src: "/home/job-3.png" },
  { label: "Threading", src: "/home/job-5.png" },
  { label: "Massage Studio", src: "/home/job-6.png" },
  { label: "Tattoo & Piercing", icon: PenLine },
  { label: "Nail Salon", icon: Pipette },
  { label: "Others", icon: CircleHelp },
];

export function RequestDemoDialog({
  children,
}: {
  children: ReactNode;
}) {
  const [selected, setSelected] = useState("Hair Saloon");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[720px] gap-5 overflow-y-auto rounded-[20px] bg-[radial-gradient(120%_80%_at_50%_120%,#E7F7F6_0%,#FFFFFF_55%)] px-3 py-6 sm:gap-8 sm:rounded-[24px] sm:px-12 sm:py-10">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold leading-tight text-[#141414] sm:text-[28px]">
            Choose Your{" "}
            <span className="text-primary">Business Type</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8">
          {businessTypes.map((type) => {
            const isSelected = selected === type.label;
            const Icon = type.icon;

            return (
              <button
                key={type.label}
                type="button"
                onClick={() => setSelected(type.label)}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className={cn(
                    "relative flex size-12 items-center justify-center overflow-hidden rounded-full bg-[#0FAFA41A] transition-shadow sm:size-14",
                    isSelected && "ring-2 ring-primary ring-offset-2"
                  )}
                >
                  {type.src ? (
                    <Image
                      src={type.src}
                      alt=""
                      width={28}
                      height={30}
                      className="h-[29.64px] w-[28px] object-contain"
                    />
                  ) : Icon ? (
                    <Icon className="size-5 text-primary sm:size-6" />
                  ) : null}
                </span>
                <span className="text-center text-xs font-medium leading-[18px] text-[#141414] sm:text-sm sm:leading-[21px]">
                  {type.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center px-1">
          <GradientButton type="button" className="h-11 w-full min-w-0 max-w-[280px] px-8 sm:w-auto sm:min-w-[180px]">
            Request a Demo
            <ArrowUpRight className="size-4" />
          </GradientButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}
