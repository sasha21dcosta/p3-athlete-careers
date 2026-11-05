import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

import { Reveal } from "@/components/site/anim";
import { SITE } from "@/data/content";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — P3 Sports" },
      {
        name: "description",
        content:
          "Get in touch with P3 Sports — academy admissions, tournament entries, corporate programmes and partnerships. Powai, Mumbai.",
      },
      { property: "og:title", content: "Contact — P3 Sports" },
      {
        property: "og:description",
        content:
          "Tell us what you're looking for — coaching, tournaments, corporate programmes or just a hello.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const INTERESTS = [
  "Academy coaching (juniors)",
  "Academy coaching (adults)",
  "Tournament entry",
  "Corporate programme",
  "School programme",
  "Partnership / sponsorship",
  "ShePaddle / women's events",
  "Something else",
];

function ContactEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.28em] text-primary uppercase">
      <span className="h-px w-10 bg-primary/80 sm:w-14" aria-hidden />
      {children}
      <span className="h-px w-10 bg-primary/80 sm:w-14" aria-hidden />
    </p>
  );
}

function BlockHeading({ title }: { title: string }) {
  return (
    <div className="mb-5">
      <span className="mb-2 block h-1 w-8 rounded-full bg-primary" />
      <h2 className="font-display text-2xl text-navy sm:text-[1.75rem]">
        {title}
      </h2>
    </div>
  );
}

function ReachCard({
  icon: Icon,
  label,
  children,
  href,
}: {
  icon: typeof Phone;
  label: string;
  children: ReactNode;
  href?: string;
}) {
  const inner = (
    <>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
          {label}
        </p>
        <div className="mt-1 text-sm font-bold leading-snug text-foreground">
          {children}
        </div>
      </div>
    </>
  );

  const className =
    "flex items-start gap-4 rounded-2xl border border-border/80 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-colors hover:border-primary/30";

  if (href) {
    return (
      <a href={href} className={className}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const interest = form.interest || "General enquiry";
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Interested in: ${interest}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${SITE.emailInfo}?subject=${encodeURIComponent(
      `P3 Sports enquiry — ${interest}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = cn(
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors",
    "placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15",
  );

  return (
    <div className="relative overflow-hidden bg-[#f7f8fa] pb-16 pt-24 sm:pb-24 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-flare/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-flare/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <ContactEyebrow>Contact P3 Sports</ContactEyebrow>
          <h1 className="mt-5 font-display text-4xl leading-tight text-navy sm:text-5xl">
            Let&apos;s get you on the{" "}
            <span className="text-primary">table.</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us what you&apos;re looking for — coaching, tournaments,
            corporate programmes or just a hello. We&apos;ll get back to you.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]">
          <Reveal>
            <BlockHeading title="Reach the right team" />
            <div className="space-y-3">
              <ReachCard
                icon={Phone}
                label="Mumbai — Academy & Events"
                href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`}
              >
                <p>{SITE.phonePrimary}</p>
                <p className="mt-0.5 font-semibold text-muted-foreground">
                  {SITE.phoneSecondary}
                </p>
              </ReachCard>
              <ReachCard
                icon={Phone}
                label="Chandannagore centre"
                href={`tel:${SITE.phoneChandannagore.replace(/\s/g, "")}`}
              >
                {SITE.phoneChandannagore}
              </ReachCard>
              <ReachCard
                icon={Mail}
                label="Email"
                href={`mailto:${SITE.emailInfo}`}
              >
                {SITE.emailInfo}
              </ReachCard>
              <div className="rounded-2xl border border-border/80 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 text-sm">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                      Mumbai
                    </p>
                    <p className="mt-1 font-bold text-foreground">
                      {SITE.address.line1}
                    </p>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {SITE.address.line2}, {SITE.address.line3},
                      <br />
                      {SITE.address.line4}
                    </p>
                  </div>
                </div>
                <div className="my-4 h-px bg-border" />
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 text-sm">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                      Chandannagore
                    </p>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {SITE.venueChandannagore}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.08)]">
              <div className="px-6 py-7 sm:px-8 sm:py-8">
                <BlockHeading title="Send us an enquiry" />
                <p className="-mt-3 mb-6 text-sm text-muted-foreground">
                  Share a few details and we&apos;ll be in touch.
                </p>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-5"
                  >
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div className="text-sm leading-relaxed">
                      <p className="font-bold text-foreground">
                        Your email draft is ready
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        We opened your mail app with your message — press send
                        when you&apos;re ready. Or call{" "}
                        <a
                          href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`}
                          className="font-semibold text-primary"
                        >
                          {SITE.phonePrimary}
                        </a>
                        .
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={field}
                      />
                      <input
                        required
                        type="tel"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className={field}
                      />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={field}
                    />
                    <div>
                      <label
                        htmlFor="interest"
                        className="mb-1.5 block text-xs font-semibold text-foreground"
                      >
                        I&apos;m interested in
                      </label>
                      <select
                        id="interest"
                        required
                        value={form.interest}
                        onChange={(e) =>
                          setForm({ ...form, interest: e.target.value })
                        }
                        className={cn(field, !form.interest && "text-muted-foreground")}
                      >
                        <option value="" disabled>
                          Select an enquiry type
                        </option>
                        {INTERESTS.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us a little about what you need..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={field}
                    />
                    <button
                      type="submit"
                      className="glow-primary inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.01]"
                    >
                      Send enquiry
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                      <Shield className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      Your details are only used to respond to your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
