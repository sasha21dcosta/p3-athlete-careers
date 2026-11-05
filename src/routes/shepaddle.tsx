import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/anim";
import { ShePaddleWordmark } from "@/components/site/shepaddle-brand";
import {
  ShePaddleFeatureGrid,
  ShePaddleGallery,
  ShePaddleHeroPhoto,
  ShePaddleStoryTabs,
  ShePaddleVisionStrip,
} from "@/components/site/shepaddle-ui";
import { SHEPADDLE } from "@/data/shepaddle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shepaddle")({
  head: () => ({
    meta: [
      { title: "ShePaddle — International Women's Table Tennis | P3 Sports" },
      {
        name: "description",
        content:
          "ShePaddle — empowering women, celebrating champions and connecting the world through table tennis. Masters categories, Goa 2025, a P3 Sports initiative.",
      },
      { property: "og:title", content: "ShePaddle — P3 Sports" },
      { property: "og:description", content: SHEPADDLE.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShePaddlePage,
});

function ShePaddlePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#eceef2] pt-24 pb-10 sm:pt-28 sm:pb-14">
        <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-sm bg-white shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
            <div className="grid lg:grid-cols-[minmax(0,1.48fr)_minmax(0,1fr)] lg:items-stretch">
              <Reveal className="px-6 py-8 sm:px-9 sm:py-10 lg:px-11 lg:py-11">
                <p className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.22em] text-primary uppercase">
                  <span className="h-px w-7 bg-primary" aria-hidden />
                  {SHEPADDLE.initiativeDisplay}
                </p>
                <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-5">
                  <ShePaddleWordmark size="home" />
                  <span className="hidden h-12 w-px bg-[#d8dde5] lg:block" />
                  <p className="max-w-[10.5rem] text-[9px] font-bold leading-snug tracking-[0.12em] text-[#374151] uppercase sm:text-[10px]">
                    {SHEPADDLE.title}
                  </p>
                </div>
                <p className="mt-5 text-lg font-bold italic leading-snug text-[#111827] sm:text-xl">
                  {SHEPADDLE.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#5b6472] sm:text-base">
                  {SHEPADDLE.heroSummary}
                </p>
                <div className="mt-6">
                  <ShePaddleFeatureGrid />
                </div>
              </Reveal>
              <ShePaddleHeroPhoto className="min-h-[320px] sm:min-h-[380px]" />
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_minmax(280px,360px)] lg:gap-10">
            <Reveal delay={0.05}>
              <ShePaddleVisionStrip />
              <div className="mt-8">
                <SectionHeading
                  eyebrow="The story"
                  title="More than a tournament"
                />
                <div className="mt-6">
                  <ShePaddleStoryTabs />
                </div>
              </div>
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {SHEPADDLE.paragraphs.slice(1, 4).map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:pt-2">
              <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-secondary/90 to-flare/25 p-6 shadow-sm">
                <p className="font-display text-xl leading-snug italic text-foreground">
                  {SHEPADDLE.motto}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-foreground">
                  <li>
                    <strong className="font-bold">Launched:</strong>{" "}
                    {SHEPADDLE.launched}
                  </li>
                  <li>
                    <strong className="font-bold">Location:</strong>{" "}
                    {SHEPADDLE.location}
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="glow-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Enquire about ShePaddle
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="mt-10">
            <SectionHeading eyebrow="Gallery" title="ShePaddle in pictures" />
            <div className="mt-6">
              <ShePaddleGallery />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-14 text-navy-foreground">
        <div className="mx-auto max-w-[1360px] px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
            {SHEPADDLE.initiativeDisplay}
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Join the ShePaddle movement
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-navy-foreground/75 sm:text-base">
            Partner, compete, or bring ShePaddle to your community — we would
            love to hear from you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
