import Image from "next/image";

const partners = [
  { src: "/images/partner-1.svg", width: 167, height: 41 },
  { src: "/images/partner-2.svg", width: 168, height: 41 },
  { src: "/images/partner-3.svg", width: 170, height: 41 },
  { src: "/images/partner-4.svg", width: 170, height: 41 },
  { src: "/images/partner-5.svg", width: 169, height: 42 },
];

export function Partners() {
  return (
    <section className="bg-shuttle-50 px-4 py-20">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-end justify-center gap-x-[72px] gap-y-8">
        {partners.map((p) => (
          <Image key={p.src} src={p.src} alt="Partner logo" width={p.width} height={p.height} />
        ))}
      </div>
    </section>
  );
}
