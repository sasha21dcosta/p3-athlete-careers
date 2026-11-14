import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Diagonal sits on the inner edge (meets the copy column). */
export type SlantEdge = "left" | "right";

const SLANT_CLIP: Record<SlantEdge, string> = {
  left: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
  right: "polygon(0 0, 92% 0, 100% 100%, 0 100%)",
};

/** SVG line endpoints (% of box) along the slanted seam */
const SLANT_LINE: Record<SlantEdge, { x1: string; y1: string; x2: string; y2: string }> =
  {
    left: { x1: "8%", y1: "0", x2: "0", y2: "100%" },
    right: { x1: "92%", y1: "0", x2: "100%", y2: "100%" },
  };

type SlantedMediaPanelProps = {
  slant: SlantEdge;
  children: ReactNode;
  className?: string;
  shellClassName?: string;
  roundedClassName?: string;
  overlay?: ReactNode;
  /** Optional corner triangle — off by default; red accent lives on the diagonal seam. */
  cornerAccent?: "bottom-right" | "bottom-left" | "none";
};

export function SlantedMediaPanel({
  slant,
  children,
  className,
  shellClassName,
  roundedClassName,
  overlay,
  cornerAccent = "none",
}: SlantedMediaPanelProps) {
  const line = SLANT_LINE[slant];

  return (
    <div
      className={cn(
        "relative isolate flex h-full min-h-[300px] flex-col sm:min-h-[340px] lg:min-h-0",
        shellClassName,
        className,
      )}
    >
      <div
        className={cn(
          "relative min-h-[inherit] flex-1 overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.12)]",
          roundedClassName,
        )}
        style={{ clipPath: SLANT_CLIP[slant] }}
      >
        <div className="absolute inset-0">{children}</div>

        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 z-30 h-full w-full"
          preserveAspectRatio="none"
        >
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#FFB5B5"
            strokeWidth="6"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#F26667"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {overlay ? (
          <div className="pointer-events-none absolute inset-0 z-[25]">
            {overlay}
          </div>
        ) : null}

        {cornerAccent !== "none" ? (
          <div
            aria-hidden
            className={cn(
              "absolute bottom-0 z-20 h-14 w-[4.5rem] bg-primary sm:h-16 sm:w-20",
              cornerAccent === "bottom-right" ? "right-0" : "left-0",
            )}
            style={{
              clipPath:
                cornerAccent === "bottom-right"
                  ? "polygon(100% 0, 0 100%, 100% 100%)"
                  : "polygon(0 0, 100% 100%, 0 100%)",
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
