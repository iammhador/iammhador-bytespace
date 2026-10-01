import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { TextField } from "@/components/auth/TextField";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex flex-col items-center gap-[122px]">
        <div className="flex w-full flex-col gap-10">
          <div>
            <p className="text-lg leading-[1.6] text-primary">Create an Account</p>
            <h1 className="font-poppins text-4xl leading-[1.2] font-semibold tracking-[-0.44px] text-shuttle-950 sm:text-[44px]">
              Welcome to ByteSpace
            </h1>
          </div>

          <form className="flex flex-col items-end gap-6">
            <div className="flex w-full flex-col gap-6">
              <TextField id="name" name="name" label="Full Name" placeholder="Jamie Davis" autoComplete="name" required />
              <TextField id="email" name="email" type="email" label="Email" placeholder="designer@example.com" autoComplete="email" required />
              <TextField id="password" name="password" type="password" label="Password" placeholder="********" autoComplete="new-password" required />
            </div>
            <Button type="submit">Continue</Button>
          </form>
        </div>

        <p className="flex gap-1 leading-[1.6]">
          <span className="text-shuttle-700">Already have an account?</span>
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
