import Image from "next/image";

import { StoreBadges } from "@/components/landing/store-badges";

export function DownloadCta() {
  return (
    <section
      id="download"
      className="relative mt-30 h-[270px] w-full overflow-hidden bg-[#002A27] [background-image:radial-gradient(circle,rgb(255_255_255/0.14)_1px,transparent_1.2px)] [background-size:22px_22px]"
    >
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        <div className="flex h-full flex-col justify-center px-5 sm:px-12 xl:px-[120px]">
          <h2 className="align-middle text-[38px] font-medium leading-[43.2px] text-white">
            Download The App Now!
          </h2>
          <div className="mt-5">
            <StoreBadges />
          </div>
        </div>

        <div className="absolute top-[-1px] right-5 hidden h-[237px] w-[224.39px] rounded-b-[17.01px] bg-[#FFFFFF] opacity-100 sm:block xl:right-auto xl:left-[973px]">
          <Image
            src="/home/qr.png"
            alt="QR code to download the Zracko app"
            width={296}
            height={296}
            className="absolute top-[19.35px] left-[37.39px] h-[150.73px] w-[148.94px] object-contain opacity-100"
          />
          <div className="absolute right-0 bottom-[14px] left-0 text-center">
            <p className="text-sm font-medium leading-tight text-[#111111]">
              Scan & Download
            </p>
            <p className="text-sm font-light text-[#6B7280]">Catalogue</p>
          </div>
        </div>
      </div>
    </section>
  );
}
