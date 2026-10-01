import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { FilterBar } from "@/components/search/FilterBar";
import { Pagination } from "@/components/search/Pagination";
import { SearchHero } from "@/components/search/SearchHero";
import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { CourseCard } from "@/components/ui/CourseCard";
import { featuredCourses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Find Your Next Course | ByteSpace",
};

const searchTabs = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"],
];

const results = [...featuredCourses, ...featuredCourses, ...featuredCourses];

export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  const { q, page } = await searchParams;
  const query = typeof q === "string" ? q : "";
  const currentPage = Math.max(1, Number(page) || 1);

  return (
    <>
      <SearchHero query={query} />

      <main className="mx-auto max-w-[1200px] px-4 pt-[72px] pb-[72px] xl:px-0">
        <FilterBar />

        <div className="mt-8">
          <CategoryTabs rows={searchTabs} showMore={false} rowClassName="justify-center xl:flex-nowrap xl:justify-between xl:gap-2" />
        </div>

        <div className="mt-[77px] flex flex-wrap justify-center gap-10 xl:justify-start">
          {results.map((course, i) => (
            <CourseCard key={`${course.title}-${i}`} course={course} />
          ))}
        </div>

        <div className="mt-[72px]">
          <Pagination page={currentPage} totalPages={5} />
        </div>
      </main>

      <Footer />
    </>
  );
}
