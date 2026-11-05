export const SITE = {
  name: "P3 Sports",
  tagline: "Play · Practice · Persevere",
  phonePrimary: "+91 99679 69506",
  phoneSecondary: "+91 84518 22562",
  phoneChandannagore: "+91 90516 33714",
  emailInfo: "info@p3-sports.com",
  emailMoonmoon: "moonmoon@p3-sports.com",
  address: {
    line1: "P3 Sports Management & Academy",
    line2: "Pawar Public School, Sangharsh Nagar",
    line3: "Opp. MHADA Building No. 9, Chandivali",
    line4: "Powai, Mumbai — 400072",
  },
  venueChandannagore:
    "Khalishani Mahavidyala, Chandannagore, Hooghly, West Bengal",
  facebook: "https://www.facebook.com/P3.sport/",
  linkedin: "https://www.linkedin.com/company/p3-sports-management-company",
  website: "https://www.p3-sports.com",
};

export const HERO_WORDS = [
  "Ignite your passion.",
  "Learn to deliver.",
  "Master the strokes.",
  "Play to perfection.",
];

export const STATS = [
  { value: 1000, suffix: "+", label: "Players coached" },
  { value: 21, suffix: "+", label: "Tournaments staged" },
  { value: 50, suffix: "+", label: "Matches managed" },
  { value: 6, suffix: "", label: "Disciplines covered" },
];

export const DISCIPLINES = [
  "Table Tennis",
  "Badminton",
  "Squash",
  "Volleyball",
  "Kabaddi",
  "Snooker",
];

export const SERVICES = [
  {
    title: "P3 Sports Academy",
    desc: "Pan-India coaching programmes for juniors, adults and pros — from first serve to tournament play.",
  },
  {
    title: "Certified & Licensed Coaches",
    desc: "ITTF-certified mentors and national-level players designing every training block.",
  },
  {
    title: "Tournaments & Championships",
    desc: "End-to-end staging of corporate, inter-school and state-level championships.",
  },
  {
    title: "Corporate Sports Events",
    desc: "Signature inter-corporate tournaments that build teams and reignite workplace energy.",
  },
  {
    title: "Sports Travel & Tours",
    desc: "Training camps and exposure tours, including international summer camps.",
  },
  /* P3 Circle — disabled sitewide
  {
    title: "P3 Circle Community",
    desc: "An online ranking community where members challenge each other and climb the ladder.",
  },
  */
  {
    title: "Team Mentoring & Management",
    desc: "Consultancy, staging assistance and full tournament management packages.",
  },
  {
    title: "Coaching for Under-privileged",
    desc: "Grassroot training and mentoring to make sport accessible to every child.",
  },
];

/** Services shown on site (excludes commented-out P3 Circle) */
export const SERVICES_PUBLIC = SERVICES.filter(
  (s) => s.title !== "P3 Circle Community",
);

export type ServiceDetail = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  summary: string;
  waysWeHelp: string[];
  note: string;
  image: string;
  imageBadge?: string;
};

/** Detail sections for /services — one per home card (same titles as SERVICES_PUBLIC) */
export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "p3-sports-academy",
    index: "01",
    eyebrow: "Academy coaching",
    title: "P3 Sports Academy",
    summary:
      "Pan-India coaching programmes for juniors, adults and pros — from first serve to tournament play.",
    waysWeHelp: [
      "Structured coaching batches for juniors, adults and advanced players",
      "Skill development from fundamentals to match play",
      "Tournament preparation and competitive exposure",
      "Batch schedules aligned to school and work calendars",
      "Progress tracking with certified coaching staff",
      "Pathways from beginner sessions to championship entry",
    ],
    note: "Programmes and batch timings vary by location. Contact P3 to confirm availability at your nearest academy ground.",
    image: "/services/01-academy.jpg",
  },
  {
    id: "certified-coaches",
    index: "02",
    eyebrow: "Expert guidance",
    title: "Certified & Licensed Coaches",
    summary:
      "ITTF-certified mentors and national-level players designing every training block.",
    waysWeHelp: [
      "ITTF-certified and licensed coaching professionals",
      "Training plans tailored to age, skill and goals",
      "Technical correction, footwork and match strategy",
      "Mentoring for players stepping into competitive sport",
      "Coach allocation for schools, corporates and academies",
      "Quality standards aligned with P3 Sports methodology",
    ],
    note: "Coach assignment depends on discipline, venue and schedule. P3 will match the right mentor to your programme.",
    image: "/services/02-coaches.jpg",
  },
  {
    id: "tournaments-championships",
    index: "03",
    eyebrow: "On the table",
    title: "Tournaments & Championships",
    summary:
      "End-to-end staging of corporate, inter-school and state-level championships.",
    waysWeHelp: [
      "Tournament design, draws and fixture management",
      "Registration, seeding and scheduling",
      "Venue setup, tables, equipment and logistics",
      "Umpiring, scoring and on-ground operations",
      "Awards, trophies and closing ceremonies",
      "Corporate, inter-school and open championship formats",
    ],
    note: "Scope, dates and formats are confirmed per event. Share your calendar and entry expectations when you enquire.",
    image: "/services/03-tournaments.jpg",
  },
  {
    id: "corporate-sports-events",
    index: "04",
    eyebrow: "Workplace connection",
    title: "Corporate Sports Events",
    summary:
      "Signature inter-corporate tournaments that build teams and reignite workplace energy.",
    waysWeHelp: [
      "Inter-corporate leagues and one-day tournaments",
      "Team-building activities and indoor games",
      "Interdepartmental and intercompany competitions",
      "Employee wellness and engagement events",
      "Planning, registrations, fixtures and scoring",
      "Venue coordination and on-ground event management",
    ],
    note: "Corporate packages are tailored to company size and goals. P3 will confirm scope, venues and timelines with your team.",
    image: "/services/04-corporate.jpg",
  },
  {
    id: "sports-travel-tours",
    index: "05",
    eyebrow: "Beyond the ground",
    title: "Sports Travel & Tours",
    summary:
      "Training camps and exposure tours, including international summer camps.",
    waysWeHelp: [
      "Domestic and international training camps",
      "Exposure tours with high-performance coaching",
      "International summer camp programmes",
      "Travel, stay and training itinerary planning",
      "Group and academy tour coordination",
      "Skill intensives combined with competitive experience",
    ],
    note: "Tour dates, destinations and eligibility vary by season. Enquire for current camp and travel options.",
    image: "/services/05-travel.jpg",
    imageBadge: "International sports camps",
  },
  {
    id: "team-mentoring-management",
    index: "06",
    eyebrow: "End-to-end support",
    title: "Team Mentoring & Management",
    summary:
      "Consultancy, staging assistance and full tournament management packages.",
    waysWeHelp: [
      "Sports consultancy and programme advisory",
      "Staging assistance for events and championships",
      "Full tournament and league management",
      "Team mentoring and performance planning",
      "Vendor, venue and operations coordination",
      "Custom packages for institutions and associations",
    ],
    note: "Management scope is defined with each client. Discuss your requirements so P3 can propose the right support model.",
    image: "/services/06-mentoring.jpg",
  },
  {
    id: "coaching-under-privileged",
    index: "07",
    eyebrow: "Grassroots impact",
    title: "Coaching for Under-privileged",
    summary:
      "Grassroot training and mentoring to make sport accessible to every child.",
    waysWeHelp: [
      "Grassroots coaching for young learners",
      "Structured practice for beginners and intermediates",
      "Mentoring and talent identification",
      "School and community outreach programmes",
      "Equipment and session support where applicable",
      "Pathways toward competitive and academy participation",
    ],
    note: "Outreach programmes depend on partnerships and locations. Contact P3 to explore current grassroots initiatives.",
    image: "/services/07-grassroots.jpg",
  },
];

export const SERVICES_ADDITIONAL_SUPPORT = {
  eyebrow: "Additional support",
  title: "Need something more specific?",
  body: "P3 also provides sports consultancy, staging assistance, team mentoring and tournament management beyond the programmes listed above. Discuss your requirements so we can confirm the right support for you.",
  cta: "Discuss your project",
};

export const IDEA_BEHIND = [
  {
    title: "Learn & master",
    desc: "Helping sports enthusiasts learn and master the game of their choice to represent, participate and compete in sporting events.",
  },
  {
    title: "Identify & train",
    desc: "Identifying, coaching and training young talent of India — giving them access to the best facilities, coaches, mentors and sponsors.",
  },
  {
    title: "Unite the grounds",
    desc: "Creating a platform that brings amateurs and masters together — playing, learning, competing and winning on the same grounds.",
  },
];

/** Home page “About P3 Sports” teaser */
export const ABOUT_P3_HOME = {
  paragraphs: [
    "P3 Sports Management Company is dedicated to building a healthier, more active and inclusive sporting culture. From grassroots coaching and advanced-level training in schools to corporate sporting events and sports programmes in residential societies and clubhouses, we create opportunities for people of all ages and abilities to discover their sporting potential.",
    "With a special focus on women's empowerment and Masters Sports, P3 Sports encourages women and adults to embrace fitness, stay active and continue competing at every stage of life. By promoting lifelong participation in sports, we proudly align with the vision of the Fit India Movement to inspire a healthier, fitter and happier nation.",
    "Through professional coaching, community initiatives and inclusive sporting events, we aim to make sports an integral part of everyday life.",
  ],
  focusAreas: [
    {
      title: "Women's empowerment",
      desc: "Spaces for women to train, compete and celebrate their sporting stories.",
    },
    {
      title: "Masters sports",
      desc: "Age-category events that honour lifelong participation.",
    },
  ],
  fitIndia:
    "Aligned with the Fit India Movement to inspire a healthier, fitter and happier nation.",
};

export const SPONSORSHIP_CTA = {
  title: "Be part of the next sporting story.",
  subtitle: "Talk to P3 about supporting a programme or event.",
  cta: "Discuss sponsorship",
};

export const ABOUT_STORY = `P3 is born out of passion — passion for sports, passion for fitness, and a passion to create a happy and healthy difference in society. P3 Sports was conceptualized with an aim to create a common platform for professionals wishing to rekindle their passion for sports, amateurs searching for quality training, and masters willing to share their expertise and knowledge.

P3 Sports Management is a pioneering sports organization founded by a set of like-minded individuals aiming to bring mainstream sport to public consciousness, with a specific focus on Olympic and non-Olympic games. The founders have been conducting sports championships and coaching for several years in and around Mumbai and California, US. P3 has staged 21 table tennis tournaments, handled 1000-plus players and managed more than 50 matches.

With reputed sports experts and industry professionals on its Board of Directors and advisors, P3 conducts corporate, inter-school and state-level championships along with grassroot training and mentoring for sports enthusiasts and under-privileged children — aiming to be India's topmost change-maker in the field of sports.`;

export const FOUNDER_NOTE = `At P3 Sports we are committed to establishing the best learning ground, creating corporate sports events, providing amateur trainings, and coaching professional players — tailored to meet every individual's need, bring out their athletic ability and initiate a positive change in their overall well-being. In-keeping with the P3 Sports way, our coaches and events team is dedicated to delivering success, quality & satisfaction at all our seamlessly managed events & training grounds.`;

export type FounderChapter = {
  id: string;
  label: string;
  headline: string;
  body: string;
};

/** Home-page founder spotlight — sourced from p3-sports.com team page + internal bios */
export const FOUNDER_TAGLINE =
  "A player, coach and mentor with a lifelong commitment to sport and developing the next generation of athletes.";

export const FOUNDER_PULL_QUOTE =
  "A passionate player who has served table tennis all her life — performing, mentoring and encouraging the game — and a woman recognized on international forums.";

export const FOUNDER_JOURNEY =
  "Moonmoon Mukherjee is a reputed table tennis player of international repute who has brought laurels to India — the nation's only woman ITTF Certified Level-3 Coach and an International Umpire. She has represented Bengal, UP and Indian Railways, officiated the girls' finals at the 2009 Youth Commonwealth Games, and won international and world championship medals in Greece, Spain, Vietnam, Turkey and New Zealand. She founded and shaped P3 Sports, where coaching, mentoring and corporate and community events continue under her guidance.";

/** Home founder block + brand vision (aligned with official P3 messaging) */
export const P3_VISION = {
  title: "The P3 Vision",
  statement:
    "We are committed to the best learning grounds in sport — amateur training, professional coaching and corporate events tailored to every individual — to bring out athletic ability and positive change in overall well-being.",
  commitment:
    "Our coaches and events team deliver success, quality and satisfaction at every seamlessly managed training ground and championship.",
  motto: SITE.tagline,
  pillars: [
    { word: "Play", desc: "Ignite passion and joy in the game" },
    { word: "Practice", desc: "Master skills with ITTF-certified guidance" },
    { word: "Persevere", desc: "Compete, grow and keep coming back" },
  ],
} as const;

/** @deprecated use P3_VISION.statement */
export const FOUNDER_VISION_BLURB = P3_VISION.statement;

export const FOUNDER_CHAPTERS: FounderChapter[] = [
  {
    id: "player",
    label: "The competitor",
    headline: "Fighting alongside the idols she grew up admiring",
    body: "Moonmoon Mukherjee is a reputed table tennis player of international repute who has brought laurels to India. Endowed with exceptional natural talent and sharp sports acumen, she has been a top performer nationally and internationally — representing Bengal, Uttar Pradesh and Indian Railways, and proving herself as an ace player on the world stage.",
  },
  {
    id: "coach",
    label: "The coach & umpire",
    headline: "India's first — and only — woman ITTF Level 3 Coach",
    body: "She is the only Indian woman to earn ITTF Certified Level 3 Coach status — a pride for the nation. An International Umpire as well, she officiated the girls' final matches at the 2009 Youth Commonwealth Games. Recent achievements include international and world championship medals in Greece, Spain, Vietnam, Turkey and New Zealand.",
  },
  {
    id: "founder",
    label: "Building P3",
    headline: "She designed the foundations of P3 Sports",
    body: "Moonmoon individually took up the call to mentor and shape P3 Sports. Under her able and dynamic guidance the company has grown to commendable levels of recognition — coaching and mentoring sportsmen every day while successfully organizing corporate and social championships across Mumbai, Chandannagore and beyond.",
  },
];

export const FOUNDER_HIGHLIGHTS = [
  { value: "L3", label: "ITTF Level-3 Coach" },
  { value: "2009", label: "Youth Commonwealth Games" },
  { value: "5+", label: "World medals" },
  { value: "3", label: "Represented Bengal • UP • Indian Railways" },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  photo: string;
  featured?: boolean;
};

export const TEAM: TeamMember[] = [
  {
    name: "Moonmoon Mukherjee",
    role: "Founder — P3 Sports",
    initials: "MM",
    featured: true,
    photo: "/team/moonmoon.jpg",
    bio: "Moonmoon Mukherjee is a reputed table tennis player of international repute who has brought laurels to India and is a pride for the nation as the only Indian woman to become an ITTF Certified Level 3 Coach. With exceptional natural talent and sharp sports acumen, she has been a top performer nationally and internationally. Moonmoon took up the call to mentor and design the foundations of P3 Sports; under her guidance the company has grown to commendable levels of recognition, coaching and mentoring sportsmen while organizing corporate and social championships.\n\nAn ITTF Level-3 Coach and International Umpire, she has represented Bengal, UP and Indian Railways, officiated the girls' finals at the 2009 Youth Commonwealth Games, and won international and world championship medals in Greece, Spain, Vietnam, Turkey and New Zealand.",
  },
  {
    name: "Tushar Kanti Ghosh",
    role: "The Director",
    initials: "TG",
    photo: "/team/tushar.jpg",
    bio: "An ace player of table tennis and a seasoned professional, Mr. Tushar Kanti Ghosh held West Bengal State Ranking No. 8 in 1971. He represented Burdwan and Calcutta University table tennis teams as Captain, served as Under Study table tennis coach for the West Bengal State Council of Sports, and holds the 1st Division Certificate. He presided as Founder General Secretary of Chandernagore District Table Tennis Association from 1972 to 1995, was Executive Committee Member for the stadium cell at the 1975 World TT Championships in Kolkata and for Press & Media during the 1985 World TT Championships in Delhi, and was member of the stadium cell at the 3rd SAF Games 1987. He is a member of West Bengal State Council of Sports and winner of the Best Organizer Award from Press Club & Government of West Bengal.",
  },
  {
    name: "Dhrumil Dixit",
    role: "Marketing Head",
    initials: "DD",
    photo: "/team/dhrumil.jpg",
    bio: "B.Tech (IT), MBA (Marketing) — NMIMS. Work experience includes Sports Analyst at HUDL and five years in sports marketing.",
  },
];

export function getFounderMember(): TeamMember {
  const founder = TEAM.find((m) => m.featured);
  if (!founder) throw new Error("Founder not found in TEAM");
  return founder;
}

export type Batch = {
  name: string;
  detail: string;
  schedule: string[];
};

export const ACADEMY_BATCHES: Batch[] = [
  {
    name: "Weekday Juniors (Under 18)",
    detail: "Develop your skills while having fun on the table with your friends!",
    schedule: [
      "Monday to Friday — Batch 1 · 5:30 pm to 6:30 pm",
      "Monday to Friday — Batch 2 · 6:30 pm to 7:30 pm",
    ],
  },
  {
    name: "Weekend Juniors (Under 18)",
    detail: "Make your weekends super fun while learning to master the game!",
    schedule: [
      "Saturday & Sunday — Batch 1 · 10:30 am to 11:30 am",
      "Saturday & Sunday — Batch 2 · 11:30 am to 12:30 pm",
    ],
  },
  {
    name: "Weekday Adults (18 & Above)",
    detail: "Be the best at your game with world master coaches!",
    schedule: ["Monday to Friday — Batch 1 · 7:30 pm to 9:30 pm"],
  },
  {
    name: "Weekend Adults (18 & Above)",
    detail: "Enhance your endurance and fitness with Table Tennis!",
    schedule: [
      "Saturday & Sunday — Batch 1 · 12:30 pm to 2:30 pm",
      "Saturday & Sunday — Batch 2 · 6:30 pm to 8:30 pm",
    ],
  },
];

export const ACADEMY_SPECIAL = [
  "Corporate in-house training & tournaments",
  "School team training & tournaments",
];

export type CircleGroup = {
  category: string;
  players: { rank: number; name: string }[];
};

/* P3 Circle — disabled sitewide
export const CIRCLE_GROUPS: CircleGroup[] = [
  {
    category: "Under 12",
    players: [],
  },
  {
    category: "Under 18",
    players: [{ rank: 1, name: "Kshitij C." }],
  },
  {
    category: "Above 18",
    players: [
      { rank: 1, name: "Imran Sayyed" },
      { rank: 1, name: "Saketh Eunny" },
      { rank: 1, name: "Kshitij Jain" },
      { rank: 3, name: "Soham" },
      { rank: 3, name: "Kunal Kirpalani" },
      { rank: 4, name: "Aditeya Toprani" },
      { rank: 5, name: "Nitin Tukaram Patil" },
      { rank: 6, name: "Snehal Tukaram Patil" },
      { rank: 7, name: "Chintan Jain" },
      { rank: 7, name: "Anvaya" },
      { rank: 8, name: "Aman Bansal" },
      { rank: 8, name: "Anushka" },
      { rank: 9, name: "Aditya" },
      { rank: 9, name: "Akshay" },
      { rank: 9, name: "Saumya Gandhi" },
      { rank: 11, name: "Tathya Joshi" },
      { rank: 12, name: "Prashant Rana" },
      { rank: 13, name: "Rohit Yaduwanshi" },
      { rank: 14, name: "Aaryan Krishna" },
      { rank: 15, name: "Ganesh" },
      { rank: 16, name: "Hemang" },
      { rank: 19, name: "Karan Yadav" },
      { rank: 20, name: "Anurag" },
      { rank: 21, name: "Aayush Todi" },
      { rank: 22, name: "Vicky Raval" },
      { rank: 23, name: "Bhushan Poojary" },
      { rank: 24, name: "Anson" },
      { rank: 26, name: "Sachin Joshi" },
      { rank: 27, name: "Aniket Sawant" },
      { rank: 28, name: "Ayush Misra" },
      { rank: 29, name: "Tanmay" },
      { rank: 32, name: "Rahul Ghosh" },
      { rank: 33, name: "Shubham Panda" },
    ],
  },
  {
    category: "Above 40",
    players: [
      { rank: 0, name: "Iza Jameel" },
      { rank: 1, name: "Ravinder Singh" },
      { rank: 2, name: "Kaustav Ganguli" },
      { rank: 2, name: "Atul Deshmukh" },
      { rank: 2, name: "Vishal" },
      { rank: 3, name: "Shirish Sinha" },
      { rank: 4, name: "Pranab Kumar Sahu" },
      { rank: 5, name: "Tukaram N Patil" },
      { rank: 6, name: "Debesh Sanyal" },
      { rank: 6, name: "Arun Saha" },
      { rank: 7, name: "Jayanta Mitra" },
      { rank: 8, name: "Jayant" },
      { rank: 9, name: "Shyam Kapdi" },
      { rank: 9, name: "Sachin Dsouza" },
      { rank: 10, name: "Monica" },
      { rank: 10, name: "Suresh Naganathan" },
      { rank: 11, name: "Debatosh Roy" },
      { rank: 17, name: "Rakesh Khanna" },
      { rank: 18, name: "Bharat" },
      { rank: 25, name: "Rahul Srinivasan" },
      { rank: 32, name: "Sanjay Guha" },
    ],
  },
];
*/

export const CIRCLE_GROUPS: CircleGroup[] = [];

/* P3 Circle rules — disabled sitewide (see git history)
export const CIRCLE_RULES = [
  "All table tennis lovers can enrol in the P3 Circle. ...",
];
*/

export const CIRCLE_RULES: string[] = [];

export type ChallengePost = {
  title: string;
  author: string;
  date: string;
};

/* P3 Circle challenge feed — disabled sitewide
export const CHALLENGE_FEED: ChallengePost[] = [
  {
    title: "With my left hand though I'm a righty",
    author: "Pranab Kumar Sahu",
    date: "18 Mar 2013",
  },
  {
    title: "Blindfolded",
    author: "Pranab Kumar Sahu",
    date: "18 Mar 2013",
  },
  {
    title:
      "I work all weekdays and would prefer Sunday. Morning would be ideal but I'm open to other timings.",
    author: "Ravinder Singh",
    date: "01 Apr 2013",
  },
  {
    title: "Challenge win — Debesh 3-1 Chintan.",
    author: "Debesh Sanyal",
    date: "07 Oct 2013",
  },
  {
    title:
      "I want to challenge for rank 17 on 22nd Oct at Shramik College, Powai, 7:00 pm.",
    author: "Bharat",
    date: "20 Oct 2013",
  },
  {
    title: "Hello Rahul, I would like to play with you on Feb 28. Let me know if the date is fine with you?",
    author: "Bhushan Poojary",
    date: "16 Feb 2014",
  },
];
*/

export const CHALLENGE_FEED: ChallengePost[] = [];

export type TournamentEvent = {
  id: string;
  title: string;
  edition?: string;
  dates: string;
  venue: string;
  status: "registration-open" | "coming-soon";
  categories: string[];
  prizes: string;
  eligibility: string;
  contacts?: string;
  rules?: string[];
  featured?: boolean;
};

export const TOURNAMENT_EVENTS: TournamentEvent[] = [
  {
    id: "inter-corporate-7",
    featured: true,
    edition: "7th Edition",
    title: "P3 Sports Inter-Corporate Table Tennis Tournament",
    dates: "9 & 10 April 2026",
    venue: "Emerald Club, Chembur, Mumbai",
    status: "registration-open",
    categories: [
      "Mix Corporate Team Event",
      "Corporate Men's Singles",
      "Corporate Men's Masters 35+",
      "Mixed Corporate Men's Doubles",
    ],
    prizes: "Cash prizes, trophies and medals for winners",
    eligibility:
      "Only corporate / business-owner players may participate. Schedule is subject to change depending on entries in team and individual events.",
    contacts: "Moonmoon — +91 99679 69506 · Ankit — +91 93210 95460",
    rules: [
      "On questions of fact, the umpire's decision is final.",
      "On interpretation of laws, the chief referee's decision is final.",
      "Players may take up to 1 minute between successive games.",
      "Each player or pair may claim one time-out per individual match.",
      "Towelling breaks apply after every 6 points and at change of ends in the final game.",
    ],
  },
  {
    id: "powai-open-2026",
    title: "Powai Open Table Tennis Championship",
    edition: "2026 Season",
    dates: "24 & 25 May 2026",
    venue: "Pawar Public School grounds, Powai, Mumbai",
    status: "registration-open",
    categories: [
      "Open Singles",
      "Under-18 Singles",
      "Open Doubles",
      "Women's Singles",
    ],
    prizes: "Trophies, medals and ranking points",
    eligibility:
      "Open to academy members and invited players. Draws published one week before the event.",
    contacts: "info@p3-sports.com",
  },
  {
    id: "ghosh-memorial",
    title: "Jatindra Nath Ghosh Memorial Ranking TT Championship",
    dates: "14 & 15 June 2026",
    venue: "Khalishani Mahavidyala, Chandannagore, West Bengal",
    status: "coming-soon",
    categories: [
      "Ranking Singles — Open",
      "Ranking Doubles",
      "Veterans 40+",
      "Under-12 Development",
    ],
    prizes: "Ranking ladder updates, trophies and certificates",
    eligibility:
      "Academy members receive priority seeding. Registration opens 6 weeks before the tournament.",
    contacts: "moonmoon@p3-sports.com",
  },
  {
    id: "corporate-summer-league",
    title: "P3 Corporate Summer League",
    edition: "Pilot League",
    dates: "July — August 2026 (weekly fixtures)",
    venue: "Multiple corporate venues, Mumbai",
    status: "coming-soon",
    categories: [
      "Corporate Team League",
      "Friday Night Doubles",
      "Captains' Challenge Cup",
    ],
    prizes: "League table, medals and end-of-season awards night",
    eligibility:
      "Company teams of 4–6 players. Fixtures scheduled with participating HR / sports committees.",
    contacts: "info@p3-sports.com · moonmoon@p3-sports.com",
  },
  {
    id: "junior-masters",
    title: "P3 Academy Junior Masters",
    dates: "6 September 2026",
    venue: "P3 Sports Academy, Chandivali, Mumbai",
    status: "coming-soon",
    categories: [
      "Under-12",
      "Under-18",
      "Academy Doubles",
      "Coaches' Exhibition Match",
    ],
    prizes: "Medals, academy scholarships and guest coaching sessions",
    eligibility: "For enrolled academy batches and invited partner schools.",
    contacts: SITE.phonePrimary,
  },
];

/** Primary featured event (home page hero card) */
export const UPCOMING_EVENT = TOURNAMENT_EVENTS.find((e) => e.featured)!;

export const PAST_TOURNAMENTS = [
  {
    name: "Powai Open Table Tennis Tournament",
    desc: "The flagship open championship held in Powai, Mumbai.",
  },
  {
    name: "Inter-Corporate TT Tournaments",
    desc: "Six editions staged and counting — bringing company teams from across Mumbai onto the same tables.",
  },
  {
    name: "Grassroot Development Championships",
    desc: "Inter-school and state-level events that give young and under-privileged talent their first competitive stage.",
  },
  {
    name: "International Summer Camp",
    desc: "Annual training exposure at the ICC Centre, California with world-class coaches for top academy performers.",
  },
];

export const PLAYER_SPOTLIGHT = [
  {
    name: "Mrinalini Singh",
    group: "Under 12",
    photo: "/academy-players/1.png",
  },
  {
    name: "Soham Sinha",
    group: "Under 18",
    photo: "/academy-players/2.png",
  },
  {
    name: "Rajdeep Singha",
    group: "Under 18",
    photo: "/academy-players/3.png",
  },
  {
    name: "Gauri Deshmukh",
    group: "Under 40",
    photo: "/academy-players/4.png",
  },
];

export const CLIENT_SECTORS = [
  {
    title: "Corporates & Enterprises",
    desc: "Inter-corporate championships, in-house leagues and employee wellness programmes that build teams and reignite workplace energy.",
    points: ["Inter-corporate TT tournaments", "Employee sports leagues", "Annual sports days", "Offsite & team-building events"],
  },
  {
    title: "Schools & Institutions",
    desc: "School team training, inter-school championships and grassroots development programmes for young athletes.",
    points: ["School team coaching", "Inter-school championships", " Grassroot talent identification", "Physical education support"],
  },
  {
    title: "Residential Clubs & Societies",
    desc: "Clubhouse coaching and community programmes for residential societies that keep every age group active.",
    points: [
      "Clubhouse coaching programmes",
      /* "Community rankings & leagues", */
      "Holiday sports camps",
      "Senior citizen fitness batches",
    ],
  },
  {
    title: "Sports Associations & Bodies",
    desc: "Staging assistance, officiating and full tournament management for district and state-level bodies.",
    points: ["District & state championships", "Officiating & umpiring", "Staging assistance", "Consultancy & mentoring"],
  },
];

export const PARTNER_VENUES = [
  "Pawar Public School, Chandivali — Mumbai",
  "Khalishani Mahavidyala — Chandannagore, West Bengal",
  "ICC Centre — California, USA",
  "Corporate campuses across Mumbai",
  "Residential clubhouses, Powai & Chandivali",
];

export const CAREER_OPENINGS = [
  {
    title: "Table Tennis Coach",
    type: "Coaching",
    location: "Mumbai — Powai / Chandivali",
    schedule: "Full-time & part-time batches",
    desc: "Lead academy batches for juniors and adults, design training blocks and prepare players for tournament play.",
  },
  {
    title: "Tournament & Events Manager",
    type: "Events",
    location: "Mumbai (travel across India)",
    schedule: "Full-time",
    desc: "Plan and stage corporate, inter-school and state-level championships end to end — venues, draws, officiating and awards.",
  },
  {
    title: "Sports Marketing Associate",
    type: "Marketing",
    location: "Mumbai",
    schedule: "Full-time",
    desc: "Grow the P3 community — campaigns, sponsorships, social media and partnerships for our events and programmes.",
  },
  {
    title: "Grassroots Programme Coordinator",
    type: "Community",
    location: "Mumbai & Chandannagore",
    schedule: "Full-time",
    desc: "Run under-privileged and school outreach programmes, identifying and mentoring young talent from the ground up.",
  },
];

export const CAREER_PERKS = [
  "Work alongside India's first ITTF Level 3 certified woman coach",
  "Stage events that reach 1,000+ players across the country",
  "Learn event management, coaching science and sports business on the job",
  "A young, passionate team that plays as hard as it works",
];

/** Official sponsor logos from p3-sports.com home page */
export const SPONSORS = [
  { logo: "/sponsors/official-1.jpg", alt: "P3 Sports sponsor" },
  { logo: "/sponsors/official-2.png", alt: "P3 Sports sponsor" },
  { logo: "/sponsors/official-3.png", alt: "P3 Sports sponsor" },
  { logo: "/sponsors/official-4.png", alt: "P3 Sports sponsor" },
  { logo: "/sponsors/official-5.png", alt: "P3 Sports sponsor" },
  { logo: "/sponsors/official-6.png", alt: "P3 Sports sponsor" },
  { logo: "/sponsors/official-7.png", alt: "P3 Sports sponsor" },
  { logo: "/sponsors/official-8.png", alt: "P3 Sports sponsor" },
  { logo: "/sponsors/official-9.png", alt: "P3 Sports sponsor" },
];
