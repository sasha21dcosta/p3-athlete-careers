import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Target,
  Trophy,
  Users,
  Venus,
  Flower2,
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/anim";
import { ShePaddleWordmark } from "@/components/site/shepaddle-brand";
import { SlantedMediaPanel } from "@/components/site/slanted-media-panel";
import { SHEPADDLE } from "@/data/shepaddle";
import { cn } from "@/lib/utils";

const FEATURE_ICONS = [Trophy, Venus, Users, Flower2] as const;

export function ShePaddleFeatureGrid({
  compact = false,
  variant = "default",
}: {
  compact?: boolean;
  variant?: "default" | "home";
}) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4",
        variant === "home" && "gap-2 sm:gap-2.5",
      )}
    >
      {SHEPADDLE.features.map((f, i) => {
        const Icon = FEATURE_ICONS[i] ?? Trophy;
        return (
          <div
            key={f.label}
            className={cn(
              "group text-center transition-all",
              variant === "home"
                ? "rounded-[10px] border border-[#e5e8ed] bg-white px-1.5 py-3 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:px-2 sm:py-4"
                : "rounded-xl border border-border bg-card/80 p-3 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-4",
            )}
          >
            <Icon
              className={cn(
                "mx-auto text-primary",
                variant === "home" ? "h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" : "h-6 w-6",
              )}
              strokeWidth={variant === "home" ? 1.65 : 1.5}
            />
            <p
              className={cn(
                "mt-2 font-bold leading-snug text-foreground",
                variant === "home"
                  ? "text-[9px] leading-[1.2] sm:text-[10px] sm:leading-[1.25] lg:text-xs"
                  : "text-[10px] leading-[1.2] sm:text-[11px] sm:text-xs",
              )}
            >
              {f.label}
            </p>
            {!compact && variant !== "home" && (
              <p className="mt-1 hidden text-[10px] text-muted-foreground sm:block">
                {f.desc}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function ShePaddleVisionStrip({ pill = false }: { pill?: boolean }) {
  if (pill) {
    return (
      <div className="flex flex-col gap-3 rounded-full border border-primary/10 bg-gradient-to-r from-secondary/90 via-flare/30 to-secondary/70 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4 sm:px-5 sm:py-3">
        <div className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Target className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <p className="text-sm font-bold text-foreground">Our Vision</p>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground sm:border-l sm:border-border sm:pl-4 sm:text-sm">
          {SHEPADDLE.vision}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-primary/15 bg-gradient-to-r from-secondary/80 via-flare/25 to-secondary/80 px-4 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Target className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-foreground">Our Vision</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {SHEPADDLE.vision}
        </p>
      </div>
    </div>
  );
}

export function ShePaddleMetaCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-2xl border border-primary/15 bg-gradient-to-br from-secondary/90 to-flare/30 p-5 shadow-sm sm:p-6",
        className,
      )}
    >
      <p className="text-xs font-bold tracking-[0.22em] text-primary uppercase">
        {SHEPADDLE.launched}
      </p>
      <p className="font-display mt-2 text-2xl text-foreground">{SHEPADDLE.location}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {SHEPADDLE.motto}
      </p>
      <Link
        to="/shepaddle"
        className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
      >
        Enquire about ShePaddle
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

/** Hero photo panel — slanted seam + accent line (image column) */
export function ShePaddleHeroPhoto({ className }: { className?: string }) {
  return (
    <SlantedMediaPanel
      slant="right"
      className={cn("bg-white p-4 sm:p-5 lg:py-6 lg:pl-6 lg:pr-4", className)}
      roundedClassName="rounded-2xl lg:rounded-bl-[2.75rem] lg:rounded-tl-lg lg:rounded-br-2xl"
      overlay={
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-l from-white/5 via-transparent to-transparent"
          />
          <div className="absolute bottom-3 left-3 z-20 max-w-[13.5rem] bg-primary px-4 py-3 sm:bottom-4 sm:left-4 sm:px-5 sm:py-3.5">
            <p className="text-sm leading-snug text-primary-foreground italic sm:text-[0.9375rem]">
              Every Age.{" "}
              <span className="text-primary-foreground/92">Every Rally.</span>{" "}
              Every Woman.
            </p>
            <span
              aria-hidden
              className="mt-2 block h-px w-10 bg-primary-foreground/70"
            />
          </div>
        </>
      }
    >
      <img
        src={SHEPADDLE.images.homeHero}
        alt="ShePaddle athletes at the Woman Empowerment launch backdrop"
        className="h-full w-full object-cover object-center"
        loading="lazy"
        width={1200}
        height={900}
      />
    </SlantedMediaPanel>
  );
}

/** Home page ShePaddle block */
export function HomeShePaddleTeaser() {
  return (
    <section
      id="shepaddle"
      aria-labelledby="shepaddle-home-heading"
      className="scroll-mt-[3.75rem] border-y border-primary/10 bg-white"
    >
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="grid items-stretch lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)]">
          <ShePaddleHeroPhoto className="border-b border-border/60 lg:border-b-0 lg:border-r" />

          <div className="relative z-10 flex min-w-0 flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
            <p className="flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
              <span className="h-px w-8 bg-primary sm:w-10" aria-hidden />
              <span>{SHEPADDLE.initiativeDisplay}</span>
            </p>

            <div className="mt-4">
              <ShePaddleWordmark size="home" className="shrink-0" />
            </div>

            <h2 id="shepaddle-home-heading" className="sr-only">
              ShePaddle — {SHEPADDLE.title}
            </h2>

            <p className="mt-6 max-w-2xl text-xl font-bold italic leading-snug text-foreground sm:text-2xl">
              {SHEPADDLE.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {SHEPADDLE.homeIntro}
            </p>

            <div className="mt-8 max-w-2xl lg:max-w-none">
              <ShePaddleFeatureGrid compact variant="home" />
            </div>

            <div className="mt-6 rounded-2xl border border-primary/10 bg-gradient-to-r from-secondary/90 via-flare/35 to-secondary/80 px-4 py-4 lg:flex lg:items-start lg:gap-4 lg:px-5">
              <div className="flex shrink-0 items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <p className="text-sm font-bold text-foreground">Our Vision</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:mt-0 lg:border-l lg:border-primary/15 lg:pl-4">
                {SHEPADDLE.vision}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <p className="flex items-center gap-2 text-sm text-foreground">
                <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
                Launched{" "}
                <span className="font-bold">{SHEPADDLE.launched}</span>
              </p>
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {SHEPADDLE.location}
              </p>
              <Link
                to="/shepaddle"
                className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:scale-[1.02] hover:bg-primary/95"
              >
                Explore ShePaddle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ShePaddleStoryTabs() {
  const [active, setActive] = useState(SHEPADDLE.pillars[0].id);
  const pillar =
    SHEPADDLE.pillars.find((p) => p.id === active) ?? SHEPADDLE.pillars[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="ShePaddle themes"
        className="flex flex-wrap gap-2"
      >
        {SHEPADDLE.pillars.map((p) => {
          const isActive = p.id === active;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(p.id)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[10px] font-bold tracking-[0.14em] uppercase transition-colors sm:text-xs",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40",
              )}
            >
              {p.label}
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={pillar.id}
          role="tabpanel"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
          className="mt-5 rounded-2xl border border-border bg-card/60 p-5 sm:p-6"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            {pillar.label}
          </p>
          <h3 className="font-display mt-2 text-xl text-foreground sm:text-2xl">
            {pillar.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {pillar.body}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function ShePaddleGallery() {
  const photos = SHEPADDLE.gallery;

  return (
    <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo) => (
        <StaggerItem key={photo.src}>
          <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={cn(
                  "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
                  photo.position,
                )}
              />
            </div>
            {photo.caption ? (
              <figcaption className="px-4 py-3 text-xs font-semibold text-muted-foreground">
                {photo.caption}
              </figcaption>
            ) : null}
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
