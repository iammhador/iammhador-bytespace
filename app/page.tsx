import { CreatorCta } from "@/components/home/CreatorCta";
import { Footer } from "@/components/layout/Footer";
import { Growth } from "@/components/home/Growth";
import { Hero } from "@/components/home/Hero";
import { LearningPaths } from "@/components/home/LearningPaths";
import { Partners } from "@/components/home/Partners";
import { PopularCourses } from "@/components/home/PopularCourses";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Partners />
      <PopularCourses />
      <LearningPaths />
      <Growth />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </main>
  );
}
