import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import p3Logo from "@/assets/p3-logo.png";
import { SITE } from "@/data/content";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/tournaments", label: "Tournaments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/clients", label: "Our Clients" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function P3Mark({ className }: { className?: string }) {
  return (
    <img
      src={p3Logo}
      alt="P3 Sports Management Company"
      className={cn("h-11 w-auto object-contain", className)}
      width={120}
      height={44}
    />
  );
}

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-white/88 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <P3Mark className="h-9 sm:h-11" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[10px] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
              Play · Practice · Persevere
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                pathname === l.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l.label}
              {pathname === l.to && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-primary/40 bg-primary/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" /> Join P3
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-semibold",
                    pathname === l.to
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const explore = [
    ...LINKS,
    { to: "/team", label: "Our Team" },
    { to: "/circle", label: "P3 Circle" },
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
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
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
