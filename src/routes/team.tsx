import {
  PageHero,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/site/anim";
import { FounderSpotlightSection } from "@/components/site/founder-spotlight";
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

      <FounderSpotlightSection className="border-y border-border/60" />

      <section className="pb-12 sm:pb-16">
        <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-5 lg:px-6">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 sm:mt-2">
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
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {member.bioCard ?? member.bio}
        </p>
      </div>
    </article>
  );
}
