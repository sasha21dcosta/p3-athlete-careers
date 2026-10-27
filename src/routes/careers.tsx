import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Mail, Sparkles } from "lucide-react";

import {
  PageHero,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/site/anim";
import { CAREER_OPENINGS, CAREER_PERKS, SITE } from "@/data/content";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — P3 Sports" },
      {
        name: "description",
        content:
          "Join P3 Sports — coaching, events, marketing and grassroots roles. Build your career in sports management with a team that lives Play · Practice · Persevere.",
      },
      { property: "og:title", content: "Careers — P3 Sports" },
      {
        property: "og:description",
        content:
          "Build your career in sports management — coaching, tournaments, marketing and grassroots programmes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Careers,
});

function Careers() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Turn your passion into your{" "}
            <span className="text-primary">profession</span>
          </>
        }
        sub="Join the team behind Mumbai's most loved community tournaments and coaching programmes."
      />

      {/* Openings */}
      <section className="pb-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Current openings" title="Open roles" />
          <Stagger className="mt-10 space-y-4">
            {CAREER_OPENINGS.map((job, i) => {
              const isOpen = open === i;
              return (
                <StaggerItem key={job.title}>
                  <motion.button
                    onClick={() => setOpen(isOpen ? null : i)}
                    layout
                    className={cn(
                      "w-full cursor-pointer rounded-2xl border p-6 text-left transition-colors",
                      isOpen
                        ? "border-primary/50 bg-card"
                        : "border-border bg-card/60 hover:border-primary/30",
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                          <Briefcase className="h-3 w-3" /> {job.type}
                        </span>
                        <h3 className="font-display mt-2 text-2xl text-foreground">
                          {job.title}
                        </h3>
                        <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-primary" />
                            {job.schedule}
                          </span>
                        </p>
                      </div>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="text-2xl text-primary"
                      >
                        {isOpen ? "−" : "+"}
                      </motion.span>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm leading-relaxed text-muted-foreground">
                        {job.desc}
                      </p>
                    </motion.div>
                  </motion.button>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Why join */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why P3"
            title={
              <>
                A workplace that <span className="text-primary">plays</span>
              </>
            }
            className="[&_h2]:text-navy-foreground [&_p]:text-navy-foreground/70"
          />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {CAREER_PERKS.map((perk) => (
              <StaggerItem key={perk}>
                <div className="flex items-start gap-3 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-5">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-navy-foreground/85">
                    {perk}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              Nothing that fits? Write to us anyway.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We're always looking for coaches, referees, event crew and
              storytellers who love sport. Send your resume and tell us what
              you'd bring to the table.
            </p>
            <a
              href={`mailto:${SITE.emailInfo}?subject=${encodeURIComponent("Career enquiry — P3 Sports")}`}
              className="glow-primary mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" /> Email your resume
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
