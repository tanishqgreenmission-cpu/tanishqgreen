import { imageUrl } from "../lib/imageUrl";

/* Page-specific content — images and copy unique to each inner page (not used on Home) */

export const PILLARS_PAGE = {
  header: imageUrl("images/pillars-header.jpg"),
  story: {
    image: imageUrl("images/pillars-story.jpg"),
    title: "Who We Are",
    text: "Tanishq Green Mission began as a grassroots movement in Andhra Pradesh and Karnataka, uniting families, schools, and gram panchayats under one simple belief: every home can grow a tree, and every tree can change a community. Today we operate across Bengaluru campuses and Chittoor District villages with structured programmes, volunteer networks, and measurable environmental outcomes.",
  },
  pillars: [
    {
      id: "house",
      icon: "🌳",
      title: "One House One Plant",
      image: imageUrl("images/pillars-house.jpg"),
      description:
        "Every registered household receives a native sapling — Lemon, Guava, or Amla — along with soil preparation guidance, a watering schedule, and quarterly follow-up visits to ensure survival beyond the first monsoon.",
      highlights: ["Free sapling distribution", "Home visit support", "Survival tracking app"],
    },
    {
      id: "campus",
      icon: "🏫",
      title: "Green Campus Challenge",
      image: imageUrl("images/pillars-campus.jpg"),
      description:
        "Colleges and schools in Bengaluru compete across plantation density, waste segregation, rainwater harvesting, and student-led awareness campaigns. Top campuses earn the Green Campus Trophy and seed grants for next season.",
      highlights: ["Inter-college leaderboard", "Student ambassador programme", "Annual Green Campus Awards"],
    },
    {
      id: "village",
      icon: "🏘️",
      title: "Village Cleanliness",
      image: imageUrl("images/pillars-village.jpg"),
      description:
        "Gram panchayats in Chittoor District adopt TGM cleanliness protocols — morning broom drives, waste segregation lanes, drain clearing, and public-space greening with community accountability charts displayed at the mandal office.",
      highlights: ["Broom zone mapping", "Weekly mandal audits", "Village head partnerships"],
    },
    {
      id: "basket",
      icon: "🧺",
      title: "Mana Inti Basket",
      image: imageUrl("images/pillars-basket.jpg"),
      description:
        "A subscription service delivering eco-friendly household essentials — bamboo toothbrushes, cloth bags, organic cleaners, and seasonal native seeds — sourced from local artisans and women self-help groups.",
      highlights: ["Monthly subscription", "Local artisan support", "Zero-waste starter kits"],
    },
  ],
  framework: [
    { letter: "E", title: "Environment", desc: "Restore green cover, improve air quality, and protect local biodiversity through native species plantation." },
    { letter: "E", title: "Empowerment", desc: "Equip village heads, student leaders, and women SHGs with tools and training to lead their own green initiatives." },
    { letter: "E", title: "Education", desc: "Run workshops on plant care, waste management, and climate literacy in schools and community halls." },
    { letter: "E", title: "Employment", desc: "Create livelihood opportunities through sapling nurseries, Mana Inti Basket production, and field coordinator roles." },
  ],
  timeline: [
    { year: "2024", event: "Pilot launched in 5 Bengaluru colleges with 2,000 saplings distributed." },
    { year: "2025", event: "Expanded to Chittoor District — 12 gram panchayats onboarded for cleanliness drives." },
    { year: "2026", event: "One House One Plant nationwide launch — July 5th across Bengaluru & Chittoor." },
  ],
  values: [
    { icon: "🌿", title: "Native First", desc: "We plant species suited to local soil and climate — never invasive varieties." },
    { icon: "📊", title: "Transparency", desc: "Every sapling is geo-tagged and survival rates are published quarterly." },
    { icon: "🙌", title: "Community-Led", desc: "Villages and campuses own their programmes — TGM provides structure and support." },
    { icon: "♻️", title: "Circular Living", desc: "From composting workshops to Mana Inti Basket, we promote zero-waste households." },
  ],
};

export const ACTION_PAGE = {
  header: imageUrl("images/action-header.jpg"),
  initiatives: [
    {
      id: "sapling",
      icon: "🌱",
      title: "Claim Your Sapling",
      image: imageUrl("images/action-sapling.jpg"),
      description:
        "Register your household for the One House One Plant programme. Choose Lemon, Guava, or Amla and receive your sapling kit at the nearest distribution centre in Bengaluru or Chittoor.",
      cta: "Register Now",
      link: "/contact#join",
    },
    {
      id: "guides",
      icon: "📖",
      title: "Plant Care Guides",
      image: imageUrl("images/action-guides.jpg"),
      description:
        "Download step-by-step guides for each native species — soil mix ratios, monsoon watering, organic pest control, and harvest timelines tailored to South Indian climates.",
      cta: "Download Guides",
      link: "#species",
    },
    {
      id: "cleanliness",
      icon: "🧹",
      title: "Village Cleanliness Protocols",
      image: imageUrl("images/action-clean.jpg"),
      description:
        "Access the official TGM cleanliness manual used across Chittoor gram panchayats — covering waste lanes, drain maintenance, public toilet upkeep, and weekly audit checklists.",
      cta: "View Protocols",
      link: "#events",
    },
    {
      id: "map",
      icon: "🗺️",
      title: "Broom Map & Cleanliness Zones",
      image: imageUrl("images/action-map.jpg"),
      description:
        "View interactive zone maps for your mandal. Assign volunteer teams to specific streets, track completion status, and report blockages through the TGM field app.",
      cta: "Open Zone Map",
      link: "/impact",
    },
  ],
  species: [
    {
      name: "Lemon (Nimma)",
      image: imageUrl("images/action-lemon.jpg"),
      season: "Plant: June–August",
      care: "Water twice weekly. Full sun. Harvest in 2–3 years.",
    },
    {
      name: "Guava (Jama)",
      image: imageUrl("images/action-guava.jpg"),
      season: "Plant: July–September",
      care: "Moderate watering. Partial shade OK. Bears fruit in 3–4 years.",
    },
    {
      name: "Amla (Usiri)",
      image: imageUrl("images/action-amla.jpg"),
      season: "Plant: June–July",
      care: "Drought-tolerant once established. Rich in Vitamin C. Harvest in 4–5 years.",
    },
  ],
  events: [
    { date: "July 5, 2026", title: "One House One Plant Launch", location: "Bengaluru & Chittoor District", image: imageUrl("images/action-event.jpg") },
    { date: "July 12, 2026", title: "Green Campus Challenge Kickoff", location: "Bengaluru University Campus", image: imageUrl("images/action-volunteer.jpg") },
    { date: "July 19, 2026", title: "V. Kota Mandal Cleanliness Drive", location: "Chittoor District", image: imageUrl("images/contact-community.jpg") },
  ],
  steps: [
    { step: "01", title: "Register", desc: "Sign up as a household, volunteer, or campus team through our portal." },
    { step: "02", title: "Receive Kit", desc: "Collect your sapling, care guide, and geo-tag sticker at the distribution point." },
    { step: "03", title: "Plant & Nurture", desc: "Follow the species guide and log progress in the TGM survival tracker." },
    { step: "04", title: "Report & Inspire", desc: "Share your story, join local drives, and help neighbours plant theirs." },
  ],
  magazines: [
    { title: "July 2026 — Launch Edition", desc: "One House One Plant special with plantation maps and RSVP details." },
    { title: "Green Campus Poster Pack", desc: "Printable A3 posters for college notice boards and classrooms." },
    { title: "Village Cleanliness Handbook", desc: "Illustrated protocols for gram panchayat teams in Telugu & English." },
  ],
};

export const IMPACT_PAGE = {
  header: imageUrl("images/impact-header.jpg"),
  stats: [
    { value: "29,570+", label: "Saplings Planted", sub: "Across 20+ communities" },
    { value: "87%", label: "Survival Rate", sub: "After first monsoon season" },
    { value: "512", label: "Active Volunteers", sub: "Students, villagers & professionals" },
    { value: "68%", label: "District Goal", sub: "Green cover target progress" },
  ],
  districts: [
    {
      name: "Bengaluru Campus Zone",
      image: imageUrl("images/impact-bengaluru.jpg"),
      saplings: "14,200+",
      campuses: "18 colleges",
      highlight: "Green Campus Challenge leader: RV College of Engineering",
    },
    {
      name: "Chittoor District",
      image: imageUrl("images/impact-chittoor.jpg"),
      saplings: "15,370+",
      campuses: "24 gram panchayats",
      highlight: "V. Kota Mandal — first to cross 500 saplings",
    },
  ],
  champions: [
    { name: "Aishwarya Singh", role: "Student Leader", image: imageUrl("images/champion4.jpg"), bio: "Mobilised 12 colleges for the Green Campus Challenge in Bengaluru.", planted: "340 saplings" },
    { name: "Ravi Kumar", role: "Village Head", image: imageUrl("images/champion5.jpg"), bio: "Led V. Kota Mandal to 500+ saplings and weekly cleanliness audits.", planted: "500+ saplings" },
    { name: "Priya Sharma", role: "Field Coordinator", image: imageUrl("images/champion6.jpg"), bio: "Coordinates sapling distribution and follow-up visits across Chittoor.", planted: "280 saplings" },
    { name: "Karthik Reddy", role: "Nursery Manager", image: imageUrl("images/champion7.jpg"), bio: "Runs the native sapling nursery supplying Lemon, Guava, and Amla.", planted: "2,000+ saplings" },
    { name: "Lakshmi Devi", role: "SHG Leader", image: imageUrl("images/champion8.jpg"), bio: "Leads Mana Inti Basket production with 30 women artisans.", planted: "150 saplings" },
    { name: "Arjun Nair", role: "Youth Ambassador", image: imageUrl("images/champion9.jpg"), bio: "Spreads climate awareness through school workshops in Bengaluru.", planted: "210 saplings" },
  ],
  benefits: [
    { icon: "🌬️", title: "Cleaner Air", image: imageUrl("images/impact-bengaluru.jpg"), text: "Native trees in urban campuses reduce particulate matter and cool surrounding areas by up to 3°C." },
    { icon: "💧", title: "Water Security", image: imageUrl("images/impact-water.jpg"), text: "Tree roots improve groundwater recharge. Chittoor villages report better well levels after plantation drives." },
    { icon: "🦋", title: "Biodiversity", image: imageUrl("images/impact-wildlife.jpg"), text: "Amla and Guava trees attract native birds and pollinators, restoring micro-ecosystems in both cities and villages." },
  ],
  milestones: [
    { month: "Jan 2026", text: "Crossed 20,000 saplings planted milestone." },
    { month: "Mar 2026", text: "Green Campus Challenge expanded to 18 institutions." },
    { month: "May 2026", text: "Mana Inti Basket launched with 30 artisan partners." },
    { month: "Jul 2026", text: "One House One Plant public launch — July 5th." },
  ],
};

export const CONTACT_PAGE = {
  header: imageUrl("images/contact-header.jpg"),
  channels: [
    { icon: "📧", title: "Email Us", value: "Tanishqgreenmission@gmail.com", desc: "General enquiries, partnerships, and media requests." },
    { icon: "📞", title: "Call Us", value: "+91 7483703173", desc: "Mon–Sat, 9 AM – 6 PM. Mission helpdesk for sapling claims." },
    { icon: "📍", title: "Field Offices", value: "Bengaluru & Chittoor", desc: "Visit our coordination centres for in-person registration." },
  ],
  pathways: [
    {
      title: "Volunteer",
      image: imageUrl("images/contact-volunteer.jpg"),
      desc: "Join plantation drives, campus events, and village cleanliness programmes. Receive a TGM volunteer certificate after 10 hours of service.",
      link: "#join",
    },
    {
      title: "Corporate Partner",
      image: imageUrl("images/contact-partner.jpg"),
      desc: "Sponsor sapling batches, adopt a gram panchayat, or organise employee volunteering days with measurable CSR reporting.",
      link: "#join",
    },
    {
      title: "Community Group",
      image: imageUrl("images/contact-community.jpg"),
      desc: "Register your RWA, college club, or SHG to receive sapling kits, training, and co-branded event support from TGM.",
      link: "#join",
    },
  ],
  benefits: [
    { icon: "🏅", title: "Volunteer Certificate", desc: "Recognised certificate after completing 10+ hours of field work." },
    { icon: "🌱", title: "Hands-On Experience", desc: "Learn native species care, nursery management, and community mobilisation." },
    { icon: "🤝", title: "Network Access", desc: "Connect with environmental NGOs, campus leaders, and village heads." },
    { icon: "📋", title: "Skill Workshops", desc: "Free sessions on composting, rainwater harvesting, and waste segregation." },
  ],
  faqs: [
    { q: "How do I claim my free sapling?", a: "Register on this page under 'Join Our Mission', select your city (Bengaluru or Chittoor), and visit the nearest distribution centre on or after July 5th, 2026." },
    { q: "Which tree species are available?", a: "We distribute native Lemon, Guava, and Amla saplings suited to South Indian climate. Species allocation depends on soil type at your location." },
    { q: "Can schools participate in the Green Campus Challenge?", a: "Yes. Any school or college in Bengaluru can register. Contact us with your institution name and a faculty coordinator." },
    { q: "Are donations tax-deductible?", a: "We are working toward 80G certification. All donors receive a receipt and impact report showing trees planted with their contribution." },
    { q: "How can corporates partner with TGM?", a: "Email us with your CSR requirements. We offer sapling sponsorship, employee volunteering days, and gram panchayat adoption programmes." },
  ],
  offices: [
    { city: "Bengaluru", address: "Green Campus Coordination Centre, Near Bengaluru University, Gnana Bharathi, Bengaluru 560056", hours: "Mon–Sat, 9 AM – 6 PM", phone: "+91 7483703173" },
    { city: "Chittoor", address: "Village Programme Office, V. Kota Mandal, Chittoor District, Andhra Pradesh 517541", hours: "Mon–Sat, 9 AM – 5 PM", phone: "+91 7483703173" },
  ],
  social: [
    { label: "Instagram", handle: "@tanishqgreenmission", url: "https://www.instagram.com/tanishqgreenmission" },
    { label: "YouTube", handle: "@TanishQGreenMission", url: "https://www.youtube.com/@TanishQGreenMission" },
    { label: "Facebook", handle: "Tanishq Green Mission", url: "https://www.facebook.com" },
  ],
  intro: {
    image: imageUrl("images/contact-volunteer.jpg"),
    title: "We're Here to Help You Go Green",
    text: "Whether you want to claim a sapling, volunteer at a plantation drive, partner as a corporate, or simply ask a question — our mission helpdesk is ready to guide you every step of the way.",
  },
};
