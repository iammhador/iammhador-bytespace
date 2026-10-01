import Image from "next/image";

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Image key={i} src="/images/icon-star-rating.svg" alt="" width={24} height={24} />
      ))}
    </span>
  );
}
