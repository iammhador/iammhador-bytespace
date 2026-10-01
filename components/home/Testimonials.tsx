import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonial-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonial-2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonial-3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-surface px-4 pt-[74px] pb-16">
      <div aria-hidden className="absolute inset-y-0 left-1/2 w-[1440px] -translate-x-1/2">
        <Image src="/images/glow-testimonials-right.svg" alt="" width={1217} height={1217} className="absolute top-[-281px] left-[802px] max-w-none" />
        <Image src="/images/glow-lime.svg" alt="" width={752} height={752} className="absolute top-[-178px] left-[355px] max-w-none" />
        <Image src="/images/glow-testimonials-left.svg" alt="" width={1217} height={1217} className="absolute top-[109px] left-[-482px] max-w-none" />
      </div>

      <div className="relative mx-auto flex max-w-[1204px] flex-col gap-[72px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 className="max-w-[577px] font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.44px] text-black md:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-lg leading-[1.6] text-black-700">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-[41px]">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex w-[374px] flex-col gap-6 rounded-3xl bg-white p-6">
              <Image src={t.avatar} alt={t.name} width={80} height={80} className="rounded-full" />
              <figcaption>
                <p className="font-poppins text-xl leading-7 font-semibold tracking-[-0.2px] text-black">
                  {t.name}
                </p>
                <p className="text-lg leading-[1.6] text-primary">{t.role}</p>
              </figcaption>
              <blockquote className="text-lg leading-[1.6] text-black-700">&quot;{t.quote}&quot;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
