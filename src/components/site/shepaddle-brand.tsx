import { cn } from "@/lib/utils";

export function ShePaddleWordmark({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "large" | "home";
}) {
  return (
    <div className={cn("inline-flex flex-col", className)}>
      <svg
        aria-hidden
        viewBox="0 0 48 24"
        className={cn(
          "text-primary",
          size === "home"
            ? "h-8 w-[4.5rem]"
            : size === "large"
              ? "h-7 w-14"
              : "h-5 w-10",
        )}
        fill="none"
      >
        <path
          d="M4 18 C12 4, 20 4, 28 12 C34 18, 40 16, 44 8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="38" cy="8" r="2.5" fill="currentColor" />
      </svg>
      <p
        className={cn(
          "font-display leading-none tracking-tight",
          size === "home"
            ? "text-[2.65rem] leading-[0.95] sm:text-[3.15rem]"
            : size === "large"
              ? "text-4xl sm:text-5xl"
              : "text-2xl sm:text-3xl",
        )}
      >
        <span className="text-primary italic">She</span>
        <span className="text-navy">Paddle</span>
      </p>
    </div>
  );
}
