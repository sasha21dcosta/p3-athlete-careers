import { cn } from "@/lib/utils";

/** Official ShePaddle wordmark. */
export const SHEPADDLE_LOGO_SRC = "/shepaddle/logo-master.jpg";

export const SHEPADDLE_LOGO_ALT =
  "She-Paddle — International Master Women Table Tennis Tournament";

export function ShePaddleWordmark({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "large" | "home";
}) {
  return (
    <img
      src={SHEPADDLE_LOGO_SRC}
      alt={SHEPADDLE_LOGO_ALT}
      width={1024}
      height={343}
      decoding="async"
      className={cn(
        "h-auto w-full object-contain object-left",
        size === "home" && "max-w-[min(100%,22rem)] sm:max-w-[26rem]",
        size === "large" && "max-w-[20rem] sm:max-w-[24rem]",
        size === "default" && "max-w-[14rem] sm:max-w-[17rem]",
        className,
      )}
    />
  );
}