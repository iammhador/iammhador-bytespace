import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { SectionHeading } from "./SectionHeading";
import { CourseCard } from "@/components/ui/CourseCard";
import { featuredCourses } from "@/lib/courses";

export function PopularCourses() {
  return (
    <section id="courses" className="px-4 pt-[72px]">
      <SectionHeading
        title="Discover Your Passion, Build Your Skills"
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      <div className="mt-[42px]">
        <CategoryTabs />
      </div>

      <div className="mx-auto mt-[77px] flex max-w-[1199px] flex-wrap justify-center gap-10">
        {featuredCourses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  );
}
