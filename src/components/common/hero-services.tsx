import Image from "next/image";

import { cn } from "@/lib/utils";

const services = [
  { label: "Hair Saloon", src: "/home/job-1.png" },
  { label: "Beauty Saloon", src: "/home/job-2.png" },
  { label: "Spa", src: "/home/job-3.png" },
  { label: "Threading", src: "/home/job-5.png" },
  { label: "Massage Studio", src: "/home/job-6.png" },
];

export function HeroServices({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "grid w-full grid-cols-6 justify-items-center gap-x-1 gap-y-5 sm:flex sm:flex-wrap sm:items-start sm:justify-center sm:gap-x-12 sm:gap-y-8",
        className
      )}
    >
      {services.map(({ src, label }, index) => (
        <li
          key={label}
          className={cn(
            "group relative z-0 col-span-2 flex w-full max-w-[120px] flex-col items-center justify-center gap-2 hover:z-10",
            index === 3 && "col-start-2 sm:col-start-auto",
            "sm:h-[118px] sm:w-[120px] sm:max-w-none sm:gap-2.5"
          )}
        >
          <span
            aria-hidden
            className="absolute top-1 left-1/2 size-16 -translate-x-1/2 rounded-full bg-[#0FAFA41A] transition-[width,height,border-radius,top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:top-3 sm:size-14 sm:rounded-[28px] group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:rounded-[10px]"
          />
          <span className="relative z-10 flex size-16 items-center justify-center sm:size-14">
            <Image
              src={src}
              alt={label}
              width={40}
              height={40}
              className="h-10 w-10 object-contain sm:h-[30px] sm:w-[28px]"
            />
          </span>
          <span className="relative z-10 px-0.5 text-center text-xs font-medium leading-tight text-[#141414] sm:text-sm sm:leading-[21px]">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
