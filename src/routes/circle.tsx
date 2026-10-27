import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareQuote, Star, Swords, ArrowRight } from "lucide-react";

import {
  PageHero,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/site/anim";
import { CHALLENGE_FEED, CIRCLE_GROUPS, CIRCLE_RULES } from "@/data/content";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/circle")({
  head: () => ({
    meta: [
      { title: "P3 Circle — Ranking Community" },
      {
        name: "description",
        content:
          "The P3 Circle is an online table tennis ranking community — challenge up to 2 seeds ahead, climb the ladder, and win a spot at the California summer camp.",
      },
      { property: "og:title", content: "P3 Circle — Ranking Community" },
      {
        property: "og:description",
        content:
          "Challenge up to 2 seeds ahead of you, climb the P3 Circle rankings and play for a spot at the California summer camp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Circle,
});

function Circle() {
  const [group, setGroup] = useState(CIRCLE_GROUPS[2].category);
  const active = CIRCLE_GROUPS.find((g) => g.category === group) ?? CIRCLE_GROUPS[2];

  return (
    <>
      <PageHero
        eyebrow="P3 Circle"
        title={
          <>
            Challenge. Climb.{" "}
            <span className="text-primary">Conquer.</span>
          </>
        }
        sub="An online ranking community where table tennis lovers call each other out, play best-of-five battles and climb the P3 ladder."
      />

      {/* Rankings explorer */}
      <section className="pb-14 sm:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Current seedings"
            title={
              <>
                The <span className="text-primary">rankings</span>
              </>
            }
            sub="Seeding is based on the last two years of Powai Open results — updated after every challenge."
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {CIRCLE_GROUPS.map((g) => (
              <button
                key={g.category}
                onClick={() => setGroup(g.category)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-bold transition-colors",
                  group === g.category
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {group === g.category && (
                  <motion.span
                    layoutId="circle-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{g.category}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-card p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.ul
                key={active.category}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {active.players.length === 0 && (
                  <li className="text-sm text-muted-foreground sm:col-span-2">
                    Seedings for this group open after the next Powai Open — be
                    the first name on this board.
                  </li>
                )}
                {active.players.map((p) => (
                  <li
                    key={`${p.rank}-${p.name}`}
                    className="flex items-center gap-4 rounded-xl border border-border bg-background px-4 py-3"
                  >
                    <span
                      className={cn(
                        "font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg",
                        p.rank <= 3
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary",
                      )}
                    >
                      {p.rank === 0 ? "★" : p.rank}
                    </span>
                    <span className="font-semibold text-foreground">{p.name}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Challenge feed */}
      <section className="pb-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Challenge board"
            title={
              <>
                Live from the <span className="text-stroke-primary">circle</span>
              </>
            }
          />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGE_FEED.map((c) => (
              <StaggerItem key={`${c.author}-${c.date}`}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                  <MessageSquareQuote className="h-6 w-6 text-primary" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                    “{c.title}”
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-sm font-bold text-foreground">{c.author}</p>
                      <p className="text-xs text-muted-foreground">{c.date}</p>
                    </div>
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Rules */}
      <section className="bg-navy py-16 text-navy-foreground sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                Rules of the <span className="text-primary">game</span>
              </>
            }
            className="[&_h2]:text-navy-foreground [&_p]:text-navy-foreground/70"
          />
          <Stagger className="mt-10 space-y-3">
            {CIRCLE_RULES.map((rule, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-5">
                  <span className="font-display text-xl text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-navy-foreground/85">
                    {rule}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Swords className="mx-auto h-8 w-8 text-primary" />
              <h3 className="font-display mt-4 text-3xl text-navy-foreground sm:text-4xl">
                Membership is ₹500 — valid March to February
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm text-navy-foreground/70">
                Top seeds play for a discounted summer camp spot at the ICC
                Centre, California — and the top 3 take home a P3 tracksuit and
                T-shirt.
              </p>
              <a
                href="mailto:info@p3-sports.com?subject=Join%20the%20P3%20Circle"
                className="glow-primary mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Join the P3 Circle <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
