import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Medal, Trophy, Users } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/anim";
import {
  FOUNDER_HIGHLIGHTS,
  FOUNDER_JOURNEY,
  FOUNDER_PULL_QUOTE,
  FOUNDER_TAGLINE,
  SITE,
  getFounderMember,
} from "@/data/content";

const HIGHLIGHT_ICONS = [Award, Trophy, Medal, Users] as const;

export function HomeFounderSpotlight() {
  const founder = getFounderMember();

  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="relative overflow-hidden border-y border-primary/10 bg-gradient-to-b from-secondary/30 via-background to-background py-12 sm:py-16"
    >
      <h2 id="founder-heading" className="sr-only">
        Meet the founder — {founder.name}
      </h2>
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-[min(480px,55vw)] w-[min(480px,55vw)] rounded-full bg-primary/8 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-flare/40 blur-[80px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Meet the founder"
          title={
            <>
              The heart of{" "}
              <span className="text-primary">P3</span>{" "}
              <span className="text-stroke-primary">Sports</span>
            </>
          }
          sub={FOUNDER_TAGLINE}
          className="max-w-3xl"
        />

        <Reveal delay={0.12} className="mt-10 sm:mt-12">
          <div className="overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-card via-background to-secondary/40 shadow-[0_10px_36px_rgba(242,102,103,0.1)] ring-1 ring-primary/10">
            <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] xl:grid-cols-[minmax(0,360px)_1fr]">
              <div className="relative border-b border-border/80 p-6 sm:p-8 lg:border-r lg:border-b-0">
                <div className="relative mx-auto max-w-xs pl-2.5 pt-2.5 lg:max-w-none">
                  <div
                    aria-hidden
                    className="absolute top-0 left-0 h-[calc(100%-10px)] w-[calc(100%-10px)] rounded-2xl border-2 border-primary"
                  />
                  <div className="relative overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      width={680}
                      height={850}
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/55 to-transparent px-5 pb-5 pt-20">
                      <p className="font-display text-2xl text-navy-foreground">
                        {founder.name}
                      </p>
                      <p className="mt-1 text-[10px] font-bold tracking-[0.22em] text-navy-foreground/80 uppercase">
                        Founder • {SITE.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <blockquote className="relative border-l-[3px] border-primary pl-5 sm:pl-6">
                  <span
                    aria-hidden
                    className="font-display absolute -top-2 left-3 text-4xl leading-none text-primary/30 sm:left-4 sm:text-5xl"
                  >
                    “
                  </span>
                  <p className="text-base leading-relaxed text-foreground/90 italic sm:text-lg">
                    {FOUNDER_PULL_QUOTE}
                  </p>
                </blockquote>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {FOUNDER_HIGHLIGHTS.map((h, i) => {
                    const Icon = HIGHLIGHT_ICONS[i] ?? Award;
                    return (
                      <div
                        key={h.label}
                        className="group flex flex-col items-center rounded-xl border border-border bg-card/80 px-2 py-4 text-center transition-colors hover:border-primary/40 hover:bg-card"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <p className="font-display mt-2.5 text-2xl text-primary sm:text-3xl">
                          {h.value}
                        </p>
                        <p className="mt-1.5 text-[10px] font-semibold leading-snug text-foreground sm:text-[11px]">
                          {h.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 border-t border-border/80 pt-8">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                    Her journey
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {FOUNDER_JOURNEY}
                  </p>
                  <Link
                    to="/team"
                    className="group mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    Meet the full team
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
