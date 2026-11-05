import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/site/anim";
import { SERVICE_DETAIL_ICONS } from "@/components/site/service-sections";
import { SERVICE_DETAILS } from "@/data/content";

export function HomeServicesGrid() {
  return (
    <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICE_DETAILS.map((service, i) => {
        const Icon: LucideIcon = SERVICE_DETAIL_ICONS[i] ?? SERVICE_DETAIL_ICONS[0];
        return (
          <StaggerItem key={service.id}>
            <Link
              to="/services"
              hash={service.id}
              preload="intent"
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground transition-colors group-hover:text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
