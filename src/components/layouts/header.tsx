"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/common/logo";
import { GradientButton } from "@/components/common/gradient-button";
import { RequestDemoDialog } from "@/components/common/request-demo-dialog";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 right-0 left-0 z-50 flex justify-center px-4">
      <div className="flex h-[62px] w-full max-w-[1200px] items-center justify-between rounded-[18px] bg-white px-4 opacity-100 shadow-[0_4px_24px_rgb(17_17_17/0.06)] sm:px-6 md:px-10">
        <Link href="/" aria-label="Zracko home">
          <Logo wordmarkClassName="text-xl md:text-2xl" />
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex items-center gap-1 text-center align-middle text-sm font-normal tracking-normal transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
                {link.hasDropdown ? (
                  <ChevronDown className="size-3.5 opacity-70" aria-hidden="true" />
                ) : null}
              </Link>
            ))}
          </nav>

          <RequestDemoDialog>
            <GradientButton className="hidden md:inline-flex">
              Request a Demo
              <ArrowUpRight className="size-4" />
            </GradientButton>
          </RequestDemoDialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-normal transition-colors hover:bg-muted hover:text-primary",
                        pathname === link.href ? "text-primary" : "text-[#111111]"
                      )}
                    >
                      {link.label}
                      {link.hasDropdown ? (
                        <ChevronDown className="size-3.5 opacity-70" aria-hidden="true" />
                      ) : null}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="px-4">
                <RequestDemoDialog>
                  <GradientButton>
                    Request a Demo
                    <ArrowUpRight className="size-4" />
                  </GradientButton>
                </RequestDemoDialog>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
