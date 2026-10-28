import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Trophy,
  Users,
  Zap,
  MapPin,
  CalendarDays,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import coachingImg from "@/assets/coaching.jpg";
import tournamentImg from "@/assets/tournament.jpg";
import racketImg from "@/assets/racket.jpg";
import {
  Counter,
  Marquee,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
  TiltCard,
} from "@/components/site/anim";
import {
  ABOUT_STORY,
  DISCIPLINES,
  HERO_WORDS,
  PLAYER_SPOTLIGHT,
  SERVICES,
  SITE,
  SPONSORS,
  STATS,
  UPCOMING_EVENT,
  TOURNAMENT_EVENTS,
} from "@/data/content";
import { getHomeGalleryPreview } from "@/data/gallery-archive";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "P3 Sports — Play · Practice · Persevere",
      },
      {
        name: "description",
        content:
          "P3 Sports Management Company — table tennis academy in Mumbai, inter-corporate tournaments and the P3 Circle ranking community. Ignite your passion, play to perfection.",
      },
      {
        property: "og:title",
        content: "P3 Sports — Play · Practice · Persevere",
      },
      {
        property: "og:description",
        content:
          "Ignite your passion, learn to deliver, master the strokes, play to perfection — with P3 Sports.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee items={DISCIPLINES} className="mt-0" />
      <StatsBand />
      <AboutTeaser />
      <ServicesGrid />
      <FeaturedEvent />
      <PlayerSpotlight />
      <SponsorsSection />
      <HomeGalleryPreview />
      <FinalCta />
    </>
  );
}

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setWordIndex((i) => (i + 1) % HERO_WORDS.length),
      2600,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="noise-overlay relative flex min-h-screen items-center overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Table tennis player mid-smash in a lit arena"
          className="h-full w-full object-cover object-[82%_center] sm:object-[88%_center]"
          width={1024}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-primary uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          P3 Sports Management Company
        </motion.div>

        <h1 className="font-display max-w-4xl text-[13vw] leading-[1.02] text-navy-foreground sm:text-7xl lg:text-[6.5rem]">
          {["Play.", "Practice.", "Persevere."].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, rotateX: 40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
              className="mr-4 inline-block sm:mr-6"
            >
              {i === 1 ? (
                <span className="text-primary">{word}</span>
              ) : i === 2 ? (
                <span className="text-stroke-light">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <div className="mt-6 h-10 overflow-hidden sm:h-12">
          <motion.p
            key={wordIndex}
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -48, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl text-primary sm:text-4xl"
          >
            {HERO_WORDS[wordIndex]}
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg"
        >
          Ignite your passion, learn to deliver, master the strokes, play to
          perfection — with P3 Sports. Your connect to the athlete within{" "}
          <span className="font-bold text-foreground">YOU</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Link
            to="/services"
            className="glow-primary group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Train with P3
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/tournaments"
            className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 bg-transparent px-7 py-3.5 text-sm font-bold text-navy-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            <Trophy className="h-4 w-4" />
            Upcoming Tournament
          </Link>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-navy-foreground/40 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="relative py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <TiltCard className="h-full rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur">
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
  );
}

function AboutTeaser() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      <div
        aria-hidden
        className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl border border-border">
            <img
              src={coachingImg}
              alt="Coach mentoring young players at the P3 academy"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-bold tracking-widest text-foreground uppercase backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Mumbai ·
              Chandannagore · California
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Born out of passion"
            title={
              <>
                Sports is for <span className="text-primary">everyone</span> —
                and everyone has a champion within.
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {ABOUT_STORY.split("\n\n")[0]}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                Read the full story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/team"
                className="group inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground"
              >
                Meet the team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              One team. <span className="text-stroke-primary">Every game.</span>
            </>
          }
          sub="Coaching, consultancy, staging assistance or a full tournament management package — a unique and memorable experience along the way."
          align="center"
        />
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <StaggerItem key={s.title}>
              <TiltCard className="group h-full rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/50">
                <span className="font-display text-3xl text-primary/40 transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FeaturedEvent() {
  const alsoUpcoming = TOURNAMENT_EVENTS.filter(
    (e) => !e.featured && e.status === "registration-open",
  ).slice(0, 2);

  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Upcoming events"
          title={
            <>
              Next on the{" "}
              <span className="text-primary">P3 calendar</span>
            </>
          }
          sub="Corporate championships, open tournaments and academy events — dates, venues and categories at a glance."
          className="mb-6 max-w-2xl"
        />
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30">
            <img
              src={tournamentImg}
              alt="Corporate table tennis tournament in full swing"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/35" />
            <div className="relative p-6 sm:p-10">
              <p className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold tracking-[0.25em] text-primary uppercase">
                <span className="inline-flex items-center gap-2">
                  <Zap className="h-4 w-4" /> {UPCOMING_EVENT.edition}
                </span>
                <span className="text-navy-foreground/80">· Registration open</span>
              </p>
              <h2 className="font-display max-w-3xl text-3xl leading-[1.05] text-navy-foreground sm:text-4xl lg:text-5xl">
                {UPCOMING_EVENT.title}
              </h2>
              <div className="mt-4 flex flex-col gap-2 text-sm text-navy-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
                <span className="inline-flex items-center gap-2 font-semibold">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  {UPCOMING_EVENT.dates}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {UPCOMING_EVENT.venue}
                </span>
              </div>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-navy-foreground">
                <Users className="h-4 w-4 text-primary" />
                {UPCOMING_EVENT.prizes}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {UPCOMING_EVENT.categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-navy-foreground/25 bg-navy/60 px-3 py-1 text-xs font-semibold text-navy-foreground backdrop-blur"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="glow-primary inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  Register <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/tournaments"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-7 py-3.5 text-sm font-bold text-navy-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
                >
                  All tournaments
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {alsoUpcoming.length > 0 && (
          <Stagger className="mt-4 grid gap-3 sm:grid-cols-2">
            {alsoUpcoming.map((event) => (
              <StaggerItem key={event.id}>
                <Link
                  to="/tournaments"
                  className="block rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40 sm:p-5"
                >
                  <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                    {event.edition ?? "Upcoming"}
                  </p>
                  <h3 className="font-display mt-1 text-lg text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {event.dates} · {event.venue}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}

function PlayerSpotlight() {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.1fr)_2fr] lg:gap-8">
          <SectionHeading
            eyebrow="P3 Academy players"
            title={
              <>
                The future of{" "}
                <span className="text-primary">Indian sports</span> trains
                here.
              </>
            }
            sub="More than 1000 young players coached — many among the best emerging talent in Indian sport."
            className="max-w-xl"
          />
          <Stagger className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {PLAYER_SPOTLIGHT.map((p) => (
              <StaggerItem key={p.name}>
                <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={p.photo}
                      alt={`${p.name} — P3 Academy player`}
                      loading="lazy"
                      width={320}
                      height={400}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex translate-x-[-102%] items-center justify-center bg-primary/95 transition-transform duration-500 ease-out group-hover:translate-x-0">
                      <div className="text-center text-primary-foreground">
                        <p className="text-xs font-bold tracking-[0.2em] uppercase">
                          Group
                        </p>
                        <p className="mt-1 text-lg font-bold">{p.group}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-border px-2 py-2.5 text-center">
                    <h3 className="text-[11px] font-bold tracking-[0.1em] text-foreground uppercase sm:text-xs">
                      {p.name}
                    </h3>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function HomeGalleryPreview() {
  const items = getHomeGalleryPreview();

  return (
    <section className="relative overflow-hidden border-t border-primary/10 bg-gradient-to-b from-secondary/35 to-background py-10 sm:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/8 blur-[100px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="mb-3 flex items-center gap-3 text-xs font-bold tracking-[0.28em] text-primary uppercase">
                <span className="h-px w-10 bg-primary" aria-hidden />
                The P3 gallery
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[2.85rem]">
                Moments that{" "}
                <span className="text-primary">bring us together.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              to="/gallery"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/25 bg-white px-6 py-3.5 text-sm font-bold text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View All Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((photo) => (
            <StaggerItem key={photo.id}>
              <Link
                to="/gallery"
                className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    width={900}
                    height={675}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </div>
                <p className="px-4 py-3 text-sm font-semibold text-foreground">
                  {photo.previewCaption}
                  <span
                    aria-hidden
                    className="ml-1.5 inline-block text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function SponsorsSection() {
  const logos = [...SPONSORS, ...SPONSORS];

  return (
    <section className="border-y border-primary/10 bg-gradient-to-r from-background via-secondary/30 to-background py-9 sm:py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-6 text-center text-[11px] font-semibold tracking-[0.35em] text-muted-foreground uppercase">
          Sponsors
        </p>
        <div className="marquee-paused relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"
          />
          <div className="animate-marquee flex w-max items-center gap-5 sm:gap-6">
            {logos.map((s, i) => (
              <div
                key={`${s.logo}-${i}`}
                className="flex h-14 min-w-[140px] items-center justify-center rounded-xl border border-border/70 bg-white px-5 shadow-sm sm:h-16 sm:min-w-[160px]"
              >
                <img
                  src={s.logo}
                  alt={s.alt}
                  loading="lazy"
                  className="max-h-9 w-auto max-w-[130px] object-contain opacity-90 transition-opacity hover:opacity-100 sm:max-h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="noise-overlay relative overflow-hidden rounded-3xl border border-border">
            <img
              src={racketImg}
              alt="Table tennis racket and ball under a spotlight"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/75" />
            <div className="relative px-6 py-20 text-center sm:px-12">
              <h2 className="font-display text-5xl leading-[1.02] text-navy-foreground sm:text-6xl lg:text-7xl">
                Ready to meet the{" "}
                <span className="text-primary">athlete within you?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-navy-foreground/75">
                Whether you're a professional rekindling a passion, an amateur
                chasing quality training, or a master ready to share your
                knowledge — P3 has a ground for you.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="glow-primary rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  Get in touch — {SITE.phonePrimary}
                </Link>
                <Link
                  to="/circle"
                  className="rounded-full border border-navy-foreground/30 bg-transparent px-8 py-4 text-sm font-bold text-navy-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
                >
                  Join the P3 Circle
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
