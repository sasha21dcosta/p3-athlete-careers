import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
} from "lucide-react";

import coachingImg from "@/assets/coaching.jpg";
import { PageHero, Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/site/anim";
import { ACADEMY_BATCHES, SITE } from "@/data/content";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — P3 Sports" },
      {
        name: "description",
        content:
          "Get in touch with P3 Sports Management Company — academy admissions, tournament entries, corporate programmes and partnerships. Powai, Mumbai.",
      },
      { property: "og:title", content: "Contact — P3 Sports" },
      {
        property: "og:description",
        content:
          "Academy admissions, tournament entries and partnerships — talk to the P3 Sports team in Mumbai and Chandannagore.",
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
  "Something else",
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: INTERESTS[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Interested in: ${form.interest}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${SITE.emailInfo}?subject=${encodeURIComponent(
      `P3 Sports enquiry — ${form.interest}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's get you on the{" "}
            <span className="text-primary">table</span>
          </>
        }
        sub="Admissions, tournament entries, corporate programmes or a simple hello — we reply within 24 hours."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Reach us */}
          <div>
            <SectionHeading
              eyebrow="Reach us"
              title={
                <>
                  Talk to a <span className="text-primary">human</span>
                </>
              }
            />
            <Stagger className="mt-8 space-y-4">
              <StaggerItem>
                <a
                  href={`tel:${SITE.phonePrimary}`}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                      Mumbai — Academy & Events
                    </p>
                    <p className="font-bold text-foreground">
                      {SITE.phonePrimary} · {SITE.phoneSecondary}
                    </p>
                  </div>
                </a>
              </StaggerItem>
              <StaggerItem>
                <a
                  href={`tel:${SITE.phoneChandannagore}`}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                      Chandannagore centre
                    </p>
                    <p className="font-bold text-foreground">
                      {SITE.phoneChandannagore}
                    </p>
                  </div>
                </a>
              </StaggerItem>
              <StaggerItem>
                <a
                  href={`mailto:${SITE.emailInfo}`}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                      Email
                    </p>
                    <p className="font-bold text-foreground">
                      {SITE.emailInfo}
                    </p>
                  </div>
                </a>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="text-sm">
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                      Visit us
                    </p>
                    <p className="mt-1 font-semibold text-foreground">
                      {SITE.address.line1}
                    </p>
                    <p className="mt-0.5 leading-relaxed text-muted-foreground">
                      {SITE.address.line2}, {SITE.address.line3},
                      <br />
                      {SITE.address.line4}
                    </p>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      Also at: {SITE.venueChandannagore}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>

            {/* Batch timings */}
            <Reveal delay={0.15}>
              <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                <p className="flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  <Clock className="h-4 w-4 text-primary" /> Academy batch
                  timings
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {ACADEMY_BATCHES.slice(0, 4).map((b) => (
                    <li key={b.name}>
                      <span className="font-semibold text-foreground">
                        {b.name}:
                      </span>{" "}
                      {b.schedule[0]}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10">
              <img
                src={coachingImg}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
              />
              <div className="relative">
                <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                  Send us a message
                </h2>
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/40 bg-primary/10 p-5"
                  >
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div className="text-sm leading-relaxed text-foreground">
                      <p className="font-bold">Your email draft is ready!</p>
                      <p className="mt-1 text-muted-foreground">
                        We've opened your email app with the message filled in —
                        just press send. Prefer to talk? Call{" "}
                        <a href={`tel:${SITE.phonePrimary}`} className="font-semibold text-primary">
                          {SITE.phonePrimary}
                        </a>
                        .
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} className="mt-8 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={field}
                      />
                      <input
                        required
                        type="tel"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={field}
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={field}
                    />
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className={field}
                    >
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you're looking for…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={field}
                    />
                    <button
                      type="submit"
                      className="glow-primary group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
                    >
                      Send message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-xs text-muted-foreground">
                      This opens an email draft to {SITE.emailInfo} — no message
                      is sent without your confirmation.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
