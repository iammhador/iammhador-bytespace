import Image from "next/image";
import { Header } from "@/components/layout/Header";

const stats = [
  { icon: "/images/icon-level-sm.svg", label: "Intermediate" },
  { icon: "/images/icon-star-dark.svg", label: "4.8 (172 reviews)" },
  { icon: "/images/icon-people.svg", label: "199 Students" },
];

export function CourseHero() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 pb-[62px] lg:h-[957px] lg:pb-0">
      <Image
        src="/images/grid-course.svg"
        alt=""
        width={1442}
        height={1026}
        priority
        className="absolute top-0 left-1/2 max-w-none -translate-x-1/2"
      />
      <Header />

      <div className="relative mx-auto max-w-[1200px] pt-[172px]">
        <div className="flex flex-wrap items-start justify-between gap-6 pl-0.5">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 font-poppins font-semibold text-shuttle-50">
              <h1 className="text-3xl leading-[1.2] tracking-[-0.36px] md:text-4xl">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="text-xl leading-[1.2] tracking-[-0.2px]">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
            </div>
            <p className="text-lg leading-[1.2] font-medium text-[#f1f4fe]">
              by <span className="text-lime">purepearl studio</span>
            </p>
            <div className="flex flex-wrap gap-4">
              {stats.map((s) => (
                <span
                  key={s.label}
                  className="flex items-center gap-2 rounded-3xl bg-white px-6 py-2 leading-[1.2] font-medium text-shuttle-950 backdrop-blur-[20px]"
                >
                  <Image src={s.icon} alt="" width={24} height={24} />
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          <button className="flex items-center gap-2 rounded-3xl bg-lime px-6 py-2 leading-6 font-medium text-shuttle-950 backdrop-blur-[20px] transition hover:brightness-95">
            <Image src="/images/icon-share.svg" alt="" width={24} height={24} />
            Share
          </button>
        </div>

        <div className="relative mt-[59px] aspect-[720/479] w-full max-w-[720px] overflow-hidden rounded-3xl bg-[#443131] lg:ml-[3px]">
          <Image src="/images/course-video.jpg" alt="Course preview" fill priority sizes="720px" className="object-cover" />
          <button
            aria-label="Play preview"
            className="absolute top-1/2 left-1/2 flex -translate-1/2 items-center justify-center rounded-3xl border border-black-700 bg-[rgba(61,61,61,0.24)] p-4 backdrop-blur-[20px] transition hover:bg-[rgba(61,61,61,0.4)]"
          >
            <Image src="/images/icon-play.svg" alt="" width={72} height={72} />
          </button>
        </div>
      </div>
    </section>
  );
}
