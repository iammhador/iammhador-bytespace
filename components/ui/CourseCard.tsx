import Image from "next/image";
import Link from "next/link";

export type Course = {
  title: string;
  image: string;
  author?: string;
  lessons?: number;
  duration?: string;
  comments?: number;
  level?: string;
  price?: number;
  rating?: number;
  href?: string;
};

const learnerAvatars = [1, 2, 3, 4].map((n) => `/images/course-avatar-${n}.png`);

export function CourseCard({
  course,
  variant = "lime",
  className = "",
}: {
  course: Course;
  variant?: "lime" | "dark";
  className?: string;
}) {
  const {
    title,
    image,
    author = "purepearl studio",
    lessons = 17,
    duration = "2 hours 16 mins",
    comments = 59,
    level = "Beginner",
    price = 25,
    rating = 4.5,
    href,
  } = course;

  const card = (
    <article
      className={`flex h-[384px] w-full max-w-[373px] shrink-0 flex-col gap-[21px] overflow-hidden rounded-3xl border border-shuttle-200 bg-white p-[15px] ${className}`}
    >
      <div className="relative h-[195px] w-full shrink-0 overflow-hidden rounded-xl bg-[#443131]">
        <Image src={image} alt={title} fill sizes="341px" className="object-cover" />
        <div className="absolute bottom-[11px] left-[13px] flex gap-3">
          {[`${lessons} Lessons`, duration, `${comments} Comments`].map((chip) => (
            <span
              key={chip}
              className="rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 text-xs leading-[1.2] font-medium whitespace-nowrap text-black-700 backdrop-blur-[4px]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-black">
              {title}
            </h3>
            <p className="text-xs leading-[1.6] text-black-700">
              by <span className="text-primary">{author}</span>
            </p>
          </div>
          <div className="flex shrink-0 items-center text-lg leading-[1.6] text-black-700">
            {rating}
            <Image
              src={variant === "lime" ? "/images/icon-star.svg" : "/images/icon-star-lime.svg"}
              alt=""
              width={24}
              height={24}
              className="ml-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-3xl bg-shuttle-50 px-3 py-1.5 text-xs leading-[1.2] font-medium text-shuttle-700">
            <Image src="/images/icon-level.svg" alt="" width={20} height={20} />
            {level}
          </span>
          <div className="flex">
            {learnerAvatars.map((src) => (
              <Image key={src} src={src} alt="" width={32} height={32} className="-mr-2 size-8 rounded-full" />
            ))}
            <div className="relative size-8">
              <Image
                src={variant === "lime" ? "/images/avatar-more-sm.svg" : "/images/avatar-more-sm-dark.svg"}
                alt=""
                width={32}
                height={32}
              />
              <span
                className={`absolute inset-0 flex items-center justify-center text-xs leading-5 font-medium ${variant === "lime" ? "text-shuttle-950" : "text-white"}`}
              >
                26+
              </span>
            </div>
          </div>
        </div>

        <p className="flex items-end">
          <span className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-primary">
            ${price}
          </span>
          <span className="text-xs leading-[1.6] text-black-700">/lifetime</span>
        </p>
      </div>
    </article>
  );

  if (!href) return card;
  return (
    <Link href={href} aria-label={title} className="block w-full max-w-[373px] rounded-3xl transition hover:-translate-y-1">
      {card}
    </Link>
  );
}
