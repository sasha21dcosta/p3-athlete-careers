import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Medal, Venus } from "lucide-react";

import coachingImg from "@/assets/coaching.jpg";
import { FitIndiaBanner } from "@/components/site/fit-india-banner";
import { Reveal, Stagger, StaggerItem } from "@/components/site/anim";
import { ABOUT_P3_HOME } from "@/data/content";

const FOCUS_ICONS = [Venus, Medal] as const;

export function HomeAboutP3() {
  return (
    <section
      id="about-p3"
      aria-labelledby="about-p3-heading"
      className="relative overflow-hidden py-10 sm:py-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-primary/8 blur-[100px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10">
        <Reveal className="order-2 lg:order-1">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src={coachingImg}
              alt="Coach mentoring young players at the P3 academy"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] lg:aspect-[5/4]"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-foreground uppercase backdrop-blur">
              <MapPin className="h-3 w-3 shrink-0 text-primary" />
              Mumbai · Chandannagore · California
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.26em] text-primary uppercase">
              <span className="h-px w-7 bg-primary" aria-hidden />
              About P3 Sports
            </p>
            <h2
              id="about-p3-heading"
              className="font-display mt-3 text-2xl leading-[1.1] text-foreground sm:text-3xl lg:text-[2rem]"
            >
              Building a more active and inclusive{" "}
              <span className="text-primary">sporting culture.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.06} className="mt-4 space-y-3">
            {ABOUT_P3_HOME.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </Reveal>

          <Stagger className="mt-5 grid gap-3 sm:grid-cols-2">
            {ABOUT_P3_HOME.focusAreas.map((area, i) => {
              const Icon = FOCUS_ICONS[i] ?? Venus;
              return (
                <StaggerItem key={area.title}>
                  <div className="h-full rounded-xl border border-border bg-card/80 p-3.5">
                    <Icon
                      className="h-4 w-4 text-primary"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <p className="mt-1.5 text-sm font-bold text-foreground">
                      {area.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {area.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.12} className="mt-5">
            <FitIndiaBanner text={ABOUT_P3_HOME.fitIndia} />
          </Reveal>

          <Reveal delay={0.16} className="mt-5 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              Read the full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              Meet the team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
