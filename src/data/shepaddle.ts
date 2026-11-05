export const SHEPADDLE = {
  initiative: "A P3 Sports Initiative",
  initiativeDisplay: "A P3 SPORTS INITIATIVE",
  title: "International Women's Table Tennis Tournament",
  tagline:
    "Empowering Women. Celebrating Champions. Connecting the World Through Sport.",
  motto: "Every Age. Every Rally. Every Woman.",
  launched: "September 2025",
  location: "Goa, India",
  heroSummary:
    "A global platform that brings women table tennis players together to compete, connect and inspire — with a special focus on Masters athletes in the 40+, 50+ and 60+ categories.",
  homeIntro:
    "ShePaddle is more than an international table tennis tournament — it is a movement celebrating women, championing active ageing, and creating a global platform for women to connect, compete, and inspire through sport.",
  vision:
    "To create a global movement that empowers women through table tennis, promotes lifelong participation in sport, and inspires generations of women to lead healthier, stronger, and more fulfilling lives.",
  paragraphs: [
    "ShePaddle is more than an international table tennis tournament — it is a movement celebrating women, championing active ageing, and creating a global platform for women to connect, compete, and inspire through sport.",
    "Founded with a vision to bring women table tennis players together from India and across the world, ShePaddle celebrates the passion, resilience, and competitive spirit of women at every stage of life. With a special focus on masters athletes in the 40+, 50+, and 60+ age categories, the tournament champions the belief that age is never a barrier to ambition, fitness, friendship, or achievement.",
    "Launched in Goa in September 2025, ShePaddle brings together competitive table tennis, women's empowerment, wellness, cultural experiences, and meaningful connections. It offers women athletes an opportunity to showcase their talent, rediscover their sporting ambitions, build lasting friendships, and become role models for future generations.",
    "At its heart, ShePaddle stands for inclusion, healthy ageing, lifelong fitness, and the power of women supporting women. It aims to build an international community where sporting excellence goes hand in hand with camaraderie, confidence, and celebration.",
    "Through every rally, every match, and every story, ShePaddle inspires women to stay active, embrace new challenges, and continue pursuing their dreams — on and off the table.",
  ],
  pillars: [
    {
      id: "movement",
      label: "The movement",
      title: "More than a tournament",
      body: "ShePaddle connects competitive sport with wellness, culture and friendship — a platform where women inspire women across borders and generations.",
    },
    {
      id: "masters",
      label: "Masters focus",
      title: "40+ · 50+ · 60+",
      body: "Age is never a barrier to ambition, fitness, friendship or achievement. Masters categories celebrate lifelong athletes who keep rallying with pride.",
    },
    {
      id: "goa",
      label: "Goa 2025",
      title: "Where it began",
      body: "Launched in Goa in September 2025, the inaugural edition blended world-class table tennis with empowerment programming and unforgettable community moments.",
    },
    {
      id: "community",
      label: "Community",
      title: "Women supporting women",
      body: "Inclusion, healthy ageing and lifelong fitness sit at the centre — building an international community of confidence, camaraderie and celebration.",
    },
  ],
  features: [
    { label: "International Competition", desc: "Players from India and abroad" },
    { label: "Women's Empowerment", desc: "Visibility, voice and leadership" },
    { label: "Active Ageing (40+)", desc: "Masters categories at every stage" },
    { label: "Sport, Wellness & Community", desc: "Sport, connection and culture" },
  ],
  /** Home page strip (three-up, matches launch mockup) */
  homeGallery: [
    {
      src: "/shepaddle/women-together.jpg",
      alt: "ShePaddle athletes celebrating together",
      caption: "Community on and off the table",
      position: "object-center",
    },
    {
      src: "/shepaddle/paddle-ball.jpg",
      alt: "Table tennis paddle and ball in play",
      caption: "Every rally counts",
      position: "object-center",
    },
    {
      src: "/shepaddle/goa-sunset.jpg",
      alt: "Goa coastline at sunset",
      caption: "Goa, India — September 2025",
      position: "object-center",
    },
  ],
  gallery: [
    {
      src: "/shepaddle/women-together.jpg",
      alt: "ShePaddle athletes celebrating together",
      caption: "Community on and off the table",
      position: "object-center",
    },
    {
      src: "/shepaddle/paddle-ball.jpg",
      alt: "Table tennis paddle and ball in play",
      caption: "Every rally counts",
      position: "object-center",
    },
    {
      src: "/shepaddle/sportsmanship.jpg",
      alt: "Two ShePaddle players sharing a handshake after a match",
      caption: "Sportsmanship across every match",
      position: "object-center",
    },
    {
      src: "/shepaddle/tournament-group.jpg",
      alt: "International women players at ShePaddle",
      caption: "Connecting women from around the world",
      position: "object-center",
    },
    {
      src: "/shepaddle/goa-sunset.jpg",
      alt: "Goa coastline at sunset",
      caption: "Goa, India — September 2025",
      position: "object-center",
    },
  ],
  images: {
    heroAction: "/shepaddle/action-player.jpg",
    heroPlayer: "/shepaddle/action-player.jpg",
    /** Full-width design mock — crop right column for pixel match */
    heroComposite: "/shepaddle/hero-composite.jpg",
  },
} as const;
