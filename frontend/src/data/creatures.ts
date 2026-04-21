export const CREATURES = {
  owl: {
    name: "Book Owl",
    title: "The elegant scholar of the dimly lit corner",
    blurb:
      "You are thoughtful, observant, and quietly intense. You like depth, atmosphere, and the kind of study session that feels mildly sacred. You do not panic loudly. You prefer a good chair, a real source, and the bliss of being left alone.",
    zone: "Quiet floor, window-adjacent seating, reading nooks",
    resources: ["Research databases", "Long-form reading", "Subject guides"],
    power: "Spotting the one useful paragraph everyone else missed.",
    colors: ["#d7c7a2", "#8a6d46"],
    art: "owl",
    badge: "Ancient-reader energy",
  },

  raccoon: {
    name: "Deadline Raccoon",
    title: "The scrappy miracle worker of the eleventh hour",
    blurb:
      "You are chaotic, resilient, and fueled by a concerning amount of last-minute conviction. You may look mildly distressed, but you possess a strange and powerful survival instinct. Against all odds, you somehow get it done.",
    zone: "Anywhere with outlets, caffeine nearby, and room for emergency recovery",
    resources: ["Citation help", "Reliable Wi-Fi", "Quick research support"],
    power: "Producing miracles under deeply questionable circumstances.",
    colors: ["#c8c0c7", "#5a5560"],
    art: "raccoon",
    badge: "Ferally competent",
  },

  fox: {
    name: "Silent Fox",
    title: "The polished strategist of the hidden desk",
    blurb:
      "You are efficient, self-contained, and not here for unnecessary interaction. You like clean plans, quiet spaces, and people who understand indoor voices. You move with intention and prefer clarity over chaos.",
    zone: "Silent study areas, tucked-away desks, low-traffic corners",
    resources: ["Reservation-based spaces", "Solo study zones", "Focused search tools"],
    power: "Getting an unreasonable amount done without announcing it.",
    colors: ["#f4c08b", "#a04c22"],
    art: "fox",
    badge: "Quietly lethal focus",
  },

  cat: {
    name: "Archive Cat",
    title: "The curious wanderer who makes the library their own",
    blurb:
      "You don’t just sit — you settle in. You like space, time, and the freedom to wander between ideas. You spread out, explore, and let curiosity guide you instead of a strict plan.",
    zone: "Large tables, browsing areas, spaces where you can spread everything out",
    resources: ["Browsing the stacks", "Discovery tools", "Serendipitous finds"],
    power: "Turning curiosity into unexpected connections.",
    colors: ["#d8b2c8", "#7d4e73"],
    art: "cat",
    badge: "Softly curious energy",
  },

  rabbit: {
    name: "Research Rabbit",
    title: "The focused thinker where ideas start to connect",
    blurb:
      "You thrive when everything clicks into place. You like structured environments where thinking feels sharp and ideas start connecting naturally. You move quickly, but with purpose.",
    zone: "Science Library, focused study zones, structured environments",
    resources: ["Databases", "Citation chaining", "Focused research tools"],
    power: "Seeing connections others might miss in complex ideas.",
    colors: ["#e6dcb8", "#8b7650"],
    art: "rabbit",
    badge: "Precision meets curiosity",
  },
} as const;

export type CreatureKey = keyof typeof CREATURES;