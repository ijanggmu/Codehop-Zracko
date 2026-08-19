import Link from "next/link";
import Image from "next/image";

import { Logo } from "@/components/common/logo";
import { footerLinks } from "@/lib/site";
import { SectionHeader } from "../common/section-header";

const contactActions = [
  { href: "#faq", label: "Support", icon: "/footer/support-icon.png" },
  { href: "#", label: "Chat with us", icon: "/footer/chat-icon.png" },
  { href: "tel:+10000000000", label: "Call us", icon: "/footer/call-icon.png" },
];

const socials = [
  { href: "#", label: "Website", icon: GlobeIcon },
  { href: "#", label: "Facebook", icon: FacebookIcon },
  { href: "#", label: "X", icon: XIcon },
  { href: "#", label: "Instagram", icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer id="about" className="mt-30 bg-[#F7FAFF]">
      <div className="mx-auto flex min-h-[598px] w-full max-w-[1440px] flex-col justify-between px-6 pt-10 pb-8 sm:px-12 xl:px-[120px]">
        <div className="flex flex-col items-center text-center">
          <SectionHeader title="Contact Us" subtitle="Start free. Upgrade when you're ready to grow." />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {contactActions.map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex h-10 items-center gap-3 rounded-[24px] border border-[#0FAFA466] px-4 py-2 text-sm font-semibold align-middle text-primary opacity-100 transition-colors hover:bg-[#0FAFA4]/5"
              >
                <Image
                  src={icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0 rotate-0 opacity-100"
                />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-[#E6ECF4] pt-10">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-16">
            <div className="max-w-xs">
              <Logo />
              <p className="mt-6 text-base font-regular text-foreground">Social Media</p>
              <div className="mt-3 flex gap-3">
                {socials.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-85"
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16 lg:max-w-3xl">
              <FooterColumn title="Pages" links={footerLinks.pages} />
              <FooterColumn title="Utility Pages" links={footerLinks.utility} />
              <FooterColumn title="Legal info" links={footerLinks.legal} />
            </div>
          </div>
        </div>

        <div className="mt-10 text-base font-normal text-foreground">
          <p>© 2026. All Rights Reserved.</p>
          <p>
            Powered by <span className="font-medium text-primary">Codehop</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-base font-medium text-foreground">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-base font-regular text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 12h18M12 3c2.5 2.8 3.8 6 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-6-3.8-9s1.3-6.2 3.8-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.3-1.3h1.2V3h-2.1C12.2 3 10.5 4.7 10.5 6.8v1.7H8.5V11h2v10h3.5V11h2.3l.5-2.5h-2.8Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
    </svg>
  );
}
