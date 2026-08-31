export const navLinks = [
  {
    href: "/business",
    label: "Business",
    hasDropdown: true,
  },
  {
    href: "/product",
    label: "Features",
    hasDropdown: true,
  },
  { href: "/pricing", label: "Pricing", hasDropdown: false },
  { href: "/about", label: "About Us", hasDropdown: false },
] as const;

export const footerLinks = {
  pages: [
    { href: "#product", label: "Products" },
    { href: "/business", label: "Business" },
    { href: "#", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
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
    { href: "/product", label: "Features" },
    { href: "#", label: "Integration" },
    { href: "#", label: "Contact us" },
  ],
} as const;
