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
  {
    title: "P3 Circle Community",
    desc: "An online ranking community where members challenge each other and climb the ladder.",
  },
  {
    title: "Team Mentoring & Management",
    desc: "Consultancy, staging assistance and full tournament management packages.",
  },
  {
    title: "Coaching for Under-privileged",
    desc: "Grassroot training and mentoring to make sport accessible to every child.",
  },
];

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

export const ABOUT_STORY = `P3 is born out of passion — passion for sports, passion for fitness, and a passion to create a happy and healthy difference in society. P3 Sports was conceptualized with an aim to create a common platform for professionals wishing to rekindle their passion for sports, amateurs searching for quality training, and masters willing to share their expertise and knowledge.

P3 Sports Management is a pioneering sports organization founded by a set of like-minded individuals aiming to bring mainstream sport to public consciousness, with a specific focus on Olympic and non-Olympic games. The founders have been conducting sports championships and coaching for several years in and around Mumbai and California, US. P3 has staged 21 table tennis tournaments, handled 1000-plus players and managed more than 50 matches.

With reputed sports experts and industry professionals on its Board of Directors and advisors, P3 conducts corporate, inter-school and state-level championships along with grassroot training and mentoring for sports enthusiasts and under-privileged children — aiming to be India's topmost change-maker in the field of sports.`;

export const FOUNDER_NOTE = `At P3 Sports we are committed to establishing the best learning ground, creating corporate sports events, providing amateur trainings, and coaching professional players — tailored to meet every individual's need, bring out their athletic ability and initiate a positive change in their overall well-being. In-keeping with the P3 Sports way, our coaches and events team is dedicated to delivering success, quality & satisfaction at all our seamlessly managed events & training grounds.`;

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
    name: "Venkatesh Srinivasan (Venky)",
    role: "Sports Associate",
    initials: "VS",
    photo: "/team/venky.jpg",
    bio: "An alumnus of IIM Bangalore (Class of 2000), Venky has wide corporate experience at Pepsico, imagequity+, Sasken, Peek Mobile and ABOVE Solutions. Most recently he was the first employee and GM–Sales at TENVIC, leading business development, strategy and content across multiple verticals. An avid sports buff and quizmaster, he co-founded Nexus Consulting and Pitch Perfect Consulting, and has been actively involved in the strategic development of P3 Sports since its conception.",
  },
  {
    name: "Iza Jameel",
    role: "Brand & Marketing Consultant",
    initials: "IJ",
    photo: "/team/iza.jpg",
    bio: "Iza Jameel is a brand management and marketing expert who mentors companies and leaders to showcase their unique abilities. After her masters in brand management from Texas A&M University, she studied positive psychology at Berkeley. With a commendable tenure as GM with Hilton and Marriott, she returned to India to create happy workplaces and charismatic brands, mentoring SMEs and startups in scaling business and brand value. She is known as a Happiness Messenger and speaker par excellence.",
  },
  {
    name: "Dhrumil Dixit",
    role: "Marketing Head",
    initials: "DD",
    photo: "/team/dhrumil.jpg",
    bio: "B.Tech (IT), MBA (Marketing) — NMIMS. Work experience includes Sports Analyst at HUDL and five years in sports marketing.",
  },
  {
    name: "Ankit Garg",
    role: "Head of Business Development",
    initials: "AG",
    photo: "/team/ankit.jpg",
    bio: "B.Sc (IT), M.Sc (IT), PG Diploma in Sports Management. Sporting experience in motorsports with Tata and Volkswagen Motorsports India; management experience with Decathlon, Half Run Marathon Mumbai and National Memory Championship. Skills include marketing, sales, planning, execution, creative and analytical thinking, communication, negotiation, and goal-focused organizational leadership.",
  },
];

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

export const CIRCLE_RULES = [
  "All table tennis lovers can enrol in the P3 Circle. Group categories: Under-12, Under-18, Above-18 and Above-40.",
  "Present seeding is based on the last two years' results of the Powai Open Table Tennis Tournament.",
  "Members can challenge each other to upgrade their ranking — you can only challenge up to 2 seeds ahead of you. The No. 5 seed can challenge No. 4 or No. 3, but not No. 1.",
  "Challenges can be placed openly by clicking a player's name with the specified dates.",
  "P3 Sports suggests the time and venue of the challenge and informs both players within 24 hours by email or through the website. Dates, venue or time may change based on availability.",
  "Matches are played in best-of-five format. Players are responsible for communicating results to P3 Sports by email or phone. A P3 representative is always present for Under-12 challenges.",
  "Seeding is updated based on challenge results by P3 Sports Management Co.",
  "New members can join by registering on the website or by emailing a request.",
  "Membership fee is ₹500. Registration validity runs March to February every year.",
  "Top-seeded members get an opportunity to participate in the Summer Camp at the ICC Centre, California under world-class coaches at a discounted rate.",
  "Top 3 members are awarded a P3 Sports-sponsored tracksuit and T-shirt.",
];

export type ChallengePost = {
  title: string;
  author: string;
  date: string;
};

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
    prizes: "Trophies, medals and P3 Circle ranking points",
    eligibility:
      "Open to academy members and invited community players. Draws published one week before the event.",
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
      "P3 Circle members receive priority seeding. Registration opens 6 weeks before the tournament.",
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
    desc: "The flagship community championship that seeds the P3 Circle rankings, held in Powai, Mumbai.",
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
    desc: "Annual training exposure at the ICC Centre, California with world-class coaches for top P3 Circle performers.",
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
    points: ["Clubhouse coaching programmes", "Community rankings & leagues", "Holiday sports camps", "Senior citizen fitness batches"],
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
