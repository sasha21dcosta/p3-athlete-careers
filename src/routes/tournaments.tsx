import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Users, CalendarDays, MapPin, ArrowRight } from "lucide-react";

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
import { PAST_TOURNAMENTS, STATS, UPCOMING_EVENT } from "@/data/content";
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

      {/* Track record */}
      <section className="pb-4 sm:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <TiltCard className="rounded-2xl border border-border bg-card p-6 text-center">
                  <p className="font-display text-5xl text-primary sm:text-6xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    {s.label}
                  </p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Upcoming event */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Registration open"
            title={
              <>
                Upcoming <span className="text-primary">tournament</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="relative mt-10 overflow-hidden rounded-3xl border border-primary/30">
              <img
                src={tournamentImg}
                alt="Corporate table tennis tournament in full swing"
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
              <div className="relative max-w-2xl p-8 sm:p-12">
                <p className="flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-primary uppercase">
                  <CalendarDays className="h-4 w-4" /> {UPCOMING_EVENT.edition}
                </p>
                <h3 className="font-display mt-3 text-4xl leading-[1.05] text-navy-foreground sm:text-5xl">
                  {UPCOMING_EVENT.title}
                </h3>
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy-foreground">
                  <Users className="h-4 w-4 text-primary" />{" "}
                  {UPCOMING_EVENT.prizes}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {UPCOMING_EVENT.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-navy-foreground/25 bg-navy/60 px-4 py-1.5 text-xs font-semibold text-navy-foreground backdrop-blur"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-navy-foreground/70">
                  {UPCOMING_EVENT.eligibility}
                </p>
                <Link
                  to="/contact"
                  className="glow-primary mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  Enter your team <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Past tournaments */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our track record"
            title={
              <>
                Events we've <span className="text-stroke-primary">staged</span>
              </>
            }
            sub="From the flagship Powai Open to international exposure camps — every P3 event is run with professional draws, certified officiating and seamless management."
          />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
            {PAST_TOURNAMENTS.map((t) => (
              <StaggerItem key={t.name}>
                <TiltCard className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Trophy className="h-6 w-6" />
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
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              Hosted across Mumbai, Chandannagore (West Bengal) and the ICC
              Centre in California, USA.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <Reveal>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.3em] text-primary uppercase"
            >
              Host with P3
            </motion.p>
            <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl leading-[1.05] text-navy-foreground sm:text-5xl lg:text-6xl">
              Want a championship at your{" "}
              <span className="text-primary">campus or company?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-foreground/70">
              We handle venues, draws, officiating, prizes and publicity — you
              bring the players.
            </p>
            <Link
              to="/contact"
              className="glow-primary mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Plan my tournament <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
