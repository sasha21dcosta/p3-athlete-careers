import {
  PageHero,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/site/anim";
import { TEAM, type TeamMember } from "@/data/content";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — P3 Sports" },
      {
        name: "description",
        content:
          "Meet the P3 Sports team — founded by international table tennis player and India's first ITTF Level 3 certified woman coach, Moonmoon Mukherjee.",
      },
      { property: "og:title", content: "Team — P3 Sports" },
      {
        property: "og:description",
        content:
          "Reputed sports experts and industry professionals on the board of P3 Sports Management Company.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Team,
});

function Team() {
  const founder = TEAM.find((m) => m.featured) ?? TEAM[0];
  const leadership = TEAM.filter((m) => !m.featured);

  return (
    <>
      <PageHero
        eyebrow="Team"
        title={
          <>
            The people behind{" "}
            <span className="text-primary">P3 Sports</span>
          </>
        }
        sub="Reputed sports experts and industry professionals guiding coaching, events and community programmes across India."
      />

      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FounderSpotlight member={founder} />

          <Reveal delay={0.1}>
            <div className="mt-12 flex items-center gap-3 sm:mt-14">
              <span className="h-px flex-1 bg-border" aria-hidden />
              <p className="text-xs font-bold tracking-[0.28em] text-muted-foreground uppercase">
                Leadership & advisors
              </p>
              <span className="h-px flex-1 bg-border" aria-hidden />
            </div>
          </Reveal>

          <Stagger className="mt-8 grid gap-5 sm:grid-cols-2">
            {leadership.map((member) => (
              <StaggerItem key={member.name}>
                <TeamCard member={member} compact />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

function FounderSpotlight({ member }: { member: TeamMember }) {
  const paragraphs = member.bio.split("\n\n");

  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-3xl border-2 border-primary/35 bg-gradient-to-br from-secondary/50 via-card to-flare/25 shadow-[0_12px_40px_rgba(242,102,103,0.12)] ring-1 ring-primary/10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="grid lg:grid-cols-[minmax(0,360px)_1fr]">
          <div className="relative border-b border-primary/15 p-6 sm:p-8 lg:border-r lg:border-b-0">
            <div className="relative mx-auto max-w-sm pl-2 pt-2 lg:max-w-none">
              <div
                aria-hidden
                className="absolute top-0 left-0 h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-2xl border-2 border-primary"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted lg:min-h-[440px] lg:aspect-auto">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                  width={680}
                  height={840}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-primary px-3.5 py-1.5 text-[10px] font-bold tracking-[0.22em] text-primary-foreground uppercase shadow-md">
                  Founder
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
            <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Meet our founder
            </span>
            <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
              {member.role}
            </p>
            <h2 className="font-display mt-2 text-3xl text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {member.name}
            </h2>
            <div className="mt-6 space-y-4 border-l-[3px] border-primary/40 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function TeamCard({
  member,
  compact = false,
}: {
  member: TeamMember;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/35",
        compact ? "sm:flex-row" : "",
      )}
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden bg-muted",
          compact ? "aspect-square w-full sm:w-36" : "aspect-[4/5]",
        )}
      >
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-top"
          width={360}
          height={360}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
          {member.role}
        </p>
        <h3 className="font-display mt-1 text-xl text-foreground">
          {member.name}
        </h3>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-muted-foreground",
            compact ? "line-clamp-6" : "",
          )}
        >
          {member.bio}
        </p>
      </div>
    </article>
  );
}
