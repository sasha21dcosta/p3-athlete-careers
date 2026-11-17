import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Check,
  Compass,
  Globe,
  GraduationCap,
  HeartHandshake,
  Home,
  Medal,
  School,
  MapPin,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

import { AdditionalSupportBanner } from "@/components/site/cta-banner";
import { Reveal } from "@/components/site/anim";
import {
  SERVICE_DETAILS,
  type ServiceDetail,
  type SocietyClient,
} from "@/data/content";
import { cn } from "@/lib/utils";

export const SERVICE_DETAIL_ICONS: LucideIcon[] = [
  GraduationCap,
  Medal,
  Trophy,
  Building2,
  Compass,
  Users,
  HeartHandshake,
  School,
];

/** Muted corner washes — matched to society card reference (soft, not neon). */
const SOCIETY_CARD_THEMES = [
  { from: "#f0c4ca", to: "#dfa0aa" },
  { from: "#b8d4eb", to: "#93b9d9" },
  { from: "#f2e0b8", to: "#dbc07a" },
  { from: "#d2c4e4", to: "#b39bc9" },
  { from: "#b8d9cc", to: "#8fbfad" },
] as const;

function SocietyPartnerCard({
  client,
  index,
}: {
  client: SocietyClient;
  index: number;
}) {
  const theme = SOCIETY_CARD_THEMES[index % SOCIETY_CARD_THEMES.length];
  const num = String(index + 1).padStart(2, "0");

  return (
    <li className="relative list-none min-h-[8.25rem] overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 pr-[38%] shadow-[0_6px_22px_rgba(15,23,42,0.07)] sm:min-h-[8.75rem] sm:p-5">
      <div className="relative z-[2] flex items-center gap-2">
        <span className="text-xs font-bold tabular-nums text-primary sm:text-[13px]">
          {num}
        </span>
        <span className="h-px w-7 bg-primary/40" aria-hidden />
      </div>
      <h3 className="relative z-[2] mt-3 text-base font-bold leading-snug text-navy sm:text-[1.0625rem]">
        {client.name}
      </h3>
      <p className="relative z-[2] mt-2 flex items-start gap-1.5 text-[11px] leading-snug text-slate-500 sm:text-xs">
        <MapPin
          className="mt-0.5 h-3 w-3 shrink-0 text-primary/90"
          strokeWidth={2.25}
        />
        {client.location}
      </p>

      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 opacity-[0.97]"
        style={{
          width: "46%",
          height: "72%",
          background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
          borderTopLeftRadius: "2.75rem",
          clipPath: "polygon(24% 2%, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      <Building2
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-4 z-[1] h-[1.65rem] w-[1.65rem] text-white/95 sm:h-7 sm:w-7"
        strokeWidth={1.5}
      />
    </li>
  );
}

function SocietyClientsStrip({ clients }: { clients: SocietyClient[] }) {
  const rowOne = clients.slice(0, 3);
  const rowTwo = clients.slice(3);

  return (
    <div className="mt-4 border-t border-border/45 pt-4 sm:mt-5 sm:pt-5">
      <p className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
        <span className="h-px w-7 bg-primary/50" aria-hidden />
        Societies we work with
      </p>

      <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3">
        {rowOne.map((client, i) => (
          <SocietyPartnerCard key={client.name} client={client} index={i} />
        ))}
      </ul>
      {rowTwo.length > 0 ? (
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 sm:gap-3.5 lg:mx-auto lg:mt-3 lg:max-w-[calc(66.666%+0.5rem)]">
          {rowTwo.map((client, i) => (
            <SocietyPartnerCard
              key={client.name}
              client={client}
              index={i + 3}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

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
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            detail.imageClass,
          )}
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
                  <ServiceTitle
                    title={detail.servicePageTitle ?? detail.title}
                  />
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

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {detail.pageCta ? (
                    <Link
                      to={detail.pageCta.to}
                      hash={detail.pageCta.hash}
                      className="glow-primary inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto sm:min-w-[16rem]"
                    >
                      {detail.pageCta.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                  <Link
                    to="/contact"
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-transform hover:scale-[1.01] sm:w-auto sm:min-w-[16rem]",
                      detail.pageCta
                        ? "border-2 border-primary/35 bg-white text-primary hover:border-primary hover:bg-primary/5"
                        : "glow-primary bg-primary text-primary-foreground",
                    )}
                  >
                    Enquire about this service
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {detail.note}
                </p>
              </div>
            </Reveal>
          </div>

          {detail.societyClients?.length ? (
            <SocietyClientsStrip clients={detail.societyClients} />
          ) : null}
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
