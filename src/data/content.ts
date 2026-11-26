export const SITE = {
  name: "P3 Sports",
  tagline: "Play · Practice · Persevere",
  phonePrimary: "+91 99679 69506",
  phoneSecondary: "+91 93724 70748",
  email: "foundersoffice@p3-sports.com",
  facebook: "https://www.facebook.com/P3.sport/",
  linkedin: "https://www.linkedin.com/company/p3-sports-management-company",
  instagram: "https://www.instagram.com/p3sportsindia",
  website: "https://www.p3-sports.com",
};

export const HERO_WORDS = [
  "Ignite your passion.",
  "Learn to deliver.",
  "Master the strokes.",
  "Play to perfection.",
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Players coached" },
  { value: 100, suffix: "+", label: "Tournaments staged" },
  { value: 10, suffix: "", label: "Disciplines covered" },
];

export const DISCIPLINES = [
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
  {
    title: "School Sports Program",
    desc: "A complete sports solution for schools — PE, after-school coaching, tournaments and talent pathways.",
  },
  {
    title: "P3 Sports Club House",
    desc: "Professional sports management at residential clubhouses — coaching, leagues and revenue-sharing on your existing facilities.",
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
  /** Tailwind classes for service section hero image (e.g. zoom / object position). */
  imageClass?: string;
  imageBadge?: string;
  /** When set, primary CTA on /services (e.g. Explore School Sports). */
  pageCta?: { label: string; to: string; hash?: string };
  /** When set, /services section heading (home grid still uses `title`). */
  servicePageTitle?: string;
  /** When set, shorter blurb on the home What we do grid only. */
  homeSummary?: string;
  /** Residential societies shown on the club house service section. */
  societyClients?: SocietyClient[];
};

export type SocietyClient = {
  name: string;
  location: string;
};

/** Society & clubhouse partners — Club House service on /services */
export const CLUB_HOUSE_SOCIETY_CLIENTS: SocietyClient[] = [
  { name: "Kanakia Rainforest", location: "Andheri East, Mumbai" },
  { name: "Shapoorji Pallonji Vicinia", location: "Chandivali, Powai" },
  { name: "Nahar Amrit Shakti", location: "Powai, Mumbai" },
  { name: "Richmond", location: "Hiranandani, Powai" },
  { name: "Raheja Vihar Society", location: "Powai, Mumbai" },
];

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
    imageClass: "object-cover object-[center_42%]",
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
  {
    id: "school-sports-program",
    index: "08",
    eyebrow: "School sports",
    title: "School Sports Program",
    summary:
      "A complete sports solution for schools — from physical education and training to tournaments and talent development.",
    waysWeHelp: [
      "In-school PE and structured sports curriculum on your campus",
      "After-school coaching across multiple disciplines",
      "Inter-school tournaments and professional event management",
      "Summer camps, talent identification and development pathways",
      "Certified coaches with quality monitoring on site",
      "Partnership models tailored from preschool through age 18",
    ],
    note: "Programme scope and sports mix are shaped to your school. Visit the School Sports page for partner schools, disciplines and partnership details.",
    image: "/services/08-school-sports.jpg",
    pageCta: { label: "Explore School Sports", to: "/school-sports" },
  },
  {
    id: "p3-sports-club-house",
    index: "09",
    eyebrow: "Club house programmes",
    title: "P3 Sports Club House",
    servicePageTitle: "Professional Sports Management For Your Club House",
    homeSummary:
      "Coaching, leagues and resident events at your society clubhouse — on your existing facilities.",
    summary:
      "P3 Sports is built on passion for fitness and community — bringing certified coaches, resident events and society leagues to your clubhouse so professionals, amateurs and masters can train together on a platform that improves health, skills and neighborhood bonds.",
    waysWeHelp: [
      "Weekday morning and evening plus weekend coaching across 12 sports",
      "Full-time coaches and sports markers with customized plans, assessments and app support",
      "Intra-community leagues, resident sports days and pathways to district and national events",
      "Revenue-sharing coaching packages that activate inbuilt facilities without extra capital",
      "Summer camps, tournaments and family-friendly recreation at the society club house",
      "Trusted partners for Hiranandani, Nahar, Lake Homes and societies across Mumbai",
    ],
    note: "Package duration, coach specialization and pricing are adjusted to your society’s needs. Enquire via contact for Moonmoon Mukherjee or Siddhesh Rampurkar — coaching, consultancy or full tournament management.",
    image: "/services/09-clubhouse.jpg",
    imageBadge: "Residential societies · Mumbai",
    societyClients: CLUB_HOUSE_SOCIETY_CLIENTS,
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

/** Our Team — founder block (full layout copy) */
export const FOUNDER_TEAM_SECTION = {
  eyebrow: "Our founder",
  name: "Moonmoon Mukherjee",
  titles:
    "Sports Entrepreneur | Founder | Business Leader | Sports Industry Visionary",
  roleBadge: "Founder & CEO, P3 Sports",
  introQuote:
    "Moonmoon Mukherjee is a dynamic sports entrepreneur, founder, and business leader who is passionate about transforming the sports landscape through entrepreneurship, innovation, and strategic leadership.",
  body: [
    "With a strong foundation in international Table Tennis, Moonmoon has successfully extended her vision beyond the playing field, establishing herself as a sports industry professional focused on building sustainable sporting platforms, creating business opportunities, and empowering the next generation of athletes.",
    "As a founder and entrepreneur, she believes in developing sports not merely as a competitive activity but as a structured industry with enormous potential for business growth, employment generation, talent development, and social impact.",
  ],
  belief: {
    title: "Her Belief",
    body: "The future of sports lies in professional management, innovative business models, corporate partnerships, and a sustainable ecosystem that supports athletes at every stage of their careers.",
  },
  vision: {
    title: "Her Vision",
    body: "To contribute to the evolution of the sports industry by building institutions, creating opportunities, encouraging entrepreneurship, and making sports a powerful vehicle for economic and social development.",
  },
  leadershipFocusTitle: "Leadership Focus",
  leadershipFocus: [
    { label: "Sports Infrastructure" },
    { label: "Tournament Management" },
    { label: "Athlete Development" },
    { label: "Strategic Partnerships" },
    { label: "Sports Promotion" },
    {
      label: "Connect Talent with Opportunities",
    },
  ],
  closingQuote:
    "For Moonmoon Mukherjee, sports is more than a passion. It is a platform for leadership, and an opportunity to create lasting impact.",
} as const;

export const FOUNDER_JOURNEY =
  "Moonmoon Mukherjee is a reputed table tennis player of international repute who has brought laurels to India — the nation's only woman ITTF Certified Level-3 Coach and an International Umpire. She has represented India, Bengal, UP and Indian Railways, works as a sports consultant, and has won international and world championship medals in Greece, Spain, Vietnam, Turkey and New Zealand. She founded and shaped P3 Sports, where coaching, mentoring and corporate and community events continue under her guidance.";

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
    body: "Moonmoon Mukherjee is a reputed table tennis player of international repute who has brought laurels to India. Endowed with exceptional natural talent and sharp sports acumen, she has been a top performer nationally and internationally — representing India, Bengal, Uttar Pradesh and Indian Railways, and proving herself as an ace player on the world stage.",
  },
  {
    id: "coach",
    label: "The coach & umpire",
    headline: "India's first — and only — woman ITTF Level 3 Coach",
    body: "She is the only Indian woman to earn ITTF Certified Level 3 Coach status — a pride for the nation. An International Umpire and sports consultant, she advises programmes and athletes with the same rigour she brings to the court. Recent achievements include international and world championship medals in Greece, Spain, Vietnam, Turkey and New Zealand.",
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
  { value: "Expert", label: "Sports consultant" },
  { value: "5+", label: "World medals" },
  { value: "4", label: "Represented India • Bengal • UP • Indian Railways" },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  /** Shorter copy for leadership grid cards (no truncation). */
  bioCard?: string;
  photo: string;
  featured?: boolean;
  linkedin?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Moonmoon Mukherjee",
    role: "Founder & CEO, P3 Sports",
    initials: "MM",
    featured: true,
    photo: "/team/moonmoon.jpg",
    linkedin: "https://www.linkedin.com/in/moonmoon-mukherjee-50848811/",
    bio: `${FOUNDER_TEAM_SECTION.body[0]}\n\n${FOUNDER_TEAM_SECTION.body[1]}`,
  },
  {
    name: "Tushar Kanti Ghosh",
    role: "The Director",
    initials: "TG",
    photo: "/team/tushar.jpg",
    bio: "An ace player of table tennis and a seasoned professional, Mr. Tushar Kanti Ghosh held West Bengal State Ranking No. 8 in 1971. He represented Burdwan and Calcutta University table tennis teams as Captain, served as Under Study table tennis coach for the West Bengal State Council of Sports, and holds the 1st Division Certificate. He presided as Founder General Secretary of Chandernagore District Table Tennis Association from 1972 to 1995, was Executive Committee Member for the stadium cell at the 1975 World TT Championships in Kolkata and for Press & Media during the 1985 World TT Championships in Delhi, and was member of the stadium cell at the 3rd SAF Games 1987. He is a member of West Bengal State Council of Sports and winner of the Best Organizer Award from Press Club & Government of West Bengal.",
    bioCard:
      "Ace table tennis player and organiser. West Bengal State Ranking No. 8 (1971); captained university and district teams. Led Chandernagore District Table Tennis Association for over two decades. World Championship stadium and media roles in Kolkata and Delhi. Member, West Bengal State Council of Sports; Best Organizer Award recipient.",
  },
  {
    name: "Dhrumil Dixit",
    role: "Marketing Head",
    initials: "DD",
    photo: "/team/dhrumil.jpg",
    bio: "B.Tech (IT), MBA (Marketing) — NMIMS. Work experience includes Sports Analyst at HUDL and five years in sports marketing.",
  },
  {
    name: "Maxwel Mascarenhas",
    role: "Operations & Business Development Partner",
    initials: "MS",
    photo: "/team/maxwel-mascarenhas.jpg",
    bio: "Maxwel Mascarenhas is P3 Sports’ Operations and Business Development Partner, where he actively promotes and supports the company’s nationwide sports and event initiatives. He amplifies event visibility through social media, direct outreach, and collaboration with local communities, and works closely with P3’s event management team to drive turnout and engagement at key events. These include corporate sports tournaments, community festivals, brand activations, and grassroots development programs. His work helps create memorable experiences, grow participation, and build awareness of the P3 brand.",
    bioCard:
      "Operations and Business Development Partner at P3 Sports. Drives visibility for nationwide events through social media, outreach and community partnerships. Works with the events team on corporate tournaments, festivals, activations and grassroots programmes to grow turnout, participation and brand awareness.",
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
  slogan?: string;
  subtitle?: string;
  image?: string;
  registrationUrl?: string;
};

export const TOURNAMENT_EVENTS: TournamentEvent[] = [
  {
    id: "shepaddle-kochi-2026",
    featured: true,
    edition: "2nd Edition",
    title: "ShePaddle",
    subtitle: "International Women's Table Tennis Tournament",
    dates: "10th – 13th December 2026",
    venue: "Kochi, Kerala",
    status: "registration-open",
    slogan: "Where Women Champions Meet. Where Stories Inspire.",
    image: "/events/shepaddle-kochi-2026.jpg",
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfW93Iue7aziHrEfBZ6LL5XmgrY3N7Kne4DE7aYesorxRNn4Q/viewform",
    categories: ["Celebrate", "Compete", "Connect", "Empower"],
    prizes: "International women's table tennis — masters and open categories",
    eligibility:
      "Women players from India and across the world. Complete the official registration form for category details, fees and travel information.",
    contacts: `${SITE.email} · ${SITE.phonePrimary}`,
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

export const ACADEMY_SPORT_PHOTOS = [
  {
    sport: "Badminton",
    photo: "/academy-sports/badminton-academy.jpg",
    alt: "Young P3 badminton player on court",
  },
  {
    sport: "Table Tennis",
    photo: "/academy-players/1.png",
    alt: "Young table tennis player at the P3 academy",
  },
  {
    sport: "Skating",
    photo: "/academy-sports/skating.jpg",
    alt: "Junior skater practicing inline skating at P3",
  },
  {
    sport: "Chess",
    photo: "/academy-sports/chess.jpg",
    alt: "Chess coaching session with young players at P3",
  },
] as const;

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
  { logo: "/sponsors/bajaj.png", alt: "Bajaj" },
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
