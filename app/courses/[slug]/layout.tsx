import { CourseHero } from "@/components/course/CourseHero";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { CourseTabs } from "@/components/course/CourseTabs";
import { Footer } from "@/components/layout/Footer";

export default function CourseLayout({ children }: LayoutProps<"/courses/[slug]">) {
  return (
    <>
      <CourseHero />
      <div className="mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-12 px-4 pt-[62px] pb-[80px] xl:flex-row xl:items-start xl:justify-between xl:px-0">
        <main className="flex w-full max-w-[725px] flex-col gap-10">
          <CourseTabs />
          <div className="flex flex-col gap-6">{children}</div>
        </main>
        <CourseSidebar className="relative xl:-mt-[603px]" />
      </div>
      <Footer />
    </>
  );
}
