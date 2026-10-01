import Image from "next/image";
import Link from "next/link";

const lessons = [
  { no: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
  { no: "02", title: "Design Principles for Impacts", duration: "21 mins" },
  { no: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

const includes = [
  { icon: "/images/icon-resources.svg", label: "Learning Resources" },
  { icon: "/images/icon-video.svg", label: "Quality Lesson Videos" },
  { icon: "/images/icon-certificate.svg", label: "Certificate of Completion" },
  { icon: "/images/icon-consultation.svg", label: "Private Consultation" },
];

const heading = "font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-shuttle-950";

export function CourseSidebar({ className = "" }: { className?: string }) {
  return (
    <aside className={`w-full max-w-[412px] rounded-3xl border border-shuttle-200 bg-white p-10 ${className}`}>
      <div className="flex flex-col gap-6 text-shuttle-700">
        <h2 className={heading}>112 Lessons (24 hours)</h2>
        <ol className="flex flex-col gap-3">
          {lessons.map((l) => (
            <li key={l.no} className="flex items-start justify-between gap-4">
              <span className="flex gap-2 leading-[1.2] font-medium text-shuttle-950">
                <span className="w-6 shrink-0">{l.no}</span>
                <span className="max-w-[198px]">{l.title}</span>
              </span>
              <span className="leading-[1.6] whitespace-nowrap text-primary">{l.duration}</span>
            </li>
          ))}
          <li className="leading-[1.6]">99 more videos</li>
        </ol>

        <p className="leading-[1.6]">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
        <p className="flex items-end">
          <span className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.36px] text-primary">$25</span>
          <span className="leading-[1.6]">/lifetime</span>
        </p>
        <button className="w-full rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-shuttle-950 transition hover:brightness-95">
          Enroll Now
        </button>

        <h2 className={heading}>This course include</h2>
        <ul className="flex flex-col gap-3">
          {includes.map((item) => (
            <li key={item.label} className="flex items-start gap-2 leading-[1.6]">
              <Image src={item.icon} alt="" width={24} height={24} />
              {item.label}
            </li>
          ))}
        </ul>

        <hr className="border-[#d1d1d1]" />

        <div className="flex flex-col items-start gap-6">
          <div className="flex gap-3">
            <Image src="/images/creator-avatar.png" alt="PurePearl Studio" width={52} height={52} className="rounded-full" />
            <div>
              <p className="text-lg leading-[1.2] font-medium text-shuttle-950">PurePearl Studio</p>
              <p className="leading-[1.6]">Professional Creator</p>
            </div>
          </div>
          <p className="leading-[1.6]">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
          <Link
            href="/creators/purepearl-studio"
            className="rounded-3xl border border-shuttle-200 px-4 py-2 leading-[1.2] font-medium transition hover:border-shuttle-400"
          >
            See Full Profile
          </Link>
        </div>
      </div>
    </aside>
  );
}
