export interface Hobby {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  imagePosition?: string;
  accentColor?: string;
}

export const hobbies: Hobby[] = [
  {
    id: "chess",
    number: "01",
    title: "CHESS",
    description: "A quiet battle of calculation and pattern recognition. I enjoy the discipline of finding the cleanest line under time pressure—where every move is an uncompromising decision.",
    tag: "STRATEGY",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
    accentColor: "#84cc16",
  },
  {
    id: "anime-manga",
    number: "02",
    title: "ANIME & MANGA",
    description: "Drawn to bold artistic direction, tight narrative pacing, and world-building that breaks standard tropes. It’s a constant source of visual and conceptual inspiration.",
    tag: "MEDIA",
    image: "/hobbies/anime.jpg",
    accentColor: "#84cc16",
  },

  {
    id: "cooking",
    number: "03",
    title: "COOKING",
    description: "Cooking is instant feedback. You prep, timing matters, and the outcome is immediately real. It’s equal parts precise system and quick adjustments based on taste.",
    tag: "CRAFT",
    image: "/hobbies/cooking.jpg",
    accentColor: "#84cc16",
  },
  {
    id: "barista-coffee",
    number: "04",
    title: "BARISTA & COFFEE",
    description: "Dialing in grind size, pressure, and extraction time to get the perfect espresso shot. A ritualistic blend of morning chemistry and quiet focus.",
    tag: "RITUAL",
    image: "/hobbies/coffee.jpg",
    accentColor: "#84cc16",
  },
  {
    id: "creative-tech",
    number: "05",
    title: "CREATIVE & TECH",
    description: "Tinkering with side projects, visual hacks, and small tools for the pure curiosity of seeing 'what happens if.' No briefs, no constraints, just raw creation.",
    tag: "EXPLORATION",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    accentColor: "#84cc16",
  },
  {
    id: "football",
    number: "06",
    title: "FOOTBALL",
    description: "Pure energy, rapid tactical awareness, and split-second decisions on the pitch. A great way to clear my mind, move fast, and reset outside the screen.",
    tag: "SPORTS",
    image: "/hobbies/football.jpg",
    accentColor: "#84cc16",
  },
];



