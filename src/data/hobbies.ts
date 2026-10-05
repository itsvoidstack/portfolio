export interface Hobby {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  accentColor: string;
}

export const hobbies: Hobby[] = [
  {
    id: "chess",
    title: "CHESS",
    subtitle: "A little strategy, a little patience.",
    tag: "STRATEGY",
    accentColor: "#0F172A",
  },
  {
    id: "anime-manga",
    title: "ANIME & MANGA",
    subtitle: "Stories, worlds, and characters I keep coming back to.",
    tag: "MEDIA",
    accentColor: "#2563EB",
  },
  {
    id: "cooking",
    title: "COOKING",
    subtitle: "Experimenting with recipes is another kind of building.",
    tag: "CRAFT",
    accentColor: "#D97706",
  },
  {
    id: "barista",
    title: "BARISTA / COFFEE",
    subtitle: "Espresso extraction & specialty brewing.",
    tag: "PRECISION",
    accentColor: "#78350F",
  },
  {
    id: "creative-experiments",
    title: "CREATIVE STUFF & TECH EXPERIMENTS",
    subtitle: "Hands-on projects, physical & digital hacks.",
    tag: "BUILDING",
    accentColor: "#8B5CF6",
  },
  {
    id: "football",
    title: "FOOTBALL",
    subtitle: "Tactical positioning, team coordination & athleticism.",
    tag: "SPORT",
    accentColor: "#059669",
  },
];
