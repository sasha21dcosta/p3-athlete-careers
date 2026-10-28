import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";

import {
  GALLERY_ARCHIVE,
  type GalleryCategory,
} from "@/data/gallery-archive";
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
          "Official photo archive from P3 Sports — academy sessions, corporate tournaments, championships and community events in Mumbai.",
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

const FILTERS: Array<GalleryCategory | "All"> = [
  "All",
  "Academy",
  "Tournaments",
  "Corporate",
  "Community",
  "Media",
];

function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const shown = GALLERY_ARCHIVE.filter(
    (p) => filter === "All" || p.category === filter,
  );

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
        sub="Photos from the official P3 Sports gallery — tournaments, academy life, corporate events and community programmes."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Images className="h-4 w-4 text-primary" />
              {shown.length} {shown.length === 1 ? "photo" : "photos"}
              {filter !== "All" ? ` · ${filter}` : ""}
            </p>
          </div>

          <motion.div
            layout
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {shown.map((p) => (
                <motion.figure
                  key={p.id}
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
                    width={900}
                    height={675}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/75 to-transparent p-5 pt-12">
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

          <div className="mt-12 rounded-2xl border border-border bg-card/60 p-6 text-center sm:p-8">
            <p className="text-sm text-muted-foreground">
              Images imported from the{" "}
              <a
                href="https://www.p3-sports.com/paged590d590.html?page=gallery"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                official P3 Sports photo gallery
              </a>
              . Replace or extend this archive anytime by adding files under{" "}
              <code className="text-xs">public/gallery/p3-archive/</code>.
            </p>
          </div>

          <div className="mt-10 text-center">
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
