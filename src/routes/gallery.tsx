import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import coachingImg from "@/assets/coaching.jpg";
import tournamentImg from "@/assets/tournament.jpg";
import racketImg from "@/assets/racket.jpg";
import galleryCorporate from "@/assets/gallery-corporate.jpg";
import galleryJuniors from "@/assets/gallery-juniors.jpg";
import galleryTrophy from "@/assets/gallery-trophy.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import { PageHero } from "@/components/site/anim";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — P3 Sports" },
      {
        name: "description",
        content:
          "Moments from the P3 Sports academy, tournaments and community — coaching sessions, championships, trophies and the people who make sport happen.",
      },
      { property: "og:title", content: "Gallery — P3 Sports" },
      {
        property: "og:description",
        content:
          "Moments from the academy, the tournaments and the P3 community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const PHOTOS = [
  { src: tournamentImg, title: "Inter-corporate championship finals", category: "Tournaments" },
  { src: coachingImg, title: "Academy coaching session, Powai", category: "Academy" },
  { src: galleryCorporate, title: "Corporate team award ceremony", category: "Corporate" },
  { src: galleryJuniors, title: "Weekend juniors batch in action", category: "Academy" },
  { src: heroImg, title: "Championship table, finals night", category: "Tournaments" },
  { src: galleryTrophy, title: "Trophies, medals & winner keepsakes", category: "Tournaments" },
  { src: galleryCommunity, title: "Women in sports — community match", category: "Community" },
  { src: racketImg, title: "Ready for the next challenge", category: "Community" },
];

const FILTERS = ["All", "Academy", "Tournaments", "Corporate", "Community"];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const shown = PHOTOS.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Moments from the{" "}
            <span className="text-primary">P3 grounds</span>
          </>
        }
        sub="Coaching sessions, championship nights, corporate finals and the community that keeps the tables busy."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-bold transition-colors",
                  filter === f
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {filter === f && (
                  <motion.span
                    layoutId="gallery-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((p) => (
                <motion.figure
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-navy/90 to-transparent p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                      {p.category}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-navy-foreground">
                      {p.title}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="glow-primary group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Join the next event
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
