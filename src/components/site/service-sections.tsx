import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Check,
  Compass,
  Globe,
  GraduationCap,
  HeartHandshake,
  Medal,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

import { AdditionalSupportBanner } from "@/components/site/cta-banner";
import { Reveal } from "@/components/site/anim";
import { SERVICE_DETAILS, type ServiceDetail } from "@/data/content";
import { cn } from "@/lib/utils";

export const SERVICE_DETAIL_ICONS: LucideIcon[] = [
  GraduationCap,
  Medal,
  Trophy,
  Building2,
  Compass,
  Users,
  HeartHandshake,
];

function ServiceTitle({ title }: { title: string }) {
  if (title.includes("&")) {
    const [before, after] = title.split("&");
    return (
      <>
        {before.trim()}{" "}
        <span className="text-primary">&</span> {after.trim()}
      </>
    );
  }
  return <>{title}</>;
}

function ServiceImagePanel({
  detail,
  imageOnRight,
}: {
  detail: ServiceDetail;
  imageOnRight: boolean;
}) {
  return (
    <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[min(28rem,42vw)]">
      <div
        className={cn(
          "relative h-full min-h-[inherit] overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.12)]",
          imageOnRight ? "lg:rounded-tl-[2.5rem]" : "lg:rounded-br-[2.5rem]",
        )}
        style={{
          clipPath: imageOnRight
            ? "polygon(11% 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 89% 100%, 0 100%)",
        }}
      >
        <img
          src={detail.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10"
        />

        {detail.imageBadge ? (
          <div className="absolute top-4 left-4 z-10 flex max-w-[85%] items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 backdrop-blur-sm sm:top-5 sm:left-5 sm:px-4 sm:py-2">
            <Globe className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="text-[9px] font-bold tracking-[0.14em] text-white uppercase sm:text-[10px]">
              {detail.imageBadge}
            </span>
          </div>
        ) : null}
      </div>

      <div
        aria-hidden
        className={cn(
          "absolute bottom-0 z-20 h-16 w-20 bg-primary sm:h-20 sm:w-24",
          imageOnRight ? "right-0" : "left-0",
        )}
        style={{
          clipPath: imageOnRight
            ? "polygon(100% 0, 0 100%, 100% 100%)"
            : "polygon(0 0, 100% 100%, 0 100%)",
        }}
      />
    </div>
  );
}

export function ServiceDetailSection({
  detail,
  reverse = false,
}: {
  detail: ServiceDetail;
  reverse?: boolean;
}) {
  const bullets = detail.waysWeHelp.slice(0, 5);
  const imageOnRight = reverse;

  return (
    <section id={detail.id} className="scroll-mt-28 py-5 sm:py-6">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.75rem] border border-border/50 bg-[#faf8f5] p-5 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-7 lg:p-10">
          <div
            className={cn(
              "grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14",
              reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
            )}
          >
            <Reveal delay={imageOnRight ? 0.06 : 0}>
              <ServiceImagePanel detail={detail} imageOnRight={imageOnRight} />
            </Reveal>

            <Reveal delay={imageOnRight ? 0 : 0.06} className="relative min-w-0">
              <span
                aria-hidden
                className="font-display pointer-events-none absolute -top-2 -left-1 text-[5rem] leading-none text-primary/[0.12] sm:text-[6.5rem] lg:text-[7.5rem]"
              >
                {detail.index}
              </span>

              <div className="relative pt-6 sm:pt-8 lg:pt-4">
                <p className="flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] text-primary uppercase sm:text-[11px]">
                  <span className="h-px w-7 bg-primary sm:w-9" aria-hidden />
                  {detail.eyebrow}
                </p>

                <h2 className="font-display mt-4 text-3xl leading-[1.12] text-navy sm:text-4xl lg:text-[2.4rem]">
                  <ServiceTitle title={detail.title} />
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {detail.summary}
                </p>

                <ul className="mt-6 space-y-2.5 sm:mt-7">
                  {bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-snug text-foreground/85"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="glow-primary mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto sm:min-w-[16rem]"
                >
                  Enquire about this service
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {detail.note}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesAdditionalSupport() {
  return (
    <AdditionalSupportBanner className="border-t border-border bg-[#faf8f5]" />
  );
}
