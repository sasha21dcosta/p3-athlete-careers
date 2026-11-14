import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Standalone About page is disabled — content lives on the home page (#about-p3).
 * Nav “About Us” scrolls to that section; /about redirects there for old links.
 */
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({
      to: "/",
      hash: "about-p3",
    });
  },
});
