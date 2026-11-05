import { createFileRoute, redirect } from "@tanstack/react-router";

/* P3 Circle page disabled sitewide — former UI lived here; data remains in content.ts (commented). */

export const Route = createFileRoute("/circle")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
