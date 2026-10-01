import Image from "next/image";
import Link from "next/link";
import { Shape3D } from "@/components/ui/Shape3D";

const LIME = "#d4fb20";
const WHITE = "#f5f5f6";

export function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-[85px]">
      <div aria-hidden className="absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 lg:block">
        <Image src="/images/grid-cta.svg" alt="" width={1442} height={1026} className="absolute top-0 left-0 max-w-none" />
        <Shape3D src="/images/shape-cone.png" mask="/images/mask-cone.png" tint={LIME} className="top-0 left-[1080px] size-[188px]" />
        <Shape3D src="/images/shape-spiral-a.png" mask="/images/mask-spiral-a-330.png" tint={LIME} className="top-[289px] left-[1110px] size-[330px]" />
        <Shape3D src="/images/shape-spiral-b.png" mask="/images/mask-spiral-b-385.png" tint={LIME} className="top-[-162px] left-[-118px] size-[385px]" />
        <Shape3D src="/images/shape-spiral-b.png" mask="/images/mask-spiral-b-175.png" tint={WHITE} flip className="top-[5px] left-[178px] size-[175px]" />
        <Shape3D src="/images/shape-cone-2.png" mask="/images/mask-cone-2.png" tint={WHITE} className="top-[225px] left-[-48px] size-[188px]" />
        <Shape3D src="/images/shape-torus.png" mask="/images/mask-torus.png" tint={LIME} className="top-[299px] left-[20px] size-[342px]" />
        <Shape3D src="/images/shape-cylinder.png" mask="/images/mask-cylinder.png" tint={WHITE} className="top-[6px] left-[1226px] size-[370px]" />
      </div>

      <div className="relative mx-auto flex max-w-[964px] flex-col items-center gap-10 text-center">
        <h2 className="max-w-[710px] font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.44px] text-shuttle-50 md:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-lg leading-[1.6] text-shuttle-50">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          href="/register"
          className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-shuttle-950 transition hover:brightness-95"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
