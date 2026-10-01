import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/images/logo-mark.svg" alt="" width={29} height={32} />
      <span
        className={`mt-[7px] font-clash text-2xl font-bold ${light ? "text-shuttle-50" : "text-shuttle-950"}`}
      >
        ByteSpace
      </span>
    </Link>
  );
}
