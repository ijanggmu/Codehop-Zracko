export const navLinks = [
  {
    href: "#solutions",
    label: "Business",
  },
  {
    href: "#product",
    label: "Products",
  },
  { href: "/pricing", label: "Pricing" },
  { href: "#about", label: "About Us" },
] as const;

export const footerLinks = {
  pages: [
    { href: "#product", label: "Products" },
    { href: "#solutions", label: "Solutions" },
    { href: "#", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
    { href: "#about", label: "About Us" },
  ],
  utility: [
    { href: "#", label: "404" },
    { href: "#", label: "License" },
    { href: "#", label: "Changelog" },
    { href: "#", label: "Style Guide" },
    { href: "#", label: "Protect Password" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Conditions" },
    { href: "#product", label: "Features" },
    { href: "#", label: "Integration" },
    { href: "#", label: "Contact us" },
  ],
} as const;
