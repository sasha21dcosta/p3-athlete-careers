import { Medal, Globe2, Award } from "lucide-react";

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
            <div className="mt-10 flex items-center gap-3">
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

      <section className="border-t border-border bg-card/40 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Medal,
                  label: "World-championship medals",
                  sub: "Greece · Spain · Vietnam · Turkey · New Zealand",
                },
                {
                  icon: Award,
                  label: "ITTF Level 3 Coach",
                  sub: "India's first & only certified woman coach",
                },
                {
                  icon: Globe2,
                  label: "International Umpire",
                  sub: "2009 Youth Commonwealth Games finals",
                },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5"
                >
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FounderSpotlight({ member }: { member: TeamMember }) {
  const paragraphs = member.bio.split("\n\n");

  return (
    <Reveal>
      <article className="overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-card via-background to-secondary/30 shadow-sm">
        <div className="grid lg:grid-cols-[minmax(0,340px)_1fr]">
          <div className="relative aspect-[4/5] bg-muted lg:aspect-auto lg:min-h-[420px]">
            <img
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover object-top"
              width={680}
              height={840}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/20" />
            <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary-foreground uppercase">
              Founder
            </span>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
              {member.role}
            </p>
            <h2 className="font-display mt-2 text-3xl text-foreground sm:text-4xl lg:text-5xl">
              {member.name}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
