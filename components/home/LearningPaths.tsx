import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

const categories = [
  { name: "Design", icon: "/images/category-design.svg" },
  { name: "Development", icon: "/images/category-development.svg" },
  { name: "IT & Software", icon: "/images/category-it.svg" },
  { name: "Business", icon: "/images/category-business.svg" },
  { name: "Marketing", icon: "/images/category-marketing.svg" },
  { name: "Photography", icon: "/images/category-photography.svg" },
];

export function LearningPaths() {
  return (
    <section className="px-4 pt-[72px] pb-[120px]">
      <SectionHeading
        size="md"
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />

      <div className="mx-auto mt-[68px] flex max-w-[1202px] flex-wrap justify-center gap-10">
        {categories.map((c) => (
          <Link
            key={c.name}
            href={`/search?category=${encodeURIComponent(c.name)}`}
            className="flex size-[167px] flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-200 transition hover:border-primary"
          >
            <span className="flex rounded-[40px] bg-lime p-3">
              <Image src={c.icon} alt="" width={36} height={36} />
            </span>
            <span className="text-xl leading-[1.2] font-medium text-shuttle-950">{c.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
