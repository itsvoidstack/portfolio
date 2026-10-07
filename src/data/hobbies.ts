export interface Hobby {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  accentColor?: string;
}

export const hobbies: Hobby[] = [
  {
    id: "sports",
    number: "01",
    title: "FOOTBALL",
    description: "Football keeps me active, focused, and teaches me teamwork, patience, and never giving up.",
    tag: "SPORTS",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
    accentColor: "#84cc16",
  },
  {
    id: "music",
    number: "02",
    title: "MUSIC",
    description: "Music helps me think, relax, and stay in the flow. It's my constant companion.",
    tag: "MUSIC",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    accentColor: "#84cc16",
  },
  {
    id: "travel",
    number: "03",
    title: "TRAVEL",
    description: "Exploring new places opens my mind, gives me fresh perspectives, and inspires my creativity.",
    tag: "TRAVEL",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    accentColor: "#84cc16",
  },
  {
    id: "photography",
    number: "04",
    title: "PHOTOGRAPHY",
    description: "I love capturing moments, people, and places. It helps me see the world differently and tell stories silently.",
    tag: "PHOTOGRAPHY",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    accentColor: "#84cc16",
  },
  {
    id: "reading",
    number: "05",
    title: "READING",
    description: "Diving into books expands my horizons, sharpens critical thinking, and introduces new perspectives.",
    tag: "READING",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    accentColor: "#84cc16",
  },
  {
    id: "food",
    number: "06",
    title: "FOOD",
    description: "Good food brings people together. I enjoy trying new flavors and exploring different cuisines.",
    tag: "FOOD",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    accentColor: "#84cc16",
  },
  {
    id: "chess",
    number: "07",
    title: "CHESS",
    description: "A little strategy, foresight, and calculated decision-making off the screen.",
    tag: "STRATEGY",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
    accentColor: "#84cc16",
  },
  {
    id: "coffee",
    number: "08",
    title: "COFFEE / BARISTA",
    description: "Dialing in espresso extractions and appreciating specialty coffee brewing.",
    tag: "PRECISION",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    accentColor: "#84cc16",
  },
];
