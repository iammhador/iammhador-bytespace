import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary px-4 pb-24 lg:h-[957px] lg:pb-0">
        <p
          aria-hidden
          className="absolute top-[160px] left-1/2 -translate-x-1/2 bg-clip-text font-poppins text-[200px] leading-none font-semibold tracking-[-4.8px] whitespace-nowrap text-transparent md:text-[480px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgb(212,251,32) 0%, rgba(212,251,32,0.96) 25%, rgba(212,251,32,0.81) 50.5%, rgba(212,251,32,0.61) 68%, rgba(255,255,255,0) 100%)",
          }}
        >
          404
        </p>
        <Image
          src="/images/grid-course.svg"
          alt=""
          width={1442}
          height={1026}
          priority
          className="absolute top-0 left-1/2 max-w-none -translate-x-1/2"
        />
        <Header />

        <div className="relative mx-auto flex max-w-[935px] flex-col items-center gap-8 pt-[300px] text-center md:pt-[521px]">
          <h1 className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.72px] text-white md:text-[72px]">
            The page you are looking for doesn&apos;t exist
          </h1>
          <p className="text-lg leading-[1.6] text-shuttle-100">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link
            href="/"
            className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-shuttle-950 transition hover:brightness-95"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
