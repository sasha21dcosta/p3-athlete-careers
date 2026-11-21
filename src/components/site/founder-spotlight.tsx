import {
  Handshake,
  Layers,
  Linkedin,
  Megaphone,
  Network,
  Sprout,
  Target,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/site/anim";
import { FOUNDER_TEAM_SECTION, getFounderMember } from "@/data/content";
import { cn } from "@/lib/utils";

const LEADERSHIP_ICONS: LucideIcon[] = [
  Layers,
  Trophy,
  Users,
  Handshake,
  Megaphone,
  Network,
];

const FOUNDER_GRID =
  "grid gap-5 sm:gap-6 lg:grid-cols-[minmax(188px,23.5%)_minmax(0,76.5%)] lg:gap-7 xl:gap-8";

/** ~1/3 belief/vision card + ~2/3 leadership + quote (reference layout) */
const FOUNDER_GRID_LOWER =
  "grid gap-5 sm:gap-6 lg:grid-cols-[minmax(220px,28.5%)_minmax(0,71.5%)] lg:items-start lg:gap-7 xl:gap-8";

type FounderSpotlightSectionProps = {
  className?: string;
};

function BeliefVisionPanel({
  belief,
  vision,
}: {
  belief: { title: string; body: string };
  vision: { title: string; body: string };
}) {
  return (
    <article className="rounded-2xl border border-primary/12 bg-primary/[0.1] px-3.5 py-3 sm:px-4 sm:py-3.5 lg:px-4 lg:py-3.5">
      <div className="flex gap-2.5 sm:gap-3">
        <Target
          className="mt-0.5 h-5 w-5 shrink-0 text-primary sm:h-[1.35rem] sm:w-[1.35rem]"
          strokeWidth={1.75}
        />
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-navy sm:text-[15px]">
            {belief.title}
          </h3>
          <p className="mt-1.5 text-xs leading-[1.5] text-slate-600 sm:text-[13px]">
            {belief.body}
          </p>
        </div>
      </div>

      <div className="my-3 h-px bg-primary/18 sm:my-3.5" aria-hidden />

      <div className="flex gap-2.5 sm:gap-3">
        <Sprout
          className="mt-0.5 h-5 w-5 shrink-0 text-primary sm:h-[1.35rem] sm:w-[1.35rem]"
          strokeWidth={1.75}
        />
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-navy sm:text-[15px]">
            {vision.title}
          </h3>
          <p className="mt-1.5 text-xs leading-[1.5] text-slate-600 sm:text-[13px]">
            {vision.body}
          </p>
        </div>
      </div>
    </article>
  );
}

function FounderClosingQuote({ quote, className }: { quote: string; className?: string }) {
  return (
    <figure
      className={cn(
        "relative min-h-[4.75rem] shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy to-[#1a2744] px-4 py-4 sm:min-h-[5.25rem] sm:px-6 sm:py-5 lg:min-h-[5.75rem] lg:px-7 lg:py-[1.35rem]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[4.5rem] w-[6.5rem] bg-primary sm:h-20 sm:w-28"
        style={{
          clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      <div className="relative flex w-full items-center gap-3.5 sm:gap-5">
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-2xl font-bold leading-none text-primary-foreground sm:h-[3.25rem] sm:w-[3.25rem] sm:text-[1.75rem] lg:h-14 lg:w-14 lg:text-3xl"
        >
          &ldquo;
        </span>
        <span
          aria-hidden
          className="h-11 w-px shrink-0 bg-white/25 sm:h-[3.25rem] lg:h-14"
        />
        <blockquote className="min-w-0 py-0.5 text-[15px] font-bold italic leading-[1.5] text-white sm:text-base lg:text-[17px] lg:leading-[1.48]">
          {quote}
        </blockquote>
      </div>
    </figure>
  );
}

export function FounderSpotlightSection({ className }: FounderSpotlightSectionProps) {
  const founder = getFounderMember();
  const section = FOUNDER_TEAM_SECTION;

  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className={cn("bg-background py-6 sm:py-8", className)}
    >
      <h2 id="founder-heading" className="sr-only">
        {section.eyebrow} — {section.name}
      </h2>
      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[1.25rem] border border-border/60 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
            {/* —— Block 1: portrait + intro bio —— */}
            <div
              className={cn(
                FOUNDER_GRID,
                "border-b border-border/50 p-5 sm:p-6 lg:items-start lg:p-8 xl:px-10",
              )}
            >
              <div className="relative mx-auto w-full max-w-[212px] pr-2.5 pb-2.5 sm:max-w-[228px] lg:mx-0 lg:max-w-[92%]">
                <div
                  aria-hidden
                  className="absolute right-0 bottom-0 top-2 left-2 rounded-xl bg-primary/28"
                />
                <div className="relative overflow-hidden rounded-xl border border-primary/15 bg-muted">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    width={212}
                    height={248}
                    className="aspect-[4/5.05] w-full object-cover object-[center_12%]"
                  />
                </div>
              </div>

              <div className="min-w-0 text-center lg:text-left">
                <p className="flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.28em] text-primary uppercase lg:justify-start">
                  <span className="h-0.5 w-7 bg-primary" aria-hidden />
                  {section.eyebrow}
                </p>
                <h3 className="mt-1.5 text-[1.55rem] font-bold leading-[1.12] text-navy sm:text-[1.75rem]">
                  {section.name}
                </h3>
                <p className="mt-1 text-xs font-medium leading-snug text-slate-600 sm:text-[13px]">
                  {section.titles}
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                  <span className="inline-flex rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-bold text-primary-foreground sm:text-xs">
                    {section.roleBadge}
                  </span>
                  {founder.linkedin ? (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border-2 border-primary bg-white px-3 py-1.5 text-[11px] font-bold text-primary hover:bg-primary/5 sm:text-xs"
                    >
                      <Linkedin className="h-3.5 w-3.5" strokeWidth={2} />
                      LinkedIn
                    </a>
                  ) : null}
                </div>

                <blockquote className="mx-auto mt-3 max-w-xl border-l-0 px-1 text-sm font-bold italic leading-[1.5] text-slate-800 sm:text-[15px] lg:mx-0 lg:max-w-none lg:border-l-[3px] lg:border-primary lg:pl-3.5 lg:pr-0">
                  <span
                    aria-hidden
                    className="mx-auto mb-2 block h-0.5 w-10 bg-primary lg:hidden"
                  />
                  {section.introQuote}
                </blockquote>

                <div className="mx-auto mt-2.5 max-w-xl space-y-2.5 text-sm leading-[1.55] text-slate-600 sm:text-[15px] lg:mx-0 lg:max-w-none">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* —— Block 2: belief + vision | leadership + quote (reference) —— */}
            <div
              className={cn(
                FOUNDER_GRID_LOWER,
                "p-5 sm:p-6 lg:p-8 xl:px-10",
              )}
            >
              <BeliefVisionPanel
                belief={section.belief}
                vision={section.vision}
              />

              <div className="flex min-w-0 flex-col">
                <div className="flex w-full items-center gap-3">
                  <h4 className="shrink-0 text-base font-bold italic text-navy sm:text-[17px]">
                    {section.leadershipFocusTitle}
                  </h4>
                  <span
                    className="hidden h-0.5 min-w-8 flex-1 bg-primary sm:block"
                    aria-hidden
                  />
                </div>

                <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 lg:mt-3.5 lg:grid-cols-6 lg:gap-2">
                  {section.leadershipFocus.map((item, i) => {
                    const Icon = LEADERSHIP_ICONS[i] ?? Layers;
                    return (
                      <li
                        key={item.label}
                        className="flex min-h-[7rem] flex-col items-center justify-start rounded-xl border border-primary/10 bg-white px-1.5 py-3 text-center shadow-[0_2px_12px_rgba(15,23,42,0.06)] sm:min-h-[7.5rem] sm:px-2 lg:min-h-[8.25rem] lg:py-3.5"
                      >
                        <Icon
                          className="h-7 w-7 text-primary sm:h-8 sm:w-8"
                          strokeWidth={1.25}
                        />
                        <p className="mt-2 text-[10.5px] font-bold leading-[1.22] text-navy sm:text-[11px] lg:text-[10.5px] xl:text-[12px]">
                          {item.label === "Sports Promotion" ? (
                            <>
                              <span className="block">Sports</span>
                              <span className="block">Promotion</span>
                            </>
                          ) : (
                            item.label
                          )}
                        </p>
                      </li>
                    );
                  })}
                </ul>

                <FounderClosingQuote
                  quote={section.closingQuote}
                  className="mt-3 sm:mt-4"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}