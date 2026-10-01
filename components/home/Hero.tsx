import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Shape3D } from "@/components/ui/Shape3D";
import { HappyStudentsCard, LearningProgressCard } from "@/components/ui/StatCards";

const LIME = "#d4fb20";
const WHITE = "#f5f5f6";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pb-20 lg:h-[1024px] lg:pb-0">
      <div className="absolute inset-y-0 left-1/2 w-[1440px] -translate-x-1/2">
        <Image src="/images/grid-hero.svg" alt="" fill priority className="object-cover object-top" />
        <Image
          src="/images/hero-circle.svg"
          alt=""
          width={1149}
          height={1149}
          className="absolute top-[582px] left-[145px] hidden size-[1149px] max-w-none lg:block"
        />
      </div>

      <Header />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-[60px] px-4 pt-[169px] text-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="max-w-[935px] font-poppins text-5xl leading-[1.2] font-semibold tracking-[-0.72px] text-white md:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="text-lg leading-[1.6] text-shuttle-100">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>
        </div>

        <form className="flex w-full max-w-[581px] gap-4" action="/search">
          <label className="flex h-[52px] flex-1 items-center gap-2 rounded-3xl bg-white px-6 py-3">
            <Image src="/images/icon-search.svg" alt="" width={24} height={24} />
            <input
              name="q"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-lg leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400"
            />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </div>

      <div className="absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 lg:block">
        <div className="absolute top-[512px] left-[431px] h-[541px] w-[578px] drop-shadow-deep">
          <Image src="/images/hero-student.png" alt="Student learning with a laptop" fill priority sizes="578px" className="object-cover" />
        </div>

        <LearningProgressCard className="absolute top-[651px] left-[842px]" />
        <HappyStudentsCard className="absolute top-[837px] left-[328px]" />

        <Shape3D src="/images/shape-spiral-a.png" mask="/images/mask-spiral-a-330.png" tint={WHITE} className="top-[672px] left-[1127px] size-[330px]" />
        <Shape3D src="/images/shape-spiral-b.png" mask="/images/mask-spiral-b-385.png" tint={LIME} className="top-[221px] left-[-118px] size-[385px]" />
        <Shape3D src="/images/shape-spiral-b.png" mask="/images/mask-spiral-b-175.png" tint={WHITE} flip className="top-[477px] left-[183px] size-[175px]" />
        <Shape3D src="/images/shape-torus.png" mask="/images/mask-torus.png" tint={WHITE} className="top-[682px] left-[18px] size-[342px]" />
        <Shape3D src="/images/shape-cylinder.png" mask="/images/mask-cylinder.png" tint={LIME} className="top-[221px] left-[1231px] size-[370px]" />
        <Shape3D src="/images/shape-cone.png" mask="/images/mask-cone.png" tint={WHITE} className="top-[464px] left-[1106px] size-[188px]" />

        <div className="absolute top-[639px] left-[404px] rounded-2xl bg-white p-4 backdrop-blur-[10px]">
          <p className="leading-[1.2] font-medium text-shuttle-950">UI/UX Design</p>
          <p className="flex items-center gap-2 text-xs leading-[1.6] text-shuttle-400">
            200 Courses <span className="text-[10px]">•</span> 1000+ Students
          </p>
        </div>
      </div>
    </section>
  );
}
