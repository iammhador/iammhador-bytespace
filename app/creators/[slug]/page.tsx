import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FilterBar } from "@/components/search/FilterBar";
import { CourseCard } from "@/components/ui/CourseCard";
import { featuredCourses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "PurePearl Studio | ByteSpace",
};

const stats = [
  { value: 3, label: "Products" },
  { value: 12, label: "Followers" },
];

export default function CreatorProfilePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary px-4 pb-[82px] lg:h-[592px] lg:pb-0">
        <Image
          src="/images/grid-creator.svg"
          alt=""
          width={1442}
          height={1026}
          priority
          className="absolute top-0 left-1/2 max-w-none -translate-x-1/2"
        />
        <Header />

        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 pt-[172px] pl-0.5">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-6">
              <Image
                src="/images/creator-profile.png"
                alt="PurePearl Studio"
                width={96}
                height={96}
                priority
                className="size-24 rounded-3xl object-cover"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-poppins text-3xl leading-[1.2] font-semibold tracking-[-0.36px] text-shuttle-50 md:text-4xl">
                    PurePearl Studio
                  </h1>
                  <span className="rounded-3xl bg-lime px-6 py-2 leading-[1.2] font-medium text-shuttle-950 backdrop-blur-[20px]">
                    Creator
                  </span>
                </div>
                <p className="text-lg leading-[1.6] text-shuttle-50">Passionate UI/UX, Web designer</p>
              </div>
            </div>
            <div className="text-lg leading-[1.6] text-shuttle-50">
              <p>
                Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the
                passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore
                and learn together!
              </p>
              <p>
                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From
                digital designs to multimedia projects, each piece tells a unique story. Explore the
                world of creativity with me.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex gap-4 text-lg leading-[1.2] font-medium">
              {stats.map((s) => (
                <span key={s.label} className="flex gap-2 rounded-3xl bg-white px-6 py-3 backdrop-blur-[20px]">
                  <span className="text-primary">{s.value}</span>
                  <span className="text-shuttle-950">{s.label}</span>
                </span>
              ))}
            </div>
            <button className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-ink transition hover:brightness-95">
              Follow
            </button>
          </div>
        </div>
      </section>

      <main className="mx-auto flex max-w-[1201px] flex-col gap-10 px-4 pt-[62px] pb-[61px] xl:px-0">
        <FilterBar />
        <div className="flex flex-wrap justify-center gap-10 xl:justify-start">
          {featuredCourses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
