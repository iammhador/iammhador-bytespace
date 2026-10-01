import Image from "next/image";

const studentAvatars = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/avatar-${n}.png`);

export function LearningProgressCard({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px] ${className}`}>
      <p className="text-sm leading-[1.2] font-medium text-shuttle-950">Learning Progress</p>
      <p className="w-[200px] font-poppins text-5xl leading-[1.2] font-semibold tracking-[-0.48px] text-shuttle-950">
        55%
      </p>
      <ProgressBar value={112} track="bg-track" />
    </div>
  );
}

export function HappyStudentsCard({
  variant = "white",
  className = "",
}: {
  variant?: "white" | "lime";
  className?: string;
}) {
  const lime = variant === "lime";
  return (
    <div
      className={`flex w-[258px] flex-col justify-center gap-2 rounded-2xl p-4 backdrop-blur-[10px] ${lime ? "bg-lime" : "bg-white"} ${className}`}
    >
      <div>
        <p className="leading-[1.2] font-medium text-shuttle-950">Happy Students</p>
        <div className="flex items-center">
          <p className={`text-xs leading-[1.6] ${lime ? "text-[#424348]" : "text-shuttle-400"}`}>
            <span className="text-shuttle-950">4.5 </span>(240)
          </p>
          <Image
            src={lime ? "/images/icon-star-blue.svg" : "/images/icon-star-filled.svg"}
            alt=""
            width={16}
            height={16}
            className="p-[1.5px]"
          />
        </div>
      </div>
      <div className="flex">
        {studentAvatars.map((src) => (
          <Image key={src} src={src} alt="" width={43} height={43} className="-mr-4 size-[43px] rounded-full" />
        ))}
        <div className="relative size-[43px]">
          <Image src={lime ? "/images/avatar-more-dark.svg" : "/images/avatar-more.svg"} alt="" width={43} height={43} />
          <span
            className={`absolute inset-0 flex items-center justify-center text-xs leading-[1.5] font-bold ${lime ? "text-shuttle-50" : "text-shuttle-950"}`}
          >
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}

export function RevenueCard({
  title,
  period,
  amount,
  bar = false,
  className = "",
}: {
  title: string;
  period: string;
  amount: string;
  bar?: boolean;
  className?: string;
}) {
  const badge = (
    <span className="rounded-3xl bg-lime-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-shuttle-950">
      +12$
    </span>
  );
  return (
    <div className={`flex flex-col items-start gap-2 rounded-2xl bg-primary p-4 text-shuttle-50 backdrop-blur-[10px] ${className}`}>
      <div>
        <p className="leading-[1.2] font-medium">{title}</p>
        <p className="text-[10px] leading-[1.2]">{period}</p>
      </div>
      {bar ? (
        <>
          <div className="flex w-[200px] items-center justify-between">
            <Amount value={amount} />
            {badge}
          </div>
          <ProgressBar value={112} track="bg-white" />
        </>
      ) : (
        <>
          <Amount value={amount} />
          {badge}
        </>
      )}
    </div>
  );
}

function Amount({ value }: { value: string }) {
  return (
    <p className="font-poppins text-2xl leading-8 font-semibold tracking-[-0.24px]">{value}</p>
  );
}

function ProgressBar({ value, track }: { value: number; track: string }) {
  return (
    <div className={`h-2 w-[200px] rounded-3xl ${track}`}>
      <div className="h-2 rounded-3xl bg-lime" style={{ width: value }} />
    </div>
  );
}
