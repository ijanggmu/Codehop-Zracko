import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function GradientButton({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        "relative h-10 w-[180px] gap-2 overflow-hidden rounded-[18px] border-transparent bg-[linear-gradient(90deg,#0FAFA4_0%,#0B806E_100%)] bg-clip-padding px-6 py-3 text-[14px] font-normal text-white shadow-[0_4px_12px_rgba(11,128,110,0.22)] hover:bg-[linear-gradient(90deg,#0FAFA4_0%,#0B806E_100%)] hover:opacity-90",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[18px] before:shadow-[inset_0_2px_0_0_#FFFFFF80] before:content-['']",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
