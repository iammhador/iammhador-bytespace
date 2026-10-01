import Image from "next/image";

type Shape3DProps = {
  src: string;
  mask: string;
  tint: string;
  className?: string;
  flip?: boolean;
};

export function Shape3D({ src, mask, tint, className = "", flip }: Shape3DProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute isolate ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <Image src={src} alt="" fill sizes="400px" className="object-cover" />
      <div
        className="absolute inset-0 mix-blend-hard-light"
        style={{
          backgroundColor: tint,
          maskImage: `url(${mask})`,
          maskSize: "100% 100%",
          WebkitMaskImage: `url(${mask})`,
          WebkitMaskSize: "100% 100%",
        }}
      />
    </div>
  );
}
