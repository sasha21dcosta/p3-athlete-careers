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
          <SectionHeading
            eyebrow="Programmes"
            title={
              <>
                In-school, camps &{" "}
                <span className="text-primary">tournaments</span>
              </>
            }
            sub="Curriculum-based on-campus delivery, vacation camps and inter-school championships."
          />
          <div className="mt-8">
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
