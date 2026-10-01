import type { Metadata } from "next";
import Image from "next/image";
import { BodyText, ContentSection } from "@/components/course/ContentSection";

export const metadata: Metadata = {
  title: "Build Digital Asset: A Comprehensive Guide | ByteSpace",
};

const description = [
  `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
  `In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.`,
  `As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.`,
];

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export default function CourseAboutPage() {
  return (
    <>
      <ContentSection title="Description">
        <div className="flex flex-col gap-[25.6px]">
          {description.map((p) => (
            <BodyText key={p.slice(0, 20)}>{p}</BodyText>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Sneak Peak">
        <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-between">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="relative h-[125px] overflow-hidden rounded-2xl bg-[#d9d9d9] sm:w-[167px]">
              <Image src={`/images/sneak-peek-${n}.jpg`} alt={`Course preview ${n}`} fill sizes="167px" className="object-cover" />
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Key Points">
        <ul className="flex flex-col gap-3">
          {keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 leading-[1.6] text-shuttle-700">
              <Image src="/images/icon-check.svg" alt="" width={24} height={24} />
              {point}
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
