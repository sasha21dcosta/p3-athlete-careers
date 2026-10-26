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
};

export const TEAM: TeamMember[] = [
  {
    name: "Moonmoon Mukerjee",
    role: "Founder — P3 Sports",
    initials: "MM",
    bio: "A table tennis player of international repute, Moonmoon is India's first and only woman certified as an ITTF Level 3 coach, and an International Umpire. She has represented Bengal, UP and Indian Railways, officiated the girls' finals at the 2009 Commonwealth Youth Games, and won international and world-championship medals in Greece, Spain, Vietnam, Turkey and New Zealand. Moonmoon individually took up the call to mentor and design the foundations of P3 Sports.",
  },
  {
    name: "Tushar Kanti Ghosh",
    role: "The Director",
    initials: "TG",
    bio: "An ace table tennis player who held West Bengal State Ranking No. 8 in 1971 and captained Burdwan and Calcutta University teams. Founder General Secretary of the Chandernagore District Table Tennis Association (1972–1995), Executive Committee member at the 1975 and 1985 World TT Championships, member of the stadium cell at the 3rd SAF Games 1987, and honoured with the Best Organizer Award from the Press Club & Government of West Bengal.",
  },
  {
    name: "Venkatesh Srinivasan",
    role: "Sports Associate",
    initials: "VS",
    bio: "An IIM Bangalore alumnus (Class of 2000), Venky has wide corporate experience across Pepsico, Sasken and more. He was the first employee and GM–Sales at TENVIC, a sports education and management company, leading business development, strategy and content. An avid sports buff and renowned quizmaster, he co-founded Nexus Consulting and Pitch Perfect Consulting, and has been involved in the strategic development of P3 Sports since its conception.",
  },
  {
    name: "Iza Jameel",
    role: "Brand & Marketing Consultant",
    initials: "IJ",
    bio: "A brand management and marketing expert with a masters from Texas A&M University and positive-psychology studies at Berkeley. A GM-turned-entrepreneur with tenure at Hilton and Marriott, Iza mentors companies and leaders to showcase their unique abilities, mentored SMEs and startups in scaling their business, and is known in the circles as the Happiness Messenger.",
  },
  {
    name: "Dhrumil Dixit",
    role: "Marketing Head",
    initials: "DD",
    bio: "B.Tech (IT), MBA (Marketing) from NMIMS. Dhrumil has worked as a Sports Analyst at HUDL and brings 5 years of experience in sports marketing to P3's campaigns and community.",
  },
  {
    name: "Ankit Garg",
    role: "Head of Business Development",
    initials: "AG",
    bio: "B.Sc (IT), M.Sc (IT) with a PG Diploma in Sports Management. Ankit has sporting experience in motorsports with Tata and Volkswagen Motorsports India, and management experience with Decathlon, the Half Run Marathon Mumbai and the National Memory Championship. His toolkit spans marketing, sales, planning and execution.",
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

export const UPCOMING_EVENT = {
  title: "P3 Sports Inter-Corporate Table Tennis Tournament",
  edition: "7th Edition",
  categories: [
    "Corporate Men's Singles",
    "Corporate Men's Masters 35+",
    "Mixed Corporate Men's Doubles",
    "Mix Corporate Team Event",
  ],
  prizes: "Winners awarded with cash prizes, trophies and medals",
  eligibility:
    "Only corporate / business-owner players are allowed to participate. Schedule is subject to change depending upon entries in team and individual events.",
};

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
  { name: "Mrinalini Singh", group: "Under 12" },
  { name: "Soham Sinha", group: "Under 18" },
  { name: "Rajdeep Singha", group: "Under 18" },
  { name: "Gauri Deshmukh", group: "Under 40" },
];
