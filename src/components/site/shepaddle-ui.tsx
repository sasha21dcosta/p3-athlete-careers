import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Flower2,
  MapPin,
  Target,
  Trophy,
  Users,
  Venus,
  ArrowUpRight,
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/anim";
import { ShePaddleWordmark } from "@/components/site/shepaddle-brand";
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
        "grid gap-3",
        compact
          ? variant === "home"
            ? "grid-cols-2 gap-2.5 lg:grid-cols-4"
            : "grid-cols-2 lg:grid-cols-4"
          : "sm:grid-cols-2 lg:grid-cols-4",
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
                ? "rounded-[10px] border border-[#e2e6eb] bg-white px-1.5 py-[1.125rem] shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                : "rounded-xl border border-border bg-card/80 p-3 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-4",
            )}
          >
            <Icon
              className={cn(
                "mx-auto text-primary",
                variant === "home" ? "h-[1.35rem] w-[1.35rem]" : "h-6 w-6",
              )}
              strokeWidth={variant === "home" ? 1.65 : 1.5}
            />
            <p
              className={cn(
                "mt-2 font-bold leading-snug text-foreground",
                variant === "home"
                  ? "text-[10px] leading-[1.25] sm:text-[10.5px]"
                  : "text-[11px] sm:text-xs",
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
      <p className="font-display text-lg leading-snug italic sm:text-xl">
        <span className="text-foreground">Every Age.</span>{" "}
        <span className="text-primary">Every Rally.</span>{" "}
        <span className="text-foreground">Every Woman.</span>
      </p>
      <ul className="mt-6 space-y-3 text-sm">
        <li className="flex items-center gap-2 text-foreground">
          <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
          Launched <strong className="font-bold">{SHEPADDLE.launched}</strong>
        </li>
        <li className="flex items-center gap-2 text-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-primary" />
          <strong className="font-bold">{SHEPADDLE.location}</strong>
        </li>
      </ul>
      <Link
        to="/contact"
        className="glow-primary mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
      >
        Enquire about ShePaddle
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

/** Hero photo panel — template-style crop, diagonal accents, motto badge */
export function ShePaddleHeroPhoto({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-[#121820] lg:min-h-[32rem] lg:rounded-bl-[5rem]",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-0 z-20 w-2.5 bg-primary sm:w-3"
      />
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-3 z-20 w-12 bg-flare/80 sm:left-3.5 sm:w-[3.25rem]"
        style={{
          clipPath: "polygon(100% 0, 12% 0, 0 100%, 100% 100%)",
        }}
      />

      <img
        src={SHEPADDLE.images.heroPlayer}
        alt="ShePaddle athlete in action at the table"
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[48%_22%] sm:object-[46%_20%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"
      />

      <div className="absolute right-0 bottom-0 z-30 max-w-[12.5rem] bg-primary px-4 py-3 text-right sm:max-w-[13.5rem] sm:px-5 sm:py-3.5">
        <p className="text-sm leading-snug text-primary-foreground italic sm:text-[0.9375rem]">
          Every Age.{" "}
          <span className="text-primary-foreground/92">Every Rally.</span> Every
          Woman.
        </p>
        <span
          aria-hidden
          className="mt-2 ml-auto block h-px w-10 bg-primary-foreground/70"
        />
      </div>
    </div>
  );
}

/** Home page ShePaddle block */
export function HomeShePaddleTeaser() {
  return (
    <section
      id="shepaddle"
      aria-labelledby="shepaddle-home-heading"
      className="scroll-mt-[3.75rem] bg-[#eceef2] py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-sm bg-white shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[minmax(0,1.48fr)_minmax(0,1fr)] lg:items-stretch">
            <div className="relative z-10 min-w-0 bg-white px-6 py-9 sm:px-9 sm:py-11 lg:px-12 lg:py-12">
              <p className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
                <span className="h-px w-7 bg-primary" aria-hidden />
                {SHEPADDLE.initiativeDisplay}
              </p>

              <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-5">
                <ShePaddleWordmark size="home" className="shrink-0" />
                <span
                  className="hidden h-12 w-px shrink-0 bg-[#d8dde5] lg:block"
                  aria-hidden
                />
                <p className="max-w-[10.5rem] text-[9px] font-bold leading-snug tracking-[0.12em] text-[#374151] uppercase sm:text-[10px]">
                  {SHEPADDLE.title}
                </p>
              </div>

              <h2 id="shepaddle-home-heading" className="sr-only">
                ShePaddle — {SHEPADDLE.title}
              </h2>

              <p className="mt-6 max-w-2xl text-xl font-bold italic leading-snug text-[#111827] sm:text-2xl">
                {SHEPADDLE.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5b6472] sm:text-base">
                {SHEPADDLE.homeIntro}
              </p>

              <div className="mt-8">
                <ShePaddleFeatureGrid compact variant="home" />
              </div>

              <div className="mt-6 rounded-2xl border border-primary/10 bg-gradient-to-r from-secondary/90 via-flare/35 to-secondary/80 px-4 py-4 lg:flex lg:items-start lg:gap-4 lg:px-5">
                <div className="flex shrink-0 items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Target className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <p className="text-sm font-bold text-[#111827]">Our Vision</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#5b6472] lg:mt-0 lg:border-l lg:border-primary/15 lg:pl-4">
                  {SHEPADDLE.vision}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
                <p className="flex items-center gap-2 text-sm text-[#111827]">
                  <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
                  Launched{" "}
                  <span className="font-bold">{SHEPADDLE.launched}</span>
                </p>
                <p className="flex items-center gap-2 text-sm font-bold text-[#111827]">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  {SHEPADDLE.location}
                </p>
                <Link
                  to="/shepaddle"
                  className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-primary bg-white px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Explore ShePaddle
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <ShePaddleHeroPhoto className="min-h-[340px] sm:min-h-[420px] lg:min-h-[36rem]" />
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
          const selected = p.id === active;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(p.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-xs font-bold sm:text-sm",
                selected ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="shepaddle-pillar-pill"
                  className="absolute inset-0 rounded-full bg-primary shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10">{p.label}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-6 min-h-[140px] rounded-2xl border border-border bg-card/60 p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-2xl text-foreground">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {pillar.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function ShePaddleGallery() {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-3">
      {SHEPADDLE.gallery.map((item) => (
        <StaggerItem key={item.caption}>
          <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={cn(
                  "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                  item.position,
                )}
              />
            </div>
            <figcaption className="px-4 py-3 text-xs font-semibold text-muted-foreground">
              {item.caption}
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
