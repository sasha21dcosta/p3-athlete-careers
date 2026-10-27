import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

import coachingImg from "@/assets/coaching.jpg";
import heroImg from "@/assets/hero.jpg";
import {
  PageHero,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
  TiltCard,
} from "@/components/site/anim";
import {
  ABOUT_STORY,
  DISCIPLINES,
  FOUNDER_NOTE,
  IDEA_BEHIND,
  STATS,
} from "@/data/content";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About P3 Sports — Idea Behind P3" },
      {
        name: "description",
        content:
          "P3 Sports Management is a pioneering sports organization founded to bring mainstream sport to public consciousness — table tennis, badminton, squash, volleyball, kabaddi and snooker.",
      },
      {
        property: "og:title",
        content: "About P3 Sports — Idea Behind P3",
      },
      {
        property: "og:description",
        content:
          "Helping enthusiasts learn and master the game of their choice, and bringing amateurs and masters onto the same grounds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  const paragraphs = ABOUT_STORY.split("\n\n");
  return (
    <>
      <PageHero
        eyebrow="Idea behind P3 Sports"
        title={
          <>
            A common ground for <span className="text-primary">passion</span>
          </>
        }
        sub="Passion for sports, passion for fitness, and a passion to create a happy and healthy difference in society."
      />

      {/* Idea pillars */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Stagger className="grid gap-5 md:grid-cols-3">
            {IDEA_BEHIND.map((idea, i) => (
              <StaggerItem key={idea.title}>
                <TiltCard className="h-full rounded-2xl border border-border bg-card/60 p-8">
                  <span className="font-display text-5xl text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-4 text-2xl text-foreground">
                    {idea.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {idea.desc}
                  </p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div
          aria-hidden
          className="absolute top-0 right-0 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[120px]"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  From Mumbai to{" "}
                  <span className="text-primary">California</span>
                </>
              }
            />
            <div className="mt-6 space-y-5">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <p className="leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border">
                <img
                  src={heroImg}
                  alt="Table tennis athlete in competition"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                className="absolute -bottom-6 -left-6 rounded-2xl border border-primary/40 bg-background/90 p-6 backdrop-blur"
              >
                  <p className="font-display text-4xl text-primary">
                  {STATS[0]!.value}+
                </p>
                <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Players coached
                </p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our focus"
            title={
              <>
                Olympic & non-Olympic <span className="text-stroke-primary">disciplines</span>
              </>
            }
            align="center"
          />
          <Stagger className="mt-10 flex flex-wrap justify-center gap-3">
            {DISCIPLINES.map((d) => (
              <StaggerItem key={d}>
                <span className="font-display inline-block rounded-full border border-border bg-card/60 px-6 py-3 text-xl text-foreground transition-colors hover:border-primary hover:text-primary">
                  {d}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Founder note */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/50 p-8 sm:p-12">
              <img
                src={coachingImg}
                alt="Coaching session at the P3 academy"
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover opacity-15"
              />
              <div className="relative">
                <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                  What drives us
                </p>
                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-foreground sm:text-xl">
                  “{FOUNDER_NOTE}”
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link
                    to="/team"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                  >
                    Meet the team
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-semibold text-muted-foreground">
                    {["Best learning ground", "Quality & satisfaction", "Seamless events"].map(
                      (v) => (
                        <li key={v} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4 text-primary" /> {v}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
