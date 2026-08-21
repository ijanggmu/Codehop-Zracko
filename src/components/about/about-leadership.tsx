import Image from "next/image";

import { SectionHeader } from "@/components/common/section-header";

const leaders = Array.from({ length: 7 }, () => ({
  name: "Kim Yoohon",
  role: "Founder, Whole-time Director and Chief Executive Officer",
  image: "/about/leader.png",
}));

function LeadershipCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <article className="relative h-[389px] w-[282px] shrink-0 overflow-hidden rounded-[16px] border-t-4 border-primary">
      <Image src={image} alt={name} fill className="object-cover object-top" sizes="282px" />
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-4 pb-6 text-center">
        <p className="text-base font-semibold text-white">{name}</p>
        <p className="mt-1 text-xs leading-relaxed text-primary">{role}</p>
      </div>
    </article>
  );
}

export function AboutLeadership() {
  return (
    <section className="bg-white py-[102px]">
      <div className="mx-auto flex w-full  flex-col items-center gap-10 px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="Our leadership team"
          subtitle="Most businesses run five different tools that don't talk to each other."
        />

        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center gap-10">
            {leaders.slice(0, 4).map((leader, index) => (
              <LeadershipCard key={`leader-top-${index}`} {...leader} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {leaders.slice(4).map((leader, index) => (
              <LeadershipCard key={`leader-bottom-${index}`} {...leader} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
