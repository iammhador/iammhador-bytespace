import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AuthShowcase } from "./AuthShowcase";

export function AuthLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-primary px-4 pb-[120px]">
      <Image
        src="/images/grid-cta.svg"
        alt=""
        width={1442}
        height={1026}
        priority
        className="absolute top-0 left-1/2 max-w-none -translate-x-1/2"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <header className="flex h-[120px] items-start pt-[35px] pl-0.5">
          <Link href="/" aria-label="ByteSpace home">
            <Image src="/images/logo-mark.svg" alt="" width={29} height={32} />
          </Link>
        </header>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative flex flex-col self-stretch pl-0.5">
            <div className="flex max-w-[475px] flex-col gap-4 text-shuttle-50">
              <p className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px]">{title}</p>
              <p className="text-lg leading-[1.6]">{description}</p>
            </div>
            <AuthShowcase className="absolute top-[185px] left-[-23px] hidden lg:block" />
          </div>

          <div className="w-full max-w-[579px] rounded-3xl bg-white px-6 pt-[61px] pb-10 sm:px-[63px] lg:min-h-[784px]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
