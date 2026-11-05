import { useEffect } from "react";

import { PageHero } from "@/components/site/anim";
import {
  ServiceDetailSection,
  ServicesAdditionalSupport,
} from "@/components/site/service-sections";
import { SERVICE_DETAILS } from "@/data/content";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — P3 Sports" },
      {
        name: "description",
        content:
          "Academy coaching, certified coaches, tournaments, corporate sports events, sports travel and grassroots programmes — comprehensive sports solutions by P3 Sports.",
      },
      { property: "og:title", content: "Our Services — P3 Sports" },
      {
        property: "og:description",
        content:
          "Coaching, consultancy, staging assistance or a full tournament management package — a unique and memorable experience along the way.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function scrollToServiceHash() {
  const id = window.location.hash.replace("#", "");
  if (!id) return;
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Services() {
  useEffect(() => {
    const run = () => window.setTimeout(scrollToServiceHash, 80);
    run();
    window.addEventListener("hashchange", run);
    return () => window.removeEventListener("hashchange", run);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Comprehensive sports solutions,{" "}
            <span className="text-primary">everywhere</span>
          </>
        }
        sub="From the first serve to tournament play — coaching, events and programmes for corporates, schools, clubhouses and champions."
      />

      <div className="bg-[#f3f4f6] pb-8 pt-4 sm:pb-12">
        {SERVICE_DETAILS.map((detail, i) => (
          <ServiceDetailSection
            key={detail.id}
            detail={detail}
            reverse={i % 2 === 1}
          />
        ))}
      </div>

      <ServicesAdditionalSupport />
    </>
  );
}
