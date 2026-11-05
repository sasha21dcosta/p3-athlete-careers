import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import p3Logo from "@/assets/p3-logo.png";
import { SITE } from "@/data/content";
import { cn } from "@/lib/utils";

export type NavLinkItem = {
  to: string;
  label: string;
  badge?: string;
  hash?: string;
};

export const NAV_LINKS: NavLinkItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/", label: "ShePaddle", badge: "New", hash: "shepaddle" },
  { to: "/tournaments", label: "Tournaments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/clients", label: "Our Clients" },
];

export function P3Mark({ className }: { className?: string }) {
  return (
    <img
      src={p3Logo}
      alt="P3 Sports Management Company"
      className={cn("h-10 w-auto object-contain sm:h-11", className)}
      width={120}
      height={44}
    />
  );
}

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname, hash]);

  const isActive = (l: NavLinkItem) => {
    if (l.hash) {
      const h = hash?.replace(/^#/, "") ?? "";
      if (l.hash === "shepaddle") {
        return (pathname === "/" && h === l.hash) || pathname.startsWith("/shepaddle");
      }
      return pathname === l.to && h === l.hash;
    }
    if (l.to === "/") {
      const h = hash?.replace(/^#/, "") ?? "";
      return pathname === "/" && !h;
    }
    return pathname.startsWith(l.to);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b121c]">
      <nav className="flex h-14 w-full items-stretch overflow-hidden sm:h-[3.75rem]">
        {/* Logo panel — slanted edge + red accent */}
        <Link
          to="/"
          className="relative flex min-w-0 shrink-0 items-center gap-2 bg-[#eef0f3] pl-3 pr-6 sm:gap-3 sm:pl-4 sm:pr-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%)",
          }}
        >
          <span
            aria-hidden
            className="absolute top-0 right-[18px] bottom-0 w-[3px] bg-primary sm:right-[20px]"
          />
          <P3Mark className="h-8 sm:h-9" />
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="font-display text-sm tracking-wide text-[#111] sm:text-base">
              P3 SPORTS
            </span>
            <span className="text-[9px] font-semibold tracking-[0.22em] text-[#444] uppercase">
              Management Company
            </span>
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 px-2 lg:flex xl:gap-2 xl:px-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={`${l.to}-${l.label}`}
              to={l.to}
              hash={l.hash}
              className={cn(
                "relative px-3 py-2 text-[13px] font-medium text-white/85 transition-colors hover:text-white xl:px-3.5 xl:text-sm",
                isActive(l) && "font-bold text-white",
              )}
            >
              <span className="inline-flex items-center gap-1.5">
                {l.label}
                {l.badge ? (
                  <span className="rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-primary-foreground uppercase">
                    {l.badge}
                  </span>
                ) : null}
              </span>
              {isActive(l) && (
                <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-stretch lg:flex">
          <span
            aria-hidden
            className="my-3 w-px bg-white/15"
          />
          <Link
            to="/contact"
            className="inline-flex h-full shrink-0 items-center bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 xl:px-8"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex w-14 items-center justify-center text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="overflow-hidden border-t border-white/10 bg-[#0f1724] lg:hidden"
          >
            <div className="flex flex-col gap-0.5 p-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={`${l.to}-${l.label}-mobile`}
                  to={l.to}
                  hash={l.hash}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-semibold text-white/90",
                    isActive(l) && "bg-white/5 text-white",
                  )}
                >
                  <span className="inline-flex items-center gap-2">
                    {l.label}
                    {l.badge ? (
                      <span className="rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-bold text-primary-foreground uppercase">
                        {l.badge}
                      </span>
                    ) : null}
                  </span>
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const explore = [
    ...NAV_LINKS.map((l) => ({
      to: l.to,
      label: l.label,
      hash: l.hash,
    })),
    { to: "/team", label: "Our Team" },
    /* { to: "/circle", label: "P3 Circle" }, */
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <P3Mark />
            <span className="font-display text-2xl text-navy-foreground">
              P3 SPORTS
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
            {SITE.tagline} — bringing knowledge, expertise and accessibility to
            sports, for all citizens on a healthy and happy sports ground.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-navy-foreground/20 px-4 py-1.5 text-xs font-semibold text-navy-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              Facebook
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-navy-foreground/20 px-4 py-1.5 text-xs font-semibold text-navy-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg text-navy-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            {explore.map((l) => (
              <li key={`${l.to}-${l.label}`}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  className="transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-navy-foreground">Reach us</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            <li>
              <a href={`tel:${SITE.phonePrimary}`} className="hover:text-primary">
                {SITE.phonePrimary}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneSecondary}`} className="hover:text-primary">
                {SITE.phoneSecondary}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.emailInfo}`} className="hover:text-primary">
                {SITE.emailInfo}
              </a>
            </li>
            <li className="pt-2 leading-relaxed">
              {SITE.address.line2}, {SITE.address.line3}
              <br />
              {SITE.address.line4}
            </li>
            <li className="pt-1 leading-relaxed">
              Also at: {SITE.venueChandannagore}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/60">
        © {new Date().getFullYear()} P3 Sports Management Company — your connect
        to the athlete within YOU.
      </div>
    </footer>
  );
}
