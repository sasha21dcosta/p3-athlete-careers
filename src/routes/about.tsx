import { AboutPageContent } from "@/components/site/about-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About P3 Sports — Idea Behind P3" },
      {
        name: "description",
        content:
          "P3 Sports Management is dedicated to building a healthier, more active and inclusive sporting culture — grassroots coaching, schools, corporates and communities across Mumbai and Kolkata.",
      },
      {
        property: "og:title",
        content: "About P3 Sports — Idea Behind P3",
      },
      {
        property: "og:description",
        content:
          "More than sport — a movement for everyone. Coaching, community and world-class sporting experiences across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return <AboutPageContent />;
}