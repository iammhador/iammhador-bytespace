import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { Shape3D } from "@/components/ui/Shape3D";
import { HappyStudentsCard, LearningProgressCard, RevenueCard } from "@/components/ui/StatCards";

const LIME = "#d4fb20";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function Growth() {
  return (
    <section id="creators" className="relative overflow-hidden bg-surface px-4 py-[120px]">
      <div aria-hidden className="absolute inset-y-0 left-1/2 w-[1440px] -translate-x-1/2">
        <Image src="/images/glow-growth.svg" alt="" width={2536} height={2471} className="absolute top-[-506px] left-[-548px] max-w-none" />
        <Image src="/images/glow-lime.svg" alt="" width={752} height={752} className="absolute top-[906px] left-[-327px] max-w-none" />
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-[72px]">
        <div className="flex flex-col items-center gap-[63px] lg:flex-row">
          <div className="flex max-w-[577px] flex-col gap-10 lg:w-[574px] lg:shrink-0">
            <h2 className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.44px] text-shuttle-950 md:text-[44px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] text-lg leading-[1.6] text-shuttle-700">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <div className="flex items-end gap-14">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-poppins text-4xl leading-[44px] font-medium tracking-[-0.36px] text-primary">
                    {s.value}
                  </p>
                  <p className="text-lg leading-[1.6] text-shuttle-700">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[552px] w-[621px] shrink-0 md:block">
            <CourseCard
              variant="dark"
              className="absolute top-0 left-0"
              course={{ title: "Learn Figma from Basic", image: "/images/course-1.jpg" }}
            />
            <div className="absolute top-3 left-0 h-[540px] w-[577px] drop-shadow-deep">
              <Image src="/images/hero-student.png" alt="Student with laptop" fill sizes="577px" className="object-cover" />
            </div>
            <LearningProgressCard className="absolute top-[213px] left-[345px]" />
            <Shape3D src="/images/shape-spiral-a.png" mask="/images/mask-spiral-a-216.png" tint={LIME} className="top-[67px] left-[406px] size-[215px]" />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-[79px] lg:flex-row">
          <div className="relative hidden h-[596px] w-[541px] shrink-0 md:block">
            <RevenueCard className="absolute top-11 left-0" title="Total Revenue" period="July 1-28" amount="$120.29" bar />
            <RevenueCard className="absolute top-[194px] left-0 w-[134px]" title="Year to Date" period="2023" amount="$1,200.38" />
            <div className="absolute top-0 left-7 h-[596px] w-[435px] overflow-hidden">
              <Image
                src="/images/creator-student.png"
                alt="Creator with a tablet"
                width={683}
                height={683}
                className="absolute top-0 left-[-28.51%] h-[114.6%] w-[157.01%] max-w-none drop-shadow-deep"
              />
            </div>
            <HappyStudentsCard className="absolute top-[413px] left-[283px]" />
            <Shape3D src="/images/shape-spiral-b.png" mask="/images/mask-spiral-b-216.png" tint={LIME} className="top-[114px] left-[305px] size-[215px]" />
          </div>

          <div className="flex max-w-[580px] flex-col gap-10">
            <h2 className="max-w-[391px] font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.44px] text-shuttle-950 md:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="text-lg leading-[1.6] text-shuttle-700">
              <span className="font-bold text-shuttle-950">ByteSpace</span> supports individuals or
              entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorPerks.map((perk) => (
                <li key={perk} className="flex items-end gap-2 text-lg leading-[1.2] font-medium text-shuttle-950">
                  <Image src="/images/icon-check.svg" alt="" width={24} height={24} />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
