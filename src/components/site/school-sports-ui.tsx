import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Building2,
  GraduationCap,
  Heart,
  School,
  Sparkles,
  Trophy,
  Users,
  Waypoints,
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/anim";
import { SlantedMediaPanel } from "@/components/site/slanted-media-panel";
import { SCHOOL_SPORTS } from "@/data/school-sports";
import { cn } from "@/lib/utils";

const FEATURE_ICONS = [
  School,
  GraduationCap,
  Trophy,
  Sparkles,
  Building2,
] as const;

export function SchoolSportsFeatureGrid({
  variant = "home",
}: {
  variant?: "home" | "page";
}) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4",
        variant === "home" && "gap-2 sm:gap-2.5",
      )}
    >
      {SCHOOL_SPORTS.features.map((f, i) => {
        const Icon = FEATURE_ICONS[i] ?? School;
        return (
          <div
            key={f.label}
            className={cn(
              "text-center transition-all",
              variant === "home"
                ? "rounded-[10px] border border-[#e5e8ed] bg-white px-1.5 py-3 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:px-2 sm:py-4"
                : "rounded-xl border border-border bg-card/80 px-2 py-3.5 hover:border-primary/35 sm:p-4",
            )}
          >
            <Icon
              className={cn(
                "mx-auto text-primary",
                variant === "home" ? "h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" : "h-6 w-6",
              )}
              strokeWidth={1.65}
            />
            <p
              className={cn(
                "mt-2 font-bold leading-snug text-foreground",
                variant === "home"
                  ? "text-[9px] leading-[1.2] sm:text-[10px] sm:leading-[1.25] lg:text-xs"
                  : "text-[10px] leading-[1.2] sm:text-xs sm:text-sm",
              )}
            >
              {f.label}
            </p>
            {variant !== "home" ? (
              <p className="mt-1 text-[9px] leading-snug text-muted-foreground sm:text-[10px] sm:text-xs">
                {f.desc}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function SchoolSportsHeroPhoto({ className }: { className?: string }) {
  return (
    <SlantedMediaPanel
      slant="left"
      className={cn("bg-white p-4 sm:p-5 lg:py-6 lg:pr-6 lg:pl-4", className)}
      roundedClassName="rounded-2xl lg:rounded-tl-[2.75rem] lg:rounded-tr-lg lg:rounded-br-2xl"
    >
      <img
        src={SCHOOL_SPORTS.images.homeHero}
        alt="P3 coaches and students at a school table tennis session"
        className="h-full w-full object-cover object-center"
        loading="lazy"
        width={1200}
        height={800}
      />
    </SlantedMediaPanel>
  );
}

function SchoolClientCard({
  school,
  large = false,
}: {
  school: (typeof SCHOOL_SPORTS.schoolClients)[number];
  large?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-border bg-white text-center shadow-sm transition-shadow hover:shadow-md",
        large ? "px-4 py-6 sm:px-5 sm:py-7" : "px-3 py-5 sm:py-6",
      )}
    >
      <img
        src={school.logo}
        alt={school.name}
        loading="lazy"
        className={cn(
          "w-full object-contain",
          large
            ? "max-h-14 max-w-[min(100%,200px)] sm:max-h-16 sm:max-w-[220px]"
            : "max-h-12 max-w-[min(100%,180px)] sm:max-h-14 sm:max-w-[200px]",
        )}
        width={220}
        height={72}
      />
      <p className="mt-3 text-[10px] font-semibold leading-snug text-muted-foreground sm:text-xs">
        {school.name}
      </p>
    </div>
  );
}

export function SchoolSportsClientsGrid({
  className,
  large = false,
}: {
  className?: string;
  large?: boolean;
}) {
  const rowOne = SCHOOL_SPORTS.schoolClients.slice(0, 4);
  const rowTwo = SCHOOL_SPORTS.schoolClients.slice(4);

  return (
    <div
      className={cn(
        "w-full bg-[#f8f9fb]",
        large ? "px-6 py-8 sm:px-10 sm:py-10 lg:px-12" : "mt-2",
        className,
      )}
    >
      <p
        className={cn(
          "font-bold tracking-[0.22em] text-muted-foreground uppercase",
          large ? "text-center text-xs" : "text-[10px]",
        )}
      >
        School partners & clients
      </p>
      <div className="mx-auto mt-5 max-w-[1200px] space-y-4 sm:space-y-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {rowOne.map((school) => (
            <SchoolClientCard key={school.name} school={school} large={large} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-3 sm:mx-auto sm:max-w-[75%] sm:grid-cols-3 sm:gap-4">
          {rowTwo.map((school) => (
            <SchoolClientCard key={school.name} school={school} large={large} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SchoolSportsClientLogos() {
  return <SchoolSportsClientsGrid large />;
}

/** Full-width hero for the School Sports detail page */
export function SchoolSportsPageHero() {
  return (
    <section className="relative overflow-hidden border-b border-primary/10">
      <div className="relative min-h-[min(52vh,520px)] pt-24 sm:min-h-[min(58vh,560px)] sm:pt-28">
        <img
          src={SCHOOL_SPORTS.images.heroPage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/75 to-navy/55" />
        <div className="relative mx-auto max-w-[1360px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[10px] font-bold tracking-[0.28em] text-primary uppercase">
            {SCHOOL_SPORTS.eyebrow}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.02] text-navy-foreground sm:text-5xl lg:text-6xl">
            P3{" "}
            <span className="text-primary">School Sports</span> Program
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/85 sm:text-lg">
            {SCHOOL_SPORTS.heroSummary}
          </p>
          <div className="mt-10 max-w-3xl">
            <SchoolSportsFeatureGrid variant="page" />
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25"
          >
            Partner with your school
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SchoolSportsApproachGrid() {
  const icons = [Waypoints, Brain, Heart, Users];
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SCHOOL_SPORTS.approachPillars.map((item, i) => {
        const Icon = icons[i] ?? Waypoints;
        return (
          <StaggerItem key={item.title}>
            <article className="h-full rounded-2xl border border-border bg-card p-5 text-center transition-transform hover:-translate-y-0.5 sm:p-6">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h4 className="mt-3 text-sm font-bold text-foreground">{item.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.body}
              </p>
            </article>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

export function SchoolSportsOfferGrid() {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SCHOOL_SPORTS.whatWeOffer.map((item) => (
        <StaggerItem key={item.title}>
          <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
              <p className="absolute bottom-3 left-4 text-xs font-bold tracking-[0.18em] text-navy-foreground uppercase">
                {item.title}
              </p>
            </div>
            <p className="p-4 text-sm leading-relaxed text-muted-foreground sm:p-5">
              {item.desc}
            </p>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/** Home page School Sports block */
export function HomeSchoolSportsTeaser() {
  return (
    <section
      id="school-sports"
      aria-labelledby="school-sports-home-heading"
      className="scroll-mt-[3.75rem] border-y border-primary/10 bg-white"
    >
      <div className="mx-auto w-full max-w-[1360px] lg:px-0">
        <div className="grid items-stretch lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <div className="relative z-10 flex min-w-0 flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
            <p className="flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
              <span className="h-px w-8 bg-primary sm:w-10" aria-hidden />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {SCHOOL_SPORTS.eyebrow}
              </span>
            </p>

            <h2
              id="school-sports-home-heading"
              className="font-display mt-5 text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-5xl"
            >
              School Sports{" "}
              <span className="text-primary">{SCHOOL_SPORTS.titleAccent}</span>
            </h2>

            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-foreground/90 sm:text-lg">
              {SCHOOL_SPORTS.tagline}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
              {SCHOOL_SPORTS.homeIntro}
            </p>

            <div className="mt-9 w-full min-w-0">
              <SchoolSportsFeatureGrid variant="home" />
            </div>

            <div className="mt-8">
              <Link
                to="/school-sports"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/25 transition-transform hover:scale-[1.02] hover:bg-primary/95"
              >
                {SCHOOL_SPORTS.exploreCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <SchoolSportsHeroPhoto className="border-t border-border/60 lg:border-t-0 lg:border-l" />
        </div>
      </div>

      <SchoolSportsClientsGrid large className="border-t border-border/80" />
    </section>
  );
}

export function SchoolSportsImpactStrip() {
  return (
    <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {SCHOOL_SPORTS.impact.map((item) => (
        <StaggerItem key={item.label}>
          <div className="rounded-2xl border border-border bg-card/80 p-5 text-center">
            <p className="font-display text-3xl text-primary sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase sm:text-xs">
              {item.label}
            </p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function SchoolSportsSportsPills() {
  return (
    <div className="flex flex-wrap gap-2">
      {SCHOOL_SPORTS.sportsOptions.map((sport) => (
        <span
          key={sport}
          className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary sm:text-sm"
        >
          {sport}
        </span>
      ))}
    </div>
  );
}

export function SchoolSportsCheckList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-2.5 text-sm text-muted-foreground", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SchoolSportsSectionCard({
  icon: Icon,
  title,
  children,
  id,
}: {
  icon: typeof School;
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <Reveal>
      <article
        id={id}
        className="scroll-mt-24 rounded-2xl border border-border bg-card/60 p-6 sm:p-8"
      >
        <SectionIconHeader Icon={Icon} title={title} />
        <div className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {children}
        </div>
      </article>
    </Reveal>
  );
}

function SectionIconHeader({
  Icon,
  title,
}: {
  Icon: typeof School;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <h3 className="font-display text-xl text-foreground sm:text-2xl">
        {title}
      </h3>
    </div>
  );
}

export function SchoolSportsPartnerSchools() {
  return <SchoolSportsClientLogos />;
}

function ProgramCard({
  block,
}: {
  block:
    | typeof SCHOOL_SPORTS.inSchoolPrograms
    | typeof SCHOOL_SPORTS.summerCamps
    | typeof SCHOOL_SPORTS.tournamentsBlock
    | typeof SCHOOL_SPORTS.sportsTourism;
}) {
  const withImage = "image" in block && block.image;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {withImage ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={block.image}
            alt={"imageAlt" in block ? block.imageAlt : ""}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            width={640}
            height={480}
          />
        </div>
      ) : null}
      <div
        className={cn(
          "flex flex-1 flex-col p-5 sm:p-6",
          !withImage && "justify-center",
        )}
      >
        <h3 className="font-display text-xl text-foreground">{block.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
          {block.body}
        </p>
      </div>
    </article>
  );
}

/** In-school programmes, summer camps & tournaments; sports tourism full width below. */
export function SchoolSportsProgramsRow() {
  return (
    <div className="space-y-5 lg:space-y-6">
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <StaggerItem>
          <ProgramCard block={SCHOOL_SPORTS.inSchoolPrograms} />
        </StaggerItem>
        <StaggerItem>
          <ProgramCard block={SCHOOL_SPORTS.summerCamps} />
        </StaggerItem>
        <StaggerItem>
          <ProgramCard block={SCHOOL_SPORTS.tournamentsBlock} />
        </StaggerItem>
      </Stagger>
      <Reveal>
        <ProgramCard block={SCHOOL_SPORTS.sportsTourism} />
      </Reveal>
    </div>
  );
}

export function SchoolSportsWhyGrid() {
  return (
    <Stagger className="grid gap-4 md:grid-cols-3">
      {SCHOOL_SPORTS.whyCreated.map((item) => (
        <StaggerItem key={item.title}>
          <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
            <Users className="h-5 w-5 text-primary" />
            <h4 className="mt-3 font-bold text-foreground">{item.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function SchoolSportsCtaBanner() {
  return (
    <Reveal>
      <div className="noise-overlay relative overflow-hidden rounded-3xl border border-primary/30 bg-navy px-6 py-12 text-center sm:px-10 sm:py-14">
        <div
          aria-hidden
          className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
        />
        <p className="relative text-xs font-bold tracking-[0.28em] text-primary uppercase">
          Partner with P3
        </p>
        <h2 className="font-display relative mt-3 text-3xl text-navy-foreground sm:text-4xl">
          {SCHOOL_SPORTS.cta.title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm text-navy-foreground/80 sm:text-base">
          {SCHOOL_SPORTS.cta.body}
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-xs text-navy-foreground/75 sm:text-sm">
            {SCHOOL_SPORTS.cta.contactName} · {SCHOOL_SPORTS.cta.phone}
          </p>
        </div>
      </div>
    </Reveal>
  );
}