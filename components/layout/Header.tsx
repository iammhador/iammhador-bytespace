import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Courses", href: "/search" },
  { label: "Creators", href: "/#creators" },
];

const authLinks = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="relative mx-auto flex h-[120px] max-w-[1200px] items-center justify-between px-4 xl:px-0">
        <Logo light />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-6 text-shuttle-50 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={link.active ? "leading-[1.2] font-medium" : "leading-[1.6] hover:opacity-80"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 leading-6 whitespace-nowrap text-shuttle-50 md:gap-6">
          <Link href="/login" className="hidden hover:opacity-80 md:block">
            Sign In
          </Link>
          <Link href="/register" className="hidden hover:opacity-80 md:block">
            Join Us
          </Link>
          <button aria-label="Cart" className="hover:opacity-80">
            <Image src="/images/icon-cart.svg" alt="" width={24} height={24} />
          </button>
          <MobileMenu links={[...navLinks, ...authLinks]} />
        </div>
      </div>
    </header>
  );
}
