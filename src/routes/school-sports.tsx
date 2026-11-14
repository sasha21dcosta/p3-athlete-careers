import { Link } from "@tanstack/react-router";
import { Dumbbell } from "lucide-react";

import { SectionHeading, Reveal } from "@/components/site/anim";
import {
  SchoolSportsApproachGrid,
  SchoolSportsCheckList,
  SchoolSportsCtaBanner,
  SchoolSportsProgramsRow,
  SchoolSportsImpactStrip,
  SchoolSportsPageHero,
  SchoolSportsPartnerSchools,
  SchoolSportsSectionCard,
  SchoolSportsSportsPills,
  SchoolSportsWhyGrid,
} from "@/components/site/school-sports-ui";
import { SCHOOL_SPORTS } from "@/data/school-sports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/school-sports")({
  head: () => ({
    meta: [
      { title: "School Sports Program — P3 Sports" },
      {
        name: "description",
        content:
          "P3 School Sports Program — in-school and after-school coaching, tournaments, summer camps and LTAD-based curriculum for partner schools across India.",
      },
      { property: "og:title", content: "School Sports Program — P3 Sports" },
      {
        property: "og:description",
        content: SCHOOL_SPORTS.tagline,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SchoolSportsPage,
});

function SchoolSportsPage() {
  return (
    <>
      <SchoolSportsPageHero />

      <div className="mx-auto max-w-[1360px] space-y-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section id="overview" className="scroll-mt-24">
          <SectionHeading
            eyebrow="About the program"
            title={
              <>
                End-to-end sports for{" "}
                <span className="text-primary">your campus</span>
              </>
            }
          />
          <Reveal className="mt-6 space-y-4">
            {SCHOOL_SPORTS.introParagraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {p}
              </p>
            ))}
          </Reveal>
          <div className="mt-10">
            <SectionHeading
              eyebrow="Our partners"
              title={
                <>
                  Trusted by{" "}
                  <span className="text-primary">leading schools</span>
                </>
              }
              sub="Institutions across Mumbai that partner with P3 for in-school and after-school sports programmes."
            />
          </div>
          <div className="mt-8">
            <SchoolSportsPartnerSchools />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border-2 border-primary/25">
              <img
                src={SCHOOL_SPORTS.founderSpotlight.photo}
                alt={SCHOOL_SPORTS.founderSpotlight.name}
                className="aspect-[4/5] w-full object-cover object-top"
                width={560}
                height={700}
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xs font-bold tracking-[0.22em] text-primary uppercase">
              Face behind P3 Sports
            </p>
            <h2 className="font-display mt-2 text-3xl text-foreground">
              Led by {SCHOOL_SPORTS.founderSpotlight.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              {SCHOOL_SPORTS.founderSpotlight.role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {SCHOOL_SPORTS.founderSpotlight.highlights}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {SCHOOL_SPORTS.founderSpotlight.vision}
            </p>
          </Reveal>
        </section>

        <section>
          <SectionHeading
            eyebrow="Our approach"
            title="Long-term athlete development"
            sub="Built on the LTAD model — age, skill and well-being in sync."
          />
          <div className="mt-8">
            <SchoolSportsApproachGrid />
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Our values"
            title="Why schools choose P3"
            sub={SCHOOL_SPORTS.values.body}
          />
          <div className="mt-8">
            <SchoolSportsWhyGrid />
          </div>
        </section>

        <SchoolSportsSectionCard icon={Dumbbell} title={SCHOOL_SPORTS.ltad.title}>
          <p>{SCHOOL_SPORTS.ltad.body}</p>
          <SchoolSportsCheckList
            items={SCHOOL_SPORTS.ltad.points}
            className="mt-4"
          />
        </SchoolSportsSectionCard>

        <section>
          <SectionHeading
            eyebrow="School benefits"
            title="How your school wins"
          />
          <Reveal className="mt-6">
            <SchoolSportsCheckList items={SCHOOL_SPORTS.schoolBenefits} />
          </Reveal>
        </section>

        <section>
          <SectionHeading
            eyebrow="Sports options"
            title="11 disciplines on one programme"
          />
          <Reveal className="mt-6">
            <SchoolSportsSportsPills />
          </Reveal>
        </section>

        <section>
          <div className="mt-2">
            <SchoolSportsProgramsRow />
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Partnership model"
            title={SCHOOL_SPORTS.partnership.title}
            sub={SCHOOL_SPORTS.partnership.intro}
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-2xl border border-primary/20 bg-card p-6 sm:p-8">
                <h3 className="font-display text-xl text-primary">
                  {SCHOOL_SPORTS.partnership.duringSchool.title}
                </h3>
                <SchoolSportsCheckList
                  items={SCHOOL_SPORTS.partnership.duringSchool.points}
                  className="mt-4"
                />
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article className="h-full rounded-2xl border border-border bg-card/80 p-6 sm:p-8">
                <h3 className="font-display text-xl text-foreground">
                  {SCHOOL_SPORTS.partnership.postSchool.title}
                </h3>
                <SchoolSportsCheckList
                  items={SCHOOL_SPORTS.partnership.postSchool.points}
                  className="mt-4"
                />
              </article>
            </Reveal>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Our impact" title="Built on real delivery" />
          <div className="mt-8">
            <SchoolSportsImpactStrip />
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Link to="/contact" className="font-bold text-primary hover:underline">
              Get in touch
            </Link>{" "}
            to bring the programme to your school — or call{" "}
            {SCHOOL_SPORTS.cta.phone}.
          </p>
        </section>

        <SchoolSportsCtaBanner />
      </div>
    </>
  );
}
