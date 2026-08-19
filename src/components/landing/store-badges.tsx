import Image from "next/image";

const badges = [
  {
    href: "#download",
    src: "/home/appstore.png",
    alt: "Download on the App Store",
  },
  {
    href: "#download",
    src: "/home/googleStore.png",
    alt: "Get it on Google Play",
  },
];

export function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {badges.map((badge) => (
        <a key={badge.src} href={badge.href} className="shrink-0">
          <Image
            src={badge.src}
            alt={badge.alt}
            width={146}
            height={43}
            className="h-[43.35px] w-[146.3px] object-contain"
          />
        </a>
      ))}
    </div>
  );
}
