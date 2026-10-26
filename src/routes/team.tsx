import { motion } from "framer-motion";
import { Medal, Globe2, Award } from "lucide-react";
import { useState } from "react";

import {
  PageHero,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/site/anim";
import { TEAM } from "@/data/content";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — P3 Sports" },
      {
        name: "description",
        content:
          "Meet the P3 Sports team — founded by international table tennis player and India's first ITTF Level 3 certified woman coach, Moonmoon Mukerjee.",
      },
      { property: "og:title", content: "Team — P3 Sports" },
      {
        property: "og:description",
        content:
          "Reputed sports experts and industry professionals on the board of P3 Sports Management Company.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Team,
});

function Team() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="The people behind P3"
        title={
          <>
            Masters of the <span className="text-primary">game</span>
          </>
        }
        sub="A combination of reputed sports experts and industry professionals on our Board of Directors and advisors."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Stagger className="space-y-4">
            {TEAM.map((member, i) => {
              const open = openIndex === i;
              return (
                <StaggerItem key={member.name}>
                  <motion.button
                    onClick={() => setOpenIndex(open ? null : i)}
                    layout
                    className={cn(
                      "w-full cursor-pointer rounded-2xl border p-5 text-left transition-colors sm:p-6",
                      open
                        ? "border-primary/50 bg-card"
                        : "border-border bg-card/50 hover:border-primary/30",
                    )}
                  >
                    <div className="flex items-center gap-5">
                      <motion.span
                        animate={
                          open ? { rotate: 0, scale: 1.05 } : { rotate: -4 }
                        }
                        className={cn(
                          "font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl",
                          open
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/15 text-primary",
                        )}
                      >
                        {member.initials}
                      </motion.span>
                      <div className="flex-1">
                        <h3 className="font-display text-2xl text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                          {member.role}
                        </p>
                      </div>
                      <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="hidden text-2xl text-primary sm:block"
                      >
                        {open ? "−" : "+"}
                      </motion.span>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{
                        height: open ? "auto" : 0,
                        opacity: open ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {member.bio}
                      </p>
                    </motion.div>
                  </motion.button>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Medal, label: "World-championship medals", sub: "Greece · Spain · Vietnam · Turkey · New Zealand" },
                { icon: Award, label: "ITTF Level 3 Coach", sub: "India's first & only certified woman coach" },
                { icon: Globe2, label: "International Umpire", sub: "Officiated at the 2009 Commonwealth Youth Games" },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-5"
                >
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-foreground">{label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
