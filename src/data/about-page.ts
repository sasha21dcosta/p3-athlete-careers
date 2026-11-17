/** Copy and structure for `/about` only — home `ABOUT_P3_HOME` stays separate. */

export const ABOUT_PAGE_HERO = {
  eyebrow: "About P3 Sports",
  titleLead: "More than sport.",
  titleAccent: "A movement for everyone.",
  sub: "Building a healthier, more active and inclusive sporting culture through coaching, community and world-class sporting experiences.",
};

export const ABOUT_PAGE_STATS = [
  { value: 5000, suffix: "+", label: "Players coached" },
  { value: 100, suffix: "+", label: "Tournaments staged" },
  { value: 6, suffix: "+", label: "Leading school partners" },
  { value: 10, suffix: "+", label: "Disciplines & programmes" },
] as const;

export const ABOUT_ACADEMY_HIGHLIGHTS = [
  "Grassroots learning through to advanced coaching batches",
  "Structured programmes for juniors, adults and competitive players",
  "Weekday and weekend schedules across academy grounds",
  "In-school PE, after-school coaching and school team training",
  "Corporate leagues, clubhouse coaching and community events",
] as const;

/** Sports grid on About — P3 academy section */
export const ABOUT_ACADEMY_SPORTS = [
  "Cricket",
  "Football",
  "Basketball",
  "Table Tennis",
  "Lawn Tennis",
  "Karate",
  "Skating",
  "Squash",
  "Badminton",
  "Chess",
] as const;

export const ABOUT_HUBS = [
  "Mumbai — Powai, Chandivali & partner schools",
  "Kolkata, West Bengal",
  "Residential clubhouses across Mumbai",
] as const;
