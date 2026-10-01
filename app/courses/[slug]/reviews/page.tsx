import type { Metadata } from "next";
import Image from "next/image";
import { BodyText, ContentSection } from "@/components/course/ContentSection";
import { RatingFilter } from "@/components/course/RatingFilter";
import { Stars } from "@/components/course/Stars";

export const metadata: Metadata = {
  title: "Reviews | Build Digital Asset | ByteSpace",
};

const breakdown = [
  { percent: 92.28, count: 720 },
  { percent: 36.49, count: 120 },
  { percent: 9.47, count: 21 },
  { percent: 3.51, count: 12 },
  { percent: 5.26, count: 16 },
];

const reviews = [
  {
    name: "PurePearl Studio",
    avatar: "/images/reviewer-1.png",
    text: `"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"`,
  },
  {
    name: "Albert Flores",
    avatar: "/images/reviewer-2.png",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    avatar: "/images/reviewer-3.png",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    avatar: "/images/reviewer-4.png",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export default function CourseReviewsPage() {
  return (
    <ContentSection title="What Learners Are Saying">
      <BodyText>
        Discover what our learners have to say about their experience with &apos;Build Digital
        Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have
        embarked on the transformative journey of mastering digital asset creation.
      </BodyText>

      <div className="flex flex-col items-center gap-6 rounded-2xl border border-shuttle-200 bg-white p-6 sm:flex-row sm:p-10">
        <div className="flex shrink-0 flex-col items-center rounded-lg bg-lime p-10 text-shuttle-950">
          <p className="text-sm leading-[1.2] font-medium">Ratings</p>
          <p className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.36px]">4.7</p>
        </div>
        <ul className="flex w-full flex-1 flex-col gap-1">
          {breakdown.map((row, i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="h-2 flex-1 rounded-3xl bg-shuttle-100">
                <div className="h-2 rounded-3xl bg-lime" style={{ width: `${row.percent}%` }} />
              </div>
              <Stars />
              <span className="w-10 text-right leading-[1.6] text-shuttle-700">{row.count}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-shuttle-950">
        Individual Reviews:
      </h2>
      <RatingFilter />

      {reviews.map((r) => (
        <article key={r.name} className="flex flex-col gap-6 rounded-3xl border border-shuttle-200 p-6 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-6">
              <div className="flex gap-3">
                <Image src={r.avatar} alt={r.name} width={52} height={52} className="rounded-full" />
                <div>
                  <p className="text-lg leading-[1.2] font-medium text-shuttle-950">{r.name}</p>
                  <p className="leading-[1.6] text-shuttle-700">UI/UX Designer</p>
                </div>
              </div>
              <Stars />
            </div>
            <p className="leading-[1.6] whitespace-nowrap text-shuttle-700">a year ago</p>
          </div>
          <p className="leading-[1.6] text-shuttle-700">{r.text}</p>
        </article>
      ))}
    </ContentSection>
  );
}
