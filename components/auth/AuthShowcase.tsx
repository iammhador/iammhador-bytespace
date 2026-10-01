import { CourseCard } from "@/components/ui/CourseCard";
import { Shape3D } from "@/components/ui/Shape3D";
import { HappyStudentsCard } from "@/components/ui/StatCards";

const LIME = "#d4fb20";
const WHITE = "#f5f5f6";

export function AuthShowcase({ className = "relative" }: { className?: string }) {
  return (
    <div aria-hidden className={`h-[585px] w-[548px] ${className}`}>
      <CourseCard
        variant="dark"
        className="absolute top-[89px] left-[25px]"
        course={{ title: "Build Digital Asset", image: "/images/course-2.jpg" }}
      />
      <CourseCard
        variant="dark"
        className="absolute top-0 left-[136px]"
        course={{ title: "the Power of Big Data", image: "/images/course-3.jpg" }}
      />
      <HappyStudentsCard variant="lime" className="absolute top-[435px] left-[251px]" />

      <Shape3D src="/images/shape-spiral-b.png" mask="/images/mask-spiral-b-175.png" tint={WHITE} flip className="top-[321px] left-[373px] size-[175px]" />
      <Shape3D src="/images/shape-torus.png" mask="/images/mask-torus-146.png" tint={LIME} className="top-[15px] left-[54px] size-[146px]" />
      <Shape3D src="/images/shape-cone.png" mask="/images/mask-cone.png" tint={LIME} className="top-[397px] left-0 size-[188px]" />
    </div>
  );
}
