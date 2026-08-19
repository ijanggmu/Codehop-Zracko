import Image from "next/image";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  wordmarkClassName,
}: {
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/icons/zracko-logo.png"
        alt=""
        width={24}
        height={24}
        className="h-[23.54px] w-[23.55px] shrink-0 rotate-0 opacity-100"
      />
      <span
        className={cn(
          "font-geist text-center text-[28px] font-medium leading-[120%] tracking-[-0.56px] text-[#0FAFA4]",
          wordmarkClassName
        )}
      >
        Zracko
      </span>
    </span>
  );
}
