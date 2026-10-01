import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { TextField } from "@/components/auth/TextField";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
};

const socialProviders = [
  { name: "Facebook", icon: "/images/icon-facebook.svg" },
  { name: "Google", icon: "/images/icon-google.svg" },
];

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex flex-col items-center gap-[73px]">
        <div className="flex w-full flex-col gap-10">
          <div>
            <p className="text-lg leading-[1.6] text-primary">Sign In</p>
            <h1 className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.44px] text-shuttle-950 sm:text-[44px]">
              Welcome Back
            </h1>
          </div>

          <form className="flex flex-col items-end gap-6">
            <div className="flex w-full flex-col gap-6">
              <TextField id="email" name="email" type="email" label="Email" placeholder="designer@example.com" autoComplete="email" required />
              <TextField id="password" name="password" type="password" label="Password" placeholder="********" autoComplete="current-password" required />
            </div>
            <Button type="submit">Sign In</Button>
          </form>
        </div>

        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full items-center gap-[11px]">
            <span className="h-px flex-1 bg-[#d1d1d1]" />
            <span className="text-lg leading-[1.6] text-[#888]">or</span>
            <span className="h-px flex-1 bg-[#d1d1d1]" />
          </div>
          <div className="flex gap-4">
            {socialProviders.map((p) => (
              <button
                key={p.name}
                type="button"
                aria-label={`Sign in with ${p.name}`}
                className="flex size-[72px] items-center justify-center rounded-3xl border border-[#d1d1d1] transition hover:border-shuttle-400"
              >
                <Image src={p.icon} alt="" width={40} height={40} />
              </button>
            ))}
          </div>
        </div>

        <p className="flex gap-1 leading-[1.6]">
          <span className="text-shuttle-700">New user?</span>
          <Link href="/register" className="text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
