import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  CalendarDays,
  MapPin,
  ArrowRight,
  Clock,
} from "lucide-react";

import tournamentImg from "@/assets/tournament.jpg";
import {
  Counter,
  PageHero,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
  TiltCard,
} from "@/components/site/anim";
import {
  PAST_TOURNAMENTS,
  STATS,
  TOURNAMENT_EVENTS,
  type TournamentEvent,
} from "@/data/content";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Tournaments — P3 Sports" },
      {
        name: "description",
        content:
          "21 table tennis tournaments staged, 1000+ players handled. Inter-corporate championships, the Powai Open, grassroot development events and international summer camps by P3 Sports.",
      },
      { property: "og:title", content: "Tournaments — P3 Sports" },
      {
        property: "og:description",
        content:
          "End-to-end staging of corporate, inter-school and state-level championships — cash prizes, trophies and seamless management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tournaments,
});

function Tournaments() {
  const featured =
    TOURNAMENT_EVENTS.find((e) => e.featured) ?? TOURNAMENT_EVENTS[0];
  const upcoming = TOURNAMENT_EVENTS.filter((e) => e.id !== featured.id);

  return (
    <>
      <PageHero
        eyebrow="Tournaments & Championships"
        title={
          <>
            Where champions are{" "}
            <span className="text-primary">crowned</span>
          </>
        }
        sub="Corporate, inter-school and state-level championships — staged end to end by the P3 Sports events team."
      />

      <section className="pb-4 sm:pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <TiltCard className="rounded-2xl border border-border bg-card p-5 text-center sm:p-6">
                  <p className="font-display text-4xl text-primary sm:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase sm:text-xs">
                    {s.label}
                  </p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Upcoming events"
            title={
              <>
                Register for the next{" "}
                <span className="text-primary">P3 championship</span>
              </>
            }
            sub="Dates, venues and categories — polished listings inspired by our corporate tournament pages, with everything you need in one place."
          />

          <Reveal delay={0.08}>
            <FeaturedTournamentCard event={featured} />
          </Reveal>

          <Stagger className="mt-6 grid gap-4 lg:grid-cols-2">
            {upcoming.map((event) => (
              <StaggerItem key={event.id}>
                <TournamentListCard event={event} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our track record"
            title={
              <>
                Events we've <span className="text-primary">staged</span>
              </>
            }
            sub="From the flagship Powai Open to international exposure camps — professional draws, certified officiating and seamless management."
          />
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {PAST_TOURNAMENTS.map((t) => (
              <StaggerItem key={t.name}>
                <TiltCard className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50 sm:p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Trophy className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {t.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card/60 p-5 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              Hosted across Mumbai, Chandannagore (West Bengal) and the ICC
              Centre in California, USA.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
              Host with P3
            </p>
            <h2 className="font-display mx-auto mt-3 max-w-3xl text-3xl leading-[1.05] text-navy-foreground sm:text-5xl">
              Want a championship at your{" "}
              <span className="text-primary">campus or company?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-navy-foreground/70 sm:text-base">
              We handle venues, draws, officiating, prizes and publicity — you
              bring the players.
            </p>
            <Link
              to="/contact"
              className="glow-primary mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Plan my tournament <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function StatusBadge({ status }: { status: TournamentEvent["status"] }) {
  const open = status === "registration-open";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase",
        open
          ? "bg-primary text-primary-foreground"
          : "border border-border bg-background text-muted-foreground",
      )}
    >
      {open ? (
        <>
          <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
          Registration open
        </>
      ) : (
        <>
          <Clock className="h-3 w-3" />
          Coming soon
        </>
      )}
    </span>
  );
}

function FeaturedTournamentCard({ event }: { event: TournamentEvent }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-primary/30">
      <img
        src={tournamentImg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1024}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/55" />
      <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={event.status} />
            {event.edition && (
              <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
                {event.edition}
              </span>
            )}
          </div>
          <h3 className="font-display mt-4 text-3xl leading-[1.05] text-navy-foreground sm:text-4xl lg:text-5xl">
            {event.title}
          </h3>
          <div className="mt-5 space-y-2 text-sm text-navy-foreground/85">
            <p className="flex items-center gap-2 font-semibold">
              <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
              {event.dates}
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {event.venue}
            </p>
            <p className="flex items-center gap-2">
              <Users className="h-4 w-4 shrink-0 text-primary" />
              {event.prizes}
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {event.categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-navy-foreground/20 bg-navy/50 px-3 py-1 text-xs font-semibold text-navy-foreground"
              >
                {c}
              </span>
            ))}
          </div>
          <Link
            to="/contact"
            className="glow-primary mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Register your team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-2xl border border-navy-foreground/15 bg-navy/40 p-5 backdrop-blur-sm sm:p-6">
          <p className="text-xs font-bold tracking-[0.22em] text-primary uppercase">
            Good to know
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-foreground/80">
            {event.eligibility}
          </p>
          {event.rules && event.rules.length > 0 && (
            <>
              <p className="mt-5 text-xs font-bold tracking-[0.22em] text-navy-foreground/60 uppercase">
                Rules snapshot
              </p>
              <ul className="mt-2 space-y-2 text-sm text-navy-foreground/75">
                {event.rules.map((rule) => (
                  <li key={rule} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {rule}
                  </li>
                ))}
              </ul>
            </>
          )}
          {event.contacts && (
            <p className="mt-5 border-t border-navy-foreground/10 pt-4 text-xs leading-relaxed text-navy-foreground/65">
              {event.contacts}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function TournamentListCard({ event }: { event: TournamentEvent }) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/35 sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          {event.edition && (
            <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
              {event.edition}
            </p>
          )}
          <h3 className="font-display mt-1 text-xl text-foreground sm:text-2xl">
            {event.title}
          </h3>
        </div>
        <StatusBadge status={event.status} />
      </div>
      <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
        <p className="flex items-center gap-2 font-medium text-foreground">
          <CalendarDays className="h-4 w-4 text-primary" />
          {event.dates}
        </p>
        <p className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          {event.venue}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {event.categories.slice(0, 3).map((c) => (
          <span
            key={c}
            className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground"
          >
            {c}
          </span>
        ))}
        {event.categories.length > 3 && (
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
            +{event.categories.length - 3} more
          </span>
        )}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {event.prizes}
      </p>
      <Link
        to="/contact"
        className={cn(
          "mt-5 inline-flex w-fit items-center gap-2 text-sm font-bold transition-colors",
          event.status === "registration-open"
            ? "text-primary hover:text-primary/80"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {event.status === "registration-open"
          ? "Register interest"
          : "Notify me"}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
