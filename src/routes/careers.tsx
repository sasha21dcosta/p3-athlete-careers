import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Check,
  GraduationCap,
  Mail,
  Users,
} from "lucide-react";

import {
  PageHero,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/site/anim";
import { CAREERS_PAGE } from "@/data/careers";
import { SITE } from "@/data/content";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at P3 Sports" },
      {
        name: "description",
        content:
          "Join P3 Sports — event management, digital marketing, sponsorship, business development and coaching roles across Mumbai and India.",
      },
      { property: "og:title", content: "Careers at P3 Sports" },
      {
        property: "og:description",
        content: CAREERS_PAGE.intro[0],
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Careers,
});

function Careers() {
  const [openRole, setOpenRole] = useState<number | null>(null);

  const mailHref = `mailto:${SITE.emailMoonmoon}?subject=${encodeURIComponent(CAREERS_PAGE.applySubject)}`;

  return (
    <>
      <PageHero
        eyebrow={CAREERS_PAGE.heroEyebrow}
        title={
          <>
            Be a Part of the{" "}
            <span className="text-primary">P3 Sports</span> Team!
          </>
        }
        sub={CAREERS_PAGE.intro.join(" ")}
      />

      <section className="pb-10 sm:pb-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Team & operations"
            title={CAREERS_PAGE.teamOpportunitiesHeading}
          />
          <ul className="mt-8 flex list-none flex-col gap-3 p-0">
            {CAREERS_PAGE.teamRoles.map((job, i) => {
              const isOpen = openRole === i;
              const panelId = `career-role-panel-${i}`;
              const headerId = `career-role-header-${i}`;
              return (
                <li key={job.title} className="min-h-0">
                  <div
                    className={cn(
                      "rounded-2xl border transition-colors",
                      isOpen
                        ? "border-primary/45 bg-card shadow-sm"
                        : "border-border bg-card/60",
                    )}
                  >
                    <button
                      type="button"
                      id={headerId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenRole(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-start justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <div className="min-w-0">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-primary uppercase">
                          <Briefcase className="h-3 w-3" />
                          Open role
                        </span>
                        <h3 className="font-display mt-2 text-xl text-foreground sm:text-2xl">
                          {job.title}
                        </h3>
                      </div>
                      <span
                        className="shrink-0 text-2xl leading-none text-primary"
                        aria-hidden
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <ul className="space-y-2.5 border-t border-border/80 px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
                          {job.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                            >
                              <Check
                                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                                strokeWidth={2.5}
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-y border-primary/10 bg-navy py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Culture"
            title={CAREERS_PAGE.whyJoinHeading}
            className="[&_h2]:text-navy-foreground [&_p]:text-navy-foreground/70"
          />
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
            {CAREERS_PAGE.whyJoin.map((perk) => (
              <StaggerItem key={perk}>
                <div className="flex items-start gap-3 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-5">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-navy-foreground/88">
                    {perk}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
              {CAREERS_PAGE.coachingEyebrow}
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl">
              {CAREERS_PAGE.coachingTitle}
            </h2>
            <div className="mt-5 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {CAREERS_PAGE.coachingIntro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h3 className="text-lg font-bold text-foreground">
                {CAREERS_PAGE.coachingSportsHeading}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {CAREERS_PAGE.coachingSportsIntro}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-2">
                {CAREERS_PAGE.coachingSports.map((sport, i) => (
                  <li
                    key={sport}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card/80 px-3 py-2.5 text-xs font-semibold text-foreground sm:text-sm"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                      {i + 1}
                    </span>
                    {sport}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.05}>
                <article className="rounded-2xl border border-border bg-card/60 p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-xl text-foreground">
                      {CAREERS_PAGE.coachingResponsibilitiesHeading}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {CAREERS_PAGE.coachingResponsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          strokeWidth={2.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>

              <Reveal delay={0.1}>
                <article className="rounded-2xl border border-primary/20 bg-gradient-to-br from-secondary/80 to-flare/25 p-6 sm:p-7">
                  <h3 className="font-display text-xl text-foreground">
                    {CAREERS_PAGE.whoCanApplyHeading}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {CAREERS_PAGE.whoCanApply.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          strokeWidth={2.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[#faf8f5] py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              {CAREERS_PAGE.ctaHeading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {CAREERS_PAGE.ctaBody}
            </p>
            <p className="mt-6 text-sm font-semibold text-foreground">
              <Mail className="mr-2 inline h-4 w-4 text-primary" />
              <a
                href={`mailto:${SITE.emailInfo}`}
                className="text-primary hover:underline"
              >
                {SITE.emailInfo}
              </a>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Subject:{" "}
              <span className="font-medium text-foreground">
                {CAREERS_PAGE.applySubject}
              </span>
            </p>
            <a
              href={mailHref}
              className="glow-primary mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Send your CV
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
