import { Link } from "@tanstack/react-router";
import {
  Trophy,
  Users,
  GraduationCap,
  Building2,
  Venus,
  Medal,
  Compass,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import {
  PageHero,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
  TiltCard,
} from "@/components/site/anim";
import { SERVICES } from "@/data/content";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — P3 Sports" },
      {
        name: "description",
        content:
          "Academy coaching, certified coaches, tournaments, corporate sports events, sports travel, the P3 Circle community and grassroots programmes — comprehensive sports solutions by P3 Sports.",
      },
      { property: "og:title", content: "Our Services — P3 Sports" },
      {
        property: "og:description",
        content:
          "Coaching, consultancy, staging assistance or a full tournament management package — a unique and memorable experience along the way.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const ICONS = [
  GraduationCap,
  Medal,
  Trophy,
  Building2,
  Compass,
  Users,
  HeartHandshake,
  Venus,
];

const PROCESS = [
  {
    step: "01",
    title: "Tell us your goal",
    desc: "Learning a game, hosting a tournament or keeping a community active — we start from what you want to achieve.",
  },
  {
    step: "02",
    title: "We design the programme",
    desc: "Coaches, venues, schedules, draws and formats — a plan tailored to your players, calendar and budget.",
  },
  {
    step: "03",
    title: "Play, learn, compete",
    desc: "Certified coaches and an experienced events team run every session and match, seamlessly.",
  },
  {
    step: "04",
    title: "Grow with the Circle",
    desc: "Rankings, challenges and community events keep everyone coming back to the table.",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Comprehensive sports solutions,{" "}
            <span className="text-primary">everywhere</span>
          </>
        }
        sub="From the first serve to tournament play — coaching, events and community programmes for corporates, schools, clubhouses and champions."
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <StaggerItem key={s.title}>
                  <TiltCard className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      Enquire <ArrowRight className="h-4 w-4" />
                    </Link>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-navy py-16 text-navy-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                From first call to{" "}
                <span className="text-primary">final whistle</span>
              </>
            }
            className="[&_h2]:text-navy-foreground [&_p]:text-navy-foreground/70"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <StaggerItem key={p.step}>
                <div className="h-full rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6">
                  <span className="font-display text-4xl text-primary">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-bold text-navy-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Call us — we'll suggest the right programme, batch or tournament
              format for you, your company or your school.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="glow-primary group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Talk to P3 Sports
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/tournaments"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Trophy className="h-4 w-4" /> See our tournaments
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
