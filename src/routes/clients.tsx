import { Link } from "@tanstack/react-router";
import { Building2, GraduationCap, Home, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";

import {
  PageHero,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
  TiltCard,
} from "@/components/site/anim";
import { CLIENT_SECTORS, PARTNER_VENUES } from "@/data/content";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — P3 Sports" },
      {
        name: "description",
        content:
          "Corporates, schools, residential clubs and sports associations trust P3 Sports for coaching, tournaments and community sports programmes.",
      },
      { property: "og:title", content: "Our Clients — P3 Sports" },
      {
        property: "og:description",
        content:
          "Who we work with — corporates, schools, clubhouses and sports associations across Mumbai, West Bengal and California.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Clients,
});

const ICONS = [Building2, GraduationCap, Home, Landmark];

function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title={
          <>
            Trusted across{" "}
            <span className="text-primary">communities</span>
          </>
        }
        sub="From corporate campuses to school grounds and residential clubhouses — organisations that play with P3 Sports."
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Stagger className="grid gap-5 md:grid-cols-2">
            {CLIENT_SECTORS.map((s, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <StaggerItem key={s.title}>
                  <TiltCard className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display mt-5 text-2xl text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 text-xs font-semibold text-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
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
            eyebrow="Where we play"
            title={
              <>
                Grounds & venues that host{" "}
                <span className="text-primary">P3 events</span>
              </>
            }
            className="[&_h2]:text-navy-foreground [&_p]:text-navy-foreground/70"
          />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNER_VENUES.map((v) => (
              <StaggerItem key={v}>
                <div className="flex items-start gap-3 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-5 text-sm text-navy-foreground/85">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {v}
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
              Your logo could be next
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Sponsor a championship, host an employee league or bring a
              coaching programme to your campus — write to us at{" "}
              <a
                href="mailto:info@p3-sports.com"
                className="font-semibold text-primary"
              >
                info@p3-sports.com
              </a>
            </p>
            <Link
              to="/contact"
              className="glow-primary mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Partner with P3 <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { MapPin } from "lucide-react";
