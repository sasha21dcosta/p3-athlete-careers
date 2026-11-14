import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import { Reveal } from "@/components/site/anim";
import { UPCOMING_EVENT } from "@/data/content";
import { cn } from "@/lib/utils";

function splitFeaturedEventDates(dates: string): [string, string] {
  const match = dates.match(
    /^(.+?)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})$/,
  );
  if (match) return [match[1], `${match[2]} ${match[3]}`];
  return [dates, ""];
}

function splitFeaturedEventVenue(venue: string): [string, string] {
  const comma = venue.indexOf(",");
  if (comma === -1) return [venue, ""];
  return [venue.slice(0, comma + 1), venue.slice(comma + 1).trim()];
}

type UpcomingEventCardProps = {
  variant?: "home" | "shepaddle";
  className?: string;
};

export function UpcomingEventCard({
  variant = "home",
  className,
}: UpcomingEventCardProps) {
  const poster = UPCOMING_EVENT.image ?? "/events/shepaddle-kochi-2026.jpg";
  const registerHref =
    UPCOMING_EVENT.registrationUrl ??
    "https://docs.google.com/forms/d/e/1FAIpQLSfW93Iue7aziHrEfBZ6LL5XmgrY3N7Kne4DE7aYesorxRNn4Q/viewform";
  const posterAlt = UPCOMING_EVENT.subtitle
    ? `${UPCOMING_EVENT.title} — ${UPCOMING_EVENT.subtitle}`
    : UPCOMING_EVENT.title;
  const [datePrimary, dateSecondary] = splitFeaturedEventDates(
    UPCOMING_EVENT.dates,
  );
  const [venuePrimary, venueSecondary] = splitFeaturedEventVenue(
    UPCOMING_EVENT.venue,
  );

  const card = (
    <article
      className={cn(
        "overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.1)] sm:rounded-[2rem] lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:items-stretch",
        className,
      )}
    >
      <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-11 xl:px-14 xl:py-12">
        <p className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.28em] text-primary uppercase sm:tracking-[0.32em]">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-primary"
            aria-hidden
          />
          Upcoming event
        </p>

        {variant === "home" ? (
          <>
            <h2 className="font-display mt-4 text-[1.85rem] leading-[1.06] text-navy sm:text-[2.35rem] lg:text-[2.5rem] xl:text-[2.75rem]">
              Next on the <span className="text-primary">P3 calendar</span>
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-[4.5rem] rounded-full bg-primary"
            />
          </>
        ) : (
          <h2 className="font-display mt-4 text-2xl leading-tight text-navy sm:text-3xl lg:text-[2.15rem]">
            Register for the{" "}
            <span className="text-primary">next ShePaddle</span>
          </h2>
        )}

        <p className="mt-7 text-lg font-bold text-navy sm:mt-8 sm:text-xl">
          <span>{UPCOMING_EVENT.title}</span>
          {UPCOMING_EVENT.edition ? (
            <span className="text-primary"> – {UPCOMING_EVENT.edition}</span>
          ) : null}
        </p>

        {UPCOMING_EVENT.subtitle ? (
          <p className="mt-1.5 text-sm font-medium text-muted-foreground sm:text-[0.9375rem]">
            {UPCOMING_EVENT.subtitle}
          </p>
        ) : null}

        {UPCOMING_EVENT.slogan ? (
          <p className="font-display mt-4 max-w-md text-base italic leading-snug text-foreground/80 sm:mt-5 sm:text-lg">
            {UPCOMING_EVENT.slogan}
          </p>
        ) : null}

        <div className="mt-7 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-3.5">
            <CalendarDays
              className="h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8"
              strokeWidth={1.75}
            />
            <p className="text-[0.9375rem] font-bold leading-[1.2] text-navy sm:text-base">
              <span className="block">{datePrimary}</span>
              {dateSecondary ? (
                <span className="block">{dateSecondary}</span>
              ) : null}
            </p>
          </div>
          <span
            aria-hidden
            className="hidden h-10 w-px shrink-0 bg-navy/12 sm:block"
          />
          <div className="h-px w-full bg-navy/10 sm:hidden" aria-hidden />
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-3.5">
            <MapPin
              className="h-7 w-7 shrink-0 text-primary sm:h-8 sm:w-8"
              strokeWidth={1.75}
            />
            <p className="text-[0.9375rem] font-bold leading-[1.2] text-navy sm:text-base">
              <span className="block">{venuePrimary}</span>
              {venueSecondary ? (
                <span className="block">{venueSecondary}</span>
              ) : null}
            </p>
          </div>
        </div>

        {UPCOMING_EVENT.categories?.length ? (
          <p className="mt-5 text-xs font-semibold tracking-wide text-muted-foreground sm:text-sm">
            {UPCOMING_EVENT.categories.join(" · ")}
          </p>
        ) : null}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={registerHref}
            target="_blank"
            rel="noreferrer"
            className="glow-primary inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/25 transition-transform hover:scale-[1.02] sm:w-auto sm:px-8 sm:py-3.5"
          >
            Register Now
            <ArrowRight className="h-4 w-4" />
          </a>
          {variant === "home" ? (
            <Link
              to="/shepaddle"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-7 py-3 text-sm font-bold text-navy transition-colors hover:border-primary/40 hover:text-primary sm:w-auto sm:px-8 sm:py-3.5"
            >
              About ShePaddle
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>

      <figure className="flex min-h-[240px] items-center justify-center border-t border-border/25 bg-white px-4 py-5 sm:min-h-[300px] sm:px-6 sm:py-6 lg:min-h-[min(30rem,52vh)] lg:border-t-0 lg:border-l lg:border-border/20 lg:px-5 lg:py-6 lg:pl-4 xl:min-h-[32rem] xl:px-7 xl:py-7">
        <img
          src={poster}
          alt={posterAlt}
          loading="lazy"
          width={1600}
          height={820}
          className="max-h-[min(28rem,58vh)] w-full object-contain object-center lg:max-h-full lg:h-full"
        />
      </figure>
    </article>
  );

  if (variant === "home") {
    return (
      <section className="bg-[#eceef2] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Reveal>{card}</Reveal>
        </div>
      </section>
    );
  }

  return <Reveal>{card}</Reveal>;
}