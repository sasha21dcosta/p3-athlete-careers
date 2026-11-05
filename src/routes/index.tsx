import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Users,
  Zap,
  CalendarDays,
  MapPin,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
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
  DISCIPLINES,
  HERO_WORDS,
  PLAYER_SPOTLIGHT,
  SITE,
  SPONSORS,
  STATS,
  UPCOMING_EVENT,
  TOURNAMENT_EVENTS,
} from "@/data/content";
import { SponsorshipStoryBanner } from "@/components/site/cta-banner";
import { HomeShePaddleTeaser } from "@/components/site/shepaddle-ui";
import { HomeAboutP3 } from "@/components/site/home-about-p3";
import { HomeFounderSpotlight } from "@/components/site/founder-spotlight";
import { HomeServicesGrid } from "@/components/site/home-services-grid";
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
          "P3 Sports Management Company — table tennis academy in Mumbai and inter-corporate tournaments. Ignite your passion, play to perfection.",
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

const HERO_SLIDES = [
  {
    src: "/hero/slide-1.jpg",
    alt: "P3 Sports — professional sports media studio",
  },
  {
    src: "/hero/slide-2.jpg",
    alt: "Moonmoon Mukherjee, Founder — P3 Sports Management",
  },
  {
    src: "/hero/slide-3.jpg",
    alt: "Smash Her Story — iconic book launch with P3 Sports",
  },
] as const;

function Home() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      <Hero />
      <Marquee items={DISCIPLINES} className="mt-0" />
      <StatsBand />
      <HomeFounderSpotlight />
      <HomeAboutP3 />
      <HomeShePaddleTeaser />
      <ServicesGrid />
      <FeaturedEvent />
      <PlayerSpotlight />
      <SponsorsSection />
      <SponsorshipStoryBanner />
      <HomeGalleryPreview />
      <FinalCta />
    </>
  );
}

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setWordIndex((i) => (i + 1) % HERO_WORDS.length),
      2600,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setSlideIndex((i) => (i + 1) % HERO_SLIDES.length),
      6500,
    );
    return () => clearInterval(t);
  }, []);

  const goSlide = (dir: -1 | 1) => {
    setSlideIndex(
      (i) => (i + dir + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  return (
    <section className="bg-[#060a10] px-3 pb-6 pt-14 sm:px-5 sm:pb-8 sm:pt-[3.75rem]">
      <div className="relative mx-auto min-h-[min(720px,calc(100vh-3.75rem))] max-w-[1380px] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] sm:rounded-[2rem]">
        <div className="absolute inset-0 bg-navy" aria-hidden />

        <div className="absolute inset-y-0 left-[30%] right-0 overflow-hidden">
          {HERO_SLIDES.map((slide, i) => (
            <motion.div
              key={slide.src}
              initial={false}
              animate={{
                opacity: i === slideIndex ? 1 : 0,
                scale: i === slideIndex ? 1 : 1.03,
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
              aria-hidden={i !== slideIndex}
            >
              <img
                src={slide.src}
                alt={i === slideIndex ? slide.alt : ""}
                className="h-full w-full object-cover object-center sm:object-[65%_35%]"
                width={1600}
                height={900}
              />
            </motion.div>
          ))}
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-[30%] z-[1] w-[min(28%,12rem)] bg-gradient-to-r from-navy to-transparent"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-navy/75 via-transparent to-navy/35" />

        <div className="relative z-10 flex min-h-[inherit] max-w-xl flex-col justify-center px-5 py-14 sm:px-10 sm:py-16 lg:max-w-[34%] lg:px-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-4 py-1.5 text-[10px] font-bold tracking-[0.22em] text-primary uppercase sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            P3 Sports Management Company
          </motion.div>

          <h1 className="font-display text-[11vw] leading-[1.02] text-white sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
            {["Play.", "Practice.", "Persevere."].map((word, i) => (
              <span key={word} className="mr-3 inline-block sm:mr-5">
                {i === 1 ? (
                  <span className="text-primary">{word}</span>
                ) : i === 2 ? (
                  <span className="text-stroke-light">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          <div className="mt-5 h-9 overflow-hidden sm:mt-6 sm:h-11">
            <motion.p
              key={wordIndex}
              initial={{ y: 36, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-xl text-primary sm:text-3xl"
            >
              {HERO_WORDS[wordIndex]}
            </motion.p>
          </div>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/78 sm:text-base">
            Ignite your passion, learn to deliver, master the strokes, play to
            perfection — with P3 Sports. Your connect to the athlete within{" "}
            <span className="font-bold text-white">YOU</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/services"
              className="glow-primary group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] sm:px-7 sm:py-3.5"
            >
              Train with P3
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/tournaments"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-primary hover:text-primary sm:px-7 sm:py-3.5"
            >
              <Trophy className="h-4 w-4" />
              Upcoming Tournament
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goSlide(-1)}
          className="absolute top-1/2 left-3 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/50 sm:left-4 sm:h-11 sm:w-11"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goSlide(1)}
          className="absolute top-1/2 right-3 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/50 sm:right-4 sm:h-11 sm:w-11"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setSlideIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === slideIndex
                  ? "w-7 bg-primary"
                  : "w-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
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
          className="mx-auto"
        />
        <HomeServicesGrid />
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
                {/* P3 Circle CTA disabled sitewide
                <Link
                  to="/circle"
                  className="rounded-full border border-navy-foreground/30 bg-transparent px-8 py-4 text-sm font-bold text-navy-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
                >
                  Join the P3 Circle
                </Link>
                */}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
