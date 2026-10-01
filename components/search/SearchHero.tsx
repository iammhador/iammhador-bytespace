import Image from "next/image";
import { Header } from "@/components/layout/Header";

export function SearchHero({ query = "" }: { query?: string }) {
  return (
    <section className="relative h-[360px] overflow-hidden bg-primary px-4">
      <Image
        src="/images/grid-cta.svg"
        alt=""
        width={1442}
        height={1026}
        priority
        className="absolute top-0 left-1/2 max-w-none -translate-x-1/2"
      />
      <Header />

      <div className="relative flex flex-col items-center gap-8 pt-[164px]">
        <h1 className="text-center font-poppins text-3xl leading-[1.2] font-semibold tracking-[-0.36px] text-shuttle-50 md:text-4xl">
          Find Your Next Course
        </h1>

        <form action="/search" className="flex w-full max-w-[624px] gap-4">
          <label className="flex h-[52px] flex-1 items-center gap-2 rounded-3xl bg-white px-6 py-3">
            <Image src="/images/icon-search.svg" alt="" width={24} height={24} />
            <input
              name="q"
              defaultValue={query}
              placeholder="Search"
              className="w-full bg-transparent text-lg leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400"
            />
          </label>
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-shuttle-950 transition hover:brightness-95"
          >
            Courses
            <Image src="/images/icon-chevron-down.svg" alt="" width={24} height={24} />
          </button>
        </form>
      </div>
    </section>
  );
}
