import type { Metadata } from "next";
import Image from "next/image";
import { BodyText, ContentSection } from "@/components/course/ContentSection";

export const metadata: Metadata = {
  title: "Lessons | Build Digital Asset | ByteSpace",
};

const modules = [
  {
    title: "Module 1: Introduction to Digital Assets",
    text: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    text: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    text: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    text: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    text: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    text: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export default function CourseLessonsPage() {
  return (
    <>
      <ContentSection title="Explore the Modules">
        <BodyText>
          Immerse yourself in the course content as we break down each module into comprehensive
          lessons, providing practical insights and hands-on experiences.
        </BodyText>
      </ContentSection>

      <ContentSection title="Lesson List">
        <ul className="flex flex-col gap-6">
          {modules.map((m) => (
            <li key={m.title} className="flex items-center gap-[13px]">
              <span className="flex shrink-0 rounded-3xl bg-lime p-4">
                <Image src="/images/icon-videocam.svg" alt="" width={40} height={40} />
              </span>
              <div className="flex flex-col gap-1">
                <p className="leading-[1.2] font-medium text-shuttle-950">{m.title}</p>
                <p className="max-w-[638px] leading-[1.6] text-shuttle-700">{m.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Lesson Content">
        <BodyText>
          Engage with each lesson through captivating video content, detailed textual explanations,
          and interactive elements. Download resources, complete assignments, and test your
          understanding with quizzes.
        </BodyText>
      </ContentSection>

      <ContentSection title="Lesson Progress Tracking">
        <BodyText>
          Witness your growth as you complete lessons, with an intuitive progress tracking feature
          guiding you through your learning journey.
        </BodyText>
        <div className="flex flex-col gap-2 rounded-2xl border border-shuttle-200 bg-white p-4">
          <p className="text-sm leading-[1.2] font-medium text-shuttle-950">Learning Progress</p>
          <p className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.36px] text-shuttle-950">55%</p>
          <div className="h-2 w-full rounded-3xl bg-shuttle-100">
            <div className="h-2 w-[56%] rounded-3xl bg-lime" />
          </div>
        </div>
      </ContentSection>
    </>
  );
}
