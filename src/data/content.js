/* All images served locally from /public/images/ */
export const IMAGES = {
  heroFamily: "/images/hero-slide1.jpg",
  heroPlanting: "/images/hero2.jpg",
  heroCommunity: "/images/hero-slide4.jpg",
  heroSapling: "/images/hero-slide3.jpg",
  heroLaunch: "/images/hero-slide2.jpg",
  heroVillage: "/images/before-after.jpg",
  feedStudents: "/images/feed1.jpg",
  feedPlanting: "/images/feed2.jpg",
  feedVillage: "/images/feed3.jpg",
  feedClean: "/images/feed4.jpg",
  champion1: "/images/champion1.jpg",
  champion2: "/images/champion2.jpg",
  champion3: "/images/champion3.jpg",
  about: "/images/hero2.jpg",
  join: "/images/join.jpg",
  sapling: "/images/sapling.jpg",
  pledge: "/images/pledge.jpg",
  forest: "/images/before-after.jpg",
};

export const HERO_SLIDES = [
  {
    title: "Tanishq Green Mission Unveils",
    highlight: "'One House One Plant'.",
    subtitle: "Join the movement on July 5th, 2026.",
    cta: "Click here to RSVP.",
    image: IMAGES.heroFamily,
    link: "/contact#join",
  },
  {
    title: "Launching Across Bengaluru &",
    highlight: "Chittoor District.",
    subtitle: "One House One Plant — July 5th, 2026.",
    cta: "RSVP for the Launch Event.",
    image: IMAGES.heroLaunch,
    link: "/contact#join",
  },
  {
    title: "Today We Plant,",
    highlight: "Tomorrow We Live.",
    subtitle: "Small step today, big change tomorrow. #OneHouseOnePlant",
    cta: "Take the pledge today.",
    image: IMAGES.heroSapling,
    link: "/contact#join",
  },
  {
    title: "Every Family, Every Sapling,",
    highlight: "One Greener Tomorrow.",
    subtitle: "Native Lemon, Guava & Amla — one tree in every home across our communities.",
    cta: "Claim your sapling today.",
    image: IMAGES.heroCommunity,
    link: "/action-hub#sapling",
  },
];

export const FEED_ITEMS = [
  {
    id: 1,
    title: "Top 10 entries so far for the Green Campus Challenge!",
    time: "2h ago",
    image: IMAGES.feedStudents,
    category: "Bengaluru Campus",
  },
  {
    id: 2,
    title: "V. Kota Mandal reaches milestone of 500 saplings planted.",
    time: "1d ago",
    image: IMAGES.feedPlanting,
    category: "Chittoor District",
  },
  {
    id: 3,
    title: "Village cleanliness drive completed in 12 gram panchayats.",
    time: "2d ago",
    image: IMAGES.feedVillage,
    category: "Chittoor District",
  },
  {
    id: 4,
    title: "One House One Plant — RSVP registrations now open!",
    time: "3d ago",
    image: IMAGES.feedClean,
    category: "Announcements",
  },
];

export const CHAMPIONS = [
  {
    name: "Aishwarya Singh",
    role: "Student Leader",
    image: IMAGES.champion1,
    bio: "Leading the Green Campus Challenge across Bengaluru schools.",
  },
  {
    name: "Ravi Kumar",
    role: "Village Head",
    image: IMAGES.champion2,
    bio: "Mobilized 500+ saplings in V. Kota Mandal, Chittoor District.",
  },
  {
    name: "Priya Sharma",
    role: "Active Volunteer",
    image: IMAGES.champion3,
    bio: "Organizes weekly plantation drives and plant care workshops.",
  },
];

export const PILLARS = [
  {
    icon: "🌳",
    title: "One House One Plant",
    description:
      "Every household receives a native sapling — Lemon, Guava, or Amla — with guided care to ensure long-term survival.",
  },
  {
    icon: "🏫",
    title: "Green Campus Challenge",
    description:
      "Schools and colleges compete to create the greenest campus through plantation, waste management, and awareness.",
  },
  {
    icon: "🏘️",
    title: "Village Cleanliness",
    description:
      "Community-led cleanliness protocols, broom drives, and waste segregation across gram panchayats.",
  },
  {
    icon: "🧺",
    title: "Mana Inti Basket",
    description:
      "Subscription baskets with eco-friendly household essentials supporting local artisans and zero-waste living.",
  },
];

export const IMPACT_STATS = [
  { value: "29,570+", label: "Saplings Planted" },
  { value: "500+", label: "Volunteers" },
  { value: "50+", label: "Events Conducted" },
  { value: "20+", label: "Communities Reached" },
];

export const NOTIFICATIONS = [
  "🌱 12 saplings planted in V. Kota mandal today",
  "🏆 Green Campus Challenge entries open — register now!",
  "✅ Sapling claim confirmed for Rajesh M., Bengaluru",
  "📅 One House One Plant event — July 5th, 2026",
  "🧹 Village cleanliness drive — Chittoor District",
];

export const PLEDGE_ITEMS = [
  {
    icon: "🌱",
    title: "Plant a Tree",
    description: "Pledge to plant and nurture at least one sapling at your home.",
    link: "/action-hub#sapling",
  },
  {
    icon: "💧",
    title: "Care for Nature",
    description: "Follow plant care guides and protect green spaces in your community.",
    link: "/action-hub#guides",
  },
  {
    icon: "✨",
    title: "Inspire Others",
    description: "Share the mission and motivate families, schools, and villages to join.",
    link: "/contact#join",
  },
];
