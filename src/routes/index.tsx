import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
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
  ACADEMY_SPORT_PHOTOS,
  SITE,
  SPONSORS,
  STATS,
} from "@/data/content";
import { SponsorshipStoryBanner } from "@/components/site/cta-banner";
import { UpcomingEventCard } from "@/components/site/upcoming-event-card";
import { HomeShePaddleTeaser } from "@/components/site/shepaddle-ui";
import { HomeSchoolSportsTeaser } from "@/components/site/school-sports-ui";
import { HomeAboutP3 } from "@/components/site/home-about-p3";
import { HomeTeamPromo } from "@/components/site/home-team-promo";
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

const HERO_SLIDE_MS = 4800;
const HERO_CROSSFADE = { duration: 0.95, ease: [0.33, 1, 0.68, 1] as const };

const HERO_SLIDES = [
  {
    src: "/hero/slide-summit.jpg",
    alt: "Moonmoon Mukherjee honoured at the Lead Fit Summit",
    imgClass:
      "max-lg:object-cover max-lg:object-[center_35%] lg:object-cover lg:object-center",
  },
  {
    src: "/hero/slide-sachin.jpg",
    alt: "Sachin Tendulkar with P3 Sports at the table",
    imgClass:
      "max-lg:object-contain max-lg:object-top lg:object-cover lg:object-[center_12%]",
  },
  {
    src: "/hero/slide-sports-studio.jpg",
    alt: "P3 Sports professional broadcast studio",
    imgClass: "object-cover object-center",
  },
  {
    src: "/hero/slide-iconic-book-launch.jpg",
    alt: "Iconic Book Launch — Smash Her Story with ShePaddle and P3 Sports",
    imgClass:
      "max-lg:object-cover max-lg:object-[center_42%] lg:object-cover lg:object-center",
  },
  {
    src: "/hero/slide-podcast.jpg",
    alt: "P3 Sports — coaches and leaders in the media studio",
    imgClass: "object-cover object-center",
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
      <HomeAboutP3 />
      <HomeTeamPromo />
      <HomeSchoolSportsTeaser />
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
  const [autoplayKey, setAutoplayKey] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setWordIndex((i) => (i + 1) % HERO_WORDS.length),
      2600,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (HERO_SLIDES.length < 2) return;
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_MS);
    return () => clearInterval(t);
  }, [autoplayKey]);

  const bumpAutoplay = useCallback(() => {
    setAutoplayKey((k) => k + 1);
  }, []);

  const goSlide = useCallback((dir: -1 | 1) => {
    bumpAutoplay();
    setSlideIndex(
      (i) => (i + dir + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  }, [bumpAutoplay]);

  const goToSlide = useCallback(
    (index: number) => {
      bumpAutoplay();
      setSlideIndex(index);
    },
    [bumpAutoplay],
  );

  return (
    <section className="relative w-full overflow-hidden bg-navy pt-14 sm:pt-[3.75rem]">
      <div className="relative mx-auto min-h-[min(640px,calc(100svh-3.75rem))] w-full max-w-[1600px] sm:min-h-[min(760px,calc(100svh-3.75rem))]">
        <div className="grid min-h-[inherit] lg:grid-cols-[minmax(0,46%)_minmax(0,1fr)]">
          {/* Copy — solid panel; no photo underneath */}
          <div className="relative z-20 flex flex-col justify-center bg-navy px-4 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-4 py-1.5 text-[10px] font-bold tracking-[0.22em] text-primary uppercase sm:text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              P3 Sports Management Company
            </motion.div>

            <h1 className="font-display text-[2.35rem] leading-[1.05] text-white sm:text-6xl lg:text-[3.65rem] xl:text-[4.25rem]">
              {["Play.", "Practice.", "Persevere."].map((word, i) => (
                <span key={word} className="mr-2 inline-block sm:mr-4">
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

            <div className="mt-4 h-9 overflow-hidden sm:mt-6 sm:h-11">
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

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/82 sm:mt-5 sm:text-base">
              Ignite your passion, learn to deliver, master the strokes, play to
              perfection — with P3 Sports. Your connect to the athlete within{" "}
              <span className="font-bold text-white">YOU</span>.
            </p>

            <div className="mt-7 sm:mt-8">
              <Link
                to="/services"
                className="glow-primary group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto sm:px-7"
              >
                Train with P3
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Photography — right column only (center → right) */}
          <div
            className="relative min-h-[min(62vw,480px)] bg-navy sm:min-h-[min(52vh,520px)] lg:min-h-[inherit]"
            aria-roledescription="carousel"
            aria-label="Hero highlights"
          >
            {HERO_SLIDES.map((slide, i) => (
              <motion.div
                key={slide.src}
                initial={false}
                animate={{ opacity: i === slideIndex ? 1 : 0 }}
                transition={HERO_CROSSFADE}
                className="absolute inset-0 will-change-[opacity]"
                aria-hidden={i !== slideIndex}
              >
                <img
                  src={slide.src}
                  alt={i === slideIndex ? slide.alt : ""}
                  className={`h-full w-full ${slide.imgClass}`}
                  width={1200}
                  height={900}
                />
              </motion.div>
            ))}

            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-16 bg-gradient-to-r from-navy to-transparent sm:w-24 lg:block lg:w-28"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-navy/55 via-transparent to-navy/15 lg:from-navy/35"
            />

            {/* Mobile / tablet slideshow controls — anchored to photo */}
            <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 px-3 pb-4 pt-10 sm:px-4 lg:hidden">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => goSlide(-1)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div
                className="flex flex-1 justify-center gap-2"
                role="tablist"
                aria-label="Slide pagination"
              >
                {HERO_SLIDES.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    role="tab"
                    aria-selected={i === slideIndex}
                    aria-label={`Go to slide ${i + 1}: ${slide.alt}`}
                    onClick={() => goToSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === slideIndex
                        ? "w-7 bg-primary"
                        : "w-2 bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next slide"
                onClick={() => goSlide(1)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <p className="sr-only" aria-live="polite">
              {HERO_SLIDES[slideIndex]?.alt}
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goSlide(-1)}
          className="absolute top-1/2 left-3 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/55 lg:left-[calc(46%-1.25rem)] lg:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goSlide(1)}
          className="absolute top-1/2 right-3 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/55 sm:right-4 lg:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 gap-2 lg:flex">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goToSlide(i)}
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
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
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
  return <UpcomingEventCard variant="home" />;
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
            {ACADEMY_SPORT_PHOTOS.map((p) => (
              <StaggerItem key={p.photo}>
                <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={p.photo}
                      alt={p.alt}
                      loading="lazy"
                      width={320}
                      height={400}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/35 to-transparent px-3 pb-3 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-center text-[10px] font-bold tracking-[0.2em] text-navy-foreground uppercase">
                        {p.sport}
                      </p>
                    </div>
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
