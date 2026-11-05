import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/anim";
import {
  SERVICES_ADDITIONAL_SUPPORT,
  SPONSORSHIP_CTA,
} from "@/data/content";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  className?: string;
};

/** Home — below sponsors */
export function SponsorshipStoryBanner({ className }: CtaBannerProps) {
  return (
    <section className={cn("py-8 sm:py-10", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-muted/50 px-6 py-7 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-8 sm:py-8">
            <div className="min-w-0">
              <h2 className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                {SPONSORSHIP_CTA.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {SPONSORSHIP_CTA.subtitle}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              {SPONSORSHIP_CTA.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Services page — additional support */
export function AdditionalSupportBanner({ className }: CtaBannerProps) {
  return (
    <section className={cn("py-10 sm:py-14", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-secondary/80 via-background to-flare/20 px-6 py-7 shadow-sm sm:px-8 sm:py-8">
            <div
              aria-hidden
              className="absolute top-0 left-0 h-full w-1 bg-primary"
            />
            <div className="flex flex-col gap-6 pl-3 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:pl-4">
              <div className="min-w-0">
                <p className="text-[11px] font-bold tracking-[0.22em] text-primary uppercase">
                  {SERVICES_ADDITIONAL_SUPPORT.eyebrow}
                </p>
                <h2 className="font-display mt-2 text-xl leading-snug text-foreground sm:text-2xl">
                  {SERVICES_ADDITIONAL_SUPPORT.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {SERVICES_ADDITIONAL_SUPPORT.body}
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-2 border-primary bg-background px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {SERVICES_ADDITIONAL_SUPPORT.cta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
