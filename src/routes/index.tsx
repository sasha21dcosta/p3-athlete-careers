import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Trophy,
  Users,
  Zap,
  MessageSquareQuote,
  Star,
  MapPin,
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
  CHALLENGE_FEED,
  DISCIPLINES,
  HERO_WORDS,
  PLAYER_SPOTLIGHT,
  SERVICES,
  SITE,
  STATS,
  UPCOMING_EVENT,
} from "@/data/content";
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
      <ChallengeFeed />
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
          className="h-full w-full object-cover object-center"
          width={1024}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/25" />
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
                <span className="text-stroke">{word}</span>
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

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute right-10 bottom-16 hidden lg:block"
        >
          <div className="animate-float-slow relative h-14 w-14 rounded-full bg-gradient-to-br from-flare to-primary shadow-[0_0_50px_-5px_var(--color-primary)]">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-sm" />
          </div>
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
    <section className="relative py-16 sm:py-20">
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
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
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
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
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
    <section className="relative py-16 sm:py-24">
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
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
            <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-primary uppercase">
                  <Zap className="h-4 w-4" /> {UPCOMING_EVENT.edition} ·
                  Registration open
                </p>
                <h2 className="font-display text-4xl leading-[1.05] text-navy-foreground sm:text-5xl lg:text-6xl">
                  {UPCOMING_EVENT.title}
                </h2>
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
                <Link
                  to="/events"
                  className="glow-primary mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  Enter your team <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PlayerSpotlight() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="P3 Academy players"
            title={
              <>
                The future of <span className="text-primary">Indian sports</span>{" "}
                trains here.
              </>
            }
            sub="P3 Sports has coached more than 1000 young players over the years and has churned out some of the best players who are the future of Indian sports."
          />
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {PLAYER_SPOTLIGHT.map((p, i) => (
              <StaggerItem key={p.name}>
                <TiltCard className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5">
                  <span className="font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-xl text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{p.name}</p>
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      Group · {p.group}
                    </p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function ChallengeFeed() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Live from the P3 Circle"
          title={
            <>
              Latest <span className="text-stroke-primary">challenges</span>
            </>
          }
          sub="Inside the P3 Circle, members call each other out, fix matches and climb the ranking ladder. Here's the buzz from the community."
        />
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {CHALLENGE_FEED.map((c, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className="w-80 shrink-0 snap-start lg:w-auto"
            >
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/50">
                <MessageSquareQuote className="h-6 w-6 text-primary" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  “{c.title}”
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {c.author}
                    </p>
                    <p className="text-xs text-muted-foreground">{c.date}</p>
                  </div>
                  <Star className="h-4 w-4 text-primary" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-6 text-center">
            <Link
              to="/circle"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              Explore the P3 Circle rankings
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
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
