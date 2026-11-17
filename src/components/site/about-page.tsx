import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Medal,
  School,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import coachingImg from "@/assets/coaching.jpg";
import {
  Counter,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
  TiltCard,
} from "@/components/site/anim";
import { FitIndiaBanner } from "@/components/site/fit-india-banner";
import { SERVICE_DETAIL_ICONS } from "@/components/site/service-sections";
import {
  ABOUT_ACADEMY_HIGHLIGHTS,
  ABOUT_ACADEMY_SPORTS,
  ABOUT_HUBS,
  ABOUT_PAGE_HERO,
  ABOUT_PAGE_STATS,
} from "@/data/about-page";
import {
  ABOUT_P3_HOME,
  FOUNDER_NOTE,
  IDEA_BEHIND,
  P3_VISION,
  SERVICE_DETAILS,
  type ServiceDetail,
} from "@/data/content";
const IDEA_ICONS = [Target, Users, Medal] as const;
const STAT_ICONS = [Users, Trophy, School, Sparkles] as const;

const SPORT_TILE_STYLES = [
  "border-primary/35 bg-primary/15 text-primary",
  "border-navy/25 bg-navy/10 text-navy",
  "border-primary/25 bg-gradient-to-br from-primary/20 to-primary/5 text-foreground",
  "border-amber-500/30 bg-amber-500/10 text-amber-950 dark:text-amber-100",
  "border-sky-500/30 bg-sky-500/10 text-sky-950 dark:text-sky-100",
] as const;

export function AboutPageContent() {
  return (
    <>
      <AboutHero />

      <section
        id="our-story"
        className="scroll-mt-24 border-b border-border/60 py-12 sm:py-16"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <AboutPhotoFrame
              src="/about/about-passion-purpose.jpg"
              alt="P3 summer camp — coaches and young players together"
              aspect="5/4"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  Passion that became{" "}
                  <span className="text-primary">purpose.</span>
                </>
              }
            />
            <div className="mt-6 space-y-4">
              {ABOUT_P3_HOME.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {p}
                </p>
              ))}
            </div>
            <Reveal delay={0.1} className="mt-6 flex flex-wrap items-center gap-3">
              {P3_VISION.pillars.map((pillar, i) => (
                <span
                  key={pillar.word}
                  className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-foreground uppercase sm:text-[11px]"
                >
                  {i > 0 ? (
                    <span
                      className="h-4 w-px bg-primary/50"
                      aria-hidden
                    />
                  ) : null}
                  {pillar.word}
                </span>
              ))}
            </Reveal>
            <Reveal delay={0.14} className="mt-6">
              <FitIndiaBanner text={ABOUT_P3_HOME.fitIndia} />
            </Reveal>
          </div>
        </div>
      </section>

      <AboutStatsBand />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How P3 began"
            title={
              <>
                Built on passion. Made for{" "}
                <span className="text-primary">every player.</span>
              </>
            }
            sub="A common platform for professionals, amateurs and masters — to learn, train and compete together."
            align="center"
            className="mx-auto max-w-3xl"
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {IDEA_BEHIND.map((idea, i) => {
              const Icon = IDEA_ICONS[i] ?? Target;
              return (
                <StaggerItem key={idea.title}>
                  <TiltCard className="h-full rounded-2xl border border-border bg-card p-7 sm:p-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-display text-xl text-foreground capitalize">
                      {idea.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {idea.desc}
                    </p>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="P3 academy"
                title={
                  <>
                    Where players{" "}
                    <span className="text-stroke-primary">grow.</span>
                  </>
                }
              />
              <ul className="mt-6 space-y-3">
                {ABOUT_ACADEMY_HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-2">
                <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
                  Where we operate
                </p>
                {ABOUT_HUBS.map((hub) => (
                  <p
                    key={hub}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    {hub}
                  </p>
                ))}
              </div>
            </div>
            <Reveal>
              <AboutPhotoFrame
                src="/about/about-academy-players-grow.png"
                alt="P3 coaches with juniors on the badminton court"
                aspect="5/4"
              />
            </Reveal>
          </div>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-card to-navy/[0.06] p-6 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
            />
            <p className="relative text-center text-[10px] font-bold tracking-[0.24em] text-primary uppercase">
              Sports options
            </p>
            <p className="relative mx-auto mt-2 max-w-lg text-center text-sm text-muted-foreground">
              Federation-approved coaching across Olympic and non-Olympic
              disciplines on academy, school and society grounds.
            </p>
            <Stagger className="relative mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
              {ABOUT_ACADEMY_SPORTS.map((sport, i) => (
                <StaggerItem key={sport}>
                  <div
                    className={`flex h-full min-h-[3.5rem] items-center justify-center rounded-xl border px-2 py-3.5 text-center text-xs font-bold leading-snug shadow-sm transition-transform hover:-translate-y-0.5 sm:text-sm ${SPORT_TILE_STYLES[i % SPORT_TILE_STYLES.length]}`}
                  >
                    {sport}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 text-navy-foreground sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.3em] text-primary uppercase">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Our focus
            </p>
            <h2 className="font-display text-center text-4xl text-navy-foreground sm:text-5xl">
              Sport has no age limit.{" "}
              <span className="text-primary">No gender barriers.</span>
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
            {ABOUT_P3_HOME.focusAreas.map((area) => (
              <StaggerItem key={area.title}>
                <article className="h-full rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 sm:p-8">
                  <Medal
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-lg font-bold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/82">
                    {area.desc}
                  </p>
                  {area.title === "Women's empowerment" ? (
                    <Link
                      to="/shepaddle"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary/90"
                    >
                      Explore ShePaddle
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-y border-border/60 bg-[#faf8f5] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                One organisation.{" "}
                <span className="text-primary">Many pathways.</span>
              </>
            }
            sub="Coaching, events and programmes for schools, corporates, societies and champions."
            align="center"
            className="mx-auto max-w-3xl"
          />
          <AboutPathwaysGrid />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/50 p-8 sm:p-12">
              <img
                src={coachingImg}
                alt=""
                aria-hidden
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover opacity-15"
              />
              <div className="relative">
                <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                  What drives us
                </p>
                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-foreground sm:text-xl">
                  &ldquo;{FOUNDER_NOTE}&rdquo;
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link
                    to="/team"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Meet the team
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-semibold text-muted-foreground">
                    {[
                      "Best learning ground",
                      "Quality & satisfaction",
                      "Seamless events",
                    ].map((v) => (
                      <li key={v} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutClosingCta />
    </>
  );
}

function AboutPhotoFrame({
  src,
  alt,
  aspect,
}: {
  src: string;
  alt: string;
  aspect: "5/4" | "16/11";
}) {
  const aspectClass =
    aspect === "5/4" ? "aspect-[5/4]" : "aspect-[16/11]";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_16px_48px_rgba(15,23,42,0.1)] ${aspectClass} w-full`}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

function serviceCardLink(service: ServiceDetail) {
  if (service.pageCta) {
    return {
      to: service.pageCta.to,
      hash: service.pageCta.hash,
    };
  }
  return { to: "/services" as const, hash: service.id };
}

function AboutPathwaysGrid() {
  return (
    <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICE_DETAILS.map((service, i) => {
        const Icon: LucideIcon =
          SERVICE_DETAIL_ICONS[i] ?? SERVICE_DETAIL_ICONS[0];
        const { to, hash } = serviceCardLink(service);
        return (
          <StaggerItem key={service.id}>
            <Link
              to={to}
              hash={hash}
              preload="intent"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  width={640}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-background/90 text-primary shadow-sm backdrop-blur-sm">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-bold leading-snug text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.homeSummary ?? service.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground transition-colors group-hover:text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <p className="flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-primary uppercase">
            <span className="h-px w-8 bg-primary" aria-hidden />
            {ABOUT_PAGE_HERO.eyebrow}
          </p>
          <h1 className="font-display mt-4 text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[3.25rem]">
            {ABOUT_PAGE_HERO.titleLead}{" "}
            <span className="text-primary">{ABOUT_PAGE_HERO.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {ABOUT_PAGE_HERO.sub}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="glow-primary inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <AboutPhotoFrame
            src="/about/about-movement-everyone.jpg"
            alt="P3 tournament — young players with coaches, trophies and certificates"
            aspect="16/11"
          />
        </Reveal>
      </div>
    </section>
  );
}

function AboutStatsBand() {
  return (
    <section className="border-y border-border bg-card/80 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {ABOUT_PAGE_STATS.map((stat, i) => {
            const Icon = STAT_ICONS[i] ?? Users;
            return (
              <StaggerItem key={stat.label}>
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <Icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="font-display mt-2 text-3xl text-foreground sm:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function AboutClosingCta() {
  return (
    <section className="noise-overlay border-t border-primary/15 bg-navy py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl text-navy-foreground sm:text-4xl">
          Let&apos;s build a more active India.{" "}
          <span className="text-primary">Together.</span>
        </h2>
        <p className="mx-auto mt-4 text-sm leading-relaxed text-navy-foreground/82 sm:text-base">
          Whether you&apos;re a school, corporate organisation, residential
          community or an aspiring athlete, there&apos;s a place for you at P3
          Sports.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="glow-primary inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground sm:w-auto"
          >
            Connect with P3
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy-foreground/30 px-8 py-3.5 text-sm font-bold text-navy-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}