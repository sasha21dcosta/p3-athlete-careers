import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/anim";
import { getFounderMember, TEAM } from "@/data/content";

const founder = getFounderMember();
const HOME_TEAM_PREVIEW_NAMES = ["Tushar Kanti Ghosh", "Maxwel Mascarenhas"];
const PREVIEW = [
  founder,
  ...HOME_TEAM_PREVIEW_NAMES.flatMap((name) => {
    const member = TEAM.find((m) => m.name === name);
    return member ? [member] : [];
  }),
];

export function HomeTeamPromo() {
  return (
    <section
      id="our-team"
      aria-labelledby="home-team-heading"
      className="scroll-mt-[3.75rem] border-y border-primary/15 bg-navy py-12 text-navy-foreground sm:py-14"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <Reveal className="max-w-xl">
            <p className="text-[10px] font-bold tracking-[0.28em] text-primary uppercase">
              Our Team
            </p>
            <h2
              id="home-team-heading"
              className="font-display mt-3 text-3xl leading-tight sm:text-4xl"
            >
              The people behind{" "}
              <span className="text-primary">P3 Sports</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/80 sm:text-base">
              Coaches, leaders and partners who deliver academy training, school
              programmes, events and community sport across India.
            </p>
            <Link
              to="/team"
              className="glow-primary mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] sm:w-auto"
            >
              Meet our full team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Stagger className="grid flex-1 grid-cols-3 gap-3 sm:gap-4 lg:max-w-2xl">
            {PREVIEW.map((member) => (
              <StaggerItem key={member.name}>
                <Link
                  to="/team"
                  className="group block overflow-hidden rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    width={320}
                    height={400}
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="px-3 py-3">
                    <p className="text-xs font-bold text-navy-foreground sm:text-sm">
                      {member.name}
                    </p>
                    <p className="mt-0.5 text-[10px] leading-snug text-navy-foreground/70 sm:text-xs">
                      {member.role}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}