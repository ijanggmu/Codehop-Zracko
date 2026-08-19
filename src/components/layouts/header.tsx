"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

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
import { navLinks } from "@/lib/site";

const navItemClassName =
  "inline-flex items-center gap-1 text-center align-middle text-sm font-normal tracking-normal text-foreground transition-colors hover:text-primary";

export function Header() {
  return (
    <header className="fixed top-4 right-0 left-0 z-50 flex justify-center px-4">
      <div className="flex h-[62px] w-full max-w-[1200px] items-center justify-between rounded-[18px] bg-white px-10 opacity-100 shadow-[0_4px_24px_rgb(17_17_17/0.06)]">
        <Link href="/" aria-label="Zracko home">
          <Logo />
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navItemClassName}>
                {link.label}
              </Link>
            ))}
          </nav>

          <GradientButton asChild className="hidden md:inline-flex">
            <Link href="#pricing">
              Request a Demo
              <ArrowUpRight className="size-4" />
            </Link>
          </GradientButton>

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
                      className="rounded-lg px-2 py-2 text-sm font-normal text-[#111111] hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="px-4">
                <SheetClose asChild>
                  <GradientButton asChild>
                    <Link href="#pricing">
                      Request a Demo
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </GradientButton>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
